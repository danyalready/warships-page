import { useState, useEffect } from 'react';
import NextImage, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'src'> {
    lowSrc: string;
    highSrc: string;
    alt: string;
}

const ProgressiveImage = ({ lowSrc, highSrc, alt, ...props }: Props) => {
    const [src, setSrc] = useState(lowSrc);

    useEffect(() => {
        const img = new Image();
        img.src = highSrc;
        img.onload = () => setSrc(highSrc);
    }, [highSrc]);

    return <NextImage src={src} alt={alt} placeholder="blur" blurDataURL={lowSrc} {...props} />;
};

export default ProgressiveImage;
