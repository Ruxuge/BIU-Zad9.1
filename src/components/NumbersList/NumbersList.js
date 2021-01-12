import React, { useState, useEffect } from 'react';
import './NumbersList.css';
import ListNumber from "../ListNumber/ListNumber";

export default function NumbersList() {
    const [numbers, setNumbers] = useState([]);

    // Mounting component only once
    const useMountEffect = (func) => useEffect(func, [])

    useMountEffect(() => {
        for (let i = 0; i < 10; i++) {
            // Create table of rands: 0-99
            setNumbers(prev => [...prev, Math.floor((Math.random() * 1000) / 10)]);
        }
    });

    return (
        <article>
            <ul className='numbers-list numbers-list-font'>
                {numbers.map(number => (
                    <ListNumber randomNumber={number}/>
                ))}
            </ul>
        </article>
    );
}
