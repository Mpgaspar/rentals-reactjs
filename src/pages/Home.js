import React from 'react'

// Components
import CardItem from '../components/CardItem'
import Count from '../components/Count'
import ShowItems from '../components/ShowItems'

const Home = () => {
    return (
      <div>
        <h1>Rentals&Buy</h1>
        <ShowItems />
        <Count />
        <CardItem />
      </div>    
    )
}

export default Home