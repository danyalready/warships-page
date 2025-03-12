import { VehicleNation } from '@/types/vehicle';

export function getFlagUrl(nation: VehicleNation) {
    switch (nation) {
        case 'commonwealth':
            return '/images/flags/commonwealth-flag.png';
        case 'europe':
            return '/images/flags/europe-flag.png';
        case 'france':
            return '/images/flags/france-flag.png';
        case 'germany':
            return '/images/flags/germany-flag.png';
        case 'italy':
            return '/images/flags/italy-flag.png';
        case 'japan':
            return '/images/flags/japan-flag.png';
        case 'netherlands':
            return '/images/flags/netherlands-flag.png';
        case 'pan_america':
            return '/images/flags/panamerica-flag.png';
        case 'pan_asia':
            return '/images/flags/panasia-flag.png';
        case 'spain':
            return '/images/flags/spain-flag.png';
        case 'uk':
            return '/images/flags/uk-flag.png';
        case 'usa':
            return '/images/flags/usa-flag.png';
        case 'ussr':
            return '/images/flags/ussr-flag.png';
    }
}
