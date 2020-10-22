(() => {

  //console.log(`It's fine`);

  //
  let htmlBlockquote = document.createElement("blockquote");
  htmlBlockquote.setAttribute("id","quote");  
  document.body.appendChild(htmlBlockquote);

  //Create the XHR Object
  let xhr = new XMLHttpRequest;

  // object variable for the jason response
  let objJason = {}; 


  function runQuote(){
    htmlBlockquote.innerHTML = "";
    
  // Ajax request
  // ____________

  //Call the open function, GET-type of request, url, true-asynchronous
  xhr.open('GET', 'https://thatsthespir.it/api', true)

  //call the onload 
  xhr.onload = function(){
          //check if the status is 200(means everything is okay)
          if (this.status === 200){
                  //return server response as an object with JSON.parse
                  objJason = JSON.parse(this.responseText);
                  //console.log(JSON.parse(this.responseText));
                  displayData();
          } else {
            alert(`No data can be retrieved from the server!`);
          }
  }
  //call send
  xhr.send();
  //Common Types of HTTP Statuses
  // 200: OK
  // 404: ERROR
  // 403: FORBIDDEN
  }   

  function displayData(){
    
    for (const [key, value] of Object.entries(objJason)) {
      //console.log(`${key}: ${value}`);
      let htmlP = document.createElement("P");
      htmlP.innerText = `${key}: ${value}`;
      htmlBlockquote.appendChild(htmlP);
    }

  }
  
  runQuote();
  run.addEventListener('click', runQuote)
  
  
  

})();





