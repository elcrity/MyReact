import React, { useContext } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { ThemeContext } from './Contexts/ThemeContext'

const Page = () => {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default Page