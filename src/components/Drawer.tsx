import CloseIcon from '@/assets/icons/CloseIcon';
import { PropsWithChildren } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function Drawer({ isOpen, onClose, children }: PropsWithChildren<Props>) {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            ></div>

            {/* Drawer Content */}
            <div
                className={`fixed bottom-0 pointer-events-auto left-0 w-full bg-gray-900 text-white shadow-lg p-4 rounded-t-lg transition-transform duration-300 ${
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-white">
                    <CloseIcon size={16} />
                </button>
                <div className="mt-8">{children}</div>
            </div>
        </div>
    );
}
