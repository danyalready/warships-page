const GRAPHQL_API = 'https://vortex.korabli.su/api/graphql/glossary/';

interface Vehicle {
    title: string;
    description: string;
    icons: VehicleIcons;
    level: number;
    type: VehicleType;
    nation: VehicleNation;
}

interface VehicleIcons {
    large: string;
    medium: string;
}

interface VehicleType {
    name: string;
    title: string;
    icons: { default: string };
}

interface VehicleNation {
    name: string;
    title: string;
    color: string;
    icons: NationIcons;
}

interface NationIcons {
    small: string;
    medium: string;
    large: string;
}

async function getVehicles(languageCode = 'ru'): Promise<Vehicle[]> {
    const query = `
    query Vehicles($languageCode: String) {
      vehicles(lang: $languageCode) {
        title
        description
        icons {
          medium
        }
        level
        type {
          name
          title
          icons {
            default
          }
        }
        nation {
          name
          title
          color
          icons {
            small
            medium
            large
          }
        }
      }
    }
  `;

    const response = await fetch(GRAPHQL_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip',
        },
        body: JSON.stringify({
            query,
            variables: { languageCode },
        }),
        cache: 'no-cache',
    });

    const { data } = await response.json();
    return data.vehicles;
}

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
