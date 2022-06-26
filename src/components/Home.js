import React from "react";
import Hero from "./Hero";
import Introduction from "./Introduction";
import ChooseMonth from "./ChooseMonth";
import CurrentSeason from "./CurrentSeason";

export default function Home() {
    return (
        <div>
            <Hero />
            <Introduction />
            <ChooseMonth />
            <CurrentSeason />
        </div>
    );
}