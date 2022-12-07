import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode
    label: string
    href: string
  }) => {
    const colorMode = useColorModeValue('green.100', 'whiteAlpha.100')
    const hover = useColorModeValue('whiteAlpha.80', 'gray.100')
    return (
      <chakra.button
        bg={colorMode}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: hover,
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }
  return (
    <div>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'gray.700'}
        bg={useColorModeValue('green.100', 'whiteAlpha.100')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>©Copywrite 2022 . All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Linkedin'}
              href={'www.linkedin.com/in/tshidiso-donald-mzima-8557a3231'}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={'YouTube'}
              href={'https://www.youtube.com/@mzimadablackout925'}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={'Instagram'}
              href={'https://www.instagram.com/mzimadablackout/'}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default Footer
