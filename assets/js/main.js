let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'assets/js/data.json', true)
//call the onload 
xhr.onload = function() 
    {
        //check if the status is 200(means everything is okay)
    if (this.status === 200)  {
        //return server response as an object with JSON.parse
        console.log(JSON.parse(this.responseText));
         let datajson = JSON.parse(this.responseText);
        //AFFICHER LE STOCK
         for(i =0; i<datajson.length ;i++){
                divOccasion = document.createElement("div");
                section2 = document.getElementById("section");
                section2.appendChild(divOccasion);
                divOccasion.setAttribute("class", "row divOcassion container col-md-3");
                        
            
                titreH2 = document.createElement("h2");
                divOccasion.appendChild(titreH2);
                titreH2.setAttribute("id", "titre");
            
                carburant = document.createElement("p");
                divOccasion.appendChild(carburant);
                carburant.setAttribute("id", "carburant");
            
                prix = document.createElement("p");
                divOccasion.appendChild(prix);
                prix.setAttribute("id", "prix");
            
                texte = document.createElement("p");
                divOccasion.appendChild(texte);
                texte.setAttribute("id", "texte");
            
                divOccasion2 = document.createElement("div");
                section2.appendChild(divOccasion2);
                divOccasion2.setAttribute("class", "col-md-3 divOcassion2 row container");
            
            
                photo = document.createElement("img");
                divOccasion2.appendChild(photo);
                photo.setAttribute("id", "photo");
                photo.setAttribute("src", datajson[i].photo);
                photo.setAttribute("class", "col-md-11 photo");
            
                photo2 = document.createElement("img");
                divOccasion2.appendChild(photo2);
                photo2.setAttribute("id", "photo2");
                photo2.setAttribute("src", datajson[i].photo2);
                photo2.setAttribute("class", "col-md-5");
            
                photo3 = document.createElement("img");
                divOccasion2.appendChild(photo3);
                photo3.setAttribute("id", "photo3");
                photo3.setAttribute("src", datajson[i].photo3);
                photo3.setAttribute("class", "col-md-5");
            
            
                titreH2.innerHTML = datajson[i].titre;
                carburant.innerHTML = datajson[i].carburant;
                prix.innerHTML = datajson[i].prix + " €";
                texte.innerHTML = datajson[i].texte;
                photo.innerHTML = datajson[i].photo;
                photo2.innerHTML = datajson[i].photo2;
                photo3.innerHTML=datajson[i].photo
            }

                //STOCK au click
                document.getElementById("stock").onclick = function() {funcStock()};
                 function funcStock() {
                    section2.innerHTML = " ";
                    for(i =0; i<datajson.length ;i++){
                        

                            divOccasion = document.createElement("div");
                            section2 = document.getElementById("section");
                            section2.appendChild(divOccasion);
                            divOccasion.setAttribute("class", "row divOcassion container col-md-3");
                                    
                
                            titreH2 = document.createElement("h2");
                            divOccasion.appendChild(titreH2);
                            titreH2.setAttribute("id", "titre");
                
                            carburant = document.createElement("p");
                            divOccasion.appendChild(carburant);
                            carburant.setAttribute("id", "carburant");
                
                            prix = document.createElement("p");
                            divOccasion.appendChild(prix);
                            prix.setAttribute("id", "prix");
                
                            texte = document.createElement("p");
                            divOccasion.appendChild(texte);
                            texte.setAttribute("id", "texte");
                
                            divOccasion2 = document.createElement("div");
                            section2.appendChild(divOccasion2);
                            divOccasion2.setAttribute("class", "col-md-3 divOcassion2 row container");
                
                
                            photo = document.createElement("img");
                            divOccasion2.appendChild(photo);
                            photo.setAttribute("id", "photo");
                            photo.setAttribute("src", datajson[i].photo);
                            photo.setAttribute("class", "col-md-11 photo");
                
                            photo2 = document.createElement("img");
                            divOccasion2.appendChild(photo2);
                            photo2.setAttribute("id", "photo2");
                            photo2.setAttribute("src", datajson[i].photo2);
                            photo2.setAttribute("class", "col-md-5");
                
                            photo3 = document.createElement("img");
                            divOccasion2.appendChild(photo3);
                            photo3.setAttribute("id", "photo3");
                            photo3.setAttribute("src", datajson[i].photo3);
                            photo3.setAttribute("class", "col-md-5");
                
                
                            titreH2.innerHTML = datajson[i].titre;
                            carburant.innerHTML = datajson[i].carburant;
                            prix.innerHTML = datajson[i].prix + " €";
                            texte.innerHTML = datajson[i].texte;
                            photo.innerHTML = datajson[i].photo;
                            photo2.innerHTML = datajson[i].photo2;
                            photo3.innerHTML=datajson[i].photo
                
                        }
                    
                } 
                //ESSENCE au click
                 document.getElementById("essence").onclick = function() {funcEssence()};
                 function funcEssence() {
                    section2.innerHTML = " ";
                    for(i =0; i<datajson.length ;i++){
                        if ( datajson[i].carburant == "essence"){

                            divOccasion = document.createElement("div");
                            section2 = document.getElementById("section");
                            section2.appendChild(divOccasion);
                            divOccasion.setAttribute("class", "row divOcassion container col-md-3");
                                    
                
                            titreH2 = document.createElement("h2");
                            divOccasion.appendChild(titreH2);
                            titreH2.setAttribute("id", "titre");
                
                            carburant = document.createElement("p");
                            divOccasion.appendChild(carburant);
                            carburant.setAttribute("id", "carburant");
                
                            prix = document.createElement("p");
                            divOccasion.appendChild(prix);
                            prix.setAttribute("id", "prix");
                
                            texte = document.createElement("p");
                            divOccasion.appendChild(texte);
                            texte.setAttribute("id", "texte");
                
                            divOccasion2 = document.createElement("div");
                            section2.appendChild(divOccasion2);
                            divOccasion2.setAttribute("class", "col-md-3 divOcassion2 row container");
                
                
                            photo = document.createElement("img");
                            divOccasion2.appendChild(photo);
                            photo.setAttribute("id", "photo");
                            photo.setAttribute("src", datajson[i].photo);
                            photo.setAttribute("class", "col-md-11 photo");
                
                            photo2 = document.createElement("img");
                            divOccasion2.appendChild(photo2);
                            photo2.setAttribute("id", "photo2");
                            photo2.setAttribute("src", datajson[i].photo2);
                            photo2.setAttribute("class", "col-md-5");
                
                            photo3 = document.createElement("img");
                            divOccasion2.appendChild(photo3);
                            photo3.setAttribute("id", "photo3");
                            photo3.setAttribute("src", datajson[i].photo3);
                            photo3.setAttribute("class", "col-md-5");
                
                
                            titreH2.innerHTML = datajson[i].titre;
                            carburant.innerHTML = datajson[i].carburant;
                            prix.innerHTML = datajson[i].prix + " €";
                            texte.innerHTML = datajson[i].texte;
                            photo.innerHTML = datajson[i].photo;
                            photo2.innerHTML = datajson[i].photo2;
                            photo3.innerHTML=datajson[i].photo
                
                        }
                    }
                } 
                //DIESEL au click
                document.getElementById("diesel").onclick = function() {funcDiesel()};
                function funcDiesel() {
                    section2.innerHTML = " ";
                    for(i =0; i<datajson.length ;i++){
                        if ( datajson[i].carburant == "diesel"){
                            
                            divOccasion = document.createElement("div");
                            section2 = document.getElementById("section");
                            section2.appendChild(divOccasion);
                            divOccasion.setAttribute("class", "row divOcassion container col-md-3");
                                    
                
                            titreH2 = document.createElement("h2");
                            divOccasion.appendChild(titreH2);
                            titreH2.setAttribute("id", "titre");
                
                            carburant = document.createElement("p");
                            divOccasion.appendChild(carburant);
                            carburant.setAttribute("id", "carburant");
                
                            prix = document.createElement("p");
                            divOccasion.appendChild(prix);
                            prix.setAttribute("id", "prix");
                
                            texte = document.createElement("p");
                            divOccasion.appendChild(texte);
                            texte.setAttribute("id", "texte");
                
                            divOccasion2 = document.createElement("div");
                            section2.appendChild(divOccasion2);
                            divOccasion2.setAttribute("class", "col-md-3 divOcassion2 row container");
                
                
                            photo = document.createElement("img");
                            divOccasion2.appendChild(photo);
                            photo.setAttribute("id", "photo");
                            photo.setAttribute("src", datajson[i].photo);
                            photo.setAttribute("class", "col-md-11 photo");
                
                            photo2 = document.createElement("img");
                            divOccasion2.appendChild(photo2);
                            photo2.setAttribute("id", "photo2");
                            photo2.setAttribute("src", datajson[i].photo2);
                            photo2.setAttribute("class", "col-md-5");
                
                            photo3 = document.createElement("img");
                            divOccasion2.appendChild(photo3);
                            photo3.setAttribute("id", "photo3");
                            photo3.setAttribute("src", datajson[i].photo3);
                            photo3.setAttribute("class", "col-md-5");
                
                
                            titreH2.innerHTML = datajson[i].titre;
                            carburant.innerHTML = datajson[i].carburant;
                            prix.innerHTML = datajson[i].prix + " €";
                            texte.innerHTML = datajson[i].texte;
                            photo.innerHTML = datajson[i].photo;
                            photo2.innerHTML = datajson[i].photo2;
                            photo3.innerHTML=datajson[i].photo
                
                        }
                    }
                }
                //Tri par prix croissant au click
                document.getElementById("prix").onclick = function() {funcPrix()};
                function funcPrix() {
                   section2.innerHTML = " ";
                   datajson.sort((a, b) => parseFloat(a.prix) - parseFloat(b.prix));
                   for(i =0; i<datajson.length ;i++){
                    

                           divOccasion = document.createElement("div");
                           section2 = document.getElementById("section");
                           section2.appendChild(divOccasion);
                           divOccasion.setAttribute("class", "row divOcassion container col-md-3");
                                   
               
                           titreH2 = document.createElement("h2");
                           divOccasion.appendChild(titreH2);
                           titreH2.setAttribute("id", "titre");
               
                           carburant = document.createElement("p");
                           divOccasion.appendChild(carburant);
                           carburant.setAttribute("id", "carburant");
               
                           prix = document.createElement("p");
                           divOccasion.appendChild(prix);
                           prix.setAttribute("id", "prix");
               
                           texte = document.createElement("p");
                           divOccasion.appendChild(texte);
                           texte.setAttribute("id", "texte");
               
                           divOccasion2 = document.createElement("div");
                           section2.appendChild(divOccasion2);
                           divOccasion2.setAttribute("class", "col-md-3 divOcassion2 row container");
               
               
                           photo = document.createElement("img");
                           divOccasion2.appendChild(photo);
                           photo.setAttribute("id", "photo");
                           photo.setAttribute("src", datajson[i].photo);
                           photo.setAttribute("class", "col-md-11 photo");
               
                           photo2 = document.createElement("img");
                           divOccasion2.appendChild(photo2);
                           photo2.setAttribute("id", "photo2");
                           photo2.setAttribute("src", datajson[i].photo2);
                           photo2.setAttribute("class", "col-md-5");
               
                           photo3 = document.createElement("img");
                           divOccasion2.appendChild(photo3);
                           photo3.setAttribute("id", "photo3");
                           photo3.setAttribute("src", datajson[i].photo3);
                           photo3.setAttribute("class", "col-md-5");
               
               
                           titreH2.innerHTML = datajson[i].titre;
                           carburant.innerHTML = datajson[i].carburant;
                           prix.innerHTML = datajson[i].prix + " €";
                           texte.innerHTML = datajson[i].texte;
                           photo.innerHTML = datajson[i].photo;
                           photo2.innerHTML = datajson[i].photo2;
                           photo3.innerHTML=datajson[i].photo
                   }
               }
                //Tri par prix décroissant au click
                document.getElementById("prix2").onclick = function() {funcPrix2()};
                function funcPrix2() {
                   section2.innerHTML = " ";
                   datajson.sort((a, b) => parseFloat(b.prix) - parseFloat(a.prix));
                   for(i =0; i<datajson.length ;i++){
                       if ( datajson[i].prix > "3000"){

                           divOccasion = document.createElement("div");
                           section2 = document.getElementById("section");
                           section2.appendChild(divOccasion);
                           divOccasion.setAttribute("class", "row divOcassion container col-md-3");
                                   
               
                           titreH2 = document.createElement("h2");
                           divOccasion.appendChild(titreH2);
                           titreH2.setAttribute("id", "titre");
               
                           carburant = document.createElement("p");
                           divOccasion.appendChild(carburant);
                           carburant.setAttribute("id", "carburant");
               
                           prix = document.createElement("p");
                           divOccasion.appendChild(prix);
                           prix.setAttribute("id", "prix");
               
                           texte = document.createElement("p");
                           divOccasion.appendChild(texte);
                           texte.setAttribute("id", "texte");
               
                           divOccasion2 = document.createElement("div");
                           section2.appendChild(divOccasion2);
                           divOccasion2.setAttribute("class", "col-md-3 divOcassion2 row container");
               
               
                           photo = document.createElement("img");
                           divOccasion2.appendChild(photo);
                           photo.setAttribute("id", "photo");
                           photo.setAttribute("src", datajson[i].photo);
                           photo.setAttribute("class", "col-md-11 photo");
               
                           photo2 = document.createElement("img");
                           divOccasion2.appendChild(photo2);
                           photo2.setAttribute("id", "photo2");
                           photo2.setAttribute("src", datajson[i].photo2);
                           photo2.setAttribute("class", "col-md-5");
               
                           photo3 = document.createElement("img");
                           divOccasion2.appendChild(photo3);
                           photo3.setAttribute("id", "photo3");
                           photo3.setAttribute("src", datajson[i].photo3);
                           photo3.setAttribute("class", "col-md-5");
               
               
                           titreH2.innerHTML = datajson[i].titre;
                           carburant.innerHTML = datajson[i].carburant;
                           prix.innerHTML = datajson[i].prix + " €";
                           texte.innerHTML = datajson[i].texte;
                           photo.innerHTML = datajson[i].photo;
                           photo2.innerHTML = datajson[i].photo2;
                           photo3.innerHTML=datajson[i].photo
               
                       }
                   }
               }      
              
    }else{
        alert("données non transmises");
    }
 }
//call send
xhr.send();



  