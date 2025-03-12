export function throttle(func: (...args: unknown[]) => void, limit: number) {
    let lastCall = 0;

    return (...args: unknown[]) => {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
}
