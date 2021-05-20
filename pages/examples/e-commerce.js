books = JSON.parse(localStorage.getItem("Books") )||[];

  var query = window.location.search;
  var vars=query.split("=");
  var ID =vars[1];
 var book=books[ID];
 console.log(book);
 function  affiche(books){
//let liste ='';
var liste=document.getElementById('example2');

  liste .innerHTML+=`
  <section>
  <div>${book.namebook}</div>
  <div>${book.date}</div>
  <div>${book.prix}</div>
  <div>${book.langue}</div>

  </section>

  `
 }
affiche()

