import React from "react";
import "./Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
    return ( 
        <div className = "card">
            <img
            src="C:/Users/Connor/Pictures/frog.jpg"
            alt="Image"
            />
            <div className = "details">
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className = "info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi corporis ullam laboriosam dolorum consequuntur a itaque eum, rerum magnam minus amet quasi aliquid debitis harum nesciunt, laudantium ipsam doloribus quas.
            </p>
        </div>
    )
};

export default Card;