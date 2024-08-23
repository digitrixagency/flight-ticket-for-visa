async function fetchHotelSuggestions(userInput) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Amadeus API key
    // https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-hotels?hotelIds=ACPAR419
    const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels?hotelIds=${userInput}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data; // Process the data to extract hotel names
  }
  
  // Example usage
  const userInput = 'example hotel'; // Replace with actual user input
  fetchHotelSuggestions(userInput)
    .then(data => {
      const hotelNames = data.data.map(hotel => hotel.name); // Adjust based on API response structure
      console.log(hotelNames); // Display hotel names as suggestions
    })
    .catch(error => {
      console.error('Error fetching hotel suggestions:', error);
    });
  