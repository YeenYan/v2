<template>
  <div class="title-tag">
    <div class="line"></div>
    <h4><slot name="title"></slot></h4>
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
};
</script>

<style lang="postcss" scoped>
/* Content Header title */
.title-tag {
  @apply flex items-center gap-4 mb-[1.8rem] w-full;
  /* grid-template-columns: 1 2fr; */
}

.title-tag div {
  @apply w-full max-w-[3rem] h-[.5rem] bg-primary-500 rounded-full;
}

.title-tag h4 {
  @apply text-[1.5rem] text-neutral-800 font-code font-semibold;
}
</style>
