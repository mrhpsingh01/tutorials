<template>
  <div class="home">
    <h1>You have {{ countTodos }} Todos</h1>
    <div class="input">
      <input
        class="inputinput"
        placeholder="add a todo"
        type="text"
        @keyup.enter="addTodo"
        v-model="newTodo"
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
export default {
  name: "OptionsView",
  computed: {
    countTodos() {
      return this.todos.length;
    },
  },
  data() {
    return {
      newTodo: "",
      todos: [],
      swearwords: ["swear1", "swear2", "swear3"],
    };
  },
  methods: {
    addTodo() {
      let newTodo = {
        id: Date.now(),
        name: this.newTodo,
      };
      this.todos.push(newTodo);
      this.newTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  watch: {
    newTodo(newValue) {
      if (this.swearwords.includes(newValue.toLowerCase())) {
        alert("This word is not allowed " + newValue);
        this.newTodo = "";
      }
    },
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
