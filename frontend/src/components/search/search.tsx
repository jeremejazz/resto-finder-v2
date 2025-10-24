import {
  Box,
  Container,
  Stack,

} from '@chakra-ui/react';


import SearchResults from './search-results';
import SearchBox from './search-box';

const Search = () => {
  return (
    <>
      <Stack align="center" my={10} gap={30}>
        <Box as="section" textAlign="center" width="100%" display="flex" justifyContent="center">
            <SearchBox />
        </Box>
        <Container>
          <Stack gap="3" direction="row" wrap="wrap">
            <SearchResults />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Search;
