import { FilterOption } from "../components/FiltersForm";
import { VehicleType, VehicleNation } from "../types/vehicle";

export const LEVELS: FilterOption<string>[] = [
    { label: "I", value: "1" },
    { label: "II", value: "2" },
    { label: "III", value: "3" },
    { label: "IV", value: "4" },
    { label: "V", value: "5" },
    { label: "VI", value: "6" },
    { label: "VII", value: "7" },
    { label: "VIII", value: "8" },
    { label: "IX", value: "9" },
    { label: "X", value: "10" },
    { label: "XI", value: "11" },
];

export const TYPES: FilterOption<VehicleType>[] = [
    {
        label: (
            <img
                alt="Submarine"
                src="/images/vehicle-types/submarine.png"
                className="size-6"
            />
        ),
        value: "submarine",
        tooltip: "Подводная лодка",
    },
    {
        label: (
            <img
                alt="Destroyer"
                src="/images/vehicle-types/destroyer.png"
                className="size-6"
            />
        ),
        value: "destroyer",
        tooltip: "Эсминец",
    },
    {
        label: (
            <img
                alt="Cruiser"
                src="/images/vehicle-types/cruiser.png"
                className="size-6"
            />
        ),
        value: "cruiser",
        tooltip: "Крейсер",
    },
    {
        label: (
            <img
                alt="Battleship"
                src="/images/vehicle-types/battleship.png"
                className="size-6"
            />
        ),
        value: "battleship",
        tooltip: "Линкор",
    },
    {
        label: (
            <img
                alt="AirCarrier"
                src="/images/vehicle-types/air_carrier.png"
                className="size-6"
            />
        ),
        value: "aircarrier",
        tooltip: "Авианосец",
    },
];

export const NATIONS: FilterOption<VehicleNation>[] = [
    {
        label: (
            <img
                alt="Commonwealth"
                src="/images/flags/commonwealth-flag.png"
                className="h-6"
            />
        ),
        value: "commonwealth",
        tooltip: "Содружество",
    },
    {
        label: (
            <img
                alt="Europe"
                src="/images/flags/europe-flag.png"
                className="h-6"
            />
        ),
        value: "europe",
        tooltip: "Европа",
    },
    {
        label: (
            <img
                alt="France"
                src="/images/flags/france-flag.png"
                className="h-6"
            />
        ),
        value: "france",
        tooltip: "Франция",
    },
    {
        label: (
            <img
                alt="Germany"
                src="/images/flags/germany-flag.png"
                className="h-6"
            />
        ),
        value: "germany",
        tooltip: "Германия",
    },
    {
        label: (
            <img
                alt="Italy"
                src="/images/flags/italy-flag.png"
                className="h-6"
            />
        ),
        value: "italy",
        tooltip: "Италия",
    },
    {
        label: (
            <img
                alt="Japan"
                src="/images/flags/japan-flag.png"
                className="h-6"
            />
        ),
        value: "japan",
        tooltip: "Япония",
    },
    {
        label: (
            <img
                alt="Netherlands"
                src="/images/flags/netherlands-flag.png"
                className="h-6"
            />
        ),
        value: "netherlands",
        tooltip: "Нидерланды",
    },
    {
        label: (
            <img
                alt="PanAmerica"
                src="/images/flags/panamerica-flag.png"
                className="h-6"
            />
        ),
        value: "pan_america",
        tooltip: "ПанАмерика",
    },
    {
        label: (
            <img
                alt="PanAsia"
                src="/images/flags/panasia-flag.png"
                className="h-6"
            />
        ),
        value: "pan_asia",
        tooltip: "ПанАзия",
    },
    {
        label: (
            <img
                alt="Spain"
                src="/images/flags/spain-flag.png"
                className="h-6"
            />
        ),
        value: "spain",
        tooltip: "Испания",
    },
    {
        label: <img alt="UK" src="/images/flags/uk-flag.png" className="h-6" />,
        value: "uk",
        tooltip: "Великобритания",
    },
    {
        label: (
            <img alt="USA" src="/images/flags/usa-flag.png" className="h-6" />
        ),
        value: "usa",
        tooltip: "США",
    },
    {
        label: (
            <img alt="USSR" src="/images/flags/ussr-flag.png" className="h-6" />
        ),
        value: "ussr",
        tooltip: "СССР",
    },
];
