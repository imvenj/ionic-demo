<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Chip</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>
        Basic
      </ion-list-header>
      <div class="ion-padding">
        <ion-chip>
          <ion-label>Default</ion-label>
        </ion-chip>
        <ion-chip>
          <ion-icon :icon="checkmarkCircle"></ion-icon>
          <ion-label>Icon</ion-label>
        </ion-chip>
        <ion-chip>
          <ion-avatar>
            <img src="/assets/shapes.svg" alt="">
          </ion-avatar>
          <ion-label>Avatar</ion-label>
        </ion-chip>
      </div>

      <ion-list-header>
        Colors
      </ion-list-header>
      <div class="ion-padding">
        <ion-chip color="primary">
          <ion-label>Primary</ion-label>
        </ion-chip>
        <ion-chip color="secondary">
          <ion-label>Secondary</ion-label>
        </ion-chip>
        <ion-chip color="tertiary">
          <ion-label>Tertiary</ion-label>
        </ion-chip>
        <ion-chip color="success">
          <ion-label>Success</ion-label>
        </ion-chip>
        <ion-chip color="warning">
          <ion-label>Warning</ion-label>
        </ion-chip>
        <ion-chip color="danger">
          <ion-label>Danger</ion-label>
        </ion-chip>
        <ion-chip color="light">
          <ion-label>Light</ion-label>
        </ion-chip>
        <ion-chip color="medium">
          <ion-label>Medium</ion-label>
        </ion-chip>
        <ion-chip color="dark">
          <ion-label>dark</ion-label>
        </ion-chip>
      </div>

      <ion-list-header>
        Outline
      </ion-list-header>

      <div class="ion-padding">
        <ion-chip outline color="primary">
          <ion-label>Primary</ion-label>
        </ion-chip>
        <ion-chip outline color="secondary">
          <ion-label>Secondary</ion-label>
        </ion-chip>
        <ion-chip outline color="tertiary">
          <ion-label>Tertiary</ion-label>
        </ion-chip>
        <ion-chip outline color="success">
          <ion-label>Success</ion-label>
        </ion-chip>
        <ion-chip outline color="warning">
          <ion-label>Warning</ion-label>
        </ion-chip>
        <ion-chip outline color="danger">
          <ion-label>Danger</ion-label>
        </ion-chip>
        <ion-chip outline color="light">
          <ion-label>Light</ion-label>
        </ion-chip>
        <ion-chip outline color="medium">
          <ion-label>Medium</ion-label>
        </ion-chip>
        <ion-chip outline color="dark">
          <ion-label>dark</ion-label>
        </ion-chip>
      </div>

      <ion-list-header>
        Icon
      </ion-list-header>

      <div class="ion-padding">
        <ion-chip outline color="primary">
          <ion-icon :icon="pin"></ion-icon>
          <ion-label>Madison</ion-label>
          <ion-icon :icon="closeCircle"></ion-icon>
        </ion-chip>
        <ion-chip outline color="secondary">
          <ion-icon :icon="heart"></ion-icon>
          <ion-label>Madison</ion-label>
          <ion-icon :icon="closeCircle"></ion-icon>
        </ion-chip>
      </div>

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
  IonChip,
  IonLabel,
  IonListHeader,
  IonIcon,
  IonAvatar,
  IonToolbar
} from '@ionic/vue'

import { close, closeCircle, checkmarkCircle, heart, pin } from 'ionicons/icons'

export default defineComponent({
  name: ' Chip',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonChip,
    IonLabel,
    IonListHeader,
    IonIcon,
    IonAvatar,
    IonToolbar
  },
  setup() {
    return { close, closeCircle, checkmarkCircle, heart, pin }
  }
})
</script>

<style>

</style>
