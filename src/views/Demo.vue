<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ion Framework Demo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item class="ion-activatable" detail v-for="demo in demos" :key="demo.path">
          <ion-icon :icon="bookmarkOutline" slot="start"></ion-icon>
          <ion-label @click="router.push(`/${demo.path}`)">{{ demo.name }}</ion-label>
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
