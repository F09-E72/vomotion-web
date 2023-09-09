import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"
import Button from "../atoms/Button"

interface DrawerProps {
  links?: {to: string, label: string}[]
}
const SideDrawer = ({links = []}: DrawerProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='main' onClick={onOpen}>
        Open
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Navigation</DrawerHeader>
          <DrawerBody className="flex flex-col">
            {...links.map(link => {
              return <Link className="shadow-md hover:bg-slate-100 p-4 rounded-sm m-2" href={link.to}>{link.label}</Link>
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer;