<template>
  <v-navigation-drawer v-model="drawer" expand-on-hover rail>
    <v-list>
      <v-list-item title="Sandra Adams" subtitle="sandra_a88@gmailcom">
        <template v-slot:prepend><v-avatar color="surface-variant"></v-avatar></template>
      </v-list-item>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item href="/" prepend-icon="mdi-home-account" title="Home" value="myfiles"></v-list-item>
        <v-list-item href="/about" prepend-icon="mdi-information" title="About" value="shared"></v-list-item>
       
      </v-list>
    </v-list>
  </v-navigation-drawer>

  <!-- <v-app-bar density="compact" :elevation="1">
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar> -->
</template>

<script>
export default {
  data: () => ({ drawer: true }),
}
</script>
