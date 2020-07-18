var baseCurrency = document.querySelector("#baseCurrency")
var quoteCurrency = document.querySelector("#quoteCurrency")
var text = document.querySelector("#text")
var amount = document.querySelector("#amt")
var base = document.querySelectorAll(".base")
var quote = document.querySelectorAll(".quote")
var amtValue = document.querySelector("#amtValue")
var convertedValue = document.querySelector("#convertedValue")
var qValue = document.querySelector("#quoteValue")
var bValue = document.querySelector("#baseValue")
var result = document.querySelector("#result")
var convert = document.querySelector("#convert")
var time = document.querySelector("#time")
var i
var weekBtn = document.querySelector("#weekBtn")
var monthBtn = document.querySelector("#monthBtn")
var buttons = document.querySelector(".buttons")









async function fetchingData(){
    const res = await fetch("https://fcsapi.com/api-v2/forex/converter?symbol="  + baseCurrency.value + "/" + quoteCurrency.value + "&amount=" + amount.value + "&access_key=13I3WLdfCwDa0cpqyJ22NnmwgiZliKrbKUdRYUtbhJc56bWnqf")
    const data = await res.json()
     if(data.code === 200){
        result.classList.remove("hide")
        amtValue.textContent = amount.value
        convertedValue.textContent = data.response.total
        time.textContent = data.info.server_time
        qValue.textContent = data.response[Object.keys(data.response)[0]]
        bValue.textContent = data.response[Object.keys(data.response)[1]]
        for( i=0; i<3; i++){
            base[i].textContent = baseCurrency.value
            quote[i].textContent = quoteCurrency.value
        } 
     }else{
         alert("Try again after a minute! Sorry for inconvenience")
     }
            
}


convert.addEventListener("click", function(){
    fetchingData()
})

