<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheMainRoom from "./TheMainRoom.vue";
import TheLifeCubeRoom from "./TheLifeCubeRoom.vue";
import ThePhysicRoom from "./ThePhysicRoom.vue";

  import '../aframe/simple-grab.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    simple-grab
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <img id="clean-sky" src="../../public/assets/clean_sky.png" />

      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item
        id="room"
        src="assets/low_poly_isometric_rooms.glb"
      ></a-asset-item>
      <img
        id="room-physic-out-texture"
        :src="`assets/main-room-from-physic-room.png`"
      />
      <!--
        Title: 3D Gallery for VR projects
        Model source: https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainRoom />
      <a-sky src="#clean-sky"></a-sky>
    </template>

    <TheCameraRig position="5 4 5" rotation="0 45 0" />
  </a-scene>
</template>
