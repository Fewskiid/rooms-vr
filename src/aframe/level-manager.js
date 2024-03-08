AFRAME.registerComponent("level-manager", {
  schema: {}, // No schema needed in this case

  // Initialize the component
  init() {
    // Create an object to store object states
    this.objects = {
      "trombone-el": false,
      "arbre_parfum-el": false,
      "voiture-el": false,
      "portal_gun-el": false,
      "bouteille-el": false,
      "os-el": false,
      "radio-el": false,
    };

    console.log(this.objects); // Log the initial state

    // Loop through object names and add event listeners
    for (const objectId in this.objects) {
      if (this.objects.hasOwnProperty(objectId)) {
        const obj = document.querySelector(`#${objectId}`);
        if (obj) { // Check if the object element exists
          obj.addEventListener('has-been-dropped', () => {
            this.objects[objectId] = true; // Update object state on drop
            this.checkAllObjectsFound();
          });
        } else {
          console.warn(`Object with ID "${objectId}" not found in the scene.`);
        }
      }
    }
  },

  // Check if all objects are found
  checkAllObjectsFound() {
    const allObjectsFound = Object.values(this.objects).every(
      (value) => value === true
    );
    console.log(this.objects); // Log the current state
    if (allObjectsFound) {
      console.log("Tous les objets ont été trouvés !");
      document.querySelector("#win").setAttribute("visible", true);
      
      document.querySelector("#object-list").setAttribute("visible", false);

      playWinMusic();

      function playWinMusic() {
        const oldMusic = document.querySelector("#entity-bg-music");
        const music = document.querySelector("#entity-win-music");
        oldMusic.components.sound.stopSound();
        music.components.sound.playSound();
      }
     
    }
  },
});
