const App = {
  data() {
    return {
      notes: [],
      input: "",
    };
  },
  methods: {
    addNote() {
      this.notes.push(this.input);
      this.input = "";
    },
  },
};

Vue.createApp(App).mount("#app");
