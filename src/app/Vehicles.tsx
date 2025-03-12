import { getVehicles } from '@/queries/vehicles';

export default async function Vehicles() {
    const vehicles = await getVehicles();

    return (
        <div>
            <h2>Vehicles List</h2>
            {vehicles.map((vehicle, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <h3>{vehicle.title}</h3>
                    <p>{vehicle.description}</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={vehicle.icons.medium} alt={vehicle.title} width="100" />
                    <p>Level: {vehicle.level}</p>
                    <p>Type: {vehicle.type.title}</p>
                    <p>Nation: {vehicle.nation.title}</p>
                </div>
            ))}
        </div>
    );
}
