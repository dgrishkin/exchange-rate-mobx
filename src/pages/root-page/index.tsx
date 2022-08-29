import { exchangeRateObservable } from "$observables";
import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import styles from "./RootPage.module.less";

export const RootPage = observer(() => {
    const [exchangeRate] = useState(() => exchangeRateObservable);

    useEffect(() => {
        exchangeRate.loadRates();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Цифровой код валюты</th>
                    <th>Символьный код валюты</th>
                    <th>Наименование валюты</th>
                    <th>Курс</th>
                </tr>
            </thead>
            <tbody>
                {exchangeRate.exchangeRates.map((item) => <tr key={item.ID}>
                    <td>{item.NumCode}</td>
                    <td>{item.CharCode}</td>
                    <td>{item.Name}</td>
                    <td>{item.Value}</td>
                </tr>)}
            </tbody>
        </table>
    );
})
