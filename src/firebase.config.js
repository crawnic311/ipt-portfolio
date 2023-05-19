import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDQCpyXiUslUsnPNIICtb7GXp6KSyapPUY',
  authDomain: 'fullstack-portfolio-5c2aa.firebaseapp.com',
  projectId: 'fullstack-portfolio-5c2aa',
  storageBucket: 'fullstack-portfolio-5c2aa.appspot.com',
  messagingSenderId: '204669302516',
  appId: '1:204669302516:web:e95794453582e4ca2ed0a1',
  measurementId: 'G-3QTLEDDTBS',
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
