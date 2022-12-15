import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Container, effect, Link, Text } from '@chakra-ui/react'

const Music = () => {
  const CLIENT_ID = 'b2799869d1f4430a8cc10468dc678b58'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        ?.split('=')[1]
    }

    console.log(token)
  })
  return (
    <>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Text fontSize="6xl" as="em">
          Music Account
        </Text>
        <Button
          size="md"
          height="48px"
          width="200px"
          bg="orange.400"
          _hover={{ border: '2px solid #1C6FEB' }}
        >
          <Link
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            login
          </Link>
        </Button>
      </Container>
    </>
  )
}

export default Music
