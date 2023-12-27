import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  

  } from '@chakra-ui/react'


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
  return (
    <>
       <Button ref={btnRef} colorScheme='teal' onClick={onOpen} position={'fixed'} top={4} borderRadius={'full'} p={0} left={0}>
      <BiMenuAltLeft size={'1.5rem'}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
           <Button as={'a'} variant={'ghost'} mr={3} href='/' > Home </Button>
           <Button as={'a'} variant={'ghost'} mr={3} href='/about' > About </Button>
           <Button as={'a'} variant={'ghost'} mr={3} href='/contact' > Contact </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
