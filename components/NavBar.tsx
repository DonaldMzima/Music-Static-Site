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
import { useRouter } from 'next/router'

const NavBar = () => {
  const route = useRouter()
  const value = useColorModeValue('green.100', 'whiteAlpha.100')

  return (
    <>
      <Box bg={value}>
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
              <Link href="/">
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

              <Link href="/about">
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

              <Link href={''}>
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="Lyrics"
                  my={5}
                  w="100%"
                  onClick={() => route.push('/lyrics')}
                >
                  Lyrics
                </Button>
              </Link>

              <Link href="/contact">
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

          <Box>
            <DarkMode />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
