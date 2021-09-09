fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
  .then(response => response.json())
  .then(data => {
    console.log(data)
})
