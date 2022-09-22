import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link"
import { ElementType } from "react";
import ActiveLink from "./ActiveLink";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  name: string;
  href: string;
}

export default function NavLink({ icon, name, href, ...rest }: INavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest }>
        <Icon as={icon} size="20" />
        <Text ml="4" fontWeight="medium">{name}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
