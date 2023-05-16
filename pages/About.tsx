import React from 'react'
import NavBar from '../components/NavBar'
import SvgComponent from '../svgs/SVG'
import { Stack, Text } from '@chakra-ui/react'
import Footer from '../components/footer/Footer'

const About = () => {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Text color={'gray.500'} maxW={'3xl'}>
            This Website is designed for Music and lyrics.Always ready to give
            my best with
          </Text>
        </Stack>
        <SvgComponent />
        <Footer />
      </div>
    </>
  )
}

export default About
