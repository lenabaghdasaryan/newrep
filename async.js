function fetchDataFromAPI(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));
    return Promise.all(promises);
  }
  const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
//   fetchMultipleAPIs(apiUrls)
//     .then(results => {
//       console.log('Combined Results:', results);
//     })
//     .catch(error => {
//       console.log('Error:', error.message);
//     });

async () => {
    try {
        const value  = await fetchMultipleAPIs(apiUrls);
        return ('Combined Results:', results)
    }
 catch(err){
    console.log('Error:', error.message)
}
}
 fetchMultipleAPIs(apiUrls)