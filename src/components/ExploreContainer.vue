<template>
  <div id="container">
    <strong>{{ name }} - <a @click="showSample">Show Sample</a></strong><br>
    <strong><a @click="router.push('/tabs/tab1/demo')">Show Demo</a></strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  name: 'ExploreContainer',
  props: {
    name: String
  },
  setup() {
    const router = useRouter();

    function showSample() {
      router.push('/tabs/tab1/sample');
    }

    return { router, showSample }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>