<template>
  <div class="main">
    <div class="main__filtres filtres">
      <div class="filtres__header">
        <p class="filtres__h">
          Фильтрация <br />
          по направлениям
        </p>
        <button @click="cancelChoice" class="filtres__resetBtn">
          <img src="../../assets/images/multiply.png" alt="" class="filtres__resetSvg" />
          <span class="filtres__btnText">Сбросить</span>
        </button>
      </div>
      <button class="main__search search">
        <input
          v-model="searchBar"
          
          type="text"
          class="search__input"
          placeholder="Поиск направления"
        />
        <img src="../../assets/images/search.svg" alt="" class="search__img" />
      </button>

      <div v-for="el in docList" :key="el.id" class="main__specs doc">
        <div class="doc__wrapper">
          <div class="doc__details">
            <input
              @click="el.checked = !el.checked"
              :id="el.id"
              type="checkbox"
              class="doc__checkbox"
              ref="inputables"
              @change="chngColor(el.id, inputables[el.id].checked)"
            />
            <p class="doc__spcialization">{{ el.name }}</p>
          </div>
          <p ref="comments" class="doc__comQuantity">({{ el.comments }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import counter from '../../stores/doctors'
// console.log(counter);
// **the easier way of getting the store mentioned in the store [counter.js]
import { ref, watch, onMounted } from "vue";

import { useCounterStore } from "../../stores/counter";

const store = useCounterStore();
const docList = ref(store.docs);

async function fetchDoctors() {
  await store.getDoctors(); 
  docList.value = store.docs;
}


const comments = ref(null);
const searchBar = ref("");

function chngColor(id, tag) {
  if (tag) {
    comments.value[id].style.color = "#0129E3";
  } else {
    comments.value[id].style.color = `var(--text-grey)`;
  }
}


watch(searchBar, () => {
    docList.value = docList.value.filter((el) => {
      return el.name.toLowerCase().includes(searchBar.value.toLowerCase());
    });
});

const inputables = ref(null);

function cancelChoice() {
  inputables.value.forEach((elem, id) => {
    if (elem.checked) {
      elem.checked = false;
      chngColor(id, elem.checked);
    }
  });
}
onMounted(fetchDoctors)
</script>

<style lang="scss" scoped></style>
