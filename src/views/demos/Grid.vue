<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Grid</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col><div class="box">1 of 2</div></ion-col>
          <ion-col><div class="box">2 of 2</div></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><div class="box">1 of 3</div></ion-col>
          <ion-col><div class="box">2 of 3</div></ion-col>
          <ion-col><div class="box">3 of 3</div></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">
            <div class="box">ion-col [size="6"]</div>
          </ion-col>
          <ion-col>
            <div class="box">ion-col</div>
          </ion-col>
          <ion-col>
            <div class="box">ion-col</div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">
            <div class="box">ion-col [size="3"]</div>
          </ion-col>
          <ion-col>
            <div class="box">ion-col</div>
          </ion-col>
          <ion-col size="3">
            <div class="box">ion-col [size="3"]</div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">
            <div class="box">ion-col [size="3"]</div>
          </ion-col>
          <ion-col size="3" offset="3">
            <div class="box">ion-col [size="3"] [offset="3"]</div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <div class="box">ion-col</div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
            </div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
              <br>#
            </div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
              <br>#
              <br>#
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-align-self-start">
            <div class="box">ion-col [start]</div>
          </ion-col>
          <ion-col class="ion-align-self-center">
            <div class="box">ion-col [center]</div>
          </ion-col>
          <ion-col class="ion-align-self-end">
            <div class="box">ion-col [end]</div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
              <br>#
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-start">
          <ion-col>
            <div class="box">
              [start] ion-col
            </div>
          </ion-col>
          <ion-col>
            <div class="box">
              [start] ion-col
            </div>
          </ion-col>
          <ion-col class="ion-align-self-end">
            <div class="box">
              [start] ion-col [end]
            </div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
              <br>#
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center">
          <ion-col>
            <div class="box">[center] ion-col</div>
          </ion-col>
          <ion-col>
            <div class="box">[center] ion-col</div>
          </ion-col>
          <ion-col>
            <div class="box">[center] ion-col</div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
              <br>#
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-end">
          <ion-col>
            <div class="box">[end] ion-col</div>
          </ion-col>
          <ion-col class="ion-align-self-start">
            <div class="box">[end] ion-col [start]</div>
          </ion-col>
          <ion-col>
            <div class="box">[end] ion-col</div>
          </ion-col>
          <ion-col>
            <div class="box">
              ion-col
              <br>#
              <br>#
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-sm>
            <div class="box">
              ion-col [size="12"] [size-sm]
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="box">
              ion-col [size="12"] [size-sm]
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="box">
              ion-col [size="12"] [size-sm]
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="box">
              ion-col [size="12"] [size-sm]
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-md>
            <div class="box">ion-col [size="12"] [size-md]</div>
          </ion-col>
          <ion-col size="12" size-md>
            <div class="box">
              ion-col [size="12"] [size-md]
            </div>
          </ion-col>
          <ion-col size="12" size-md>
            <div class="box">
              ion-col [size="12"] [size-md]
            </div>
          </ion-col>
          <ion-col size="12" size-md>
            <div class="box">
              ion-col [size="12"] [size-md]
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" size-lg offset="3">
            <div class="box">ion-col [size="6"] [size-lg] [offset="3"]</div>
          </ion-col>
          <ion-col size="3" size-lg>
            <div class="box">ion-col [size="3"] [size-lg]</div>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue'

export default defineComponent({
  name: ' Grid',
  components: {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.box {
  border: 1px solid #ccc;
  background-color: #efefef;
  padding: 10px;
}
</style>
