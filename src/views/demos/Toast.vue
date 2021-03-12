<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Toast</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" @click="showToast">Toast (code)</ion-button>
      <ion-button expand="block" @click="setShow(true)">Toast (component)</ion-button>

      <ion-toast
        :is-open="showRef"
        message="Your settings have been saved."
        :duration="2000"
        @onDidDismiss="setShow(false)"
      ></ion-toast>
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
  IonButton,
  IonToast,
  toastController
} from '@ionic/vue'
import { star } from 'ionicons/icons'

export default defineComponent({
  name: ' Toast',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButton,
    IonToast,
  },
  setup() {
    const showRef = ref(false)
    const setShow = (show: boolean) => {
      showRef.value = show
    }
    const showToast = async () => {
      const toast = await toastController.create({
          header: 'Toast header',
          message: 'Click to Close',
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: star,
              text: 'Favorite',
              handler: () => {
                console.log('Favorite clicked');
              }
            },
            {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
      })
      toast.present()
    }
    return { showRef, showToast, setShow }
  }
})
</script>

<style>

</style>
