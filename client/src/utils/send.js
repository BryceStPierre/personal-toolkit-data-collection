const send = (endpoint, body, callback) => {
  fetch(endpoint, { 
    method: 'post',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(res => {
    callback(res);
  });
}

export default send;
