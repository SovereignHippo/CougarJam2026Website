import React, {useState, useEffect}  from 'react'
import { preload } from 'react-dom';
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import CountDownClock from './CountDownClock';


function HeroSection() {

  //preload images
  preload('/images/cougar-jam-2025/IMG_0142.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0145.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0152.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0163.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0183.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0198.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0201.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0304.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0307.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0308.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0311.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0312.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0317.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0318.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0324.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0326.jpg', {as: 'image'});
  preload('/images/cougar-jam-2025/IMG_0328.jpg', {as: 'image'});

    const backgroundImagesList = [
        '/images/cougar-jam-2025/IMG_0142.jpg',
        '/images/cougar-jam-2025/IMG_0145.jpg',
        '/images/cougar-jam-2025/IMG_0152.jpg',
        '/images/cougar-jam-2025/IMG_0163.jpg',
        '/images/cougar-jam-2025/IMG_0183.jpg',
        '/images/cougar-jam-2025/IMG_0198.jpg',
        '/images/cougar-jam-2025/IMG_0201.jpg',
        '/images/cougar-jam-2025/IMG_0304.jpg',
        '/images/cougar-jam-2025/IMG_0307.jpg',
        '/images/cougar-jam-2025/IMG_0308.jpg',
        '/images/cougar-jam-2025/IMG_0311.jpg',
        '/images/cougar-jam-2025/IMG_0312.jpg',
        '/images/cougar-jam-2025/IMG_0317.jpg',
        '/images/cougar-jam-2025/IMG_0318.jpg',
        '/images/cougar-jam-2025/IMG_0324.jpg',
        '/images/cougar-jam-2025/IMG_0326.jpg',
        '/images/cougar-jam-2025/IMG_0328.jpg',];

    const backgroundImage = backgroundImagesList[Math.floor(Math.random() * backgroundImagesList.length)];

    var sectionStyle = {
        background: "url(" + {backgroundImage} + ")"
    };


    console.log(backgroundImage)

    


  return (
    <div className='hero-container' style={{background: `url(${backgroundImage}) center center/cover no-repeat`}}>
      {/* <video src='/videos/SIUE-Drone-Shots.mp4' autoPlay loop muted /> */}
      <h1>COUGAR JAM 2026</h1>
      <CountDownClock />
      <p>Sign ups opening soon</p>
      <div className='hero-btns'>
        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' link="https://discord.gg/kMS6q9Wn34">GDG Discord</Button>
        {/* <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button> */}
      </div>
    </div>
  )
}

export default HeroSection
