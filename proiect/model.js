

	var busola = document.getElementById('busola');
	
	if(window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(event) {
			var alpha;
			
                //pentru iOS (CompassHeading - diferenta dintre viteza imprejurul axei z si Nord)
                if(event.webkitCompassHeading) {
					
                  alpha = event.webkitCompassHeading;
                  busola.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
				  
                }
				
                // pentru Android
                else {
					
					alpha = event.alpha;
					webkitAlpha = alpha;
					if(!window.chrome) {
                    
                    webkitAlpha = alpha-270; // calculul alph-ei pentru chrome
                  }
					}
 
				// Rotirea imaginii
				busola.style.Transform = 'rotate(' + alpha + 'deg)'; 
                busola.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)'; // Chrome etc.
                busola.style.MozTransform = 'rotate(' + alpha + 'deg)'; // Firefox
              }, false);
        }
    
