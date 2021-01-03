const App = {
  data() {
    return {
      notes: [],
      input: "",
    };
  },
  methods: {
    addNote() {
      if (this.input.length > 2) {
        this.notes.push(this.input);
        this.input = "";
      }
    },
    removeItem(indx) {
      this.notes.splice(indx, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
