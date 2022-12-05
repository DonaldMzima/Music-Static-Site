import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header onSubmit={Example}>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  )
}
