import {
  Button,
  createListCollection,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Portal,
  Select,
  Stack,
} from "@chakra-ui/react";
import { VscSparkleFilled } from "react-icons/vsc";
import _ from "lodash";
import { useRef, useState } from "react";
import SelectTrigger from "../ui/select-trigger";

export interface SearchBoxProps {
  onSearch?: (query: string, type: string) => void;
}

const searchTypes = createListCollection({
  items: [
    { label: "Restaurant", value: "restaurant" },
    { label: "Bakery", value: "bakery" },
    { label: "Coffee Shop", value: "coffee_shop" },
    { label: "Ice Cream Shop", value: "ice_cream_shop" },
    { label: "Juice Shop", value: "juice_shop" },
    { label: "Tea House", value: "tea_house" },
  ],
});

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchFilter, setSearchFilter] = useState('restaurant');
 

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const query = searchRef.current?.value || "";
 

    if (!query || query.length < 2) {
      return;
    }

    if (onSearch) {
      onSearch(query, searchFilter);
    }
  };

  const randomPlaceholder = _.sample([
    "Cheap ramen near Cebu City",
    "Best sushi in Tokyo",
    "Pizza places open late in New York",
    "Affordable mediterranean restaurant near Ayala Makati",
    "Best Mexican restaurants Singapore",
    "Best takeout food near Washington"
  ]);

  return (
    <Stack gap={6} width={{ base: "90%", md: "600px" }}>
      <Heading as="h1" textAlign="center" size="2xl">
        Find the perfect spot
      </Heading>
      <form onSubmit={handleSearch}>
        <Flex gap={2} alignItems="center">
          <InputGroup 
            startElement={<VscSparkleFilled color="silver" />}
            flex="1"
          >
            <Input
              type="text"
              placeholder={randomPlaceholder}
              roundedStart="full"
              boxShadow="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "outline",
              }}
              ref={searchRef}
            />
          </InputGroup>

          <Select.Root
            positioning={{ sameWidth: false }}
            collection={searchTypes}
            defaultValue={["restaurant"]}
            width="auto"
            onSelect={({value}) => { setSearchFilter(value); }}
          >
            <Select.HiddenSelect />
            <Select.Control width="auto">
              <SelectTrigger />
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content minW="32">
                  {searchTypes.items.map((searchType) => (
                    <Select.Item item={searchType} key={searchType.value}>
                      <HStack>{searchType.label}</HStack>
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

          <Button 
            type="submit" 
            colorScheme="blue" 
            variant="surface"
            flexShrink={0}
          >
            Search
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default SearchBox;
