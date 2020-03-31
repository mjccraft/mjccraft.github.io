var choix = document.querySelector(".choix");

choix.addEventListener("keyup", function(){
		if(choix !=''){
      var ancre = "-" + choix.value;
      self.location.hash = ancre;
    }
}, false);