<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Select</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Pet</ion-label>
          <ion-select>
            <ion-select-option value="dog">Dog</ion-select-option>
            <ion-select-option value="cat">Cat</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Gaming</ion-label>
          <ion-select interface="popover" multiple="true" cancel-text="Nah" ok-text="Okay!">
            <ion-select-option value="nes">NES</ion-select-option>
            <ion-select-option value="n64">Nintendo64</ion-select-option>
            <ion-select-option value="ps">Play Station</ion-select-option>
            <ion-select-option value="sg">Sega Genesis</ion-select-option>
            <ion-select-option value="ss">Sega Saturn</ion-select-option>
            <ion-select-option value="snes">SNES</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Notifications</ion-label>
          <ion-select interface="action-sheet">
            <ion-select-option value="0">Enable</ion-select-option>
            <ion-select-option value="1">Mute</ion-select-option>
            <ion-select-option value="2">Mute for a week</ion-select-option>
            <ion-select-option value="3">Mute for a year</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Operating System</ion-label>
          <ion-select placeholder="Select one">
            <ion-select-option value="dos">DOS</ion-select-option>
            <ion-select-option value="linux">Linux</ion-select-option>
            <ion-select-option value="windows">Windows</ion-select-option>
            <ion-select-option value="macos">macOS</ion-select-option>
            <ion-select-option value="ios">iOS</ion-select-option>
            <ion-select-option value="android">Android</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Music</ion-label>
          <ion-select interface="alert" :interface-options="alertOptions">
            <ion-select-option value="nv">Nirvana</ion-select-option>
            <ion-select-option value="gd">Green Day</ion-select-option>
            <ion-select-option value="pj">Pearl Jam</ion-select-option>
            <ion-select-option value="sg">Soundgarden</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Month</ion-label>
          <ion-select interface="action-sheet" :interface-options="actionSheetOptions">
            <ion-select-option value="jan">January</ion-select-option>
            <ion-select-option value="feb">Febuary</ion-select-option>
            <ion-select-option value="mar">March</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Year</ion-label>
          <ion-select interface="popover" :interface-options="popoverOptions">
            <ion-select-option value="1996">1996</ion-select-option>
            <ion-select-option value="1997">1997</ion-select-option>
            <ion-select-option value="1998">1998</ion-select-option>
            <ion-select-option value="1999">1999</ion-select-option>
            <ion-select-option value="2000">2000</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

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
  IonList,
  IonItem,
  IonSelect,
  IonLabel,
  IonSelectOption
} from '@ionic/vue'

export default defineComponent({
  name: ' Select',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonSelect,
    IonLabel,
    IonSelectOption
  },
  setup() {
    const alertOptions = {
      header: 'Rock\'nRoll',
      subHeader: 'Select your favorite Rock band/singer!',
      message: 'Lets roll!',
      translucent: true
    }
    const actionSheetOptions = {
      header: 'Pick month',
      subHeader: 'This is the month picker',
    }
    const popoverOptions = {
      header: 'Pick year',
      subHeader: 'Select a year you like.',
      message: 'Pick any one you like, do it.'
    }
    return { alertOptions, actionSheetOptions, popoverOptions }
  }
})
</script>

<style>

</style>
