let donnees = document.querySelectorAll(".donnees");
console.log(donnees);
donnees.forEach(function(element){

             element.addEventListener("mouseover", function() {
          
            /*element.style.background = "transparent";*/
            
            element.classList.add("change");
            console.log(element);
        });
           
            element.addEventListener("mouseout", function() {
                /*element.style.background = "";*/
                
            
            element.classList.remove("change");

            console.log(element);

        });
    });
   

  let form = document.getElementById("ourTeams");
  let inputNom = document.getElementById("nom");
  let inputPrenom = document.getElementById("prenom");
  let inputEmail = document.getElementById("email");
  let inputRaison = document.getElementById("raison");
  let error = document.getElementById("error");
  
  
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
    
      if (inputNom.value.trim() === '' || inputPrenom.value.trim() === '' || inputEmail.value.trim() === '' || inputRaison.value === '') {
          // error.innerHTML = "<p>Tous les champs sont requis !</p>";
          error.classList.add('errorShow');
          console.log('error');
          return;
      } 
  });


  
                 
           
      if (!regexMail.test(valueEmail)) { 
        
                error.innerHTML += "<p> Le mail n'est pas valide</p>";
                error.classList.add('error');
                
            }
            
    
    
    
        
     
    
    
    