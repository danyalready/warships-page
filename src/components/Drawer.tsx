import CloseIcon from '@/assets/icons/CloseIcon';
import { PropsWithChildren } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function Drawer({ isOpen, onClose, children }: PropsWithChildren<Props>) {
    return (
        <div className={`fixed inset-0 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            {/* Drawer Content */}
            <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 text-white shadow-lg p-4">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <CloseIcon size={24} />
                </button>
                <div className="mt-8">{children}</div>
            </div>
        </div>
    );
}
