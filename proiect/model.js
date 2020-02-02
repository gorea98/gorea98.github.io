

	var busola = document.getElementById('busola');
	
	deviceOrientationEvent: function(event){
    console.log(event.alpha);
};
window.addEventListener("deviceorientationabsolute", deviceOrientationEvent, true);
			
                //pentru iOS (CompassHeading - diferenta dintre viteza imprejurul axei z si Nord : directia masurata in raport cu nordul magnetic)
                if(event.webkitCompassHeading) {
					
                  alpha = event.webkitCompassHeading;
                  busola.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
				  
                }
				
                // pentru Android
                else {
					
					alpha = event.alpha;
					
					}
 
				// Rotirea imaginii
				busola.style.Transform = 'rotate(' + alpha + 'deg)'; 
                busola.style.WebkitTransform = 'rotate('+ alpha + 'deg)'; // Chrome etc.
                busola.style.MozTransform = 'rotate(-' + alpha + 'deg)'; // Firefox, gradatie inversa
              }, false);
        }
    
