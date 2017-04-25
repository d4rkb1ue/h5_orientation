var display = document.getElementById('angle');
//add deviceorientation event listener
if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
}else{
    alert("Not Support DeviceOrientation");
}

function DeviceOrientationHandler(event){
        var alpha = event.alpha,
            beta = event.beta,
            gamma = event.gamma;
        if (alpha || beta || gamma) {
            display.innerHTML = "alpha:" + alpha + ", beta:" + beta + ", gamma:" + gamma;
        }else{
            display.innerHTML = "Not Support DeviceOrientation";
        }
}