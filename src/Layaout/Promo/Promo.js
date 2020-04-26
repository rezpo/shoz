import React, { Component } from 'react'
import './Promo.scss'
import Button from '../../Components/Button/Button'
export default class Promo extends Component {
  render() {
    return (
      <div className='Container__promo-wrapper'>
        <img src='https://via.placeholder.com/900x250' className='banner' alt='promo' />
        <div className='viewpromo'>
          <Button
            subject='primary'
            text='Wow, let me see!'
          />
        </div>

      </div>
    )
  }
}
