<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Button</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="">
      <section>
        <header class="ion-text-uppercase">Small Size</header>
        <ion-button size="small" color="primary">
          Prmiary (Default)
        </ion-button>
        <ion-button size="small" color="secondary">
          Secondary
        </ion-button>
        <ion-button size="small" color="tertiary">
          Tertiary
        </ion-button>
      </section>
      <section>
        <header class="ion-text-uppercase">Default Size</header>
        <ion-button color="success">
          Success
        </ion-button>
        <ion-button color="warning">
          Warning
        </ion-button>
        <ion-button color="danger">
          Danger
        </ion-button>
      </section>
      <section>
        <header class="ion-text-uppercase">Large Size</header>
        <ion-button size="large" color="light">
          Light
        </ion-button>
        <ion-button size="large" color="medium">
          Medium
        </ion-button>
        <ion-button size="large" color="dark">
          Dark
        </ion-button>
      </section>
      <section>
        <header class="ion-text-uppercase">Block Width</header>
        <ion-button expand="block">
          Block
        </ion-button>
      </section>
      <section class="full-width">
        <header class="ion-text-uppercase">Full Width</header>
        <ion-button expand="full" color="secondary">
          Full
        </ion-button>
      </section>
      <section>
        <header class="ion-text-uppercase">Fill</header>
        <ion-button fill="outline">
          Outline
        </ion-button>
        <ion-button fill="clear">
          Clear
        </ion-button>
      </section>
      <section>
        <header class="ion-text-uppercase">Ripple Effect</header>
        <ion-button expand="full" class="ion-activatable ripple-parent">
          Ripple Effect (Not show if disabled)
          <ion-ripple-effect></ion-ripple-effect>
        </ion-button>
      </section>
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
  IonButton,
  IonRippleEffect,
  IonToolbar
} from '@ionic/vue'

export default defineComponent({
  name: ' Button',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonButton,
    IonRippleEffect,
    IonToolbar
  },
  setup() {
    return {}
  }
})
</script>

<style>
section {
  margin-top: 1em;
  margin-bottom: 2.5em;
}
section:not(.full-width), .full-width > header {
  padding: 0 10px;
}
header {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.25em;
}
.ripple-parent {
  position: relative;
  overflow: hidden;
}
</style>
