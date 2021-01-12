import React from 'react';
import './ListNumber.css';

export default function ListNumber({ randomNumber }) {
    return (
        <li key={`id-${randomNumber}`}>{randomNumber}</li>
    );
}
