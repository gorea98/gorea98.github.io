document.getElementById("id_logic").innerHTML = "Logic : 2020.02.02.0";

	var busola = document.getElementById('busola');
	
	if(window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientationabsolute', function(event) {
			
			var alpha;
			
                //pentru iOS (webkitCompassHeading - diferenta dintre viteza imprejurul axei z si Nord : directia masurata in raport cu nordul magnetic)
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

              }, false);
        }
    
//////////////////////////////////////////////////////////////////////

function verifica_versiune()
{
	var popup = document.getElementById("id_UI");
	popup.classList.toggle("show");
}