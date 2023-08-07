class Storage{
  
// we need to write this --> addFilmToStorage to the prototype
static addFilmToStorage (newFilm){

  let films = this.getFilmsFromStorage();
  films.push(newFilm);

  /*
  [ normalde arraylara string veya number koymaya alışmıştık ama bu sefer ojbe atıyoruz 
    {title: "ekfmek", director: "fsdgsdg", url: "fsfsg"};
  ]
  */

localStorage.setItem("films", JSON.stringify(films));


};

static getFilmsFromStorage (){
  let films;

  if (localStorage.getItem("films") === null){
    films = [];
  }
  else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;

}


// ps : local storage normalde sadece string değerler kabul ediyor o yüzden json parse kullanıyoruz bize array dönmesi için 




// filmi local storage'dan kaldırmak için 
static deleteFilmFromStorage (filmTitle){
  let films = this.getFilmsFromStorage();

 // arrayden silmek için splice kullanıyoruz 

  films.forEach(function(film,index){
    if(film.title === filmTitle) {
      films.splice(index,1);
    }
  });


  // silmek istediğimizi sildik şimdi tekrar local storage'a yazalım kaldırdığımızı 

  localStorage.setItem("films", JSON.stringify(films));

  // daha sonra silindiğini göstermek için de bilgilendirme mesajı yayımlayacağız 
}


static clearAllFilmsFromStorage (){
  localStorage.removeItem("films");
}


// hepsini static yapmak zorunda değildik ama kullanım kolaylığı sağlıyor 

}


