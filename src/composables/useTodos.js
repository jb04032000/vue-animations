import { ref } from "vue";

export default function useTodos(props, emit) {
  const todos = ref([
    { text: "make the bed", id: 1 },
    { text: "play video games", id: 2 },
  ]);
  const newTodo = ref("");

  const addTodo = () => {
    if (newTodo.value) {
      const id = Math.random();
      todos.value = [{ text: newTodo.value, id }, ...todos.value];
      newTodo.value = "";
    } else {
      emit("badValue");
    }
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id != id);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    newTodo,
  };
}
