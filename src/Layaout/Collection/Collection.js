import React, { Component } from 'react'
import './Collection.scss'
import Button from '../../Components/Button/Button'

export default class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inspiration: 'https://via.placeholder.com/700x900',
      title: 'Anim officia veniam elit',
      description: 'Ex aute velit esse enim cupidatat sunt exercitation ea amet consequat adipisicing id incididunt. Labore esse magna mollit sint anim. Quis dolore dolore anim esse aute ex adipisicing veniam proident nisi esse sunt pariatur eu.',
      features_products: [
        {
          title: 'Magna nulla',
          photo: 'https://via.placeholder.com/200x200',
          price: 28.67
        },
        {
          title: 'Lorem ea ut cupidatat',
          photo: 'https://via.placeholder.com/200x200',
          price: 9.12
        },
        {
          title: 'Nostrud labore Lorem',
          photo: 'https://via.placeholder.com/200x200',
          price: 12.3
        },
      ]
    }
  }

  render() {
    let { inspiration, title, description, features_products } = this.state

    return (
      <div className='Container__collection-wrapper'>
        <div className='Container__collection-features'>
          <h2 className='title'>{title}</h2>
          <p className='note'>{description}</p>
          <Button
            subject='primary'
            text='Buy this look'
          />
        </div>
        <div className='Container__collection-inspiration'>
          <img src={inspiration} alt={title} className='cover' />
          <div className='set'>
            {features_products.map(item => {
              return (
                <div className='product'>
                  <img src={item.photo} alt={item.title} className='picture' />
                  <div className='price'>${item.price.toFixed(1)}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
