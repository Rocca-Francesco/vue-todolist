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
      ]
    }
  },

  computed: {

  }
}).mount('#app')