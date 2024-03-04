<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import BoxColorChanging from "./BoxColorChanging.vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import ExitDoor from "./ExitDoor.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";

defineProps({
  scale: Number,
});

const colorBoxLeft = ref(randomHsl());
const colorBoxRight = ref(randomHsl());
</script>

<template>
  <a-entity
    gltf-model="#room"
    rotation="0 90 0"
    position="-2 0 -2"
    scale="1.1 1.1 1.1"
  >
  </a-entity>

  <a-entity
    gltf-model="#room"
    bind-position="target: #hand-left;"
    bind-rotation="target: #hand-left;"
    scale="0.05 0.05 0.05"
  >
    <!-- Chambre 1 -->
    <a-box
      clickable
      color="red"
      position="-0.06 4.05 -3.53"
      scale="3.7 2.75 3.7"
    ></a-box>

    <!-- Chambre 2 -->
    <a-box
      clickable
      color="red"
      position="3.55 4.05 0.1"
      scale="3.7 2.75 3.7"
    ></a-box>

    <!-- Chambre 3 -->
    <a-box
      clickable
      color="red"
      position="-3.77 1.26 -3.53"
      scale="3.7 2.75 3.7"
    ></a-box>

    <!-- Chambre 4 -->
    <a-box
      clickable
      color="red"
      position="-0.1 1.26 0.1"
      scale="3.7 2.75 3.7"
    ></a-box>

    <!-- Chambre 5 -->
    <a-box
      clickable
      color="red"
      position="3.55 1.26 3.75"
      scale="3.7 2.75 3.7"
    ></a-box>

    <!-- Chambre 6 -->
    <a-box
      clickable
      color="red"
      position="-3.75 -1.49 0.13"
      scale="3.7 2.75 3.7"
    ></a-box>

    <!-- Chambre 7 -->
    <a-box
      clickable
      color="red"
      position="-0.13 -1.49 3.74"
      scale="3.7 2.75 3.7"
      avisible="false"
      teleport-camera-rig="x: 2.13; y: -1.35; z: -1.89; handleRotation: true; rot: 45"   
    ></a-box>
  </a-entity>

  <!-- Spawn box -->
  <a-box
    color="red"
    depth="4"
    height="0.2"
    width="4"
    position="6 2.35 6"
    opacity="0.5"
  ></a-box>
  <!-- <a-box color="red" depth="0.2" height="4.4" width="4" position="6 4.45 3.9" opacity="0.2"></a-box>
  <a-box color="red" depth="0.2" height="4.4" width="4" position="6 4.45 8.1" opacity="0.2"></a-box>
  <a-box color="red" depth="4" height="4.4" width="0.2" position="3.9 4.45 6" opacity="0.2"></a-box>
  <a-box color="red" depth="4" height="4.4" width="0.2" position="8.1 4.45 6" opacity="0.2"></a-box>
  <a-box color="red" depth="4" height="0.2" width="4" position="6 6.55 6" opacity="0.2"></a-box> -->

  <!-- Hauteur des scènes du haut
  <a-box color="tomato" depth="4" height="0.2" width="4" position="2 2.95 -6"></a-box> -->

  <!-- Main room navigation mesh  -->

  <!-- Chambre 1 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-5.9 3.10 -1.885"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Chambre 2 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-1.885 3.10 -5.9"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Chambre 3 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-5.9 0.05 2.115"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Chambre 4 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-1.890 0.05 -1.890"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Chambre 5 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="2.127 0.05 -5.9"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Chambre 6 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-1.9 -3 2.13"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Chambre 7 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="2.13 -3 -1.89"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>

  <!-- Spawn box -->
  <a-entity
    geometry="primitive: plane; height: 4; width: 4"
    position="6 2.50 6"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="true"
  ></a-entity>
  <!-- <a-entity
    geometry="primitive: plane; height: .5; width: 5"
    position="0 0.01 -11.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity> -->
</template>
