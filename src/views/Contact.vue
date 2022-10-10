<script setup>
import useContact from "../composables/useContact";
import gsap from "gsap";
const { icons } = useContact();

const beforeEnter = (el, done) => {
  el.style.transform = "translateY(60px)";
  el.style.opacity = 0;
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    delay: el.dataset.index * 0.2,
  });
};
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>
    <transition-group
      tag="ul"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
  </div>
</template>

<style>
.contact ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
}
.contact li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
}
</style>
