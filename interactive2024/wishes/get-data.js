var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbwwXIGpUfOa2_TFxfJSbbHUkc6tKLd1f3hmdhTc_cw_v4a6Nm_O5UYO40RyvoC89HNRfA/exec';

function generateUniqueId() {
  return 'content-' + Math.random().toString(36).substr(2, 9);
}

function createContentDiv(content, id) {
  const div = document.createElement('div');
  div.id = id;
  div.style.display = 'none';
  div.innerHTML = content;
  return div;
}

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
  const container = document.getElementById('sheetData');

  response.forEach(function(item) {
    // Create a new <li> element
    
    const id = generateUniqueId();
    const button = document.createElement('button');
    button.className = 'popup-button';
    // button.textContent = "Wish";
    // button.onclick = () => openPopup(id);
    button.setAttribute('data-target', id);

    console.log(id);
    console.log(item.message);

    const contentDiv = createContentDiv(item.message, id);
    let img = document.createElement('img');
    img.src="star.gif"
    img.onclick = () => openPopup(id);
    button.appendChild(img);

    var height = screen.height - 100;
    var width = screen.width - 100;
    button.style.position = "absolute";

    var left_width = (Math.floor(Math.random() * width) );
    var top_width = (Math.floor(Math.random() * height) );

    button.style.left = left_width + 'px';
    button.style.top = top_width + 'px';
    
    container.appendChild(button);
    container.appendChild(contentDiv);
  });

}

function openPopup(targetId) {
  const contentDiv = document.getElementById(targetId);
  console.log(targetId);

  if (contentDiv) {
      const width = 400;
      const height = 300;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const left = Math.random() * (screenWidth - width - 100) + 50;
      const top = Math.random() * (screenHeight - height - 100) + 50;
      const windowFeatures = `width=${width},height=${height},left=${Math.round(left)},top=${Math.round(top)},scrollbars=yes,resizable=yes`;
      
      const popupWindow = window.open('', '', windowFeatures);

      popupWindow.document.open();
      popupWindow.document.write('<html><head><title>wish</title><link rel="stylesheet" href="wish.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"</head><body><div class="container"><div>');
      popupWindow.document.write(contentDiv.innerHTML);
      popupWindow.document.write('</div></div></body></html>');
      popupWindow.document.close();
  } else {
      console.error('Content div not found:', targetId);
  }
}

getData(AppScriptUrl);


