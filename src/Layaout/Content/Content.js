import React, { Component } from 'react'
import './Content.scss'
import Promo from '../Promo/Promo'
import Catalog from '../Catalog/Catalog'
export default class Content extends Component {
  render() {
    return (
      <div className='Container__content-wrapper'>
        <Promo />
        <Catalog />
      </div>
    )
  }
}
