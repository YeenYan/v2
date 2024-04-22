<template>
 <div
  class="section-title"
  :class="elementIsAtTop ? 'active' : ''"
  v-if="mobile"
 >
  <div class="section-line"></div>
  <p>career path.</p>
 </div>
 <div class="exp__container" id="experience" ref="sectionElement">
  <content-header>
   <template #title>career path.</template>
  </content-header>

  <ul class="exp-content__wrapper" ref="elementToTrack">
   <li class="exp-content-group" v-for="exp in experiences" :key="exp">
    <div class="designation__wrapper">
     <p class="position">{{ exp.position }}</p>
     <p class="exp-date">{{ exp.date }}</p>
    </div>

    <p class="company">
     @{{ exp.company }}
     <span v-if="!mobile"
      >| <span>{{ exp.companyType }}</span></span
     >
    </p>

    <p class="desc">
     {{ exp.desc }}
    </p>
   </li>
  </ul>

  <a href="/resume.pdf" target="_blank" class="resumeBtn"
   >View Full Resume
   <span class="material-symbols-outlined"> arrow_forward </span></a
  >
 </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import useIndexStore from "@/store/index";

export default {
 name: "Experience",
 data() {
  return {
   elementIsAtTop: false,
   elAnimation: false,
   experiences: [
    {
     position: "Jr. Web Developer",
     date: "September 2022 - Present",
     company: "APEC Homes",
     companyType: "Real Estate Company",
     desc:
      "Developed the internal MyAccess system from the ground up, including UI design, frontend implementation, and database integration via API, ensuring seamless user experiences and data handling. Worked collaboratively to redesign the internal Homeowners Online website using Figma, utilizing Vue.js and Tailwind CSS for frontend development and API integration. Managed the overhaul of the internal After-Sales Integrated System, including developing a comprehensive design system, conducting manual testing, and gathering feedback from cross-functional teams for necessary adjustments.",
    },
    {
     position: "Graphic Designer",
     date: "March 2020 - September 2022",
     company: "APEC Homes",
     companyType: "Real Estate Company",
     desc:
      "Collaborate as part of a team to design a high-fidelity web interface using Figma, contributing to the development of the new UI for an existing internal transmittal system. Created engaging graphics in collaboration with the Marketing and Social Media teams, which included unique logo designs. Designed captivating visual content for Facebook and PowerPoint presentations. Developed original Viber stickers to raise awareness about COVID-19. Collaborated on page layouts for the company handbook and consistently met project deadlines.",
    },
    {
     position: "Graphic Designer",
     date: "April 2019 - January 2020",
     company: "ACC Hypermart Corp.",
     companyType: "Retail Industry",
     desc:
      "Worked on a team to develop compelling designs for marketing packages, including print materials, banners, and signs. These designs effectively enhanced brand visibility and customer engagement. Collaborated closely with clients to ensure that design deliverables not only met but exceeded their expectations. Contributed to the achievement of sales quotas through effective teamwork and collaboration with peers.",
    },
   ],
  };
 },
 computed: {
  ...mapWritableState(useIndexStore, [
   "activeSection",
   "activeContent",
   "mobile",
  ]),
 },
 mounted() {
  window.addEventListener("scroll", this.checkIfElementAtTop);
 },
 beforeDestroy() {
  window.removeEventListener("scroll", this.checkIfElementAtTop);
 },
 created() {
  // Check whenever the screen size is changing
  window.addEventListener("resize", this.checkScreen);
  this.checkScreen();
 },
 methods: {
  ...mapActions(useIndexStore, ["checkScreen"]),

  checkIfElementAtTop() {
   const element = this.$refs.elementToTrack;
   const sectionBottom =
    this.$refs.sectionElement.getBoundingClientRect().bottom;

   try {
    if (element) {
     const rect = element.getBoundingClientRect();
     // Check if the element's top is at or above the top of the viewport
     this.elementIsAtTop = rect.top <= 0;
     // console.log(rect.top);

     const expViewportHeight = window.innerHeight + 300;
     const expSectionHalfwayPoint = rect.top + rect.height / 2;

     // console.log(`section: ${expSectionHalfwayPoint}`);
     // console.log(`viewport: ${expViewportHeight}`);

     // trigger the animations
     if (expSectionHalfwayPoint <= expViewportHeight) {
     } else if (expSectionHalfwayPoint > expViewportHeight) {
     }

     if (this.elementIsAtTop) {
      // Do something here
     }
     if (sectionBottom < 0) {
      this.elementIsAtTop = false;
     }
    }
   } catch (error) {
    // console.log(error);
   }
  },
 },
};
</script>

<style lang="postcss" scoped>
.exp__container {
 @apply h-full min-h-screen;
 /*  py-[6rem] */
}

.exp-content__wrapper {
 @apply grid gap-6;
}

.position,
.exp-date,
.company {
 @apply text-neutral-800;
}

.designation__wrapper {
 @apply py-[.625rem];
}

.position {
 @apply text-xl font-semibold;
}

.exp-date {
 @apply text-xs font-code font-normal text-neutral-500;
}

.company {
 @apply text-sm font-medium bg-neutral-100 py-[.3rem] px-[.6rem] rounded;
}

.desc {
 @apply text-sm text-neutral-500 pl-[1.8rem] my-[.9rem] border-l-[1px] border-primary-500;
}

.resumeBtn {
 @apply flex items-center gap-2 font-code text-sm font-semibold text-neutral-800 mt-[3rem] hover:gap-6;
 transition: 0.3s;
}

.resumeBtn span {
 @apply text-base font-semibold;
}

@media (min-width: 600px) {
 .designation__wrapper {
  @apply flex items-center justify-between;
 }
}
</style>
