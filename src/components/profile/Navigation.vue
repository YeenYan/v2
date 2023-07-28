<template>
  <nav class="mobileNav">
    <div class="navigation">
      <ul>
        <li
          v-for="navList in navLists"
          :key="navList.text"
          :class="{ active: navList.active && activeContent }"
          @click.capture="toggleActiveNav(navList, navList.content)"
        >
          <a :href="navActive">
            <span class="material-symbols-outlined"> {{ navList.icon }} </span>
            <p>{{ navList.text }}</p>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

export default {
  name: "Navigation",
  data() {
    return {
      navActive: "",
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
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["activeContent"]),
  },
  methods: {
    toggleActiveNav(clickedNav, content) {
      this.navLists.forEach((navList) => {
        navList.active = navList === clickedNav;
      });
      this.activeContent = true;
      this.navActive = content;

      this.$emit("navTrigger");
    },
    toggleNav() {
      this.navActive = !this.navActive;
      alert(this.navActive);
    },
  },
};
</script>

<style lang="postcss" scoped>
.mobileNav {
  @apply fixed bottom-[3%] left-0 w-full mx-auto;
  transition: 0.5s;
}

.navigation {
  @apply relative flex justify-center items-center w-[98%] max-w-[26rem] h-[4rem] py-[1rem] mx-auto bg-shades-white rounded-full;
  box-shadow: 1px -2px 15px rgba(0, 0, 0, 0.07);
}

.navigation ul {
  @apply flex w-full max-w-[21.25rem];
}

.navigation ul li {
  @apply relative w-[25%] cursor-pointer;
}

.navigation ul li a {
  @apply relative flex flex-col items-center justify-center text-center w-full z-30;
}

.navigation ul li a span {
  @apply relative block text-[1.5rem] text-neutral-400 z-20;
  transition: 0.5s;
}

.navigation ul li a p {
  @apply absolute text-sm text-neutral-800 font-medium z-10;
  opacity: 0;
  transform: translateY(1.8rem);
  transition: 0.5s;
}

.navigation ul li.active a span {
  @apply text-[2rem] text-primary-500;
  transform: translateY(-2.5rem);
}

.navigation ul li.active a p {
  opacity: 1;
  transform: translateY(0rem);
}

.indicator {
  @apply absolute top-[-2.5rem] w-[5.3rem] h-[5.3rem] bg-shades-white rounded-full;
  box-shadow: 0px -7px 7px 0px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: 0.3s ease-in;
  transform: translateY(2rem);
}

.indicator::before {
  content: "";
  @apply absolute top-[11px] left-[-28px] w-[30px] h-[30px] bg-transparent rounded-full;
  box-shadow: 15px 18px #fff;
}

.indicator::after {
  content: "";
  @apply absolute top-[11px] right-[-28px] w-[30px] h-[30px] bg-transparent rounded-full;
  box-shadow: -15px 18px #fff;
}

.navigation ul li.active ~ .indicator {
  transform: translateY(0);
  opacity: 1;
}

/* About Indicator */

.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(25% * 0));
}
/* ============================================== */

/* Experience Indicator */

.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(25% * 4));
}
/* ============================================== */

/* Projects Indicator */
.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(25% * 8));
}
/* ============================================== */

/* Contact Indicator */
.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(25% * 12));
}

/**********************************************
**** Media Queries Properties
**********************************************/

@media (max-width: 400px) {
  .mobileNav {
    @apply bottom-[-5px] left-0 w-full mx-auto;
  }

  .navigation {
    @apply relative flex justify-center items-center w-full h-[4rem] py-[1rem] mx-auto bg-shades-white rounded-none;
    box-shadow: 1px -2px 15px rgba(0, 0, 0, 0.07);
  }
}
</style>
