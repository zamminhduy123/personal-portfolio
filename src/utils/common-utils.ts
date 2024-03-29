"use client"
export class IncrementalID {
    private id = 0;
    getId() {
        return this.id++;
    }
}

export const isMobileDevice = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window?.navigator?.userAgent)) {
        return true;
    }
    return false;
}