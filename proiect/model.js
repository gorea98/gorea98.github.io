

	var busola = document.getElementById('busola');
	
	if(window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(event) {
			var val_alpha;
			
                //pentru iOS (CompassHeading - diferenta dintre viteza imprejurul axei z si Nord)
                if(event.webkitCompassHeading) {
					
                  val_alpha = event.webkitCompassHeading;
                  busola.style.WebkitTransform = 'rotate(-' + val_alpha + 'deg)';
				  
                }
				
                // pentru Android
                else {
					
					val_alpha = event.alpha;
					alphaWebkit = val_alpha;
					if(!window.chrome) {
                    
                    webkitAlpha = alpha-270;
                  }
					}
 
				// Rotirea imaginii
                busola.style.WebkitTransform = 'rotate('+ alphaWebkit + 'deg)'; // Chrome si Safari
                busola.style.MozTransform = 'rotate(-' + val_alpha + 'deg)'; // Firefox, rotare inversa
				busola.style.Transform = 'rotate(' + val_alpha + 'deg)'; // restul browserelor
              }, false);
        }
    
