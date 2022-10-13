import React from 'react'
import Card from '../FlipCard/Card'
import data from '../json/GamesData.json'

const Racing = (props) => {

    const RacingGames = data.Games[2].Racing


    return (
        <>
            <h1 className='categoryHeader'>Racing</h1>
            {
                RacingGames.map(games => {
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


export default Racing
