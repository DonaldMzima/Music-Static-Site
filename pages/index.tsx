import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar'

import styles from '../styles/Home.module.css'
import SvgComponent from '../svgs/SVG'

export default function Home() {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>

        <Container maxW={'5xl'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Avatar
              bg={'#000000'}
              size={'md'}
              src={
                'https://www.creativefabrica.com/wp-content/uploads/2020/08/06/Music-Logo-Graphics-4868281-1-580x386.jpg'
              }
            />
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Let the{' '}
              <Text as={'span'} color={'orange.400'}>
                Music Speak!
              </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'}>
              My brain is 85% song lyrics.I listen to a wide array of music, all
              depends on the mood I’m in at the time.
            </Text>
            <Stack spacing={6} direction={'row'}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}
              >
                Music
              </Button>
              <Button rounded={'full'} px={6}>
                Lyrics
              </Button>
            </Stack>
            <Flex w={'full'}>
              <SvgComponent
                height={{ sm: '24rem', lg: '28rem' }}
                mt={{ base: 12, sm: 16 }}
              />
            </Flex>
          </Stack>
        </Container>

        <Footer />
      </div>
    </>
  )
}
