 document.getElementById("id_logic").innerHTML = "Logic = 2020.02.02.0";
 

    const busola = document.querySelector('.busola');
    navigator.geolocation.watchPosition((data) => {
      console.log(data);
      busola.style.transform = 'rotate(${data.coords.heading}deg)';
    }, (err) => {
      console.error(err);
    });
