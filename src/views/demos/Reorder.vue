<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="toggle">Toggle</ion-button>
        </ion-buttons>
        <ion-title>Reorder</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>Reorder Icon</ion-list-header>
        <ion-reorder-group @ionItemReorder="doReorder($event)" :disabled="reorderRef">
          <ion-item>
            <ion-reorder slot="end"></ion-reorder>
            <ion-label>Item 1</ion-label>
          </ion-item>
          <ion-item>
            <ion-reorder slot="end"></ion-reorder>
            <ion-label>Item 2</ion-label>
          </ion-item>
          <ion-item>
            <ion-reorder slot="end"></ion-reorder>
            <ion-label>Item 3</ion-label>
          </ion-item>
          <ion-item>
            <ion-reorder slot="end"></ion-reorder>
            <ion-label>Item 4</ion-label>
          </ion-item>
        </ion-reorder-group>
      </ion-list>
      <ion-list>
        <ion-list-header>Custom Reorder Icon</ion-list-header>
        <ion-reorder-group @ionItemReorder="doReorder($event)" :disabled="reorderRef">
          <ion-item>
            <ion-reorder slot="start">
              <ion-icon :icon="refresh"></ion-icon>
            </ion-reorder>
            <ion-label>Item 5</ion-label>
          </ion-item>
          <ion-item>
            <ion-reorder slot="start">
              <ion-icon :icon="refresh"></ion-icon>
            </ion-reorder>
            <ion-label>Item 6</ion-label>
          </ion-item>
          <ion-item>
            <ion-reorder slot="start">
              <ion-icon :icon="refresh"></ion-icon>
            </ion-reorder>
            <ion-label>Item 7</ion-label>
          </ion-item>
        </ion-reorder-group>
      </ion-list>
      <ion-list>
        <ion-list-header>Reorder Item</ion-list-header>
        <ion-reorder-group @ionItemReorder="doReorder($event)" :disabled="reorderRef">
          <ion-reorder>
            <ion-item>
              <ion-label>Item 8</ion-label>
            </ion-item>
          </ion-reorder>
          <ion-reorder>
            <ion-item>
              <ion-label>Item 9</ion-label>
            </ion-item>
          </ion-reorder>
          <ion-reorder>
            <ion-item>
              <ion-label>Item 10</ion-label>
            </ion-item>
          </ion-reorder>
        </ion-reorder-group>
      </ion-list>
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
  IonList,
  IonListHeader,
  IonItem,
  IonReorder,
  IonReorderGroup,
  IonLabel,
  IonIcon,
  IonButton
} from '@ionic/vue'
import { refresh } from 'ionicons/icons'

export default defineComponent({
  name: ' Reorder',
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
    IonReorder,
    IonReorderGroup,
    IonLabel,
    IonIcon,
    IonButton
  },
  setup() {
    const reorderRef = ref(true)
    const toggle = () => {
      console.log('toggle reorder')
      reorderRef.value = !reorderRef.value
    }
    const doReorder = (event: CustomEvent) => {
      console.log('from: ', event.detail.from, ' to: ', event.detail.to);
      (event.target as any).complete()
    }
    return { refresh, reorderRef, toggle, doReorder }
  }
})
</script>

<style>

</style>
