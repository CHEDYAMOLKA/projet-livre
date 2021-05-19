users = JSON.parse(localStorage.getItem("Books") )||[];

  var query = window.location.search;
  var vars=query.split("=");
  var ID =vars[1];
 var books=users[ID];
 console.log(books);



 function  affiche(){
  liste=document.getElementById('example2') ;
//let liste ='';
books.forEach(element => {
  liste .innerHTML+=`
  <section>
  <div>${element.namebook}</div>
  <div>${element.date}</div>
  <div>${element.prix}</div>
  <div>${element.langue}</div>

  </section>

  `
});

 }


