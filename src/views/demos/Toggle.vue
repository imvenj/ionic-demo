<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Toggle</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Primary</ion-label>
          <ion-toggle checked color="primary" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Secondary</ion-label>
          <ion-toggle checked color="secondary" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Tertiary</ion-label>
          <ion-toggle checked color="tertiary" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Success</ion-label>
          <ion-toggle checked color="success" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Warning</ion-label>
          <ion-toggle checked color="warning" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Danger</ion-label>
          <ion-toggle checked color="danger" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Dark</ion-label>
          <ion-toggle checked color="dark" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Medium</ion-label>
          <ion-toggle checked color="medium" slot="start"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Light</ion-label>
          <ion-toggle checked color="light" slot="start"></ion-toggle>
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
  IonToggle
} from '@ionic/vue'

export default defineComponent({
  name: ' Toggle',
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
    IonToggle
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
