import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import React from 'react'
import NavLink from './NavLink'
import NavSection from './NavSection'
import { Stack } from '@chakra-ui/react';

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink href="/dashboard"icon={RiDashboardLine} name="Dashboard"/>
          <NavLink href="/users" icon={RiContactsLine} name="Usuários"/>
        </NavSection>

        <NavSection title="Automação">
          <NavLink href="/forms" icon={RiInputMethodLine} name="Formulários"/>
          <NavLink href="/automation" icon={RiGitMergeLine} name="Automação"/>
        </NavSection>
      </Stack>
  )
}
