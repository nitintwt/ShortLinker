const input = document.getElementById("input");
const doneBtn = document.getElementById("done");
const output = document.getElementById("output");

function shortUrl (link){
  const longUrl = input.value;
  fetch ("http://mgnet.me/api/create")
     .then(response => {
       return response.json();
     })
     .then(data =>{
        output.innerHTML=data.shorturl;
      })
     .catch (error => {
       console.error("error fetching data :" ,error);
     });
    }
doneBtn.addEventListener("click" , function(){
  shortUrl(input.value);
})