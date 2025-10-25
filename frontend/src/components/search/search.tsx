import {
  Box,
  Container,
  Stack,

} from '@chakra-ui/react';


import SearchResults from './search-results';
import SearchBox from './search-box';
import { useEffect, useState } from 'react';

interface Restaurant {
  // Define your restaurant interface based on API response
  id: string;
  name: string;
  description: string;
  // Add other properties as needed
}

const Search = () => {

  const [searchParams, setSearchParams] = useState<{ query: string; type: string } | null>(null);
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    document.title = 'RestoFinder - Search';
  }, []);

  const handleSearch = async (query: string, type: string) => {
    setSearchParams({ query, type });
    setIsLoading(true);
    setError(null);

    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = import.meta.env.VITE_API_URL;
 
      const response = await fetch(`${API_URL}/api/v1/search?text=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}&apiKey=${API_KEY}`);

      if (!response.ok) {
        throw new Error('Search failed');
      }
      
      const result = await response.json();
      const places = result.data.places || [];
      setSearchResults(places);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Stack align="center" my={10} gap={30}>
        <Box as="section" textAlign="center" width="100%" display="flex" justifyContent="center">
            <SearchBox onSearch={handleSearch} />
        </Box>
        <Container>
          <Stack gap="3" direction="row" wrap="wrap">
            <SearchResults 
              results={searchResults}
              isLoading={isLoading}
              error={error}
              hasSearched={searchParams !== null}
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Search;
