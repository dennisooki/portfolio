"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    User,
    Code,
    Briefcase,
    Mail,
    Home,
    Laptop
} from "lucide-react";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl ring-1 ring-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Command className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-transparent">
                            <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                    autoFocus
                                />
                            </div>
                            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 scrollbar-hide">
                                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Navigation" className="text-xs text-muted-foreground font-medium px-2 py-1.5">
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.location.href = "#about")}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <User className="mr-2 h-4 w-4" />
                                        <span>About Me</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.location.href = "#projects")}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <Briefcase className="mr-2 h-4 w-4" />
                                        <span>View Projects</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.location.href = "#skills")}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <Code className="mr-2 h-4 w-4" />
                                        <span>Technical Skills</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.location.href = "#contact")}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <Mail className="mr-2 h-4 w-4" />
                                        <span>Contact Me</span>
                                    </Command.Item>
                                </Command.Group>

                                <Command.Separator className="my-1 h-px bg-white/10" />

                                <Command.Group heading="Socials" className="text-xs text-muted-foreground font-medium px-2 py-1.5">
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.open("https://github.com/dennisooki", "_blank"))}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <Laptop className="mr-2 h-4 w-4" />
                                        <span>GitHub</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.open("mailto:dennisooki@icloud.com", "_blank"))}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <Mail className="mr-2 h-4 w-4" />
                                        <span>Email</span>
                                    </Command.Item>
                                </Command.Group>

                                <Command.Separator className="my-1 h-px bg-white/10" />

                                <Command.Group heading="System" className="text-xs text-muted-foreground font-medium px-2 py-1.5">
                                    <Command.Item
                                        onSelect={() => runCommand(() => alert("System Status: OPERATIONAL"))}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                                    >
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Check System Status</span>
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
