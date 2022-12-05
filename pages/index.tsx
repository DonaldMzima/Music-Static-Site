import { Img } from '@chakra-ui/react'
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
          src={
            'https://i0.wp.com/americbuzz.com/wp-content/uploads/2021/09/600_upload_playlist_50960.webp?resize=484%2C484&ssl=1'
          }
        />

        <Footer />
      </div>
    </>
  )
}
