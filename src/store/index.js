import { defineStore } from "pinia";

export default defineStore("index", {
  state: () => ({
    mobile: false,
    windowWidth: null,
    activeContent: "",

    activeSection: null,

    // aboutActive: false,
    experienceActive: false,
    projectActive: false,
    contact: false,


    // navActive: "",
    navLists: [
      {
        icon: "face_6",
        text: "about me",
        active: false,
        content: "#about",
      },
      {
        icon: "business_center",
        text: "experience",
        active: false,
        content: "#experience",
      },
      {
        icon: "laptop_mac",
        text: "projects",
        active: false,
        content: "#projects",
      },
      {
        icon: "mail",
        text: "contact",
        active: false,
        content: "#contact",
      },
    ],
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