<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Ion Framework Demo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item detail v-for="demo in demos" :key="demo.path">
          <ion-icon :icon="bookmarkOutline" slot="start"></ion-icon>
          <ion-label @click="router.push(`/tabs/tab1/demo/${demo.path}`)">{{ demo.name }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonTitle,
  IonIcon,
  IonLabel
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { demos } from '@/config/DemoNames'
import { bookmarkOutline } from 'ionicons/icons'

export default defineComponent({
  name: 'Demo',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonList,
    IonItem,
    IonTitle,
    IonIcon,
    IonLabel
  },
  setup() {
    const router = useRouter()

    return { router, demos, bookmarkOutline }
  }
})
</script>

<style scoped>
ion-icon {
  padding: 5px;
  background-color: var(--ion-color-primary);
  color: white;
  border-radius: 50%;
}
</style>
