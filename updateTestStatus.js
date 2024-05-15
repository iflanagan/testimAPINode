const axios = require('axios');

// Function to update the test status
async function updateTestStatus(testId) {
  const API_BASE_URL = 'https://api.testim.io';
  const API_KEY = 'PAK-+tM1kv/ArTiuNm-KSUUmDygDXYyR/js2bh1mzVOmDCgHKTekTg2kiOd8Qlesi3odYh5YHJsHeIXWKQuPz'; // Replace with your Testim API key

  const url = `${API_BASE_URL}/tests/${testId}/status`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };
  
  const payload = {
    status: 'quarantine'
  };

  try {
    const response = await axios.patch(url, payload, { headers });
    console.log('Test status updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating test status:', error.response.data);
  }
}

// Test ID for the test you want to update
const testId = 'YOUR_TEST_ID'; // Replace with the ID of the test you want to update

// Call the function to update the test status
updateTestStatus("HRYWbPoBBjrBqyxC");

