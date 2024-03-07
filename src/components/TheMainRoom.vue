<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import BoxColorChanging from "./BoxColorChanging.vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import ExitDoor from "./ExitDoor.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
import "../aframe/teleport-camera-rig.js";
import "../aframe/level-manager.js";
import "../aframe/clickable.js";
import "../aframe/simple-grab.js";
import "../aframe/listen-to.js";

defineProps({
  scale: Number,
});

const colorBoxLeft = ref(randomHsl());
const colorBoxRight = ref(randomHsl());

const handleObject = (object) => {
  console.log("Object clicked", object);
};
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
    bind-position="target: #hand-left;"
    bind-rotation="target: #hand-left; convertToLocal: true;"
  >
    <a-entity
      gltf-model="#room"
      position="-0.2 0.1 0.1"
      rotation="45 160 -90"
      scale="0.02 0.02 0.02"
    >
      <!-- Teleporter -->
      <!-- Chambre 1 -->
      <a-box
        clickable
        color="red"
        position="-0.06 4.05 -3.53"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: -5.9; y: 3; z: -1.885; handleRotation: true; rot: 45"
      ></a-box>

      <!-- Chambre 2 -->
      <a-box
        clickable
        color="red"
        position="3.55 4.05 0.1"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: -1.885; y: 3; z: -5.9; handleRotation: true; rot: 45"
      ></a-box>

      <!-- Chambre 3 -->
      <a-box
        clickable
        color="red"
        position="-3.77 1.26 -3.53"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: -5.9; y: -0.15; z: 2.115; handleRotation: true; rot: 45"
      ></a-box>

      <!-- Chambre 4 -->
      <a-box
        clickable
        color="red"
        position="-0.1 1.26 0.1"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: -1.89; y: -0.15; z: -1.89; handleRotation: true; rot: 45"
      ></a-box>

      <!-- Chambre 5 -->
      <a-box
        clickable
        color="red"
        position="3.55 1.26 3.75"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: 2.127; y: -0.15; z: -5.9; handleRotation: true; rot: 45"
      ></a-box>

      <!-- Chambre 6 -->
      <a-box
        clickable
        color="red"
        position="-3.75 -1.49 0.13"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: -1.9; y: -3.05; z: 2.13; handleRotation: true; rot: 45"
      ></a-box>

      <!-- Chambre 7 -->
      <a-box
        clickable
        color="red"
        position="-0.13 -1.49 3.74"
        scale="3.7 2.75 3.7"
        visible="false"
        teleport-camera-rig="x: 2.13; y: -3.05; z: -1.89; handleRotation: true; rot: 45"
      >
      </a-box>

      <!-- Spawn box -->
      <a-box
        clickable
        color="#9850C7"
        position="0 8 0"
        scale="3.7 2.75 3.7"
        visible="true"
        teleport-camera-rig="x: 6; y: 2.35; z: 6; handleRotation: true; rot: 225"
      ></a-box>
    </a-entity>
  </a-entity>

  <!-- Modelisation -->
  <!-- Spawn box -->
  <a-box
    color="#9850C7"
    depth="4"
    height="0.2"
    width="4"
    position="6 2.35 6"
  ></a-box>

  <a-box
    color="#9850C7"
    depth="0.2"
    height="4"
    width="4"
    position="6 4.45 8.1"
  ></a-box>

  <a-box
    color="#9850C7"
    depth="4"
    height="4"
    width="0.2"
    position="8.1 4.45 6"
  ></a-box>

  <a-entity id="object-list" position="7.95 4.45 6" rotation="180 90 180">
    <a-plane
      id="object-list-background"
      position="0 0 0"
      rotation="0 0 0"
      width="2"
      height="3"
      color="#000"
      opacity="0.8"
    ></a-plane>
    <a-text
      value="Liste des objets"
      position="-0.5 1 0.01"
      color="#FFF"
      width="3"
    ></a-text>

    <a-text
      id="object-trombone-el-text"
      value="Trombones"
      position="-0.5 0.5 0.01"
      color="red"
      width="2"
    ></a-text>

    <a-text
      id="object-arbre_parfum-el-text"
      value="Sapin"
      position="-0.5 0.25 0.01"
      color="red"
      width="2"
    ></a-text>

    <a-text
      id="object-voiture-el-text"
      value="Voiture"
      position="-0.5 0 0.01"
      color="red"
      width="2"
    ></a-text>

    <a-text
      id="object-portal_gun-el-text"
      value="Portal gun (Rick & Morty)"
      position="-0.5 -0.25 0.01"
      color="red"
      width="2"
    ></a-text>

    <a-text
      id="object-bouteille-el-text"
      value="Bouteille"
      position="-0.5 -0.5 0.01"
      color="red"
      width="2"
    ></a-text>

    <a-text
      id="object-os-el-text"
      value="Os"
      position="-0.5 -0.75 0.01"
      color="red"
      width="2"
    ></a-text>

    <a-text
      id="object-radio-el-text"
      value="Radio"
      position="-0.5 -1 0.01"
      color="red"
      width="2"
    ></a-text>
  </a-entity>

  <a-entity id="win" position="7.95 4.45 6" rotation="180 90 180" visible="false">
    <a-plane
      id="win-list-background"
      position="0 0 0"
      rotation="0 0 0"
      width="2"
      height="3"
      color="#000"
      opacity="0.8"
    ></a-plane>
    <a-text
      value="C'est win ! GG"
      position="-0.5 1 0.01"
      color="#FFF"
      width="3"
    ></a-text>
  </a-entity>

  <a-entity id="dropZone-info" position="6 3.6 7.99" rotation="180 0 180">
    <a-plane
      id="info-list-background"
      position="0 0 0"
      rotation="0 0 0"
      width="0.6"
      height="0.3"
      color="#000"
      opacity="0.8"
    ></a-plane>
    <a-text
      value="Deposer ici"
      position="-0.225 0 0.01"
      color="#FFF"
      width="2"
    ></a-text>
  </a-entity>

  <!-- DropZone -->
  <a-entity
    id="drop-zone-right"
    geometry="primitive: sphere; phiLength: 180; radius: 0.52; thetaLength: 90;"
    material="color: red; side: double"
    position="6 3.35 8"
    rotation="180 0 0"
    clickable
  ></a-entity>

  <a-entity
    id="drop-zone-right-spot"
    position="6 3.35 7.8"
    rotation="90 0 180"
    listen-to="target: #drop-zone-right;"
    new-drop-zone
  ></a-entity>

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
    visible="false"
  ></a-entity>

  <a-entity
    id="trombone-el"
    gltf-model="#trombone"
    position="-4.371 3.820 -3.3"
    scale="0.005 0.005 0.005"
    rotation="0 90 -90"
    clickable
    simple-grab
  >
  </a-entity>

  <!-- Chambre 2 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-1.885 3.10 -5.9"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>

  <a-entity
  id="arbre_parfum-el"
    gltf-model="#arbre_parfum"
    position="-1.840 3.270 -7.342"
    scale="0.002 0.002 0.002"
    rotation="0 90 0"
    clickable
    simple-grab
  ></a-entity>

  <!-- Chambre 3 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-5.9 0.05 2.115"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>

  <a-entity
  id="voiture-el"
    gltf-model="#voiture"
    position="-6.211 0.913 3.949"
    scale="0.03 0.03 0.03"
    rotation="0 200 0"
    clickable
    simple-grab
  ></a-entity>

  <!-- Chambre 4 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-1.890 0.05 -1.890"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>

  <a-entity
  id="portal_gun-el"
    gltf-model="#portal_gun"
    position="-2.428 0.930 -0.177"
    scale="1.2 1.2 1.2"
    clickable
    simple-grab
  ></a-entity>

  <!-- Chambre 5 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="2.127 0.05 -5.9"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>

  <a-entity
  id="bouteille-el"
    gltf-model="#bouteille"
    position="3.093 0.671 -7.478"
    scale="1.2 1.2 1.2"
    clickable
    simple-grab
  ></a-entity>

  <!-- Chambre 6 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="-1.9 -3 2.13"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>

  <a-entity
  id="os-el"
    gltf-model="#os"
    position="-3.462 -2.140 3.337"
    scale="0.007 0.007 0.007"
    rotation="0 -45 0"
    clickable
    simple-grab
  ></a-entity>

  <!-- Chambre 7 -->
  <a-entity
    geometry="primitive: plane; height: 3.95; width: 3.95"
    position="2.13 -3 -1.89"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>

  <a-entity
  id="radio-el"
    gltf-model="#radio"
    position="3.081 -2.425 -3.479"
    scale="0.3 0.3 0.3"
    rotation="0 -90 0"
    clickable
    simple-grab
  ></a-entity>

  <!-- Spawn box -->
  <a-entity
    geometry="primitive: plane; height: 4; width: 4"
    position="6 2.50 6"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
</template>
