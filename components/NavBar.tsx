import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

import React from 'react'

import Link from 'next/link'
import { Form } from './Form'
import Footer from './footer/Footer'
import { DarkMode } from './DarkMode'

const NavBar = () => {
  // const value = useColorModeValue(gray.100, green.100)

  return (
    <>
      <Box bg="gray.100">
        <Flex h={16} alignItems={'center'}>
          <Avatar
            size={'md'}
            src={
              'https://www.creativefabrica.com/wp-content/uploads/2020/08/06/Music-Logo-Graphics-4868281-1-580x386.jpg'
            }
          />

          <Heading size="md" as="em">
            Music-Static-Site
          </Heading>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'}
          >
            <Stack direction={'row'} spacing={6}>
              <Link href="/Home">
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="Home"
                  my={5}
                  w="100%"
                >
                  Home
                </Button>
              </Link>

              <Link href="/About">
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="About"
                  my={5}
                  w="100%"
                >
                  About
                </Button>
              </Link>

              <Link href="/Lyrics">
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="Lyrics"
                  my={5}
                  w="100%"
                >
                  Lyrics
                </Button>
              </Link>

              <Link href="/Contact">
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                >
                  Contact
                </Button>
              </Link>
            </Stack>
          </Container>

          {/* <li>
            <Link href="/Home">
              <Button variant="ghost" as="a" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>
          </li> */}
          <Box>
            <DarkMode />
          </Box>
        </Flex>
      </Box>
      <Img
        src={
          'https://i0.wp.com/americbuzz.com/wp-content/uploads/2021/09/600_upload_playlist_50960.webp?resize=484%2C484&ssl=1'
        }
      />

      <div>
        <Footer />
      </div>
    </>
  )
}

export default NavBar
