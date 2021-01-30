import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';

export default function List() {
    const [ movieSummary, setMovieSummary ] = useState({ movies: [], loading: true });
    const { movies, loading } = movieSummary;

    useEffect(async () => {
        const result = await fetch('../../src/assets/data.json');
        if (!!result) {
            setMovieSummary({ movies: await result.json(), loading: false });
        }
    })
    return (
        <div>
          { loading && <div>Loading...</div>}
          { movies && movies.map(movie => <Card key={movie.id} movie={movie}/>) }
        </div>
    )
}