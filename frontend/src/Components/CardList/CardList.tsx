import React from "react";
import Card from "../Card/Card";

interface Props {}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
    return <div>
        <Card companyName ="Apple" ticker = 'AAPL' price = {100} />
        <Card companyName ="Piper" ticker = 'PPR' price = {200}/>
        <Card companyName ="Vinny" ticker = 'VNY' price = {300}/>
    </div>;
};

export default CardList;