<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Toolbar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-toolbar>
        <ion-title>Title Only</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Back Button</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-title size="small">Small Title above a Default Title</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title>Default Title</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="secondary">
            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Default Buttons</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button fill="solid">
            <ion-icon slot="start" :icon="personCircle"></ion-icon>
            Contact
          </ion-button>
        </ion-buttons>
        <ion-title>Solid Buttons</ion-title>
        <ion-buttons slot="primary">
          <ion-button fill="solid" color="secondary">
            Help
            <ion-icon slot="end" :icon="helpCircle"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button fill="outline">
            <ion-icon slot="start" :icon="star"></ion-icon>
            Star
          </ion-button>
        </ion-buttons>
        <ion-title>Outline Buttons</ion-title>
        <ion-buttons slot="primary">
          <ion-button color="danger" fill="outline">
            Edit
            <ion-icon slot="end" :icon="create"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            Account
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="danger">
            Edit
          </ion-button>
        </ion-buttons>
        <ion-title>Text Only Buttons</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>

        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Left side menu toggle</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button @click="clickedStar()">
            <ion-icon slot="icon-only" :icon="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Right side menu toggle</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button @click="clickedSearch()">
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-searchbar placeholder="Search Favorites"></ion-searchbar>
      </ion-toolbar>

      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all">
            All
          </ion-segment-button>
          <ion-segment-button value="favorites">
            Favorites
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>

      <ion-toolbar color="secondary">
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="primary">
            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Secondary Toolbar</ion-title>
      </ion-toolbar>

      <ion-toolbar color="dark">
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="danger">
            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Dark Toolbar</ion-title>
      </ion-toolbar>

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
  IonButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonMenuButton
} from '@ionic/vue'
import { personCircle, search, star, create, helpCircle, ellipsisVertical, ellipsisHorizontal } from 'ionicons/icons'

export default defineComponent({
  name: ' Toolbar',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonMenuButton
  },
  setup() {
    const clickedSearch = () => {
      console.log('search clicked')
    }
    const clickedStar = () => {
      console.log('star clicked')
    }
    return { personCircle, search, star, create, helpCircle, clickedSearch, clickedStar, ellipsisVertical, ellipsisHorizontal }
  }
})
</script>

<style>

</style>
