import { Box, Button, Grid, Heading, IconButton, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { DeleteIcon } from "./Icons"

const InstallButton = () => {
  const [isDisplay, setIsDisplay] = useState(false)
  const btnRef = useRef()
  useEffect(() => {
    let deferredPrompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      deferredPrompt = e
      setIsDisplay(true)
      btnRef.current.addEventListener("click", () => {
        setIsDisplay(false)
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt")
          } else {
            console.log("User dismissed the A2HS prompt")
          }
          deferredPrompt = null
        })
      })
    })
  }, [])
  if (!isDisplay) return null
  return (
    <Grid
      gridArea="footer"
      gridTemplateColumns="auto max-content"
      color="gray.50"
      bg="gray.500"
      p="4"
      pos="relative"
    >
      <IconButton
        bg="inherit"
        size="xs"
        pos="absolute"
        right="4"
        top="2"
        onClick={() => setIsDisplay(false)}
        aria-label="close"
        icon={<DeleteIcon />}
      />
      <Box>
        <Heading>Todo App</Heading>
        <Text>Get the App for free. It Won't take up space on your device</Text>
      </Box>
      <Box alignSelf="center">
        <Button colorScheme="blue" ref={btnRef}>
          install
        </Button>
      </Box>
    </Grid>
  )
}

export default InstallButton
