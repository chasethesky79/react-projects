import React from 'react';

export default function Card({ movie }){
    const { ranking, title, year, distributor, amount, img: { src, alt }} = movie;
    return (
        <div>
            <h2>{`${ranking}, ${title}, ${year}`}</h2>
            <img src={src} alt={alt} width='200'/>
            <p>{`Distributor: ${distributor}`}</p>
            <p>{`Amount ${amount}`}</p>
        </div>
    )
}