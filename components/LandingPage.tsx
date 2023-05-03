import {
  Avatar,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

import SvgComponent from '../svgs/SVG'
import NavBar from './NavBar'
import Footer from './footer/Footer'

const LandingPage = () => {
  return (
    <>
      <div>
        <NavBar />
        <Container maxW={'5xl'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 1, md: 10 }}
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
              <Link href="/music">
                <Button
                  rounded={'full'}
                  px={6}
                  colorScheme={'orange'}
                  bg={'orange.400'}
                  _hover={{ bg: 'orange.500' }}
                >
                  Music
                </Button>
              </Link>
              <Link href="/lyrics">
                <Button rounded={'full'} px={6}>
                  Lyrics
                </Button>
              </Link>
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

export default LandingPage
