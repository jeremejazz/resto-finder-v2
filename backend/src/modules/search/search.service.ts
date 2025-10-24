export const searchGoogle = async (textQuery: String) => {
  const url = process.env.GOOGLE_PLACES_API_URL || "";

  const fieldMask = [
    "places.displayName",
    "places.formattedAddress",
    "places.priceLevel",
    "places.googleMapsLinks",
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
    }),
  };

  const response = await fetch(url, options);

  const data = response.json();

  return data;
};
