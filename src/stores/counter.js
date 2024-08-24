import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  const docs = ref([]);
  const users = ref([])
  let searchText = ref(" ")
  
   async function getDoctors() {
    try {
      const result = await axios.get('/src/stores/JSON/doctors.json')
      docs.value = result.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }
   async function getComments() {
    try {
      const result = await axios.get('/src/stores/JSON/users.json')
      users.value = result.data;
      // console.log(users.value);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  return { docs, users, getDoctors, getComments, searchText };
});

//I used this way to show my ability to work with stores
// There was a simplier way of just importing JSON instance file inside of the making the asynchronous request