

export const searchGoogle = async (textQuery: String) =>{

    const url = process.env.GOOGLE_PLACES_API_URL || "";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      'Content-Type': 'application/json',
      "X-Goog-Api-Key": process.env.GOOGLE_API_KEY || "",
      "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.priceLevel"
    },
    body: JSON.stringify({
        textQuery
    })
  };

 
    const response = await fetch(url, options);

    const data = response.json();


    return data;

}

