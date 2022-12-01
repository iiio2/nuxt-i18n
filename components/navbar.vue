<template>
  <div>
    <NuxtLink :to="localePath('/')">Home</NuxtLink>
    <NuxtLink :to="localePath('/about')">About</NuxtLink>

    <NuxtLink :to="switchLocalePath('es')">Spanish</NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')">French</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
