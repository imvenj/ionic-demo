<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Segment</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="favorites" @ionChange="segmentChanged($event)">
          <ion-segment-button value="all">All</ion-segment-button>
          <ion-segment-button value="favorites">Favorites</ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>Default</ion-list-header>
      <ion-segment value="map">
        <ion-segment-button value="call">Call</ion-segment-button>
        <ion-segment-button value="favorite">Favorite</ion-segment-button>
        <ion-segment-button value="map">Map</ion-segment-button>
      </ion-segment>

      <ion-segment color="secondary" value="call">
        <ion-segment-button value="call">
          <ion-icon :icon="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="favorite">
          <ion-icon :icon="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="map">
          <ion-icon :icon="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>

      <ion-segment color="tertiary" value="call">
        <ion-segment-button value="call">
          <ion-label>Call</ion-label>
          <ion-icon :icon="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="favorite">
          <ion-label>Favorite</ion-label>
          <ion-icon :icon="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="map">
          <ion-label>Map</ion-label>
          <ion-icon :icon="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>

      <ion-segment color="success" value="call">
        <ion-segment-button value="call" layout="icon-bottom">
          <ion-label>Call</ion-label>
          <ion-icon :icon="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="favorite" layout="icon-bottom">
          <ion-label>Favorite</ion-label>
          <ion-icon :icon="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="map" layout="icon-bottom">
          <ion-label>Map</ion-label>
          <ion-icon :icon="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>

      <ion-list-header>Scrollable</ion-list-header>
      <ion-segment scrollable color="warning" value="call">
        <ion-segment-button value="call" layout="icon-start">
          <ion-label>Call</ion-label>
          <ion-icon :icon="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="favorite" layout="icon-start">
          <ion-label>Favorite</ion-label>
          <ion-icon :icon="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="map" layout="icon-start">
          <ion-label>Map</ion-label>
          <ion-icon :icon="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>

      <ion-segment scrollable color="danger" value="call">
        <ion-segment-button value="call" layout="icon-end">
          <ion-label>Call</ion-label>
          <ion-icon :icon="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="favorite" layout="icon-end">
          <ion-label>Favorite</ion-label>
          <ion-icon :icon="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="map" layout="icon-end">
          <ion-label>Map</ion-label>
          <ion-icon :icon="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>
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
  IonSegment,
  IonSegmentButton,
  IonListHeader,
  IonIcon,
  IonLabel
} from '@ionic/vue'
import { call, heart, pin } from 'ionicons/icons'

export default defineComponent({
  name: ' Segment',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonListHeader,
    IonIcon,
    IonLabel
  },
  setup() {
    const segmentChanged = (event: CustomEvent) => {
      console.log('segment changed: ', event)
    }
    return { segmentChanged, call, heart, pin }
  }
})
</script>

<style>
ion-segment {
  margin: 5px auto;
}
</style>
