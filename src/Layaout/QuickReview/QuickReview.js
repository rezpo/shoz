import React, { Component } from 'react'
import './QuickReview.scss'
import Button from '../../Components/Button/Button'

export default class Quick_review extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Cillum minim in adipisicing',
      review: 'Aliqua pariatur est ipsum ex labore. Quis culpa dolore ex dolor commodo veniam qui et tempor. Eiusmod anim labore deserunt proident nostrud est nostrud commodo quis deserunt nisi id reprehenderit. Commodo ut quis aliqua aute enim sint elit nulla dolor ad ea deserunt deserunt.'
    }
  }

  render() {

    let { review, title } = this.state

    return (
      <div className='Container__quickreview-wrapper'>
        <div className='Container__quickreview-counter'>
          <img src='https://www.dropbox.com/s/h3ljmsyd8imshps/new-in-shoz-product.png?raw=1' class='product' alt='New product review' />
        </div>
        <div className='Container__quickreview-review'>
          <div className='note'>
            <h1>{title}</h1>
            <p>{review}</p>
            <Button
              subject='secondary'
              text="I'm Interested"
            />
          </div>
        </div>
      </div>
    )
  }
}
