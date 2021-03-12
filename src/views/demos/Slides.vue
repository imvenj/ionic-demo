<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Slides</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-slides pager="true" :options="options">
        <ion-slide>
          <h1>Slide 1</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide
} from '@ionic/vue'

export default defineComponent({
  name: ' Slides',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonSlides,
    IonSlide
  },
  setup() {
    const options = {
      initialSlide: 1,
      speed: 400
    }
    return { options }
  }
})
</script>

<style>
ion-slides {
  height: 100%;
}
</style>
