
const PostData = (url, statusCode, req, token, callback) => {
  // console.log('post_data=>', url, statusCode, req, token, callback)
  let object;
  fetch(url, {
    method: 'POST',
    headers: {
      'Access-Control-Request-Headers': 'Content-Type',
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(req),
  })
    .then(function (response) {
      if (response.status != statusCode) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        try {
          return response.json()
        }
        catch (e) {
          return response
        }
      }
      else
        return response.json()
    })
    .then(function (data) {
      console.log('data-->', data)
      object = data;
      callback(object);
    }
    )
}
export default PostData;