<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">{{title}}</h1>
    </md-toolbar>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog">
      <cadastro></cadastro>
    </md-dialog>
    <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('dialog')">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
import Cadastro from '@/components/Cadastro';

export default {
  name: 'app',
  components: { Cadastro },
  data() {
    return {
      title: 'Vila Mota',
    };
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
  },
};
</script>

<style>

</style>
