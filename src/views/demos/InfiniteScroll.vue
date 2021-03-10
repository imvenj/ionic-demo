<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>InfiniteScroll</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-padding">
        <ion-button @click="toggleInfiniteScroll" expand="block">
          Toggle Infinite Scroll
        </ion-button>
      </div>

      <ion-list>
        <ion-item v-for="item in items" :key="item">
          <ion-label>{{ item }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll
        @ionInfinite="loadData($event)" 
        threshold="100px" 
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/vue'

export default defineComponent({
  name: ' InfiniteScroll',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  },
  setup() {
    const isDisabled = ref(false)
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value
    }

    const items: Ref<number[]> = ref([])
    const pushData = () => {
      const min = items.value.length
      const max = min + 20
      for (let i = min; i < max; ++i) {
        items.value.push(i)
      }
    }

    const loadData = (ev: CustomEvent) => {
      setTimeout(() => {
        pushData()
        console.log('Loading data:', ev.target);

        // 此处 target 为 IonInfiniteScroll，cast 成 any 避免编译报错
        (ev.target as any).complete()

        if (items.value.length === 1000) {
          (ev.target as any).disabled = true
        }
      }, 500)
    }

    pushData()

    return { toggleInfiniteScroll, loadData, items, isDisabled }
  }
})
</script>

<style>

</style>
