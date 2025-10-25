import { Badge, Card, For, HStack, IconButton } from "@chakra-ui/react";
import { FaDirections, FaMapMarkedAlt } from "react-icons/fa";
import { Tooltip } from "../ui/tooltip";


const SearchResults = ({ results, isLoading, error, hasSearched }) => {

 
  return (
    <For
      each={results}
    >
      {(result) => (
         <SearchItem key={result.id} title={result.displayName.text} description={result.formattedAddress} price={result.priceLevel} directionsUrl={result.googleMapsLinks.directionsUri} mapsUrl={result.googleMapsLinks.placeUri} />
      )}
    </For>
  );
};


const SearchItem = ({ title, description, price, directionsUrl, mapsUrl }) => {

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
     
        >
          <Card.Body gap="2">
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Description>
              {description}         
            </Card.Description>
            <HStack mt="4">
              <Badge>{price}</Badge>
            </HStack>                 
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
