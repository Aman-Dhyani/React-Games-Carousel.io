import React from 'react'
import Card from '../FlipCard/Card'
import data from '../json/GamesData.json'

export default function Puzzle(props) {

    const  PuzzleGames = data.Games[4].Puzzle


    return (
        <>
            <h1 className='categoryHeader'>Sports</h1>
            {
           PuzzleGames.map(games => {
                    return <Card key={games.id} showFrame={props.showFrame} image={games.image} name={games.name} summary={games.summary} source={games.source} url={games.url} />
                })
            }
        </>
    )
}

