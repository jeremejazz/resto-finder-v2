import { Flex, Heading, Input, InputGroup, NativeSelect, Stack } from '@chakra-ui/react';
import { VscSparkleFilled } from 'react-icons/vsc';
import _ from 'lodash';
import { useRef } from 'react';

const SearchBox = () => {

  const searchRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  };

  const randomPlaceholder = _.sample([
    "Cheap ramen near Cebu City that's open now",
    'Best sushi in Tokyo',
    'Pizza places open late in New York',
    'Affordable mediterranean restaurant near Ayala Makati'
  ]);

  return (
    <Stack gap={6} width={{ base: '90%', md: '500px' }}>
      <Heading as="h1" textAlign="center" size="2xl">
        Find the perfect spot
      </Heading>
      <form onSubmit={handleSearch}>
        <Flex>
          
          <InputGroup startElement={<VscSparkleFilled />}>
            <Input
              type="text"
              placeholder={randomPlaceholder}
              roundedStart='full'
              boxShadow="md"
              _focus={{
                borderColor: 'blue.400',
                boxShadow: 'outline',
              }}
              ref={searchRef}
            />
          </InputGroup>

          <NativeSelect.Root size="md" width="200px">
            <NativeSelect.Field ref={typeRef} placeholder="Select option">
              <option value="restaurant" selected>Restaurant</option>
              <option value="bakery">Bakery</option>
              <option value="coffee_shop">Coffee Shop</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Flex>
      </form>
    </Stack>
  );
};



export default SearchBox;
