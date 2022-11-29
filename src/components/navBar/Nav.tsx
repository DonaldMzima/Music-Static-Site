import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Simple from '../bar'

const NavBar = () => {
  return (
    <nav>
      {/* <Box boxShadow="dark-lg" p="6" rounded="md" bg="white"> */}

      <div>
        <Simple />
      </div>
      {/* </Box> */}
    </nav>
  )
}

export default NavBar
