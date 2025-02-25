$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "white"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(138, 660, 100, 20, "pink");
    createPlatform(720, 635, 100, 20, "pink");
    createPlatform(250, 600, 150, 20, "pink");
    createPlatform(510, 410, 145, 50, "pink");
    createPlatform(510, 650, 125, 20, "pink");
    createPlatform(1000,300, 10, 320, "pink");
    createPlatform(900, 500, 125, 20, "pink");
    createPlatform(650, 200, 110, 20, "pink");
    createPlatform(650, 500, 110, 20, "pink");
    createPlatform(200, 300, 30, 10, "pink");
    createPlatform(350,300, 70, 10, "pink");
    createPlatform(100,300, 70, 10, "pink");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 1350, 50);
    createCollectable("diamond", 200, 270, 0.5, 0.7)


    
    // TODO 4 - Create Cannons
    createCannon("top", 500, 850);
createCannon("right", 300, 800);
createCannon("left", 300, 800);
createCannon("bottom", 1200, 800);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
