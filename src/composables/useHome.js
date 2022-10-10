import { ref } from "vue";

export default function useHome() {
  const showToast = ref(false);
  const triggerToast = () => {
    showToast.value = true;
    setTimeout(() => (showToast.value = false), 1500);
  };

  return { showToast, triggerToast };
}
