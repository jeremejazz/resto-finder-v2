export const searchGoogle = async (textQuery: String) => {
  const url = process.env.GOOGLE_PLACES_API_URL || "";

  const fieldMask = [
    'places.id',
    "places.displayName",
    "places.formattedAddress",
    "places.shortFormattedAddress",
    "places.priceLevel",
    "places.googleMapsLinks",
    "places.businessStatus",
    "places.primaryType",
    "places.types"
    
  ];

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_API_KEY || "",
      "X-Goog-FieldMask": fieldMask.join(","),
    },
    body: JSON.stringify({
      textQuery,
      includedType: "restaurant",
      strictTypeFiltering: false
    }),
  };

  const response = await fetch(url, options);

  const data = response.json();

  return data;
};
