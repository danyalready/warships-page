import FilterIcon from '@/assets/icons/FilterIcon';
import CheckboxGroup from './CheckboxGroup';

export interface FilterOption<T = string> {
    label: React.ReactNode;
    value: T;
}

export interface FilterGroup<T = string> {
    label: string;
    filterOptions: FilterOption<T>[];
    selected: T[];
    onChange: (value: T[]) => void;
}

interface Props<T = string> {
    filterGroups: FilterGroup<T>[];
    onClickReset: () => void;
}

export default function FiltersForm<T extends string>({ filterGroups, onClickReset }: Props<T>) {
    const showResetButton = filterGroups.some((filterGroup) => filterGroup.selected.length);

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
                        onClick={onClickReset}
                    >
                        Сбросить все
                    </button>
                )}
            </div>

            {filterGroups.map((filterGroup) => (
                <CheckboxGroup<T>
                    key={filterGroup.label}
                    label={filterGroup.label}
                    selected={filterGroup.selected}
                    options={filterGroup.filterOptions.map((option) => ({
                        label: option.label,
                        value: option.value,
                    }))}
                    onChange={filterGroup.onChange}
                />
            ))}
        </div>
    );
}
