
// GLOBALS
let canvas,
    ctx,
    mouse = { down: [false, false, false], x: 0, y: 0 };

window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

const update = function () {
    requestAnimFrame(update);

    /**
     * EVERY FRAME
     */

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ...

};

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    document.addEventListener("mousemove", (event) => {
        (mouse.x = event.clientX), (mouse.y = event.clientY);

    });
    document.addEventListener("mousedown", (event) => {
        mouse.down[event.button] = true;
        event.preventDefault();
    });
    document.addEventListener("mouseup", (event) => {
        mouse.down[event.button] = false;
        event.preventDefault();
    });

    document.onkeydown = (event) => {
        switch (event.key) {
            case 'g':
                this.console.log("G pressed")
                break;
        }
    };

    document.oncontextmenu = function (e) {
        e.preventDefault();
    };

    update();
};
