import { Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/footer/Footer'
import { Form } from '../components/Form'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <>
      <NavBar />
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <div>
          <Form />
        </div>
      </Stack>
      <Footer />
    </>
  )
}

export default Contact
