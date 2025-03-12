interface Props {
    label?: React.ReactNode;
    tooltip?: string;
    name: string;
    checked: boolean;
    onChange: (name: string) => void;
}

export default function Checkbox(props: Props) {
    return (
        <label id={props.name} className="flex cursor-pointer items-center gap-x-1 select-none">
            <input type="checkbox" name={props.name} checked={props.checked} onChange={(event) => props.onChange(event.target.name)} className="hidden" />
            <div
                tabIndex={0}
                aria-checked={props.checked}
                className="flex h-5 w-5 items-center justify-center rounded border border-[#2D3A4A] bg-[#0F1014] outline-[#0F1014] transition-all duration-200 hover:brightness-125"
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        props.onChange(props.name);
                    }
                }}
            >
                {props.checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5BBC9D]" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>

            {props.label && <div className="pointer-events-none">{props.label}</div>}
        </label>
    );
}
