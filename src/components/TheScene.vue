<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheMainRoom from "./TheMainRoom.vue";

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
    level-manager
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <img id="clean-sky" src="../../public/assets/clean_sky.png" />
      <audio id="background-music" src="assets/background_music.mp3"></audio>
      <audio id="win-music" src="assets/win_music.mp3"></audio>
      <audio id="drop-sound" src="assets/drop_sound.mp3"></audio>
      <audio id="collect-sound" src="assets/collect_sound.mp3"></audio>
      <audio id="teleport-sound" src="assets/teleport_sound.mp3"></audio>

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
      
      <a-asset-item
        id="bouteille"
        src="assets/glass_bottle.glb"
      ></a-asset-item>
      
      <a-asset-item
        id="trombone"
        src="assets/paper_clip_collection_.glb_free_low_poly.glb"
      ></a-asset-item>

      <a-asset-item
        id="os"
        src="assets/halloween_bone_low-poly_game_ready.glb"
      ></a-asset-item>

      <a-asset-item
        id="radio"
        src="assets/low_poly_ghetto_blaster.glb"
      ></a-asset-item>

      <a-asset-item
        id="arbre_parfum"
        src="assets/low_poly_fir_tree_decorative_object_free.glb"
      ></a-asset-item>

      <a-asset-item
        id="voiture"
        src="assets/low-poly_truck_drifter.glb"
      ></a-asset-item>

      <a-asset-item
        id="portal_gun"
        src="assets/portal_gun_from_the_rick_and_morty_show.glb"
      ></a-asset-item>

    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainRoom />
      <a-sky src="#clean-sky"></a-sky>
    </template>

    <TheCameraRig position="5 2.5 5" rotation="0 225 0" />
  </a-scene>
</template>
