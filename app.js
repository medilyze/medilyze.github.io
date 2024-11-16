function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) { elmnt.innerHTML = this.responseText; }
            if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
            elmnt.removeAttribute("html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
};

includeHTML();

const files = ['home.md'];

files.forEach(file => {
    const filename = file.replace('.md', '');
    fetch(file)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.text();
    })
    .then(mdContent => {
        const htmlContent = marked(mdContent);
        document.querySelector('#'+filename).innerHTML += htmlContent;
    })
    .catch(error => {
        console.error(error);
    });
});