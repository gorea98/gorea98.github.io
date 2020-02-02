

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
                    
                    webkitAlpha = alpha-270;
                  }
					}
 
				// Rotirea imaginii
				busola.style.Transform = 'rotate(' + alpha + 'deg)'; // majoritatea browserelor
                busola.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)'; // Chrome si restul pe Webkit 
                busola.style.MozTransform = 'rotate(' + alpha + 'deg)'; // Firefox, rotare inversa
              }, false);
        }
    
