import './bootstrap';

import {createApp} from 'vue';
import ChatMessages from './components/ChatMessages';
import ChatForm from './components/ChatForm';

const app = createApp({
  components: {
    ChatMessages,
    ChatForm
  }
})

app.mount('#app')
