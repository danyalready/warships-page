'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Vehicle, VehicleNation, VehicleType } from '@/types/vehicle';
import InfiniteScroll from './InfiniteScroll';
import VehicleCard from './VehicleCard';
import FiltersForm from './FiltersForm';
import { LEVELS, NATIONS, TYPES } from '@/constants/filters';
import FilterIcon from '@/assets/icons/FilterIcon';
import Drawer from './Drawer';

const ITEMS_PER_PAGE = 36;

interface Props {
    vehicles: Vehicle[];
}

export default function Vehicles({ vehicles }: Props) {
    const layoutRef = useRef<HTMLDivElement>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<VehicleType[]>([]);
    const [selectedNations, setSelectedNations] = useState<VehicleNation[]>([]);

    const [visibleItems, setVisibleItems] = useState<Vehicle[]>([]);
    const [pageIndex, setPageIndex] = useState(ITEMS_PER_PAGE);

    const filteredVehicles = useMemo(() => {
        return vehicles.filter((vehicle) => {
            const matchesLevel = !selectedLevels.length || selectedLevels.includes(vehicle.level.toString());
            const matchesType = !selectedTypes.length || selectedTypes.includes(vehicle.type.name);
            const matchesNation = !selectedNations.length || selectedNations.includes(vehicle.nation.name);

            return matchesLevel && matchesType && matchesNation;
        });
    }, [vehicles, selectedLevels, selectedNations, selectedTypes]);

    const handleLoadMore = useCallback(() => {
        setPageIndex((prev) => {
            const newPageIndex = prev + ITEMS_PER_PAGE;

            setVisibleItems(filteredVehicles.slice(0, newPageIndex));

            return newPageIndex;
        });
    }, [filteredVehicles]);

    useEffect(() => {
        setPageIndex(ITEMS_PER_PAGE);
        handleLoadMore();
    }, [filteredVehicles, handleLoadMore]);

    const renderFiltersForm = () => (
        <FiltersForm
            onClickReset={() => {
                setSelectedLevels([]);
                setSelectedTypes([]);
                setSelectedNations([]);
            }}
            filterGroups={[
                {
                    label: 'Уровень',
                    filterOptions: LEVELS,
                    selected: selectedLevels,
                    onChange: (values) => {
                        setSelectedLevels(values);
                    },
                },
                {
                    label: 'Класс',
                    filterOptions: TYPES,
                    selected: selectedTypes,
                    onChange: (values) => {
                        setSelectedTypes(values as VehicleType[]);
                    },
                },
                {
                    label: 'Нация',
                    filterOptions: NATIONS,
                    selected: selectedNations,
                    onChange: (values) => {
                        setSelectedNations(values as VehicleNation[]);
                    },
                },
            ]}
        />
    );

    return (
        <div className="min-h-dvh bg-[url('/images/background-texture.jpg')] bg-contain pb-20">
            <div className="relative h-[480px] lg:aspect-[1900/704] lg:h-auto">
                <div className="absolute h-full w-full bg-[url('/images/screensaver.webp')] bg-cover bg-center brightness-[60%] hue-rotate-[200deg]"></div>
                <div className="relative z-10 mx-auto flex h-full max-w-[1450px] flex-col px-11 pb-12">
                    <h1 className="mt-auto text-4xl font-bold tracking-wide text-white">Машины «Мир кораблей»</h1>
                    <div className="mt-10">
                        <button
                            onClick={() =>
                                layoutRef.current?.scrollIntoView({
                                    behavior: 'smooth',
                                })
                            }
                            className="min-w-64 cursor-pointer border border-white/40 px-6 py-4 text-base font-semibold text-white uppercase transition duration-300 hover:bg-white/10"
                        >
                            Начать просмотр
                        </button>
                    </div>
                </div>
            </div>

            <div ref={layoutRef} className="mx-auto flex max-w-[1449px] gap-x-4 px-11 pt-6">
                <div className="w-full">
                    <div className="flex justify-end items-center pb-6 lg:hidden">
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            className="flex items-center cursor-pointer gap-2 bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md"
                        >
                            <FilterIcon size={18} />
                        </button>
                    </div>
                    <InfiniteScroll<Vehicle>
                        data={visibleItems}
                        canLoadMore={pageIndex < filteredVehicles.length}
                        itemRenderer={(vehicle, index) => <VehicleCard key={index} vehicle={vehicle} />}
                        onLoadMore={handleLoadMore}
                        className="w-full min-h-dvh"
                        wrapperClassName="relative grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 xl:grid-cols-3"
                    />
                </div>
                <div className="hidden max-w-[280px] min-w-[280px] lg:block">
                    <div className="sticky top-4">{renderFiltersForm()}</div>
                </div>
            </div>

            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                {renderFiltersForm()}
            </Drawer>
        </div>
    );
}
