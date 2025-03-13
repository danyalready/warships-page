import { type PropsWithChildren, useEffect, useState } from 'react';

const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
};

interface Props {
    text?: string;
    delay?: number;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ children, text, delay = 300, position = 'top' }: PropsWithChildren<Props>) {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (visible) {
            timer = setTimeout(() => setShow(true), delay);
        } else {
            setShow(false);
        }

        return () => clearTimeout(timer);
    }, [visible, delay]);

    if (!text) return children;

    return (
        <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            {show && (
                <div className={`absolute whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg ${positionClasses[position]}`}>
                    {text}
                </div>
            )}
        </div>
    );
}
