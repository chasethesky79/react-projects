import React from 'react';

export default function Card({ movie }){
    const { ranking, title, year, distributor, amount, img: { src, alt }} = movie;
    return (
        <div className='card'>
            <img src={src} alt={alt} width='200'className='img-style'/>
            <div className='card-body'>
              <h2>{`${ranking}, ${title}, ${year}`}</h2>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{`Distributor: ${distributor}`}</li>
                <li className='list-group-item'>{`Amount ${amount}`}</li>
            </ul>
        </div>
    )
}