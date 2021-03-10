<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Input</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>
        Label Positions
      </ion-list-header>
      <ion-item>
        <ion-label>Default Label</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed">Fixed Label</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Stacked Label</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-list-header>
        Input Types
      </ion-list-header>
      <ion-item>
        <ion-label>Text Input</ion-label>
        <ion-input type="text" ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Number Input</ion-label>
        <ion-input type="number" ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Password Input</ion-label>
        <ion-input type="password" ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Disabled</ion-label>
        <ion-input disabled value="abcde"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Readonly</ion-label>
        <ion-input readonly value="abcde"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Multiple Input</ion-label>
        <ion-input placeholder="Address Line 1" ></ion-input>
        <ion-input placeholder="Address Line 2" ></ion-input>
        <ion-input placeholder="City" ></ion-input>
        <ion-input placeholder="State" ></ion-input>
        <ion-input placeholder="Zip" ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Text Area</ion-label>
        <ion-textarea placeholder="placeholder"></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label>Text Area (readonly)</ion-label>
        <ion-textarea placeholder="placeholder" auto-grow readonly value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi animi consequuntur laborum provident sit maxime, facere voluptatibus iste magnam dolorem aspernatur ut expedita a aperiam quasi, neque, iusto dicta eos."></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label>Text Area (disabled)</ion-label>
        <ion-textarea placeholder="placeholder" auto-grow disabled value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi animi consequuntur laborum provident sit maxime, facere voluptatibus iste magnam dolorem aspernatur ut expedita a aperiam quasi, neque, iusto dicta eos."></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label>Text Area size</ion-label>
        <ion-textarea placeholder="placeholder" rows="6" cols="20"></ion-textarea>
      </ion-item>
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
  IonListHeader,
  IonInput,
  IonTextarea,
  IonItem,
  IonLabel
} from '@ionic/vue'

export default defineComponent({
  name: ' Input',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonListHeader,
    IonInput,
    IonTextarea,
    IonItem,
    IonLabel
  },
  setup() {
    return {}
  }
})
</script>

<style>

</style>
