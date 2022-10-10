<script setup>
import { transform } from "@vue/compiler-core";
import { ref } from "@vue/reactivity";
import gsap from "gsap";

const showTitle = ref(true);

const beforeEnter = (el) => {
  el.style.transform = "translateY(-60px)";
  el.style.opacity = 0;
};
const enter = (el, done) => {
  gsap.to(el, {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "bounce.out",
    onComplete: done,
  });
};
</script>

<template>
  <div class="about">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
  </div>
</template>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}

/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
} */
</style>
