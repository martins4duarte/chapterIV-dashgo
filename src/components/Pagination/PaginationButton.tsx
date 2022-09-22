import { Button } from "@chakra-ui/react";

interface IPaginationButtonProps {
  isCurrentPage?: boolean;
  number: number;
}

export default function PaginationButton({ isCurrentPage = false, number }: IPaginationButtonProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      bg="gray.700"
      size="sm"
      fontSize="xs"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}
