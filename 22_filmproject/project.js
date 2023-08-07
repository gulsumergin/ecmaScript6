
// öncelikle kullanmak istediğimiz elementleri seçmek zorundayız 
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-Body")[1];
// tüm filmleri temizleme butonu için yazalım şimdi de (ismini unutursan htlm den bak)
const clear = document.getElementById("clear-films");  // bunu seçtikten sonra buna bir event atıyoruz 





// Let's initialize UI object 
const ui = new UI();


// storage objesi üret 
const storage = new Storage();




// Load all events
eventListeners();

function eventListeners(){
  form?.addEventListener("submit", addFilm);
  // sayfa yüklendiği zaman (storage'a eklenen filmleri load etmek için bunu yapıyoruz) bir event verelim o yüzden document kullanıyoruz -- dom content load kullanacağız
  document.addEventListener("DOMContentLoaded", function(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films); // filmlerimizi array şeklinde göndereceğiz 

  });
  cardBody.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms); // event atadıktan sonra aşağıya fonksiyonunu yazıyoruz





}




function addFilm(e){

  const title =  titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if(title === "" || director === "" || url === ""){
    ui.displayMessages("fill all blanks", "danger");

  }
  else{
    // with this way we have created a new film
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm); // add new film to the UI 
    // mesajı yayınlamadan önce filmi storage'a eklemem lazım
    storage.addFilmToStorage(newFilm); // add films to the storage 
    ui.displayMessages("film added", "success");

  }


 ui.clearInputs(titleElement, directorElement, urlElement);
 e.preventDefault(); // formun submit edilmesini önlemek için 
}






function deleteFilm(e){
  // console.log(e.target); // event nerede oluştuysa onu e.target kullanarak almak istiyorum.

  if(e.target.id === "delete-film"){
    ui.deleteFilmFromUI(e.target);
    // filmin ismine göre storage'dan silmek istersek td lerde parentlara gidip onu bulmamız lazım 
  
  storage.deleteFilmFromStorage (e.target.parentElement.previousElementSibling.previousElementSibling.textContent); // filmin title'ını seçip ona göre sildik 

  
ui.displayMessages("delete is successfull", "success");


}

}



function clearAllFilms(){

  if(confirm("are you sure ?")){
      ui.clearAllFilmsFromUI();
      storage.clearAllFilmsFromStorage();
  }

  // fonksiyonu yazdıktan sonra sırayla ui ve storage a bu functionları yazıyoruz çalışması için 
  // buradan ui.js ye git ve ne yazdığına bak  (UI.prototype.clearAll....) 
}


