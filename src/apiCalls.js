

function fetchData(section) {
    const url =    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=XH53RHfndcvCQBkL3rkpWNKiYpllJ5yb`
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    fetch(url, options).then(
      response => {
        if (response.ok) {
          return response.text();
        }
        return response.text().then(err => {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            errorMessage: err,
          });
        });
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
export default  fetchData