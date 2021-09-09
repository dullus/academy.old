fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
.then(response => response.json())
.then(data => {
    loadData(data);
})
 
function loadData(data) {
    
    const heading = document.getElementById('name');
    heading.innerHTML = data.name + " " + data.lastName;
 
}