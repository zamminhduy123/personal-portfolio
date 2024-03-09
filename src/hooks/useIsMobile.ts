"use client"

import { isMobileDevice } from '@/utils/common-utils';
import React from 'react'

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useLayoutEffect(() => {
        if (isMobileDevice()) {
            setIsMobile(true);
        }   
    }, []);

    return isMobile;
}

export default useIsMobile