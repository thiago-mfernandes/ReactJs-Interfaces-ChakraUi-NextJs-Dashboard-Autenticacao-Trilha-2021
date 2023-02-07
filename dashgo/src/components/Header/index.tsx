import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false, //dados visiveis apenas a partir do tamanho large
    lg: true
  });

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      {/**se eu nao estiver na versao desktop, exibir o icone de menu */}
      { !isWideVersion && (
        <IconButton 
          aria-label="Open Navigation"
          icon={ <Icon as={RiMenuLine} /> }
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        >

        </IconButton>
      ) }

      <Logo />
      
      {/**se eu estiver na versao desktop, exibir o campo de busca */}
      { isWideVersion && <SearchBox /> }
      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}