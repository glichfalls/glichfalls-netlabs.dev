<template>
  <div class="h-full">
    <page-header />
    <main>
      <div class="container mx-auto">
        <slot />
      </div>
    </main>
    <page-footer />
  </div>
</template>

<script setup lang="ts">
import PageHeader from "~/components/Header/PageHeader.vue";
import PageFooter from "~/components/Footer/PageFooter.vue";
</script>

<style scoped lang="postcss"></style>
