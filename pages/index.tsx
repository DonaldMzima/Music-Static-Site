import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar'

import styles from '../styles/Home.module.css'

export default function Home() {
  let component
  // switch  {
  //   case '/Home':
  //     component = <Home />
  // }
  return (
    <>
      <div>
        <NavBar />
      </div>

      {component}
    </>
  )
}
