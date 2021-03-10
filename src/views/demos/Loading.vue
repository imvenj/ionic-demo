<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Loading</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" @click="showLoading">Show Loading</ion-button>
      <ion-button expand="block" @click="showLoadingWithOptions">Show Loading with Options</ion-button>
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
  loadingController
} from '@ionic/vue'

export default defineComponent({
  name: 'Loading',
  props: {
    timeout: {
      type: Number,
      default: 1000
    }
  },
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButton
  },
  setup(props) {
    const showLoading = async () => {
      const loading = await loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Loading...',
        duration: props.timeout
      })
      await loading.present()
      setTimeout(() => {
        loading.dismiss()
      }, props.timeout)
    }
    const showLoadingWithOptions = async () => {
      const loading = await loadingController.create({
        spinner: null,
        duration: props.timeout,
        message: 'Click the backdrop to dismiss early...',
        translucent: true,
        cssClass: 'custom-class custom-loading',
        backdropDismiss: true
      })
      await loading.present()
      setTimeout(() => {
        loading.dismiss()
      }, props.timeout)
    }
    return { showLoading, showLoadingWithOptions }
  }
})
</script>

<style>

</style>
