import { Box, Stack, HStack } from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";

export default function Pagination() {
  return (
    <Stack direction={["column", "row"]} justify="space-between" mt="8" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationButton isCurrentPage={true} number={1}/>
        <PaginationButton number={2}/>
        <PaginationButton number={3}/>
        <PaginationButton number={4}/>
      </HStack>
    </Stack>
  )
}
