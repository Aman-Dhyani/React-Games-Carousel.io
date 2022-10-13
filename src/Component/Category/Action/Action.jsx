import React from 'react'
import Card from '../FlipCard/Card'
import data from '../json/GamesData.json'

const Action = (props) => {

    const ActionGames = data.Games[1].Action


    return (
        <>
            <h1 className='categoryHeader'>Action</h1>
            {
                ActionGames.map(games => {
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

export default Action
