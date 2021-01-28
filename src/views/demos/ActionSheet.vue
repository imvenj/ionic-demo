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
        <ion-button @click="showActionSheet">
          Show Action Sheet
        </ion-button>
      </div>
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
    IonToolbar
  },
  setup() {
    const showActionSheet = async () => {
      const actionSheet = await actionSheetController.create({
        header: 'Albumn',
        buttons: [
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
      })

      return actionSheet.present()
    }
    return { showActionSheet }
  }
})
</script>

<style>

</style>
