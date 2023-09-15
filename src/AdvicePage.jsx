import { useState, useEffect } from "react";
import "./AdvicePage.css";

const url = "https://api.adviceslip.com/advice";

export default function AdvicePage() {
    const [quote, setQuote] = useState({ id: "", advice: "" });

    useEffect(() => {
        GetQuote();
    }, []);

    async function GetQuote() {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.slip;
        setQuote(randomQuote);
    }

    return (
        <div className="advice-page">
            <section>
                <h1 className="h1">ADVICE #{quote.id}</h1>
                <q className="advice">“{quote.advice}”</q>
                <picture>
                    <source media="(min-width: 750px)" srcSet="./src/images/pattern-divider-desktop.svg" />
                    <img src="./src/images/pattern-divider-mobile.svg" alt="pattern divider image" />
                </picture>
            </section>
            <div className="Dice" onClick={GetQuote} >
                <img src="./src/images/icon-dice.svg" alt="dice icon"/>
            </div>
        </div>
    )
}