import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    //por padrao é true, e passando da medida lg fica maior
    base: true,
    lg: false,
  })

  // navegação para mobile ou tablet
  if(isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"  />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  //navegacao desktop
  return (
    <Box as="aside" width="64" mr="8">
      <SidebarNav />
    </Box>
  )
}