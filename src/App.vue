<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { DefaultLayout, EmptyLayout } from '@/layouts/'

export default Vue.extend({
  name: 'app',
  components: {
    DefaultLayout,
    EmptyLayout,
  },
  computed: {
    layout(): string {
      return (this.$route.meta.layout || 'default') + '-layout'
    },
  },
})
</script>
