import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header onSubmit={DarkMode}>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  )
}
