<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Text</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-text color="secondary">
        <h1>H1: The quick brown fox jumps over the lazy dog</h1>
      </ion-text>

      <ion-text color="primary">
        <h2>H2: The quick brown fox jumps over the lazy dog</h2>
      </ion-text>

      <ion-text color="light">
        <h3>H3: The quick brown fox jumps over the lazy dog</h3>
      </ion-text>

      <ion-text color="danger">
        <h4 >H4: The quick brown fox jumps over the lazy dog</h4>
      </ion-text>

      <ion-text color="dark">
        <h5>H5: The quick brown fox jumps over the lazy dog</h5>
      </ion-text>

      <p>
        I saw a werewolf with a Chinese menu in his hand.
        Walking through the <ion-text color="danger"><sub>streets</sub></ion-text> of Soho in the rain.
        He <ion-text color="primary"><i>was</i></ion-text> looking for a place called Lee Ho Fook's.
        Gonna get a <ion-text color="secondary"><a>big dish of beef chow mein.</a></ion-text>
        <ion-text color="danger"><ion-icon :icon="cut"></ion-icon></ion-text>
      </p>
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
  IonText,
  IonIcon
} from '@ionic/vue'
import { cut } from 'ionicons/icons'

export default defineComponent({
  name: ' Text',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonText,
    IonIcon
  },
  setup() {
    return { cut }
  }
})
</script>

<style>

</style>
