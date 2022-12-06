import React from 'react'
import NavBar from '../components/NavBar'
import SvgComponent from '../svgs/SVG'
import { Stack, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <div>
        <NavBar />

        <Text>
          This Website is designed for Music and lyrics.Always ready to give my
          best with
        </Text>
        <SvgComponent />
      </div>
    </>
  )
}

export default About
