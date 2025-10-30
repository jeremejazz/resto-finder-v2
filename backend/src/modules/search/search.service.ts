export const searchGoogle = async (textQuery: String, type: String) => {
  const url = process.env.GOOGLE_PLACES_API_URL || "";

  const fieldMask = [
    'places.id',
    "places.businessStatus",
    "places.displayName",
    "places.formattedAddress",
    "places.googleMapsLinks",
    "places.priceLevel",
    "places.primaryTypeDisplayName",
    "places.primaryType",
    "places.shortFormattedAddress",
    "places.types",    
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
      includedType: type,
      strictTypeFiltering: false
    }),
  };

  const response = await fetch(url, options);

  const data = response.json();

  return data;
};
