<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Thumbnail</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>Default</ion-list-header>
      <div class="ion-padding">
        <ion-thumbnail>
          <img src="/assets/disk.png" alt="">
        </ion-thumbnail>
      </div>
      <ion-list>
        <ion-list-header>Item thumbnails</ion-list-header>
        <ion-item>
          <ion-label>Lorem ipsum</ion-label>
          <ion-thumbnail slot="start"><img src="/assets/disk.png" alt=""></ion-thumbnail>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Lorem ipsum</h2>
            <p>dolor sit amet</p>
          </ion-label>
          <ion-thumbnail slot="start"><img src="/assets/disk.png" alt=""></ion-thumbnail>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Lorem ipsum</h2>
            <p>dolor sit amet</p>
            <p>consectetur adipiscing elit. Duis ut urna neque.</p>
          </ion-label>
          <ion-thumbnail slot="start"><img src="/assets/disk.png" alt=""></ion-thumbnail>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Lorem ipsum</h2>
          </ion-label>
          <ion-thumbnail slot="end"><img src="/assets/disk.png" alt=""></ion-thumbnail>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Lorem ipsum</h2>
            <p>dolor sit amet</p>
          </ion-label>
          <ion-thumbnail slot="end"><img src="/assets/disk.png" alt=""></ion-thumbnail>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Lorem ipsum</h2>
            <p>dolor sit amet</p>
            <p>consectetur adipiscing elit. Duis ut urna neque.</p>
          </ion-label>
          <ion-thumbnail slot="end"><img src="/assets/disk.png" alt=""></ion-thumbnail>
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
  IonThumbnail,
  IonListHeader
} from '@ionic/vue'

export default defineComponent({
  name: ' Thumbnail',
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
    IonThumbnail,
    IonListHeader
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
