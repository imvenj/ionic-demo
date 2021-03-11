<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>ProgressBar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>Default</ion-list-header>
        <ion-progress-bar></ion-progress-bar>
      </ion-list>
      <ion-list>
        <ion-list-header>Default at 50%</ion-list-header>
        <ion-progress-bar value="0.5"></ion-progress-bar>
      </ion-list>
      <ion-list>
        <ion-list-header>Color</ion-list-header>
        <ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>
        <ion-progress-bar color="success" value="0.75"></ion-progress-bar>
      </ion-list>
      <ion-list>
        <ion-list-header>Indeterminate</ion-list-header>
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
      </ion-list>
      <ion-list>
        <ion-list-header>Indeterminate (reversed)</ion-list-header>
        <ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
      </ion-list>
      <ion-list>
        <ion-list-header>Buffer</ion-list-header>
        <ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
      </ion-list>
      <ion-list>
        <ion-list-header>Custom</ion-list-header>
        <ion-progress-bar class="custo-progress" value="0.25" buffer="0.5"></ion-progress-bar>
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
  IonProgressBar,
  IonListHeader,
  IonList
} from '@ionic/vue'

export default defineComponent({
  name: ' ProgressBar',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonProgressBar,
    IonListHeader,
    IonList
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
ion-content ion-progress-bar {
  margin: 10px 0;
}
.custo-progress {
  --background: cyan;
  --progress-background: magenta;
  /* --buffer-background: yellow; */
}
</style>
