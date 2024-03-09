"use client"

import { isMobileDevice } from '@/utils/common-utils';
import React from 'react'
import useWindowDimensions from './useDimension';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const {width} = useWindowDimensions();

    React.useLayoutEffect(() => {
        if (isMobileDevice()) {
            setIsMobile(true);
        }   
    }, []);

    return isMobile || width < 600;
}

export default useIsMobile