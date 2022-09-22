import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { useSidebarDrawer } from "../hooks/SidebarDrawerContext";
import { RiMenuLine } from 'react-icons/ri';
import Logo from "./Logo";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

export function Header() {
  const {onOpen} = useSidebarDrawer();

  const isLargeThan992px = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">

      { !isLargeThan992px && (
        <IconButton
          aria-label="side bar navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="2"
        >

        </IconButton>
      )}

      <Logo />

      { isLargeThan992px && (
        <SearchBox />
      )}
      

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showResponsiveContent={isLargeThan992px}/>
      </Flex>
    </Flex>
  )
}