const GetData = (url, statusCode, req, callback) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(req),
  })
    .then(function (response) {
      callback({ msg: 'Network Error', error: true })
      return response.json();
    })
    .then(async function (data) {
      console.log('userdtaa', data)
      callback(data);
    }).catch(e => {
      callback({ msg: 'Network Error', error: true });
      console.log(e)
    })
}

export default GetData;