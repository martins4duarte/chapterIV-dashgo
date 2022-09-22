import { Avatar, Text, Box, Flex } from '@chakra-ui/react'
import React from 'react'

interface IProfileProps {
  showResponsiveContent?: boolean;
}

export default function Profile({ showResponsiveContent = true }: IProfileProps) {
  return (
    <Flex align="center">
      { showResponsiveContent && (
        <Box mr="4" textAlign="right">
        <Text>Caio Martins</Text>
        <Text color="gray.300" fontSize="small">teste@teste.com</Text>
      </Box>
      )}

      <Avatar size="md" name="Caio Martins" src="https://github.com/martins4duarte.png" />
    </Flex>
  )
}
