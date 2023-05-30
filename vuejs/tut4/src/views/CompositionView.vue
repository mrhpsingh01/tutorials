<template>
  <div class="home">
    <h1>You have {{ countTodos }} Todos</h1>
    <div class="input">
      <input
        class="inputinput"
        placeholder="add a todo"
        type="text"
        @keyup.enter="addTodo"
        v-model="newTodoName"
      />
    </div>
    <ul v-for="(todo, index) in todos" key="todo.id">
      <li>
        <span>{{ todo.name }}</span>
        <button @click="removeTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const newTodoName = ref("");
    const todos = ref([]);
    const swearwords = ["swear1", "swear2", "swear3"];

    let countTodos = computed(() => {
      return todos.value.length;
    });

    const addTodo = () => {
      let newTodo = {
        id: Date.now(),
        name: newTodoName.value,
      };
      todos.value.push(newTodo);
      newTodoName.value = "";
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    watch(newTodoName, (newValue) => {
      if (swearwords.includes(newValue.toLowerCase())) {
        alert("This word is not allowed " + newValue);
        newTodoName.value = "";
      }
    });

    return {
      newTodoName,
      todos,

      countTodos,

      addTodo,
      removeTodo,
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .home {
    margin-top: 300px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .input {
    padding: 20px;
  }
  .inputinput {
    font-size: large;
  }
}
ul {
  list-style-type: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}
li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}
li span {
  flex-grow: 1;
}
</style>
