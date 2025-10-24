import { Badge, Card, For, HStack, IconButton } from "@chakra-ui/react";
import { FaDirections, FaMapMarkedAlt } from "react-icons/fa";
import { Tooltip } from "../ui/tooltip";

const SearchResults = () => {
  return (
    <For
      each={[
        "subtle",
        "outline",
        "elevated",
        "filled",
        "ghost",
        "1",
        "2",
        "3",
        "4",
        "5",
      ]}
    >
      {(variant) => (
         <SearchItem key={variant} title={'test'} description={'test'} price={'test'} directionsUrl={'https://example.com'} mapsUrl={'https://example.com'} />
      )}
    </For>
  );
};


const SearchItem = ({ title, description, price, directionsUrl, mapsUrl, key }) => {

  const handleDirectionsLink = () => {
    window.open(directionsUrl, "_blank")?.focus();
  }

    const handleMapsLink = () => {
         window.open(mapsUrl, "_blank")?.focus();
  }


  return (<>
          <Card.Root
          width={{ base: "100%", md: "320px" }}
          variant={"outline"}
          key={key}
        >
          <Card.Body gap="2">
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Description>
              {description}
            <HStack mt="4">
              <Badge>{price}</Badge>
            </HStack>              
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Tooltip content="Get Directions">
              <IconButton colorPalette="bg" onClick={handleDirectionsLink}>
                <FaDirections />
              </IconButton>
            </Tooltip>
            <Tooltip content="View in Map">
              <IconButton aria-label="View in Map" colorPalette="blue" onClick={handleMapsLink}>
                <FaMapMarkedAlt />
              </IconButton>
            </Tooltip>
          </Card.Footer>
        </Card.Root>
  </>);
};

export default SearchResults;
