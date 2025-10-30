import {
  Badge,
  Box,
  Card,
  For,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaDirections, FaMapMarkedAlt } from "react-icons/fa";
import { Tooltip } from "../ui/tooltip";
import { priceLevelToLabel } from "@/types/price-level";
import { Alert } from "../ui/alert";

const SearchResults = ({
  results,
  isLoading,
  error,
  hasSearched,
}: {
  results: any[];
  isLoading: boolean;
  error: any;
  hasSearched: boolean;
}) => {
  return (
    <>
      {isLoading && (
        <Box textAlign="center" width="100%">
          Loading...
        </Box>
      )}
      {error && (
        <Alert title="Error" description={error} status="error" />
      )}
      {!isLoading && !error && hasSearched && results.length === 0 && (
        <Alert title="No Results" description="No results found." status="info" />
      )}
      {!isLoading && !error && results.length > 0 && (
        <For each={results}>
          {(result) => (
            <SearchItem
              key={result.id}
              title={result.displayName.text}
              description={result.formattedAddress}
              price={priceLevelToLabel(result.priceLevel)}
              directionsUrl={result.googleMapsLinks.directionsUri}
              mapsUrl={result.googleMapsLinks.placeUri}
            />
          )}
        </For>
      )}
    </>
  );
};

interface SearchItemProps {
  title: string;
  description: string;
  price: string | null;
  directionsUrl: string;
  mapsUrl: string;
}

const SearchItem = ({
  title,
  description,
  price,
  directionsUrl,
  mapsUrl,
}: SearchItemProps) => {
  const handleDirectionsLink = () => {
    window.open(directionsUrl, "_blank")?.focus();
  };

  const handleMapsLink = () => {
    window.open(mapsUrl, "_blank")?.focus();
  };

  return (
    <>
      <Card.Root width={{ base: "100%", md: "320px" }} variant={"outline"}>
        <Card.Body gap="2">
          <Card.Title mb="2">{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <HStack mt="4">{price ? <Badge>Price: {price}</Badge> : null}</HStack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Tooltip content="Get Directions">
            <IconButton colorPalette="bg" onClick={handleDirectionsLink}>
              <FaDirections />
            </IconButton>
          </Tooltip>
          <Tooltip content="View in Map">
            <IconButton
              aria-label="View in Map"
              colorPalette="blue"
              onClick={handleMapsLink}
            >
              <FaMapMarkedAlt />
            </IconButton>
          </Tooltip>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default SearchResults;
