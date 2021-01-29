<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Badge</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item-divider>
          Badge Colors
        </ion-item-divider>
        <ion-item-group>
          <ion-item>
            <ion-label>Primary (Default)</ion-label>
            <ion-badge color="primary">10</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Secondary</ion-label>
            <ion-badge color="secondary">20</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Tertiary</ion-label>
            <ion-badge color="tertiary">30</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Success</ion-label>
            <ion-badge color="success">40</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Warning</ion-label>
            <ion-badge color="warning">50</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Danger</ion-label>
            <ion-badge color="danger">60</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Light</ion-label>
            <ion-badge color="light">70</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Medium</ion-label>
            <ion-badge color="medium">80</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Dark</ion-label>
            <ion-badge color="dark">90</ion-badge>
          </ion-item>
        </ion-item-group>
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
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonBadge,
  IonToolbar
} from '@ionic/vue'

export default defineComponent({
  name: ' Badge',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonList,
    IonItem,
    IonItemGroup,
    IonItemDivider,
    IonLabel,
    IonBadge,
    IonToolbar
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
