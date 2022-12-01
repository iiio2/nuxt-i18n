<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>

    <NuxtLink :to="switchLocalePath('es')">Spanish</NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')">French</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
