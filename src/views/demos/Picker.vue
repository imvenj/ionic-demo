<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Picker</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" @click="showSingleColumn">Single Column</ion-button>
      <ion-button expand="block" @click="showDoubleColumn">Double Column</ion-button>
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
  IonButton,
  IonToolbar,
  pickerController,
} from '@ionic/vue'

export default defineComponent({
  name: ' Picker',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonButton,
    IonToolbar
  },
  setup() {

    const showSingleColumn = async () => {
      const options = [
        'Dog', 'Cat', 'Bird', 'Lizard', 'Chinchilla'
      ]

      const picker = await pickerController.create({
        columns: [
          {
            name: 'col-0',
            options: options.map((o: string, i: number) => ({
              text: o,
              value: i
            }))
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: (value) => {
              console.log('Got Value: ', value);
            }
          }
        ]
      })
      picker.present()
    }

    const showDoubleColumn = async () => {
      const multipleOptions = [
        [
          'Minified',
          'Responsive',
          'Full Stack',
          'Mobile First',
          'Serverless'
        ],
        [
          'Tomato',
          'Avocado',
          'Onion',
          'Potato',
          'Artichoke'
        ]
      ]

      const picker = await pickerController.create({
        columns: multipleOptions.map((l: string[], i: number) => ({
          name: `col-${i}`,
          options: l.map((o: string, n: number) => ({
            text: o,
            value: n
          }))
        })),
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: (value) => {
              console.log('Got Value: ', value);
            }
          }
        ]
      })
      picker.present()
    }

    return { showSingleColumn, showDoubleColumn }
  }
})
</script>

<style>

</style>
