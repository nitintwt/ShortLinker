const input = document.getElementById("input");
const doneBtn = document.getElementById("done");
const output = document.getElementById("output");

function shortUrl (link){
  const longUrl = input.value;
  fetch (`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`)
     .then(response => {
       return response.json();
     })
     .then(data =>{
        output.innerHTML=data;
      })
     .catch (error => {
       console.error("error fetching data :" ,error);
     });
    }
doneBtn.addEventListener("click" , function(){
  shortUrl(input.value);
})