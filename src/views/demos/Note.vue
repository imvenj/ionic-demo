<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Note</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>Basic</ion-list-header>
      <ion-grid>
        <ion-row>
          <ion-col><ion-note color="default">Default</ion-note></ion-col>
          <ion-col><ion-note color="primary">Primary</ion-note></ion-col>
          <ion-col><ion-note color="secondary">Secondary</ion-note></ion-col>
          <ion-col><ion-note color="tertiary">Tertiary</ion-note></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-note color="success">Success</ion-note></ion-col>
          <ion-col><ion-note color="warning">Warning</ion-note></ion-col>
          <ion-col><ion-note color="danger">Danger</ion-note></ion-col>
          <ion-col><ion-note color="dark">Dark</ion-note></ion-col>
        </ion-row>
      </ion-grid>
      <ion-list>
        <ion-list-header>List Notes</ion-list-header>
        <ion-item>
          <ion-label>Default</ion-label>
          <ion-note color="default" slot="end">11</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Primary</ion-label>
          <ion-note color="primary" slot="end">22</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Secondary</ion-label>
          <ion-note color="secondary" slot="end">33</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Tertiary</ion-label>
          <ion-note color="tertiary" slot="end">44</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Success</ion-label>
          <ion-note color="success" slot="start">55</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Warning</ion-label>
          <ion-note color="warning" slot="start">66</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Danger</ion-label>
          <ion-note color="danger" slot="start">77</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Dark</ion-label>
          <ion-note color="dark" slot="start">88</ion-note>
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
  IonNote,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonGrid,
  IonCol,
  IonRow
} from '@ionic/vue'

export default defineComponent({
  name: ' Note',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonNote,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonGrid,
    IonCol,
    IonRow
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
