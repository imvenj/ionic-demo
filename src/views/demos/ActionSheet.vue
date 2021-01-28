<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>ActionSheet</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-text-center ion-padding">
        <ion-button expand="block" @click="showActionSheet">
          Show Action Sheet (Code)
        </ion-button>

        <ion-button expand="block" @click="setOpen(true)">
          Show Action Sheet (Component)
        </ion-button>
      </div>

      <ion-action-sheet
        :is-open="isOpenRef"
        header="Albums"
        :buttons="buttons"
        @onDidDismiss="setOpen(false)"
      >
      </ion-action-sheet>
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
  IonToolbar,
  IonActionSheet,
  IonButton,
  actionSheetController
} from '@ionic/vue'
import { shareOutline } from 'ionicons/icons'

export default defineComponent({
  name: 'ActionSheet',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonActionSheet,
    IonButton,
    IonToolbar
  },
  setup() {
    const isOpenRef = ref(false)
    const setOpen = (state: boolean) => {
      isOpenRef.value = state
    }
    const buttons = [
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete handler')
        }
      },
      {
        text: 'Share',
        icon: shareOutline,
        handler: () => {
          console.log('Share handler')
        }
      },
      {
        text: 'Favorite',
        handler: () => {
          console.log('Favorite handler')
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel handler')
        }
      }
    ]
    const showActionSheet = async () => {
      const actionSheet = await actionSheetController.create({
        header: 'Albumn',
        cssClass: 'action-sheet-component',
        buttons: buttons
      })

      return actionSheet.present()
    }
    return { isOpenRef, setOpen, buttons, showActionSheet }
  }
})
</script>

<style>

</style>
