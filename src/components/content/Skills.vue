<template>
 <div class="skills__container">
  <p class="gen-contentText">
   Here you will find more information about me, what I do, and my current
   skills mostly in terms of programming and technology.
  </p>

  <ul class="skills__wrapper">
   <li class="skills-group" v-for="skill in skills" :key="skill.title">
    <p class="title">{{ skill.title }}</p>
    <p class="description">
     {{ skill.description }}
    </p>

    <ul class="skills-lists">
     <li v-for="tag in skill.skills" :key="tag">{{ tag }}</li>
    </ul>
   </li>
  </ul>
 </div>
</template>

<script>
export default {
 name: "Skills",
 data() {
  return {
   skills: [
    {
     title: "Designer",
     description:
      "I value minimalist content, polished design, and deliberate interactions.",
     skills: [
      "UI/UX",
      "Wireframing",
      "Prototyping",
      "Mockups",
      "Design System",
      "Posters",
     ],
    },
    {
     title: "Developer",
     description:
      "I relish coding and transforming ideas into vibrant web experiences.",
     skills: [
      "HTML5",
      "CSS",
      "Sass",
      "Git",
      "Tailwind CSS",
      "Firebase",
      "PHP",
      "Laravel",
      "Javascript (ES6+)",
      "RESTful API",
      "Vue.js",
      "Responsive Design",
      "MySQL",
      "Netlify",
     ],
    },
    {
     title: "Toolkit",
     description:
      "My daily tools for expertise elevation and exceptional results.",
     skills: [
      "VS Code",
      "Figma",
      "Gitbash",
      "Postman",
      "Flowchart",
      "Notion",
      "Github",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "StackBlitz",
      "XAMPP-phpMyAdmin",
      "Blender",
      "MySQL Workbench",
     ],
    },
   ],
  };
 },
};
</script>

<style lang="postcss" scoped>
.skills__container {
 @apply mt-[5rem];
}

.skills__wrapper {
 @apply grid gap-12 mt-[2.5rem];
}

.skills-group .title {
 @apply text-xl text-neutral-800 font-code font-semibold mb-[.6rem];
}

.skills-group .description {
 @apply text-sm text-neutral-600;
}

.skills-lists {
 @apply flex flex-wrap gap-3 mt-[1.2rem] max-w-[95%];
}

.skills-lists li {
 @apply relative text-xs font-code bg-neutral-200 min-w-fit max-w-fit
    px-[1rem] py-[.6rem] rounded-full outline outline-[.01rem] outline-neutral-300;
 /* box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1); */
}
</style>
