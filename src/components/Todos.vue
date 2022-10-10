<script>
import useTodos from "../composables/useTodos";

export default {
  setup(props, { emit }) {
    const { todos, addTodo, deleteTodo, newTodo } = useTodos(props, emit);
    return { todos, addTodo, deleteTodo, newTodo };
  },
};
</script>

<template>
  <div class="todos">
    <input
      type="text"
      v-model="newTodo"
      @keypress.enter="addTodo"
      placeholder="Add a new todo..."
    />
    <transition name="switch" mode="out-in">
      <div v-if="todos.length">
        <ul>
          <transition-group tag="ul" name="list" appear>
            <li
              v-for="todo in todos"
              :key="todo.id"
              @click="deleteTodo(todo.id)"
            >
              {{ todo.text }}
            </li>
          </transition-group>
        </ul>
      </div>
      <div v-else>Woohoo, nothing left todo!</div>
    </transition>
  </div>
</template>

<style>
.todos {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.todos ul {
  position: relative;
  padding: 0;
}
.todos li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
.todos li:hover {
  cursor: pointer;
}

/* list transitions */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}

.list-move {
  transition: all 0.3s ease;
}

/* switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>
