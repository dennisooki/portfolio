declare module "maath/random/dist/maath-random.esm" {
    export function inSphere(
        buffer: Float32Array,
        options?: { radius?: number; center?: [number, number, number] }
    ): Float32Array;

    // Add other exports if needed, or use 'any' for now to unblock build
    // export * from "maath/random";
}
