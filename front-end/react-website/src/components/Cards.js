import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Important Info</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='images/img-9.jpg' title="📅 When" text=" November 6th - November 8th, 2026" label="When?" path="/services"/>
                    <CardItem src='images/img-2.jpg' title="📍 Where" text="SIUE's Engineering Building, main Atrium" label="Where?" path="/services"/>
                    <CardItem src='images/img-2.jpg' title="🏆 Hosted By" text="SIUE's Game Development Group" label="What?" path="/services"/>
                </ul>
                <CardItem id="long-card" src='images/img-2.jpg' title="Overview" text="Cougar Jam is the SIUE Game Development Group's annual game jam! Teams have three days to make a game complete for scratch! It is a weekend event with special guest judges, free food, and prizes! Open to any college student!" label="What?" path="/services"/>
            </div>
            
        </div>
    </div>
  )
}

export default Cards
