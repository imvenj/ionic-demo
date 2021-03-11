<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Popover</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" @click="showPopover">Show Popover (code)</ion-button>
      <ion-button expand="block" @click="setOpen(true, $event)">Show Popover (component)</ion-button>
      <ion-popover
        :is-open="isOpenRef"
        css-class="my-custom-class"
        :event="event"
        :translucent="true"
        @onDidDismiss="setOpen(false, $event)"
      >
        <popover-content></popover-content>
      </ion-popover>
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
  IonPopover,
  IonButton,
  popoverController
} from '@ionic/vue'
import PopoverContent from '@/components/PopoverContent.vue'

export default defineComponent({
  name: ' Popover',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonPopover,
    IonButton,
    PopoverContent
  },
  setup() {
    const isOpenRef = ref(false)
    const event = ref()
    const setOpen = (open: boolean, evt?: Event) => {
      if (evt) {
        event.value = evt
      }
      console.log('event: ', evt)
      isOpenRef.value = open
    }

    const showPopover = async (ev: Event) => {
      const popover = await popoverController.create({
        component: PopoverContent,
        cssClass: 'my-custom-class',
        event: ev,
        translucent: true
      })
      console.log('event: ', ev)
      popover.present()
    }

    return { isOpenRef, setOpen, event, showPopover }
  }
})
</script>

<style>

</style>
