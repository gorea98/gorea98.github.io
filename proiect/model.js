var busola = document.getElementById('busola');

	if(window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(event) {
			var alpha;
			
                //pentru iOS
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
 
				// Rotarile imaginii imaginii
                busola.style.Transform = 'rotate(' + alpha + 'deg)';
                busola.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                busola.style.MozTransform = 'rotate(-' + alpha + 'deg)'; 
              }, false);
        }
    
