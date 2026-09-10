<script setup>
  import { RouterView } from 'vue-router';
  import { useTheme } from 'vuetify';

  const theme = useTheme();
</script>

<template>
  <v-app>
    <v-app-bar collapse color="deep-purple">
      <v-app-bar-nav-icon icon="mdi-theme-light-dark" @click="theme.toggle()"/>
    </v-app-bar>
    <router-view/>
  </v-app>
</template>
