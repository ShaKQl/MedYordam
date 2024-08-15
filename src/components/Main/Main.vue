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
              @click="chngColor(el.id)"
              type="checkbox"
              class="doc__checkbox"
              ref="inputables"
              
            />
            <p class="doc__spcialization">{{ el.name }}</p>
          </div>
          <p ref="comments" :id="el.id" :class="`doc__comQuantity `">({{ el.comments }})</p>
        </div>
      </div>
    </div>

    <div class="main__recComments recmndtns">
      <div class="recmndtns__header recTitle">
        <h1 class="recTitle__headbar">
          Список последних ответов на вопросы
          <span class="recmndtns__totalCount">(12 493)</span>
        </h1>
        <button class="recTitle__sortBtn">
          <img
            src="../../assets/images/sort-amount-up.svg"
            alt=""
            class="recTitle__svg"
          />
          <p class="recTitle__sortby">Сортировать по</p>
        </button>
      </div>

      <div class="recmndtns__searchBar searchTerm">
        <input
          type="text"
          class="searchTerm__input"
          placeholder="Искать по тексту в вопросе"
        />
        <button class="searchTerm__searchBtn">
          <img src="../../assets/images/searchForBtn.svg" alt="" class="searchBtn__svg" />
          <p class="searchTerm__searchTxt">Поиск</p>
        </button>
      </div>

      <div class="recmndtns__commSection recHelp">
        <div class="recHelp__helpSection comment">
          
          <div class="comment__header helpData">
            <p class="helpData__qstionCount">Вопрос: 21408</p>
            <p class="helpData__qstionDate">Январь 27, 2024 9:41 pm</p>
          </div>
          
          <div class="comment__wrapper">
            <div class="comment__asker user">
              <div class="user__qstion question">
                <div class="question__data">
                  <p class="question__ansCount">Получено ответов (3)</p>
                  <p class="question__userData">Lorri Warf (26 лет)</p>
                </div>

                <div class="question__text">
                  "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                  быстро уставать и появилась постоянная усталость, несмотря на
                  полноценный сон. К тому же, у меня снизился аппетит, и я замечаю
                  периодические головные боли. Могли бы вы подсказать, что это может быть
                  и какие обследования мне стоит пройти для уточнения... <span class="question__moreBtn">Читать полностью</span>
                </div> 
              </div>

              <div class="user__ava avatar">
                <img src="../../assets/images/Male.png" alt="" class="avatar__img user__ava_img" />
              </div>
            </div>

            <div class="comment__answerer answerer">
              <div class="answerer__ava docAvatar">
                <img src="../../assets/images/UsmanAkaDoctor.jpg" alt="" class="docAvatar__img answerer__ava_img" />
              </div>
              <div class="user__qstion answer">
                <div class="answer__data">
                  <p class="answer__ansDoc">Mary Freund (Гастроинтеролог)</p>
                  <p class="answer__docDate">Январь 28, 2024 9:41 pm</p>
                </div>

                <div class="answer__text">
                  "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... Читать полностью
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recHelp__helpSection comment">
          
          <div class="comment__header helpData">
            <p class="helpData__qstionCount">Вопрос: 21408</p>
            <p class="helpData__qstionDate">Январь 27, 2024 9:41 pm</p>
          </div>
          <div class="comment__wrapper">
            <div class="comment__asker user">
              <div class="user__qstion question">
                <div class="question__data">
                  <p class="question__ansCount">Получено ответов (3)</p>
                  <p class="question__userData">Lorri Warf (26 лет)</p>
                </div>

                <div class="question__text">
                  "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                  быстро уставать и появилась постоянная усталость, несмотря на
                  полноценный сон. К тому же, у меня снизился аппетит, и я замечаю
                  периодические головные боли. Могли бы вы подсказать, что это может быть
                  и какие обследования мне стоит пройти для уточнения... Читать полностью
                </div>
              </div>

              <div class="user__ava avatar">
                <img src="../../assets/images/Male.png" alt="" class="avatar__img" />
              </div>
            </div>

            <div class="comment__answerer answerer">
              <div class="answerer__ava docAvatar">
                <!-- <img src="../../assets/images/UsmanAkaDoctor.jpg" alt="" class="docAvatar__img" /> -->
              </div>
              <div class="user__qstion answer">
                <div class="answer__data">
                  <p class="answer__ansDoc">Mary Freund (Гастроинтеролог)</p>
                  <p class="answer__docDate">Январь 28, 2024 9:41 pm</p>
                </div>

                <div class="answer__text">
                  "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... Читать полностью
                </div>
              </div>
            </div>
          </div>
        </div>
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
const searchBar = ref("");
const comments = ref("")

async function fetchDoctors() {
  await store.getDoctors();
  docList.value = store.docs;
}

function chngColor(id) {
  document.getElementById(id).classList.toggle("doc__comQuantity--active");
}

watch(searchBar, () => {
  docList.value = store.docs.filter((el) => {
    return el.name.toLowerCase().includes(searchBar.value.toLowerCase());
  });
});

function cancelChoice() {
  console.log(comments);
  inputables.value.forEach((elem) => (elem.checked = false));
  comments.value.forEach((elem) => elem.classList.remove("doc__comQuantity--active"));
  searchBar.value = "";
}

onMounted(fetchDoctors);
</script>

<style lang="scss" scoped></style>
