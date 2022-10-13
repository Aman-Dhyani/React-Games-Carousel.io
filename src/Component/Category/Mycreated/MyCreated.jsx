import React from 'react'
import Card from '../FlipCard/Card'
import data from '../json/GamesData.json'


const MyCreated = (props) => {

    const MyCreatedGames = data.Games[0].MyCreated


    return (
        <>
            <h1 className='categoryHeader'>My Created Games</h1>
            {
                MyCreatedGames.map(games => {
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

export default React.memo(MyCreated)
