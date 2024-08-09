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
        <input v-model="searchBar" type="text" class="search__input" placeholder="Поиск направления"/>
        <img src="../../assets/images/search.svg" alt="" class="search__img" />
      </button>

      <div v-for="el in docList" :key="el.id" class="main__specs doc">
        <div class="doc__wrapper">
          <div class="doc__details">
            <input @click="chngColor(el.id)" type="checkbox" class="doc__checkbox" ref="inputables" />
            <p class="doc__spcialization">{{ el.name }}</p>
          </div>
          <p ref="comments" :class="`doc__comQuantity `">({{ el.comments }})</p>
        </div>
      </div>
    </div>

    <div class="main__recComments recmndtns">
      <div class="recmndtns__header">
        <h1 class="recmndtns__headH">Список последних ответов на вопросы <span class="recmndtns__totalCount">(12 493)</span></h1>
      </div>
    </div>



  </div>
</template>

<script setup>
// import counter from '../../stores/doctors'
// console.log(counter);
// ** above comment is the easier way of getting the store mentioned in the store [counter.js]

import { ref, watch, onMounted } from "vue";
import { useCounterStore } from "../../stores/counter";

const store = useCounterStore();
const docList = ref(store.docs);
const inputables = ref(null);
const comments = ref(null);
const searchBar = ref("");

async function fetchDoctors() {
  await store.getDoctors();
  docList.value = store.docs;
}

function chngColor(id) {
  comments.value[id].classList.toggle('doc__comQuantity--active')
}

watch(searchBar, () => {
  docList.value = store.docs.filter((el) => {
    return el.name.toLowerCase().includes(searchBar.value.toLowerCase());
  });
});

function cancelChoice() {
  inputables.value.forEach(elem => elem.checked = false);
  comments.value.forEach(elem => elem.classList.remove('doc__comQuantity--active'))
  searchBar.value = ''
}

onMounted(fetchDoctors);
</script>

<style lang="scss" scoped></style>
