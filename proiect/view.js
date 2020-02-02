 document.getElementById("id_logic").innerHTML = "Logic = 2020.02.02.0";
 

    var busola = document.getElementById('busola');
    navigator.geolocation.watchPosition((data) => {
      console.log(data);
      busola.style.transform = 'rotate(${data.coords.heading}deg)';
    }, (err) => {
      console.error(err);
    });
