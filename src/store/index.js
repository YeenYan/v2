import { defineStore } from "pinia";

export default defineStore("index", {
  state: () => ({
    mobile: false,
    windowWidth: null,
    activeContent: "#intro"
  }),
  getters: {

  },
  actions: {
    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < 1000) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
    },
  }
});