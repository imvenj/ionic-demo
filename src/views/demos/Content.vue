<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Content</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
      ref="content"
      :scroll-events="true"
      @ionScrollStart="logScrollStart"
      @ionScroll="logScrolling($event)"
      @ionScrollEnd="logScrollEnd">
      <div class="ion-padding">
        <ion-button expand="block" outline @click="scrollToBottom">
          Scroll To Bottom
        </ion-button>
      </div>
      <ion-list>
        <ion-item v-for="i in 30" :key="`key-${i}`">
          <ion-label>Item {{i}}</ion-label>
        </ion-item>
      </ion-list>
      <div class="ion-padding">
        <ion-button expand="block" outline @click="scrollToTop">
          Scroll To Top
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonToolbar
} from '@ionic/vue'

export default defineComponent({
  name: ' Content',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonToolbar
  },
  setup() {
    // TODO: Notice how to use ref in Vue 3!
    const content = ref()

    const logScrollStart = () => {
      console.log('Scroll started!')
    }

    const logScrolling = ($event: CustomEvent) => {
      // TODO: Dig into scroll event object.
      console.log('scrolling: ', $event.detail.deltaY)
    }

    const logScrollEnd = () => {
      console.log('Scroll ended!')
    }

    const scrollToBottom = () => {
      content.value.$el.scrollToBottom(300);
    }

    const scrollToTop = () => {
      content.value.$el.scrollToTop(300);
    }

    return { content, logScrollStart, logScrolling, logScrollEnd, scrollToBottom, scrollToTop }
  }
})
</script>

<style>

</style>
