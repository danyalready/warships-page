import type { Vehicle } from '@/types/vehicle';

const GRAPHQL_API = 'https://vortex.korabli.su/api/graphql/glossary/';

const query = `
query Vehicles($languageCode: String) {
  vehicles(lang: $languageCode) {
    title
    description
    icons {
      medium
      large
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
        large
      }
    }
  }
}
`;

export async function getVehicles(languageCode = 'ru'): Promise<Vehicle[]> {
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
        cache: 'no-cache', // Not caching because the API response is over 2MB
    });
    const { data } = await response.json();

    return data.vehicles;
}
