
const GetData = (url, statusCode, token, callback) => {
  let object;
  // console.log('Getdata',token)
  fetch(url, {
    method: 'Get',
    headers: {
      'Access-Control-Request-Headers': 'Content-Type',
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  })
    .then(function (response) {
      if (response.status != statusCode) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        try {
          callback({
            msg: 'Network Error. ',
            error: true
          })
          return response.json()
        }
        catch (e) {
          return response
        }
      }
      else return response.json()
    })
    .then(function (data) {
      object = data;
      callback(object);
    }
    ).catch(e => {
      callback({
        msg: 'Network Error. ',
        error: true
      })
    })
}
export default GetData;