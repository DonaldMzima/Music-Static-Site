/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import {
  Flex,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Link,
  Avatar,
  Heading,
  Box,
  useColorModeValue,
  Stack,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { DarkMode } from './DarkMode'

const Navbar = () => {
  const route = useRouter()
  const value = useColorModeValue('orange.400', 'whiteAlpha.100')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        color="white"
        bg={value}
        width="100%"
        fontSize={['sm', 'md', 'lg', 'xl']}
      >
        <Flex align="center" mr={5}>
          <a href="/">
            <Avatar
              m={[2, 3]}
              size={'md'}
              src={
                'https://www.creativefabrica.com/wp-content/uploads/2020/08/06/Music-Logo-Graphics-4868281-1-580x386.jpg'
              }
            />
          </a>
          <Heading size="md" as="em">
            Music-Static-Site
          </Heading>
        </Flex>
        <Spacer />
        <IconButton
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Toggle navigation"
        />
        <Flex
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Link href="/">
            <Button variant="ghost" as="a" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="ghost" as="a" aria-label="About" my={5} w="100%">
              About us
            </Button>
          </Link>

          <Link href={''}>
            <Button
              variant="ghost"
              as="a"
              aria-label="Contact"
              my={5}
              w="100%"
              onClick={() => route.push('/contacts')}
            >
              Contact us
            </Button>
          </Link>

<<<<<<< HEAD
          <Link>
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
        </Flex>
        <Box>
          <DarkMode />
        </Box>
=======
              <Link href={''}>
                <Button
                  variant="ghost"
                  as="a"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                  onClick={() => route.push('/contacts')}
                >
                  Contact us
                </Button>
              </Link>
            </Stack>
          </Container>

        <Link>
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
>>>>>>> 411c58a4926c6e2f62a0fd658f0aab0e863e2e3b
      </Flex>
    </>
  )
}

export default Navbar
