import {ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from "@angular/router";
import {routes} from "@/app.routes";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideRouter(routes),
    provideAnimationsAsync(),
    // provideFirebaseApp( () => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() =>
      initializeApp({"projectId":"our-wedding-d35fe","appId":"1:850199673008:web:4afd140dd6ef9a420de375","storageBucket":"our-wedding-d35fe.firebasestorage.app","apiKey":"AIzaSyDt0-zy_wrI5t5gX3numHLFGuRskRW93AM","authDomain":"our-wedding-d35fe.firebaseapp.com","messagingSenderId":"850199673008","measurementId":"G-WTLZTJR52K"})),
      provideFirestore(() => getFirestore()),
      provideFirebaseApp(() => initializeApp({"projectId":"our-wedding-d35fe","appId":"1:850199673008:web:4afd140dd6ef9a420de375","storageBucket":"our-wedding-d35fe.firebasestorage.app","apiKey":"AIzaSyDt0-zy_wrI5t5gX3numHLFGuRskRW93AM","authDomain":"our-wedding-d35fe.firebaseapp.com","messagingSenderId":"850199673008","measurementId":"G-WTLZTJR52K"})),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
  ]
};
