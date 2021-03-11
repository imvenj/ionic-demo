<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Spinner</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Default</ion-label>
          <ion-spinner></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Lines</ion-label>
          <ion-spinner name="lines"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Lines Small</ion-label>
          <ion-spinner name="lines-small"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Dots</ion-label>
          <ion-spinner name="dots"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Bubbles</ion-label>
          <ion-spinner name="bubbles"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Circles</ion-label>
          <ion-spinner name="circles"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Circular</ion-label>
          <ion-spinner name="circular"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Crescent</ion-label>
          <ion-spinner name="crescent"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Paused</ion-label>
          <ion-spinner paused></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Primary</ion-label>
          <ion-spinner color="primary"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Secondary</ion-label>
          <ion-spinner color="secondary"></ion-spinner>
        </ion-item>
        <ion-item>
          <ion-label>Tertiary</ion-label>
          <ion-spinner color="tertiary"></ion-spinner>
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
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner
} from '@ionic/vue'

export default defineComponent({
  name: ' Spinner',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonSpinner
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
