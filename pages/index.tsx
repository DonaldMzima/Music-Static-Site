import { Box, Img } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div>
        <NavBar />

        <Img
          boxSize="750px"
          objectFit="cover"
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPo9lVrXxqAnarF0j67287aVJtmO8oMc6Iw&usqp=CAU'
          }
        />

        <Footer />
      </div>
    </>
  )
}
