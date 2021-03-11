<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Range</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>Adjust Display</ion-list-header>
        <ion-item>
          <ion-range >
            <ion-icon :icon="sunny" size="small" slot="start"></ion-icon>
            <ion-icon :icon="sunny" size="medium" slot="end"></ion-icon>
          </ion-range>
        </ion-item>
        <ion-item>
          <ion-range min="-200" max="200" pin color="secondary">
            <ion-icon :icon="contrast" size="small" slot="start"></ion-icon>
            <ion-icon :icon="contrast" size="medium" slot="end"></ion-icon>
          </ion-range>
        </ion-item>
        <ion-item>
          <ion-range min="0" max="100" pin dual-knobs :value="{ lower: 30, upper: 50 }" color="dark">
            <ion-icon :icon="brush" size="small" slot="start"></ion-icon>
            <ion-icon :icon="brush" size="medium" slot="end"></ion-icon>
          </ion-range>
        </ion-item>
        <ion-item>
          <ion-range min="-30" max="80" snaps ticks step="10" value="20" color="danger">
            <ion-icon color="danger" :icon="thermometer" size="small" slot="start"></ion-icon>
            <ion-icon color="danger" :icon="thermometer" size="medium" slot="end"></ion-icon>
          </ion-range>
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
  IonListHeader,
  IonItem,
  IonIcon,
  IonRange
} from '@ionic/vue'
import { sunny, contrast, brush, thermometer } from 'ionicons/icons'

export default defineComponent({
  name: ' Range',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
    IonRange
  },
  setup() {
    return { sunny, contrast, brush, thermometer }
  }
})
</script>

<style>

</style>
