<script setup>
import { ref } from "vue";

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (
    AFRAME.utils.device.checkHeadsetConnected() &&
    !AFRAME.utils.device.isMobile()
  ) {
    document.querySelector("a-scene").enterVR();
  }
  playBackgroundMusic();
}

function playBackgroundMusic() {
  const music = document.querySelector("#entity-bg-music");
  music.components.sound.playSound();
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Rooms VR</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <p>
            Have fun, collect stuff, and discover a unique way to travel between
            different rooms ! This game is all about enjoying yourself and
            gathering items. Enjoy :)
          </p>
        </section>
        <section>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
              control (Drag and drop)
            </li>
            <li>
              Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
              backward + Gaze cursor for click
            </li>
            <li>
              VR/AR – Walk + Teleport (Grip for grab and laser for click) + Gaze
              cursor for click
            </li>

            <li>VR/AR – Teleport with left hand watch (Laser for click)</li>
          </ul>
        </section>
        <section>
          <h4>Source code</h4>
          <blockquote>
            <a href="https://github.com/Fewskiid/rooms-vr">Github repo</a>
          </blockquote>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank"
              >aframe-extras controls and animation-mixer</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank"
              >aframe physx</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/jure/aframe-blink-controls/"
              target="_blank"
              >aframe-blink-controls</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/diarmidmackenzie/aframe-multi-camera/"
              target="_blank"
              >aframe-multi-camera</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank"
              >simple-navmesh-constraint</a
            >
          </dt>
          <dd>By Ada Rose Cannon under MIT License</dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/low-poly-isometric-rooms-d53af0ad289a403598ee2cb41d84608b"
              target="_blank"
              >Low Poly Isometric Rooms</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/Brynnnnn" target="_blank"
              >By Brynn</a
            >
            (changes have been made)
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/glass-bottle-00beb4f7241e496e8a2ebb47fdb4f93c"
              target="_blank"
              >Glass Bottle</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/Aullwen" target="_blank"
              >By Aullwen</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/portal-gun-from-the-rick-and-morty-show-c5f7b4a950de4002b448ac65c6b0207b"
              target="_blank"
              >Portal Gun from The Rick and Morty show</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/Bob.Ho" target="_blank"
              >By Bob.Ho</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/halloween-bone-low-poly-game-ready-ed75ba7601d94ecba7bd2aca8d922257"
              target="_blank"
              >Halloween Bone low-poly</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/Qurka" target="_blank"
              >By Raphael C</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/paper-clip-collection-glb-free-low-poly-dcf840869daa4151a6694c1725816c33"
              target="_blank"
              >Paper Clip Collection</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/LadyLionStudios" target="_blank"
              >By LordSamueliSolo</a
            >
            (changes have been made)
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/low-poly-truck-drifter-e56ee981a9504153b98e707d6e9c757c"
              target="_blank"
              >Low-poly truck (Drifter)</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/vanidza" target="_blank"
              >By Ivan Norman</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/low-poly-ghetto-blaster-e0a7dfd0452f44b2becf78ba359accc6"
              target="_blank"
              >Low poly Ghetto blaster</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/Baboyo" target="_blank"
              >By Business boy</a
            >
          </dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/low-poly-fir-tree-decorative-object-free-ff10170d6b9447e794e8a4171e4f3fce"
              target="_blank"
              >Low Poly Fir Tree Decorative Object Free</a
            >
          </dt>
          <dd>
            <a href="https://sketchfab.com/vendol21" target="_blank"
              >By chroma3d</a
            >
          </dd>

          <dt>
            <a
              href="https://opengameart.org/content/calmmelancholy-video-game-music"
              target="_blank"
              >Calm/Melancholy Video Game Music</a
            >
          </dt>
          <dd>
            <a href="https://opengameart.org/users/gamemusic100" target="_blank"
              >By GameMusic_100</a
            >
          </dd>

          <dt>
            <a
              href="https://opengameart.org/content/happy-end-music"
              target="_blank"
              >happy end music</a
            >
          </dt>
          <dd>
            <a href="https://opengameart.org/users/igor-gundarev" target="_blank"
              >By Igor Gundarev</a
            >
          </dd>

          <dt>
            <a
              href="https://opengameart.org/content/coin-drop"
              target="_blank"
              >Coin Drop</a
            >
          </dt>
          <dd>
            <a href="https://opengameart.org/users/vinrax" target="_blank"
              >By Vinrax</a
            >
          </dd>

          <dt>
            <a
              href="https://opengameart.org/content/plingy-coin"
              target="_blank"
              >Plingy Coin</a
            >
          </dt>
          <dd>
            <a href="https://opengameart.org/users/fupi" target="_blank"
              >By Fupi</a
            >
          </dd>

          <dt>
            <a
              href="https://opengameart.org/content/teleport"
              target="_blank"
              >Teleport</a
            >
          </dt>
          <dd>
            <a href="https://freesound.org/people/Leszek_Szary/" target="_blank"
              >By Leszek_Szary</a
            >
          </dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
a {
  color: #eee;
  text-decoration: none;
}
.licences {
  margin: 2rem 0;
  padding-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
}
.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}
#onboarding > * {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}
#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>
#onboarding li { #onboarding li { font-size: 1rem; text-align: left; }
