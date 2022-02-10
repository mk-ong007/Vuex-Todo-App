<template>
  <v-card dark elevation="2" class="mx-auto" max-width="400" tile>
    <v-card-title class="text-center">Todo List</v-card-title>
    <v-divider class="my-0"></v-divider>
    <v-card-text class="my-0 py-0">
      <div>
        Completed: {{ completedTodos }} <br>
        Pending: {{ pendingTodos }}
      </div>
      <v-row>
        <v-col cols="9">
          <v-text-field
            v-model="newTodo"
            ref="newTodo"
            label="Enter new todo here..."
            class="p-0"
            :error-messages="error"
            required
            @keypress.enter="addNewTodo"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn
            rounded
            dark
            color="primary"
            elevation="2"
            @click="addNewTodo"
          >
            Add
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-list dense>
      <v-list-item-group class="my-0" color="primary">
         <v-list-item-content>
        <v-list-item class="my-0" v-for="(todo, i) in todos" :key="i">
          <v-row >
            <v-col cols="9" >
              <v-checkbox v-model='todo.completed'>
                <template v-slot:label>
                  <v-list-item-title class="text-h5" v-bind:class="{completed: todo.completed}" v-text="todo.name"></v-list-item-title>
                </template>
              </v-checkbox>
            </v-col>
            <v-col cols="3">
              <v-btn class="m-2" fab small color="primary" @click="deleteTodo(todo)">
                <v-icon> mdi-minus </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item>
         </v-list-item-content>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      newTodo: "",
      error: "",
      todos: this.$store.state.todos,
    };
  },
  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos"
    }),
  },
  methods: {
    addNewTodo() {
      this.error = "";
      if (this.newTodo != "") {
        this.$store.dispatch("addNewTodo", this.newTodo);
        this.newTodo = "";
      } else {
        this.error = "First fill the field!";
      }
    },
    deleteTodo(todo) {
        this.$store.dispatch("deleteTodo", todo);
    },
    changeTodoStatus(todo) {
      this.$store.dispatch('changeTodoStatus', todo);
    }
  },
};
</script>

<style scoped>
.completed {
   text-decoration: line-through;
}
</style>