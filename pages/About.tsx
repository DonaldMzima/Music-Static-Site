import React from 'react'
import NavBar from '../components/NavBar'
import SvgComponent from '../svgs/SVG'
import { Text } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <div>
        <NavBar />

        <Text color={'gray.500'} maxW={'3xl'}>
          This Website is designed for Music and lyrics.Always ready to give my
          best with
        </Text>
        <SvgComponent />
      </div>
    </>
  )
}

export default About
