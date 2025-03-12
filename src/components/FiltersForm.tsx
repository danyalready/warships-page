import FilterIcon from '@/assets/icons/FilterIcon';
import CheckboxGroup from './CheckboxGroup';

export interface FilterOption<T = string> {
    label: React.ReactNode;
    value: T;
    tooltip?: string;
}

export interface FilterGroup {
    label: string;
    filterOptions: FilterOption[];
    selected: string[];
    onChange: (value: string[]) => void;
}

interface Props {
    filterGroups: FilterGroup[];
    onClickReset: () => void;
}

export default function FiltersForm(props: Props) {
    const showResetButton = props.filterGroups.some((filterGroup) => filterGroup.selected.length);

    return (
        <div className="border border-gray-700 bg-gray-900">
            <div className="flex items-center justify-between gap-4 border-b border-gray-700 bg-gray-700 p-2 px-4">
                <div className="font-boldrs__title flex items-center gap-[6px] text-base font-bold text-white">
                    <FilterIcon size={14} />
                    Фильтры
                </div>
                {showResetButton && (
                    <button
                        className="cursor-pointer px-1 text-[#80878F] hover:brightness-125 focus:ring-2 focus:outline-none active:brightness-150"
                        onClick={props.onClickReset}
                    >
                        Сбросить все
                    </button>
                )}
            </div>

            {props.filterGroups.map((filterGroup) => (
                <CheckboxGroup
                    key={filterGroup.label}
                    label={filterGroup.label}
                    value={filterGroup.selected}
                    options={filterGroup.filterOptions.map((option) => ({
                        title: option.label,
                        value: option.value,
                        tooltip: option.tooltip,
                    }))}
                    onChange={filterGroup.onChange}
                />
            ))}
        </div>
    );
}
