<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-menu-button menu="first"></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>My Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    
    <ion-content class="ion-padding" id="main">
      <ion-button expand="block" @click="showMenu">Show Menu</ion-button>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
// TODO: Add IonSplitPane demo.

import { defineComponent } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  menuController,
  IonMenuButton,
  IonButton
} from '@ionic/vue'

export default defineComponent({
  name: ' Menu',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonList,
    IonItem,
    IonMenuButton,
    IonButton
  },
  setup() {
    const showMenu = () => {
      menuController.enable(true, 'first');
      menuController.open('first');
    }
    return { showMenu }
  }
})
</script>

<style>

</style>
