<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Avatar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>
        <ion-label>Avatar Demo 1</ion-label>
      </ion-list-header>
      <ion-avatar class="ion-margin-start">
        <img src="/assets/shapes.svg">
      </ion-avatar>
      <ion-list-header>
        <ion-label>Avatar Demo 2</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img src="/assets/shapes.svg">
          </ion-avatar>
          <ion-label>Avatar 1</ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img src="/assets/shapes.svg">
          </ion-avatar>
          <ion-label>
            <h2>Title</h2>
            <h3>Subtitle</h3>
            <p>Description</p>
          </ion-label>
        </ion-item>
      </ion-list>
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
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonToolbar
} from '@ionic/vue'

export default defineComponent({
  name: ' Avatar',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonList,
    IonListHeader,
    IonItem,
    IonAvatar,
    IonLabel,
    IonToolbar
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
