import React from 'react'
import Card from '../FlipCard/Card'
import data from '../json/GamesData.json'

const Sports = (props) => {

    const SportsGames = data.Games[3].Sports


    return (
        <>
            <h1 className='categoryHeader'>Sports</h1>
            {
                SportsGames.map(games => {
                    return <Card
                        key={games.id}
                        showFrame={props.showFrame}
                        image={games.image}
                        name={games.name}
                        summary={games.summary}
                        source={games.source}
                        url={games.url} />
                })
            }
        </>
    )
}

export default Sports
