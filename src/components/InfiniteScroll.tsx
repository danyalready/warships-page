import ToTopIcon from '@/assets/icons/ToTopIcon';
import { throttle } from '@/utils/throttle';
import { useEffect, useRef, useState } from 'react';

interface Props<T> {
    data: T[];
    canLoadMore: boolean;
    itemRenderer: (item: T, index: number) => React.ReactNode;
    onLoadMore: () => void;

    wrapperClassName?: string;
    className?: string;
}

export default function InfiniteScroll<T>({ data, itemRenderer, canLoadMore, onLoadMore, wrapperClassName, className }: Props<T>) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (!canLoadMore) return;

        const target = observerRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    onLoadMore();
                }
            },
            { rootMargin: '200px' }
        );

        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [canLoadMore, onLoadMore]);

    useEffect(() => {
        const handleScroll = throttle(() => {
            setShowScrollTop(window.scrollY > 300);
        }, 200);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={className}>
            <div className={wrapperClassName}>{data.map((item, index) => itemRenderer(item, index))}</div>

            <div ref={observerRef} className="h-20" />

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed right-10 bottom-10 z-50 flex size-16 cursor-pointer items-center justify-center bg-black/40 text-white opacity-40 transition-all hover:opacity-80"
                >
                    <ToTopIcon size={24} />
                </button>
            )}
        </div>
    );
}
