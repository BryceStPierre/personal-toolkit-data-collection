const receive = (endpoint, callback) => {
  fetch(endpoint, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(res => {
    callback(res);
  });
}

export default receive;
