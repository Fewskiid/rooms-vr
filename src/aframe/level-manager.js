AFRAME.registerComponent("level-manager", {
  schema: {
    object1Found: { type: "boolean", default: false },
    object2Found: { type: "boolean", default: false },
    object3Found: { type: "boolean", default: false },
    object4Found: { type: "boolean", default: false },
    object5Found: { type: "boolean", default: false },
    object6Found: { type: "boolean", default: false },
    object7Found: { type: "boolean", default: false },
  },

  //Condition
  init: function () {
    const objects = [
      "object1-found",
      // "object2-found",
      // "object3-found",
      // "object4-found",
      // "object5-found",
      // "object6-found",
      // "object7-found",
    ];

    objects.forEach((eventName) => {
      this.el.addEventListener(eventName, () => {
        const objectKey = eventName.replace("-found", "");
        this.data[objectKey] = true;
        this.checkAllObjectsFound();
      });
    });
  },

  checkAllObjectsFound: function () {
    const allObjectsFound = Object.values(this.data).every(
      (value) => value === true
    );
    if (allObjectsFound) {
      console.log("Tous les objets ont été trouvés !");
      // Ajoutez ici votre logique pour gérer le cas où tous les objets sont trouvés
    }
  },
});
