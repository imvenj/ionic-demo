<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" @click="showModal">Show Modal (Code)</ion-button>
      <ion-button expand="block" @click="setOpen(true)">Show Modal (Component)</ion-button>
    </ion-content>

    <ion-modal
      :is-open="isOpenRef"
      css-class="my-custom-class"
      @onDidDismiss="setOpen(false)"
    >
      <!-- why :data="data" in example code ??? -->
      <my-modal title="Modal from component"></my-modal>
    </ion-modal>
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
  modalController,
  IonModal
} from '@ionic/vue'

import MyModal from '@/components/MyModel.vue'

export default defineComponent({
  name: 'Modal',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonButton,
    IonToolbar,
    IonModal,
    MyModal
  },
  setup() {
    const isOpenRef = ref(false)
    const showModal = async () => {
      const modal = await modalController.create({
        component: MyModal,
        cssClass: 'my-model-class',
        componentProps: {
          title: 'My Title'
        }
      })

      modal.present()
    }

    const setOpen = (open: boolean) => {
      isOpenRef.value = open
    }

    return { showModal, isOpenRef, setOpen }
  }
})
</script>

<style>

</style>
