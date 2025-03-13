import Image from 'next/image';
import { FilterOption } from '@/components/FiltersForm';
import { VehicleNation, VehicleType } from '@/types/vehicle';

export const LEVELS: FilterOption<string>[] = [
    { label: 'I', value: '1' },
    { label: 'II', value: '2' },
    { label: 'III', value: '3' },
    { label: 'IV', value: '4' },
    { label: 'V', value: '5' },
    { label: 'VI', value: '6' },
    { label: 'VII', value: '7' },
    { label: 'VIII', value: '8' },
    { label: 'IX', value: '9' },
    { label: 'X', value: '10' },
    { label: 'XI', value: '11' },
];

export const TYPES: FilterOption<VehicleType>[] = [
    {
        label: (
            <div className="relative size-6">
                <Image
                    alt="Submarine"
                    src="/images/vehicle-types/submarine.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
        ),
        value: 'submarine',
    },
    {
        label: (
            <div className="relative size-6">
                <Image
                    alt="Destroyer"
                    src="/images/vehicle-types/destroyer.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
        ),
        value: 'destroyer',
    },
    {
        label: (
            <div className="relative size-6">
                <Image
                    alt="Cruiser"
                    src="/images/vehicle-types/cruiser.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
        ),
        value: 'cruiser',
    },
    {
        label: (
            <div className="relative size-6">
                <Image
                    alt="Battleship"
                    src="/images/vehicle-types/battleship.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
        ),
        value: 'battleship',
    },
    {
        label: (
            <div className="relative size-6">
                <Image
                    alt="AirCarrier"
                    src="/images/vehicle-types/air_carrier.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
        ),
        value: 'aircarrier',
    },
];

export const NATIONS: FilterOption<VehicleNation>[] = [
    {
        label: <Image alt="Commonwealth" src="/images/flags/commonwealth-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'commonwealth',
    },
    {
        label: <Image alt="Europe" src="/images/flags/europe-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'europe',
    },
    {
        label: <Image alt="France" src="/images/flags/france-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'france',
    },
    {
        label: <Image alt="Germany" src="/images/flags/germany-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'germany',
    },
    {
        label: <Image alt="Italy" src="/images/flags/italy-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'italy',
    },
    {
        label: <Image alt="Japan" src="/images/flags/japan-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'japan',
    },
    {
        label: <Image alt="Netherlands" src="/images/flags/netherlands-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'netherlands',
    },
    {
        label: <Image alt="PanAmerica" src="/images/flags/panamerica-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'pan_america',
    },
    {
        label: <Image alt="PanAsia" src="/images/flags/panasia-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'pan_asia',
    },
    {
        label: <Image alt="Spain" src="/images/flags/spain-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'spain',
    },
    {
        label: <Image alt="UK" src="/images/flags/uk-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'uk',
    },
    {
        label: <Image alt="USA" src="/images/flags/usa-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'usa',
    },
    {
        label: <Image alt="USSR" src="/images/flags/ussr-flag.png" width={24} height={0} className="h-6 w-auto" />,
        value: 'ussr',
    },
];
