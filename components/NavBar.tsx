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

import { DarkMode } from './DarkMode'
import { useRouter } from 'next/router'

const NavBar = () => {
  const route = useRouter()
  const value = useColorModeValue('orange.400', 'whiteAlpha.100')

  return (
    <>
      <Box
        bg={value}
        pos="fixed"
        width="100%"
        fontSize={['sm', 'md', 'lg', 'xl']}
      >
        <Flex h={16} alignItems={'center'}>
          <Avatar
            m={[2, 3]}
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
                  About us
                </Button>
              </Link>

              <Link href={''}>
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="Blog"
                  my={5}
                  w="100%"
                  onClick={() => route.push('/blog')}
                >
                  Blog
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
                  Contact us
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
