import React, { Component } from 'react'
import './Menu.scss'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: [
        'Culpa',
        'Voluptate',
        'Irure',
        'Consequat',
        'Proident',
        'Irure'
      ]
    };
  }

  render() {

    let { menu } = this.state

    return (
      <div className='Container__menu-wrapper'>
        <ul className='Container__menu-categories'>
          {menu.map(item => {
            return (
              <li className='category'><a href='#' className='anchor'>{item}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}
