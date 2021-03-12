<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Item</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list ref="listItem">
        <ion-list-header>Items with Labels</ion-list-header>
        <ion-item>
          <ion-label>Label</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Label with icon</ion-label>
          <ion-icon :icon="logoIonic" slot="end"></ion-icon>
        </ion-item>
        <ion-list-header>Color Items</ion-list-header>
        <ion-item color="primary">
          <ion-label>Primary</ion-label>
        </ion-item>
        <ion-item color="secondary">
          <ion-label>Secondary</ion-label>
        </ion-item>
        <ion-item color="tertiary">
          <ion-label>Tertiary</ion-label>
        </ion-item>
        <ion-item color="success">
          <ion-label>Success</ion-label>
        </ion-item>
        <ion-item color="warning">
          <ion-label>Warning</ion-label>
        </ion-item>
        <ion-item color="danger">
          <ion-label>Danger</ion-label>
        </ion-item>

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
          <ion-item>
            <ion-label>Ben</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Bill</ion-label>
          </ion-item>
        </ion-item-group>
        <ion-list-header>Sliding Items</ion-list-header>

        <!-- Sliding item with text options on both sides -->
        <ion-item-sliding ref="slidingItem">
          <ion-item-options side="start">
            <ion-item-option @click="favorite(slidingItem)">Favorite</ion-item-option>
            <ion-item-option color="secondary" @click="share">Share</ion-item-option>
            <ion-item-option color="success" @click="unread">Unread</ion-item-option>
          </ion-item-options>

          <ion-item>
            <ion-label>Item Options</ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="danger" expandable @click="remove">Delete</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
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
  IonIcon,
  IonItem,
  IonLabel,
  IonListHeader,
  IonItemGroup,
  IonItemDivider,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/vue'

import { logoIonic } from 'ionicons/icons'

export default defineComponent({
  name: ' Item',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonList,
    IonIcon,
    IonItem,
    IonLabel,
    IonListHeader,
    IonItemGroup,
    IonItemDivider,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
  },
  setup() {
    const listItem = ref(null)
    const slidingItem = ref(null)
    const favorite = () => {
      console.log('favorite: ');
      // This is the correct way to call method on component
      // Reference: 
      // https://ionicframework.com/docs/vue/troubleshooting#method-on-component-is-not-a-function
      (listItem.value as any).$el.closeSlidingItems()
    }
    const unread = () => {
      console.log('unread: ');
      (slidingItem.value as any).$el.close()
    }
    const share = () => {
      console.log('share: ');
      (slidingItem.value as any).$el.close()
    }
    const remove = () => {
      console.log('delete: ');
      (slidingItem.value as any).$el.close()
    }
    return { logoIonic, favorite, unread, share, remove, listItem, slidingItem }
  }
})
</script>

<style>

</style>
