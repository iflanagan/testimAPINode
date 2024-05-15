const axios = require('axios');
const config = require('./config'); 

function runSuite(suiteID) {
  // API endpoint URL
  const apiUrl = `${config.apiBaseUrl}suites/run/${suiteID}`;

  // Request payload
  const payload = {
    baseUrl: config.baseURL,
    branch: config.branch,
    grid: config.grid,
    parallel: 1,
    resultLabels: [
      config.myResultLablel[0]
    ],
    retries: 0,
    timeout: 600,
    turboMode: config.turboMode[0]
  };

  // Request headers
  const headers = {
    'Authorization': `Bearer ${config.apiKey}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  // Make the API request
  return axios.post(apiUrl, payload, { headers });
}

// Example usage:
const suiteID = '13uQiXVyK7AZIS5V';
runSuite(suiteID)
  .then(response => {
    //console.log('Response:', response.data);
    const executionId = response.data.executionId;
    console.log('Execution ID:', executionId);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
