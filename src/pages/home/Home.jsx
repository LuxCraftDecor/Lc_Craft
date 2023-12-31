import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Sortprotuctcard from '../../components/productCard/sortprotuctcard'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductTheme from '../../components/productCard/ProductTheme'
import LimitedProduct from '../../components/productCard/LimitedProduct'

function Home() {
  return (
    <Layout>
   
      <HeroSection />
      <LimitedProduct/>
      {/* <Sortprotuctcard/>
      <ProductTheme/>
      <ProductCard />      */}
      <Testimonial />
    </Layout>
  )
}

export default Home