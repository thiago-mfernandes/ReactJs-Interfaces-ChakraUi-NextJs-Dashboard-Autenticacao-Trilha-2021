import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './Search'

export function Header() {
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
      <Logo />
      <SearchBox />
      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}