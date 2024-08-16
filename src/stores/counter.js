import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  const docs = ref([]);
  let searchText = ref(" ")
  
   async function getDoctors() {
    try {
      const result = await axios.get('/src/stores/JSON/doctors.json')
      docs.value = result.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  return { docs, getDoctors, searchText };
});

//I used this way to show my ability to work with stores
// There was a simplier way of just importing JSON instance file inside of the making the asynchronous request