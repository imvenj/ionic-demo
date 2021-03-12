<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Navigation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" @click="openModal">Show Nav</ion-button>
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
  IonButton,
  modalController
} from '@ionic/vue'
import Nav from '@/views/demos/Nav.vue'

export default defineComponent({
  name: ' Navigation',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButton
  },
  setup() {
    const openModal = async () => {
      const modal = await modalController.create({
        component: Nav
      });

      await modal.present();
    }
    return { openModal }
  }
})
</script>

<style>

</style>
