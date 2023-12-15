import React from 'react'
import './advert-home.css'
import Advert from '../../img/advert.jpg'


const AdvertHome = () => {
  return (
    <div className='advert-home'>
      <div>
        <p className='title'>
        USN Hardcore Whey GH 908g French Vanilla
        </p>
        <p className='brand'>Usn</p>
        <p className='price'>R 412,95</p>
        <p className='sale'>Or 6 payments of R 68.83 at 0% interest.</p>
        <a href="">Order </a>

      </div>
      <img src={Advert} alt="" />
    </div>
  )
}

export default AdvertHome
