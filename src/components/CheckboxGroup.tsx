import Checkbox from './Checkbox';
import Tooltip from './Tooltip';

export interface CheckboxOption<T = string> {
    label: React.ReactNode;
    value: T;
    tooltip?: string;
}

interface Props<T = string> {
    label: string;
    selected: T[];
    options: CheckboxOption<T>[];
    onChange: (value: T[]) => void;
}

export default function CheckboxGroup<T extends string>({ label, selected, options, onChange }: Props<T>) {
    const handleChange = (value: T) => {
        if (selected.includes(value)) {
            onChange(selected.filter((v) => v !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    return (
        <div className="border-b border-[#2D3A4A] p-2 px-4">
            <label className="text-base font-bold text-white">{label}</label>

            <div className="mt-2 grid grid-cols-3 gap-y-1 text-white">
                {options.map((option) => (
                    <Tooltip key={option.value} text={option.tooltip} delay={500}>
                        <Checkbox<T> label={option.label} checked={selected.includes(option.value)} name={option.value} onChange={handleChange} />
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}
