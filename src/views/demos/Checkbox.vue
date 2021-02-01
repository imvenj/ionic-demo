<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Checkbox</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list-header>
        CheckBox
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-label>Default</ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Checked</ion-label>
          <ion-checkbox slot="end" checked></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Disabled</ion-label>
          <ion-checkbox slot="end" disabled></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Primary</ion-label>
          <ion-checkbox slot="end" checked color="primary"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Secondary</ion-label>
          <ion-checkbox slot="end" checked color="secondary"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Danger</ion-label>
          <ion-checkbox slot="end" checked color="danger"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Light</ion-label>
          <ion-checkbox slot="end" checked color="light"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Dark</ion-label>
          <ion-checkbox slot="end" checked color="dark"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Intermediate</ion-label>
          <ion-checkbox slot="end" indeterminate></ion-checkbox>
        </ion-item>
        <ion-item-divider>
          Form Demo
        </ion-item-divider>
        <ion-item-group>
          <ion-item v-for="f in form" :key="f.val">
            <ion-label>{{ f.val }}</ion-label>
            <ion-checkbox :modelValue="f.isChecked" @update:modelValue="f.isChecked = $event" slot="end"></ion-checkbox>
          </ion-item>
        </ion-item-group>
      </ion-list>
      <div class="ion-padding">
        {{ formJSON }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTitle,
  IonListHeader,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonItemDivider,
  IonItemGroup,
  IonToolbar
} from '@ionic/vue'

export default defineComponent({
  name: ' Checkbox',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonListHeader,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonItemDivider,
    IonItemGroup,
    IonToolbar
  },
  setup() {
    const form = ref([
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ]);

    // TODO: 此处对 Checkbox 的值的绑定的理解不够深刻，需要进一步理解。
    const formJSON = computed(() => {
      return JSON.stringify(form.value)
    })

    return { form, formJSON };
  }
})
</script>

<style>

</style>
