<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Searchbar</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="keyword" slot=""></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item v-for="c in filteredCities" :key="c">
          <ion-label>{{ c }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/vue'

export default defineComponent({
  name: ' Searchbar',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel
  },
  setup() {
    const keyword = ref('')
    const cities = [
      'Amsterdam', 'Bogota', 'Cairo', 'Dhaka', 'Geneva', 'Glasgow', 'Hanoi', 'Hong Kong', 'Istanbul',
      'Jakatar', 'Kiel', 'Kyoto', 'Le havre', 'Lebanon', 'Lima', 'London', 'Los Angeles', 'Madrid',
      'Manila', 'Oslo', 'Panama City', 'Peking', 'San Francisco', 'Seoul', 'Taipeh', 'Tokyo', 'Washington'
    ]
    const filteredCities = computed(() => cities.filter(c => c.toLowerCase().startsWith(keyword.value.toLowerCase())))

    return { keyword, filteredCities }
  }
})
</script>

<style>

</style>
