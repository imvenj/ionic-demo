<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Radio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>Fruits</ion-list-header>
        <ion-radio-group name="fruits" v-model="fruit" @ionChange="fruitSelected">
          <ion-item>
            <ion-label>Apple</ion-label>
            <ion-radio slot="start" value="apple"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Grape</ion-label>
            <ion-radio slot="start" value="grape"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Cherry</ion-label>
            <ion-radio slot="start" value="cherry"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <ion-list>
        <ion-list-header>Pizza Topping</ion-list-header>
        <ion-radio-group name="fruits" value="2">
          <ion-item>
            <ion-label>Beef</ion-label>
            <ion-radio slot="end" value="0"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Anchrovies</ion-label>
            <ion-radio slot="end" value="1"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Sausage</ion-label>
            <ion-radio slot="end" value="2"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Bellpepper</ion-label>
            <ion-radio slot="end" value="3"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Tomato</ion-label>
            <ion-radio slot="end" value="4"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Pepperoni</ion-label>
            <ion-radio slot="end" value="5"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonListHeader,
  IonList
} from '@ionic/vue'

export default defineComponent({
  name: ' Radio',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonRadioGroup,
    IonRadio,
    IonItem,
    IonLabel,
    IonListHeader,
    IonList
  },
  setup() {
    const fruit = ref('grape')
    const fruitSelected = (event: CustomEvent) => {
      console.log('selected fruit is: ', (event.target as any).value)
      nextTick(() => console.log('selected fruit from model: ', fruit.value))
    }
    return { fruitSelected, fruit }
  }
})
</script>

<style>

</style>
