import Checkbox from "./Checkbox";

interface CheckboxOption {
    title: React.ReactNode;
    value: string;
    tooltip?: string;
}

interface Props {
    label: string;
    value: string[];
    options: CheckboxOption[];
    onChange: (value: string[]) => void;
}

export default function CheckboxGroup(props: Props) {
    const handleChange = (value: string) => {
        if (props.value.includes(value)) {
            props.onChange(props.value.filter((v) => v !== value));
        } else {
            props.onChange([...props.value, value]);
        }
    };

    return (
        <div className="border-b border-[#2D3A4A] p-2 px-4">
            <label className="text-base font-bold text-white">
                {props.label}
            </label>

            <div className="mt-2 grid grid-cols-3 gap-y-1 text-white">
                {props.options.map((option) => (
                    <Checkbox
                        key={option.value}
                        label={option.title}
                        tooltip={option.tooltip}
                        checked={props.value.includes(option.value)}
                        name={option.value}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </div>
    );
}
