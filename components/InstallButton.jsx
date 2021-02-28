import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { DeleteIcon } from "./Icons"

const InstallButton = () => {
  const [isDisplay, setIsDisplay] = useState(false)
  const btnRef = useRef()
  useEffect(() => {
    let deferredPrompt
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      // Update UI to notify the user they can add to home screen
      setIsDisplay(true)
      btnRef.current.addEventListener("click", () => {
        // hide our user interface that shows our A2HS button
        setIsDisplay(false)
        // Show the prompt
        deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
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
      gridTemplateColumns="auto max-content"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      p="4"
      py="6"
      color="gray.50"
      bg="gray.500"
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
