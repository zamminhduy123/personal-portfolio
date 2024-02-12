"use client"
export class IncrementalID {
    private id = 0;
    getId() {
        return this.id++;
    }
}

export const isMobileDevice = () => {
    if (global?.window) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(global?.window?.navigator?.userAgent)) {
            return true;
        }

        return (global.window?.innerWidth || 0) <= 800;
    }

    return true;
}