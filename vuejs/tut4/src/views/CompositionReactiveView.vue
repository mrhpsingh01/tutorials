<template>
  <div class="home">
    <h1>You have {{ countTodos }} Todos</h1>
    <div class="input">
      <input
        class="inputinput"
        placeholder="add a todo"
        type="text"
        @keyup.enter="addTodo"
        v-model="data.newTodoName"
      />
    </div>
    <ul v-for="(todo, index) in data.todos" key="todo.id">
      <li>
        <span>{{ todo.name }}</span>
        <button @click="removeTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed, watch } from "vue";

export default {
  setup() {
    const swearwords = ["swear1", "swear2", "swear3"];

    const data = reactive({
      newTodoName: "",
      todos: [],
    });

    let countTodos = computed(() => {
      return data.todos.length;
    });

    const addTodo = () => {
      let newTodo = {
        id: Date.now(),
        name: data.newTodoName,
      };
      data.todos.push(newTodo);
      data.newTodoName = "";
    };

    const removeTodo = (index) => {
      data.todos.splice(index, 1);
    };

    watch(data, (newValue) => {
      if (swearwords.includes(newValue.newTodoName.toLowerCase())) {
        alert("This word is not allowed " + newValue.newTodoName);
        data.newTodoName = "";
      }
    });

    return {
      data,

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
