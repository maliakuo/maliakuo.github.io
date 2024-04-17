var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbwwXIGpUfOa2_TFxfJSbbHUkc6tKLd1f3hmdhTc_cw_v4a6Nm_O5UYO40RyvoC89HNRfA/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
         handleData(response);
         console.log(response);
      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
function handleData(response) {
  var sheetDataElement = document.getElementById("sheetData");

  response.forEach(function(item) {
    // Create a new <li> element
    var listItem = document.createElement("div");

    // Iterate over the keys of the object
    Object.keys(item).forEach(function(key) {
      // Create a new <div> element for each key-value pair
      var divKeyValue = document.createElement("div");
      // Set class name as the key
      divKeyValue.className = key;
      // Set innerHTML as the value
      divKeyValue.innerHTML = item[key];

      // divKeyValue.style.display="none";
      // Append the <div> element for the key-value pair to the <li> item
      listItem.appendChild(divKeyValue);
    });

    var imageDiv = document.createElement("div");
    let img = document.createElement('img');
    img.src="star.gif"
    imageDiv.className = "star";
    listItem.appendChild(img);

    var height = screen.height - 100;
    var width = screen.width - 100;
    listItem.style.position = "absolute";

    var left_width = (Math.floor(Math.random() * width) );
    var top_width = (Math.floor(Math.random() * height) );

    listItem.style.left = left_width + 'px';
    listItem.style.top = top_width + 'px';

    listItem.className = "wish";



    // Append the <li> element to the "sheetData" element
    sheetDataElement.appendChild(listItem);
  });
}


// Example usage:
getData(AppScriptUrl);


