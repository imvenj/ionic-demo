<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>FloatingActionButton</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      
      <ion-fab vertical="center" horizontal="center" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-fab vertical="top" horizontal="center" edge slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="arrowForwardCircle"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- fab placed to the top start -->
      <ion-fab vertical="top" horizontal="start" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="arrowBackCircle"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="settings"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="end">
          <ion-fab-button><ion-icon :icon="logoTwitter"></ion-icon></ion-fab-button>
        </ion-fab-list>
      </ion-fab>

      <!-- fab placed to the (vertical) center and start -->
      <ion-fab vertical="center" horizontal="start" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="share"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- fab placed to the (vertical) center and end -->
      <ion-fab vertical="center" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonToolbar
} from '@ionic/vue'

import { add, arrowForwardCircle, arrowBackCircle, arrowUpCircle, share, person, settings, logoTwitter } from 'ionicons/icons'

export default defineComponent({
  name: ' FloatingActionButton',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    IonToolbar
  },
  setup() {
    return { add, arrowForwardCircle, arrowBackCircle, arrowUpCircle, share, person, settings, logoTwitter }
  }
})
</script>

<style>

</style>
