<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <!-- Should not have back button. -->
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="i in 50" :key="i">
          <ion-label>Item {{ i }}</ion-label>
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
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
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
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel
  },
  setup() {
    return { cut }
  }
})
</script>

<style>

</style>
