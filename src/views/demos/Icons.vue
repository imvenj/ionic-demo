<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Icons</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-icon :icon="accessibilityOutline"></ion-icon>
      <ion-icon :icon="heart"></ion-icon>
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
  IonIcon
} from '@ionic/vue'

import { accessibilityOutline, heart } from 'ionicons/icons'

export default defineComponent({
  name: ' Icons',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonIcon
  },
  setup() {
    return { accessibilityOutline, heart }
  }
})
</script>

<style scoped>
ion-icon {
  font-size: 48px;
}
</style>
