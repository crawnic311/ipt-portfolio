import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCNWn35P8FNN7m6l_vhuWovc1sz_areTPI',
  authDomain: 'ipt-portfolio.firebaseapp.com',
  projectId: 'ipt-portfolio',
  storageBucket: 'ipt-portfolio.appspot.com',
  messagingSenderId: '718770521429',
  appId: '1:718770521429:web:69f74c8c3c2c616e939bdc',
  measurementId: 'G-7D3PYG78V1',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
