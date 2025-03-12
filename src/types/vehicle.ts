export type VehicleType = 'submarine' | 'destroyer' | 'cruiser' | 'battleship' | 'aircarrier';

export type VehicleNation =
    | 'japan'
    | 'usa'
    | 'ussr'
    | 'germany'
    | 'uk'
    | 'france'
    | 'pan_asia'
    | 'italy'
    | 'commonwealth'
    | 'pan_america'
    | 'europe'
    | 'netherlands'
    | 'spain';

export interface Vehicle {
    title: string;
    description: string;
    icons: {
        large: string;
        medium: string;
    };
    level: number;
    type: {
        name: VehicleType;
        title: string;
        icons: { default: string };
    };
    nation: {
        name: VehicleNation;
        title: string;
        color: string;
        icons: { large: string };
    };
}
