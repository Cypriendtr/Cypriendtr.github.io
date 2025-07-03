function interactive_title(){
    let docTitle = document.title;
    window.addEventListener ("blur", () =>{
    document. title = "Come back @";})

    window.addEventListener ("focus", () =>{
    document. title = docTitle;})
}

const urlParams = new URLSearchParams(window.location.search);
const file = urlParams.get('file');

if (!file) {
  document.getElementById('content').innerHTML = "<p>Aucun fichier de projet spécifié.</p>";
} else {
  fetch('projets/' + file)
    .then(res => {
      if (!res.ok) throw new Error("Fichier introuvable.");
      return res.text();
    })
    .then(text => {
      document.getElementById('content').innerHTML = marked.parse(text);
    })
    .catch(err => {
      document.getElementById('content').innerHTML = "<p>Erreur : " + err.message + "</p>";
    });
}
