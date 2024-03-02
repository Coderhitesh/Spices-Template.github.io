import React from 'react'
import Hero from '../Hero/Hero'
import ServiceTitle from '../ServiceTitle/ServiceTitle'
import InternationDetail from '../InternationDetail/InternationDetail'
import ProductOffer from '../ProductOffer/ProductOffer'
import Product from '../Product/Product'
import NewLetter from '../news-letter/NewLetter'
import Contact from '../contact/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <ServiceTitle />
      <InternationDetail />
      <Product />
      <ProductOffer />
      <NewLetter />
      <Contact />
    </div>
  )
}

export default Home
