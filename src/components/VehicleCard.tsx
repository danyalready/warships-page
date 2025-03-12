import Image from 'next/image';
import { Vehicle } from '@/types/vehicle';
import { getFlagUrl } from '@/utils/getImgUrls';
import { toRoman } from '@/utils/toRoman';

interface Props {
    vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: Props) {
    return (
        <div className="max-w-lg w-full bg-gray-900 text-white  overflow-hidden border border-gray-700">
            <div className="relative w-full h-48">
                <Image src={`https:${vehicle.nation.icons.large}`} alt={vehicle.nation.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
                <Image src={`https:${vehicle.icons.medium}`} alt={vehicle.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>

            <div className="p-5">
                <h2 className="text-xl font-bold mb-1">{vehicle.title}</h2>
                <p className="text-sm text-gray-400 mb-2 flex items-center gap-1">
                    <Image src={getFlagUrl(vehicle.nation.name)} alt={vehicle.nation.title} width={16} height={0} className="h-4 w-auto" />
                    {toRoman(vehicle.level)} Уровня
                </p>

                <div className="h-24 overflow-y-auto text-gray-300 text-sm border-t border-gray-700 pt-2 scrollbar-thin scrollbar-thumb-gray-700">
                    {vehicle.description}
                </div>
            </div>
        </div>
    );
}
