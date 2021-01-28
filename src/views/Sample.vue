<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <img :src="photo" />
      <ion-button @click="takePhoto()">Take Photo</ion-button>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm>
            <div>
              1 of 4
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div>
              2 of 4
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div>
              3 of 4
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div>
              4 of 4
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">
            <div>
              1 of 2
            </div>
          </ion-col>
          <ion-col size="3" offset="3">
            <div>
              2 of 2
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="9" push="3">
            <div>
              1 of 2
            </div>
          </ion-col>
          <ion-col size="3" pull="9">
            <div>
              2 of 2
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-start">
          <ion-col>
            <div>
              1 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              2 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              3 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              4 of 4 <br>
              # <br>
              # <br>
              #
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center">
          <ion-col>
            <div>
              1 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              2 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              3 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              4 of 4 <br>
              # <br>
              # <br>
              #
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-end">
          <ion-col>
            <div>
              1 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              2 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              3 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              4 of 4 <br>
              # <br>
              # <br>
              #
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-align-self-start">
            <div>
              1 of 4
            </div>
          </ion-col>
          <ion-col class="ion-align-self-center">
            <div>
              2 of 4
            </div>
          </ion-col>
          <ion-col class="ion-align-self-end">
            <div>
              3 of 4
            </div>
          </ion-col>
          <ion-col>
            <div>
              4 of 4 <br>
              # <br>
              # <br>
              #
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonFooter, IonGrid, IonRow, IonCol, IonButtons, IonButton } from '@ionic/vue';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

export default defineComponent ({
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonPage, IonFooter, IonGrid, IonRow, IonCol, IonButtons, IonButton },
  setup() {
    const imageSrc: Ref<string | undefined> = ref('');

    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      imageSrc.value = image.webPath;
    }

    return {
      photo: imageSrc,
      takePhoto
    }
  }
})
</script>

<style>
.ion-col div {
  background-color: #ccc;
}

.ion-col :nth-child(2) {
  background-color: #aaa;
}
</style>