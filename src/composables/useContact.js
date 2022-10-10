import { ref } from "vue";

export default function useContact() {
  const icons = ref([
    { name: "alternate_email", text: "by email" },
    { name: "local_phone", text: "by phone" },
    { name: "local_post_office", text: "by post" },
    { name: "local_fire_department", text: "by smoke signal" },
  ]);

  return { icons };
}
