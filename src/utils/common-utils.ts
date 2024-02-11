"use client"
export class IncrementalID {
    private id = 0;
    getId() {
        return this.id++;
    }
}

export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}