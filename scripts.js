// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {

    const missionAbortButton = document.getElementById("missionAbort");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    const status = document.getElementById('flightStatus');
    const backgroundChange = document.getElementById('shuttleBackground');
    const shuttleHeight  = document.getElementById('spaceShuttleHeight');
    const shuttle = document.getElementById('rocket');
    let movement;
    shuttle.style.position = 'absolute';
    shuttle.style.left = '0px';
    shuttle.style.botton = '0px';



    

    takeoffButton.addEventListener("click", function (event) {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(answer === true){
            status.innerHTML = "Shuttle in flight.";
            backgroundChange.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = 10000; 
            // shuttle.style.botton = '10px';
        }
    });



    landingButton.addEventListener("click", function (event) {
        let landingNotice = window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        backgroundChange.style.backgroundColor = "green"
        shuttleHeight.innerHTML = 0; 
    
    });



    missionAbortButton.addEventListener("click", function (event) {
        // let element = event.target;
        let answer = window.confirm("Confirm that you want to abort the mission.");
        if(answer === true){
            status.innerHTML = "Mission aborted.";
            backgroundChange.style.backgroundColor = "green"
            shuttleHeight.innerHTML = 0; 
            shuttle.style.botton = '0px';
        }
    });



    upButton.addEventListener("click", function (event) {
        let height = shuttleHeight.innerHTML
        height = Number(height);
        height += 10000; 
        shuttleHeight.innerHTML = height
        movement = parseInt(shuttle.style.bottom) + 10 + 'px';
        shuttle.style.left = movement;
    });


    downButton.addEventListener("click", function (event) {
        let height = shuttleHeight.innerHTML
        height = Number(height);
        height -= 10000; 
        shuttleHeight.innerHTML = height
        movement = parseInt(shuttle.style.bottom) - 10 + 'px';
        shuttle.style.left = movement;
        // console.log(height)

    });


    rightButton.addEventListener("click", function (event) {
        movement = parseInt(shuttle.style.left) + 10 + 'px';
        shuttle.style.left = movement;
    });


    leftButton.addEventListener("click", function (event) {
        movement = parseInt(shuttle.style.left) - 10 + 'px';
        shuttle.style.left = movement;
    });



}

window.addEventListener("load", init);
