<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>ItemGroup</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>Group with divider</ion-list-header>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>A</ion-label>
          </ion-item-divider>
          <ion-item>
            <ion-label>Adam</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Alan</ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>B</ion-label>
          </ion-item-divider>
          <ion-item detail lines="full">
            <ion-label>Ben</ion-label>
          </ion-item>
          <ion-item detail lines="none">
            <ion-label>Bill</ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider color="primary">
            <ion-label>C</ion-label>
          </ion-item-divider>
          <ion-item detail>
            <ion-label>Cathy</ion-label>
          </ion-item>
          <ion-item detail>
            <ion-label>Calvin</ion-label>
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
  IonToolbar,
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
  IonItemDivider,
  IonItemGroup
} from '@ionic/vue'

export default defineComponent({
  name: ' ItemGroup',
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
    IonListHeader,
    IonLabel,
    IonItemDivider,
    IonItemGroup
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
