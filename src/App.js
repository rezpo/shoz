import React from 'react'
import './App.scss'
import Header from './Layaout/Header/Header'
import Content from './Layaout/Content/Content'
import Quick_review from './Layaout/Quick_review/Quick_review'
import Collection from './Layaout/Collection/Collection'
import Footer from './Layaout/Footer/Footer'
import Break from './Components/Break/Break'

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Break title='New in Shoz' />
      <Quick_review />
      <Break title='Get a grip' />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
