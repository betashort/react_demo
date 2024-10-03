export interface IWeather {
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
    };
    weather: {
        main: string;
    };
    dt_text: string;
}