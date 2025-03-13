interface Props<T = string> {
    name: T;
    checked: boolean;
    onChange: (value: T) => void;

    label?: React.ReactNode;
}

export default function Checkbox<T extends string>({ name, checked, label, onChange }: Props<T>) {
    return (
        <label className="flex cursor-pointer items-center gap-x-1 select-none">
            <input type="checkbox" name={name} checked={checked} onChange={(event) => onChange(event.target.name as T)} className="hidden" />
            <div
                tabIndex={0}
                aria-checked={checked}
                className="flex h-5 w-5 items-center justify-center rounded border border-[#2D3A4A] bg-[#0F1014] outline-[#0F1014] transition-all duration-200 hover:brightness-125"
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onChange(name);
                    }
                }}
            >
                {checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5BBC9D]" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>

            {label && <div className="pointer-events-none">{label}</div>}
        </label>
    );
}
