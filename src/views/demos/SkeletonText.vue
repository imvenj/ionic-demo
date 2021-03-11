<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>SkeletonText</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Show Normal content -->
      <div v-if="!loading">Show normal content</div>
      <!-- Show skeleton text while loading -->
      <div v-if="loading">
        <div class="ion-padding">
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          <ion-skeleton-text></ion-skeleton-text>
          <ion-skeleton-text animated style="width:88%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width:70%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width:60%"></ion-skeleton-text>
        </div>

        <ion-list>
          <ion-list-header>
            <ion-label>
              <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
            </ion-label>
          </ion-list-header>
          <ion-item v-for="i in 5" :key="i">
            <ion-avatar slot="start">
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-avatar>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style="width:50%"></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style="width:80%"></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style="width:60%"></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
      

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
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonSkeletonText
} from '@ionic/vue'

export default defineComponent({
  name: ' SkeletonText',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonItem,
    IonAvatar,
    IonLabel,
    IonSkeletonText
  },
  setup() {
    const loading = ref(true)
    return { loading }
  }
})
</script>

<style>

</style>
