const req = new XMLHttpRequest; // inisialisasi
const baseURL = 'http:/lumoshive.academy.com/api'
req.open('GET', baseURL, '/users');
req.onreadystatechange = function(){
    if (req.status == 200){
        var data = JSON.parse(req.responseText)
        console.log(data.data.name)
    }
}
req.send();



function loadData(){
    fetch('url', {
        method : 'GET'
    }).then(response =>{
        if(!response.ok){
            // munculkan error
        }
    }).then(data => {
        // tampilkan data
    }).catch(error => {
        // tampilkan error
    })
}