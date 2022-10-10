<script setup>
import Toast from "../components/Toast";
import Todos from "../components/Todos";
import useHome from "../composables/useHome";

const { showToast, triggerToast } = useHome();
</script>

<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>
    <Todos @badValue="triggerToast" />
    <transition name="fade">
      <div v-if="showP" style="margin-bottom:10px ;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        cupiditate!
      </div>
    </transition>
  </div>
</template>

<style scoped>
.toast-enter-active {
  animation: wobble 0.5s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.2s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
