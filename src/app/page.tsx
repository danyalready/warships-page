import Vehicles from '@/components/Vehicles';
import { getVehicles } from '@/queries/vehicles';

export default async function Home() {
    const vehicles = await getVehicles();

    return (
        <div>
            <Vehicles vehicles={vehicles} />
        </div>
    );
}
