import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfPages: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

//se eu passar generatePagesArray(2, 5)
//5-2=3
//no map: 2+0+1=3, 2+1+1=4, 2+2+1=5

function generatePagesArray(from: number, to: number) {
  return[...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({ 
  totalCountOfPages, 
  currentPage = 1, 
  registersPerPage = 10, 
  onPageChange
}: PaginationProps) {

  const lastPage = Math.floor(totalCountOfPages / registersPerPage);
  //quantas paginas antes e depois vou mostrar
  const siblingsCount = 1; //   1 ...4 5 6 ...22
  //quais paginas vou carregar antes da pagina atual
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + siblingsCount) && <Text color="gray.300" w="8" textAlign="center" >...</Text> }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && <Text color="gray.300" w="8" textAlign="center" >...</Text> }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  );
}