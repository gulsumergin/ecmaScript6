

// es6 ya göre yazmak istediğimiz için başına static koyup =function yazan kısmı sildik ve onu bir classın içine yazdık bu şekilde güncellemiş olduk 


class UI {
  static addFilmToUI(newFilm){
 
    /*
     <tbody id = "films">
     <!-- <tr>
     <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
         <td></td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
         </tr> -->
         <!-- <tr>
    
         tbody yi seçmeye çalışıyoruz şimdi 
    
    */
        const filmList = document.getElementById("films");
    
        filmList.innerHTML += `
           
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;
    }
    
    static clearInputs (element1,element2,element3){
      element1.value = "";
      element2.value = "";
      element3.value = "";
    };
    
    static displayMessages(message,type){
    
      const cardBody = document.querySelector(".card-body");
    
        // const cardBody = document.querySelectorAll(".card-body")[0];
    
        // create alert div (we are going to create an element)
        const div = document.createElement("div"); 
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        cardBody.appendChild(div);
    
        setTimeout(function(){
          div.remove();
        },1000); // alert mesajı 1 sn kadar çalışacak 
    }
    
    /* PS: 
    filmList?.innerHTML += `
       
       eğer burada + yerine sadece = kullanırsak önceden eklediklerimiz silinir ve aynı zamanda template literal kullanıyoruz 
       
       ` 
    */
    
    static loadAllFilms (films){
    
    // eğer load yapıp ui da göstermezsem kullanıcı load olduğunu göremez ama arka planda çalışır 
    
    
      const filmList = document.getElementById("films");
    
      // const ile aldıktan sonra array üzerinde for each ile üzerinde geziniyorum ve her filmimi alıyorum
    
    films.forEach(function(film){
    
      filmList.innerHTML += `
           
      <tr>
          <td><img src="${Film.url}" class="img-fluid img-thumbnail"></td>
          <td>${Film.title}</td>
          <td>${Film.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
    `;
    
    });
    
    }
    
    
   static deleteFilmFromUI (element){
      element.parentElement.parentElement.remove();
    
    
      // element.parentElement. td yi alıyoruz burada html de 
      // td nin parent'ı tr
    }
    
   static clearAllFilmsFromUI (){
    
      const filmList = document.getElementById("films");
    
      // filmList.innerHTML = "";   bunu da kullanabilirdik ama yavaş çalışıyor onun yerine şunu kullanıyoruz : 
    
      while(filmList?.firstElementChild !== null){  // yani çocuğumuz olduğu sürece ... sileceğiz ve siline siline zaten hiç çocuk kalmayacak 
    
        filmList.firstElementChild.remove();
    
      }
    
    }
    
    
}







