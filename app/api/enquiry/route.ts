import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { headers } from 'next/headers'

const DATA_DIR = path.resolve(process.cwd(), 'data')
const CSV_PATH = path.join(DATA_DIR, 'enquiries.csv')
const RATE_PATH = path.join(DATA_DIR, 'enquiry_rate.json')

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
}

function sanitizeField(value: string) {
  const trimmed = value.trim().replace(/\s+/g, ' ')
  return trimmed.replace(/"/g, '""')
}

function toCsvRow(fields: string[]) {
  return fields.map((f) => `"${sanitizeField(f)}"`).join(',')
}

function loadRateMap() {
  try {
    if (!fs.existsSync(RATE_PATH)) return {}
    const raw = fs.readFileSync(RATE_PATH, 'utf-8')
    return JSON.parse(raw) as Record<string, { count: number; reset_at: number }>
  } catch {
    return {}
  }
}

function saveRateMap(map: Record<string, { count: number; reset_at: number }>) {
  fs.writeFileSync(RATE_PATH, JSON.stringify(map))
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = (body.name || '').toString().trim().slice(0, 256)
    const email = (body.email || '').toString().trim().slice(0, 256)
    const message = (body.message || '').toString().trim().slice(0, 2000)

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'missing' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'email' }, { status: 400 })
    }

    const hdrs = await headers()
    const ipHeader = hdrs.get('x-forwarded-for') || hdrs.get('x-real-ip') || 'unknown'
    const ip = ipHeader.split(',')[0].trim()
    const ua = hdrs.get('user-agent') || ''
    const created_at = new Date().toISOString()

    ensureDataDir()
    const now = Math.floor(Date.now() / 1000)
    const rateMap = loadRateMap()
    const rate = rateMap[ip]
    if (rate && rate.reset_at > now && rate.count >= 5) {
      return NextResponse.json({ success: false, error: 'rate' }, { status: 429 })
    }
    if (!rate || rate.reset_at <= now) {
      rateMap[ip] = { count: 1, reset_at: now + 3600 }
    } else {
      rateMap[ip].count += 1
    }
    saveRateMap(rateMap)

    const row = toCsvRow([created_at, name, email, message, ip, ua]) + '\n'
    if (!fs.existsSync(CSV_PATH)) {
      const header = 'created_at,name,email,message,ip,user_agent\n'
      fs.writeFileSync(CSV_PATH, header + row, { flag: 'w' })
    } else {
      fs.writeFileSync(CSV_PATH, row, { flag: 'a' })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('enquiry error', err)
    return NextResponse.json({ success: false, error: 'invalid' }, { status: 400 })
  }
}
