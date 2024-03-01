<script>
import AppMain from './components/AppMain.vue';

import axios from 'axios';

export default {
  components: {
    AppMain
  },
  data() {
    return {

    }
  },
}
</script>

<template lang="">
  <div>
    <AppMain/>
  </div>
</template>

<style lang="scss">
@use './components/styles/general.scss';
</style>