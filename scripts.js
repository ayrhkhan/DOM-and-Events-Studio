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



    takeoffButton.addEventListener("click", function (event) {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(answer === true){
            status.innerHTML = "Shuttle in flight.";
            backgroundChange.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = 10000; 
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
        }
    });



    upButton.addEventListener("click", function (event) {
        let height = shuttleHeight.innerHTML
        height = Number(height);
        height += 10000; 
        shuttleHeight.innerHTML = height
    });


    downButton.addEventListener("click", function (event) {
        let height = shuttleHeight.innerHTML
        height = Number(height);
        height -= 10000; 
        shuttleHeight.innerHTML = height
        console.log(height)

    });


    rightButton.addEventListener("click", function (event) {
        let element = event.target;
        element.style.right = 10;
        shuttle.style.position = 'relative';
        shuttle.style.right = 10;
        console.log('here')
    
    });


    leftButton.addEventListener("click", function (event) {
        let movedPosition = 0;
        movedPosition = parseInt(movedPosition) ; 
        console.log(movedPosition)
        console.log('here')

        // shuttle.style.position = 'relative';
        // shuttle.style.left = `10px`;
    });



}

window.addEventListener("load", init);
