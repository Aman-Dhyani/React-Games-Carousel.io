import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";
import './Card.css'

export default function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                <div style={{ background: `black` }} onClick={() => setIsFlipped(true)} className='games'  >
                    <img className='gameInfo' id='gameImg' src={props.image} alt="error" />
                    <h1 className='gameInfo' id='gameName'>{props.name}</h1>
                    <p className='gameInfo' id='gameSummary'>{props.summary}</p>
                </div>

                <div style={{ background: `yellow` }} onClick={() => setIsFlipped(false)} className='games'  >
                    <button className="button-54" onClick={() => props.showFrame(props.url)}   >play</button>
                    <button className="button-87" onClick={() => window.location.href = props.source} id='gameSource'>Source Code</button>
                </div>
            </ReactCardFlip>
        </>
    )
}

