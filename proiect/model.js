

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
					alphaWebkit = alpha;
					if(!window.chrome) {
                    
                    webkitAlpha = alpha-270;
                  }
					}
 
				// Rotirea imaginii
                busola.style.WebkitTransform = 'rotate('+ alphaWebkit + 'deg)'; // Chrome si Safari
                busola.style.MozTransform = 'rotate(-' + alpha + 'deg)'; // Firefox, rotare inversa
				busola.style.Transform = 'rotate(' + alpha + 'deg)'; // restul browserelor
              }, false);
        }
    
