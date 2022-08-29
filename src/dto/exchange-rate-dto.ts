export interface IExchangeRateItem {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export interface IExchangeRateDTO {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: Record<string, IExchangeRateItem>;
}