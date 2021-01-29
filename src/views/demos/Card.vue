<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Card</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <img src="/assets/shapes.svg">
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <ion-label>ion-item in a card, icon left, button right</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags,
          within an ion-card-content element.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item href="#" class="ion-activated">
          <ion-icon :icon="wifi" slot="start"></ion-icon>
          <ion-label>Card Link Item 1 activated</ion-label>
        </ion-item>

        <ion-item href="#">
          <ion-icon :icon="wine" slot="start"></ion-icon>
          <ion-label>Card Link Item 2</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon :icon="warning" slot="start"></ion-icon>
          <ion-label>Card Button Item 1 activated</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon :icon="walk" slot="start"></ion-icon>
          <ion-label>Card Button Item 2</ion-label>
        </ion-item>
      </ion-card>
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
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
  IonLabel,
  IonIcon,
  IonButton,
  IonItem,
  IonToolbar
} from '@ionic/vue'
import { pin, walk, warning, wifi, wine } from 'ionicons/icons'

export default defineComponent({
  name: ' Card',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonLabel,
    IonIcon,
    IonButton,
    IonItem,
    IonToolbar
  },
  setup() {
    return { pin, walk, warning, wifi, wine }
  }
})
</script>

<style>

</style>
