document.getElementById("id_logic").innerHTML = "Logic = 2019.12.02.0";

window.addEventListener("deviceorientation", on_gyro_data_uab);
window.addEventListener("devicemotion", on_acc_data_uab);


function desenare(unghi_x, unghi_y)
{
	// obtinem referinta la canvas
	
	var circle = document.getElementById("id_circle");
	var svg = document.getElementById("id_svg");
	
	
	var r = 10;
	var x =  unghi_x / 90 * (svg.width / 2 - r);
	var y =  unghi_y / 90 * (svg.width / 2 - r);
	
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
}

function on_gyro_data_uab(e)
{
	
	
	
	desenare(e.beta, e.gamma);
	
}

function on_acc_data_uab(e)
{
	var acc = e.accelerationIncludingGravity;
	
	
	
	
	
	
	var rot_x = Math.atan(acc.x / acc.z) * 180 / Math.PI;
	var rot_y = Math.atan(acc.y / acc.z) * 180 / Math.PI;
	
	
	
}

