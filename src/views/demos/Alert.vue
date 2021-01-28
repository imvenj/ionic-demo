<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Alert</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-text-center ion-padding">
        <ion-button expand="block" @click="showAlert">
          Alert
        </ion-button>

        <ion-button expand="block" @click="showAlertWithButtons">
          Alert with Buttons
        </ion-button>

        <ion-button expand="block" @click="showConfirm">
          Alert Confirm
        </ion-button>

        <ion-button expand="block" @click="showPrompt">
          Alert Prompt
        </ion-button>

        <ion-button expand="block" @click="showAlertRadio">
          Alert Radio
        </ion-button>

        <ion-button expand="block" @click="showAlertCheckbox">
          Alert Checkbox
        </ion-button>
      </div>

      <div class="ion-text-center ion-padding">
        <ion-button expand="block" @click="setOpen(true)">
          Alert (Component)
        </ion-button>
      </div>

      <ion-alert
        :is-open="isOpenRef"
        header="Alert"
        sub-header="Subtitle"
        message="This is an alert message."
        css-class="my-custom-class"
        :buttons="buttons"
        @onDidDismiss="setOpen(false)">
      </ion-alert>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonButton,
  IonAlert,
  IonToolbar,
  alertController
} from '@ionic/vue'

export default defineComponent({
  name: 'Alert',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonButton,
    IonAlert,
    IonToolbar
  },
  setup() {
    const isOpenRef = ref(false)

    const setOpen = (state: boolean) => {
      isOpenRef.value = state
    }

    const buttons = ['Cancel', 'OK']

    const showAlert = async () => {
      const alert = await alertController.create({
        header: 'Alert',
        subHeader: 'Normal Alert',
        message: 'This is an normal alert.',
        buttons: ['OK']
      })
      alert.present()
    }

    const showAlertWithButtons = async () => {
      const alert = await alertController.create({
        header: 'Alert',
        subHeader: 'Alert with buttons',
        message: 'This is an normal alert with buttons.',
        buttons: ['Cancel', 'Open', 'Modal']
      })
      alert.present()
    }

    const showConfirm = async () => {
      const alert = await alertController.create({
        header: 'Confirm',
        message: 'This is a <strong>confirm</strong>.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('cancel called.')
            }
          },
          {
            text: 'OK',
            handler: () => {
              console.log('OK called.')
            }
          }
        ]
      })
      alert.present()
    }

    const showPrompt = async () => {
      const alert = await alertController.create({
        header: 'Prompt',
        inputs: [
          {
            placeholder: 'Placeholder 1'
          },
          {
            name: 'name2',
            id: 'name2-id',
            value: 'hello',
            placeholder: 'Placeholder 2'
          },
          {
            name: 'name3',
            value: 'https://www.google.com',
            type: 'url',
            placeholder: 'My favorite site'
          },
          {
            name: 'name4',
            type: 'date',
            min: '2017-01-01',
            max: '2022-12-31'
          },
          {
            name: 'name5',
            type: 'date'
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
          },
          {
            name: 'name7',
            type: 'number'
          },
          {
            name: 'name8',
            type: 'password',
            placeholder: 'Type password',
            attributes: {
              maxLength: 4,
              inputMode: 'decimal'
            }
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('cancel called.')
            }
          },
          {
            text: 'OK',
            handler: () => {
              console.log('OK called.')
            }
          }
        ]
      })
      alert.present()
    }

    const showAlertRadio = async () => {
      const alert = await alertController.create({
        cssClass: 'my-custom-class',
        header: 'Radio',
        inputs: [
          {
            type: 'radio',
            label: 'Radio 1',
            value: 'value1',
            checked: true,
          },
          {
            type: 'radio',
            label: 'Radio 2',
            value: 'value2',
          },
          {
            type: 'radio',
            label: 'Radio 3',
            value: 'value3',
          },
          {
            type: 'radio',
            label: 'Radio 4',
            value: 'value4',
          },
          {
            type: 'radio',
            label: 'Radio 5',
            value: 'value5',
          },
          {
            type: 'radio',
            label: 'Radio 6',
            value: 'value6',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel')
            },
          },
          {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok: ', data)
            },
          },
        ],
      });
      return alert.present();
    }

    const showAlertCheckbox = async () => {
      const alert = await alertController.create({
        cssClass: 'my-custom-class',
        header: 'Checkbox',
        inputs: [
          {
            type: 'checkbox',
            label: 'Checkbox 1',
            value: 'value1',
            checked: true,
          },

          {
            type: 'checkbox',
            label: 'Checkbox 2',
            value: 'value2',
          },

          {
            type: 'checkbox',
            label: 'Checkbox 3',
            value: 'value3',
          },

          {
            type: 'checkbox',
            label: 'Checkbox 4',
            value: 'value4',
          },

          {
            type: 'checkbox',
            label: 'Checkbox 5',
            value: 'value5',
          },

          {
            type: 'checkbox',
            label: 'Checkbox 6',
            value: 'value6',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel')
            },
          },
          {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok: ', data)
            },
          },
        ],
      });
      return alert.present();
    }

    return { showAlert, showAlertWithButtons, showConfirm, showPrompt, showAlertRadio, showAlertCheckbox, isOpenRef, setOpen, buttons }
  }
})
</script>

<style>

</style>
