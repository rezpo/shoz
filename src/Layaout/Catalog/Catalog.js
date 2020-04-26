import React, { Component } from 'react'
import './Catalog.scss'
import Discount from '../../Components/Discount/Discount'
import { FaShoppingCart, FaEye } from 'react-icons/fa'

export default class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoes: [
        {
          name: 'Icetrack Runner',
          photo: 'https://via.placeholder.com/200x200',
          price: 79.2,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'sporty',
          size: 9.5,
          sku: '3828'
        },
        {
          name: 'Bullet proof',
          photo: 'https://via.placeholder.com/200x200',
          price: 100.0,
          promo: true,
          discount: 25,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '4949'
        },
        {
          name: 'Dance up',
          photo: 'https://via.placeholder.com/200x200',
          price: 36.7,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'softy',
          size: 6,
          sku: '2131'
        },
        {
          name: 'Godspeed',
          photo: 'https://via.placeholder.com/200x200',
          price: 58.9,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '1212'
        },
        {
          name: 'Bolts',
          photo: 'https://via.placeholder.com/200x200',
          price: 120.9,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '1828'
        },
        {
          name: 'Pixel path',
          photo: 'https://via.placeholder.com/200x200',
          price: 98.9,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '3949'
        },
        {
          name: 'Garden field',
          photo: 'https://via.placeholder.com/200x200',
          price: 60.9,
          promo: true,
          discount: 43,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '7388'
        },
        {
          name: 'Soft fist',
          photo: 'https://via.placeholder.com/200x200',
          price: 52.9,
          promo: true,
          discount: 15,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '1923'
        },
        {
          name: 'Peppermint',
          photo: 'https://via.placeholder.com/200x200',
          price: 23.9,
          promo: true,
          discount: 60,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '3222'
        },
        {
          name: 'Heart',
          photo: 'https://via.placeholder.com/200x200',
          price: 52.9,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '9999'
        },
        {
          name: 'Jungle master',
          photo: 'https://via.placeholder.com/200x200',
          price: 52.9,
          promo: true,
          discount: 25,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '7577'
        },
        {
          name: 'Staniss',
          photo: 'https://via.placeholder.com/200x200',
          price: 52.9,
          promo: false,
          discount: 0,
          description: 'Sunt dolore ullamco id deserunt aliqua ad Lorem irure eu consequat deserunt aute ipsum anim.',
          short_description: 'Sunt dolore ullamco',
          category: 'casual',
          size: 10,
          sku: '3223'
        }
      ]
    };
  }

  render() {
    let { shoes } = this.state

    return (
      <div className='Container__catalog-wrapper'>
        {shoes.map(item => {
          let isPromo,
            beforePrice

          item.promo ? isPromo = <div className='promo'>{item.discount}%<small className='title'>OFF</small></div> : isPromo = null
          item.promo ? beforePrice = <small className='before'>${item.price.toFixed(1)}</small> : beforePrice = null


          return (
            <div className='Container__catalog-product' key={item.sku}>
              {isPromo}
              <div className='detail'>
                <strong className='name'>{item.name}</strong>
                <div className='note'>
                  <p className='description'>{item.description}</p>
                </div>
                <div className='recomendations'>
                  <small className='title'>Its a match</small>
                  <div className='match'>
                    <div className='product'>
                      <img src='https://via.placeholder.com/40x40' alt='its a match' />
                    </div>
                    <div className='product'>
                      <img src='https://via.placeholder.com/40x40' alt='its a match' />
                    </div>
                    <div className='product'>
                      <img src='https://via.placeholder.com/40x40' alt='its a match' />
                    </div>
                  </div>
                </div>
                <div className='action'>
                  <div className='addtocart'>
                    <FaShoppingCart size='1.6em' className='iconic' />
                  </div>
                  <div className='viewpdp'>
                    <FaEye size='1.6em' className='iconic' />
                  </div>
                </div>
              </div>
              <div className='body'>
                <div className='picture'>
                  <img src={item.photo} alt={item.short_description} />
                </div>
              </div>
              <div className='footer'>
                <div className='info'>
                  <strong className='name'>{item.name}</strong>
                  <small className='desc'>{item.short_description}</small>
                </div>
                <div className='price'>
                  {beforePrice}
                  <span>$<Discount original_price={item.price} discount_applied={item.discount} /></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
