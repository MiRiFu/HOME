function animation(){

    let fps = 0;
    let frameCount = 0;
    let startTime;
    let endTime;

    startTime = new Date().getTime();

    function animationLoop(){

        frameCount ++;
        endTime = new Date().getTime();
        if(endTime - startTime >= 1000){
            fps = frameCount;
            frameCount = 0;
            startTime = new Date().getTime();

        }

        requestAnimationFrame(animationLoop);

        let animationFPS = document.getElementById("fps");
        animationFPS.innerHTML = fps;

    }

    animationLoop();

}
