<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("meta.title"),
  meta: [{ name: t("meta.title"), content: t("meta.description") }],
});
</script>
