const { createApp } = Vue

createApp({
  data() {
    return {
      todolist: [
        {
          text: "Fai l'esercizio",
          done: true
        },
        {
          text: "Correggi l'esercizio",
          done: false
        },
        {
          text: "Impara qualcosa di nuovo",
          done: false
        }
      ],

      newTodo: "",
    }
  },

  methods: {
    deleteMe(index) {
      this.todolist.splice(index, 1);
    },

    addTodo() {
      const newNote = this.newTodo;
      this.todolist.push({ text: newNote, done: false })
      this.newTodo = "";
    },

    checkDone(index) {
      this.todolist[index].done = !this.todolist[index].done;
    }
  }
}).mount('#app')