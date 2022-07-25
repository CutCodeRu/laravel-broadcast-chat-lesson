import {ref} from 'vue';
import axios from 'axios';

export default function useChat() {
    const messages = ref([])
    const errors = ref([])

    const getMessages = async () => {
      await axios.get('/messages').then((response) => {
        messages.value = response.data
      })
    }

    const addMessage = async (form) => {
      errors.value = [];

      try {
        await axios.post('/send', form).then((response) => {
          messages.value.push(response.data)
        })
      } catch (e) {
        if(e.response.status === 422) {
          errors.value = e.response.data.errors
        }
      }
    }

    return {
      messages,
      errors,
      getMessages,
      addMessage
    }
}