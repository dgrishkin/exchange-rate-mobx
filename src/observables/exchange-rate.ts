import { IExchangeRateDTO } from "$dto";
import { RestProcessor } from "$utils";
import { makeAutoObservable } from "mobx";

class ExchangeRateObservable {
    exchangeRate: IExchangeRateDTO | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    get exchangeRates() {
        return this.exchangeRate ? Object.values(this.exchangeRate.Valute) : []
    }

    *loadRates() {
        try {
            this.exchangeRate = yield RestProcessor.get('https://www.cbr-xml-daily.ru/daily_json.js');
        } catch (e) {
            console.error(e);
        }
    }
}

export default new ExchangeRateObservable();
