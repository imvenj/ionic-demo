<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Refresher</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-refresher
        slot="fixed"
        @ionRefresh="doRefresh($event)"
        pull-factor="0.5"
        pull-min="100"
        pull-max="200"
      >
        <ion-refresher-content
          :pulling-icon="chevronDownCircleOutline"
          pulling-text="Pull to refresh"
          refreshing-spinner="circles"
          refreshing-text="Refreshing..."
        ></ion-refresher-content>
      </ion-refresher>
      <div class="ion-padding">
        <h3>{{ contentRef }}</h3>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent
} from '@ionic/vue'
import { chevronDownCircleOutline } from 'ionicons/icons'

export default defineComponent({
  name: ' Refresher',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonRefresher,
    IonRefresherContent
  },
  setup() {
    const contentRef = ref('Not refreshed')
    const doRefresh = (event: CustomEvent) => {
      setTimeout(() => {
        (event.target as any).complete()
        contentRef.value = `Refreshed at: ${new Date()}`
      }, 2000)
    }
    return { doRefresh, contentRef, chevronDownCircleOutline }
  }
})
</script>

<style>

</style>
