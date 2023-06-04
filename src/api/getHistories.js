const axios = require('axios');

async function fetchHistoriesFromAPI() {
  try {
    const response = await axios.get('https://example.com/histories'); // Replace with your API endpoint

    // Assuming the API response is an array of objects with the properties mentioned
    const data = response.data;

    // Iterate over the array and access the properties of each object
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function fetchTotalTrash() {
  try {
    const response = await axios.get('https://example.com/histories/total'); // Replace with your API endpoint

    // Assuming the API response is an array of objects with the properties mentioned
    const data = response.data;

    // Iterate over the array and access the properties of each object
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = { fetchHistoriesFromAPI, fetchTotalTrash };
