import React, { useEffect, useState } from 'react';
import './style.css';

const Rate = ({from}) => {
        const [amount, setAmount] = useState(null);

        useEffect(() => {
            (async () => {
                const resp = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`);
                setAmount((await resp.json()).rates.CZK.toLocaleString('cs-CZ'));
            })()
        }, [from]);

        return (
            <div className="rate">
                <div className="rate__currency">1 USD</div>
                <div>=</div>
                <div className="rate__value">{amount} {from}</div>
            </div>
        );
    }
;

export default Rate;
