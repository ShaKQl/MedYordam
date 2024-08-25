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
        <input v-model="searchBar" type="text" class="search__input" placeholder="Поиск направления" />
        <img src="../../assets/images/search.svg" alt="" class="search__img" />
      </button>

      <div v-for="el in docList" :key="el.id" class="main__specs doc">
        <div class="doc__wrapper">
          <div class="doc__details">
            <input @click="chngColor(el.id)" type="checkbox" class="doc__checkbox" ref="inputables" />
            <p class="doc__spcialization">{{ el.name }}</p>
          </div>
          <p ref="filterCount" :id="el.id" :class="`doc__comQuantity `">
            ({{ el.comments }})
          </p>
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
          <img src="../../assets/images/sort-amount-up.svg" alt="" class="recTitle__svg" />
          <p class="recTitle__sortby">Сортировать по</p>
        </button>
      </div>
      <div class="recmndtns__searchBar searchTerm">
        <input type="text" class="searchTerm__input" placeholder="Искать по тексту в вопросе" />
        <button class="searchTerm__searchBtn">
          <img src="../../assets/images/searchForBtn.svg" alt="" class="searchBtn__svg" />
          <p class="searchTerm__searchTxt">Поиск</p>
        </button>
      </div>
      <div class="recmndtns__commSection recHelp">



          <!-- --------------------------------- -->
        <div v-for="el in currentBlockArray.arr" :key="el.id" class="recHelp__helpSection comment">  
          <!-- --------------------------------- -->
          

          
          
          <div class="comment__header helpData">
            <p class="helpData__qstionCount">Вопрос: {{ el.commentCount }} id: {{ el.id }}</p>
            <p class="helpData__qstionDate">{{ unixToReadable(el.date) }}</p>
          </div>
          <div class="comment__ansWrapper">
            <div class="comment__asker user">
              <div class="user__qstion question">
                <div class="question__data">
                  <p class="question__ansCount">Получено ответов ({{ el.answersGot }})</p>
                  <p class="question__userData">{{ el.name }} ({{ el.age }} лет)</p>
                </div>

                <div class="question__text">
                  <p class="question__containText">
                    "{{ el.question }}
                    <span class="question__moreBtn">Читать полностью</span>
                  </p>
                </div>
              </div>

              <div v-if="el.gender == 'Male'" class="user__ava">
                <img src="../../assets/images/Male.png" alt="" class="user__ava_img" />
              </div>

              <div v-else class="user__ava user__ava--female">
                <img src="../../assets/images/FeMale.png" alt="" class="user__ava_img" />
              </div>
            </div>

            <div class="answerer__wrapper" :id="`answers-${el.id}`">
              <div v-for="elem in el.answers" :key="elem.id" class="comment__answerer answerer">
                <div class="answerer__ava docAvatar">
                  <img src="../../assets/images/UsmanAkaDoctor.jpg" alt="" class="docAvatar__img answerer__ava_img" />
                </div>
                <div class="user__qstion answer">
                  <div class="answer__data">
                    <p class="answer__ansDoc">{{ elem.name }} ({{ elem.type }})</p>
                    <p class="answer__docDate">{{ unixToReadable(elem.date) }}</p>
                  </div>

                  <div class="answer__wrapper">
                    <div class="answer__text">
                      "{{ elem.answer }}
                      <span @click="(event) => showFullText(event.target)" class="answer__moreBtn">
                        Читать полностью</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button @click="commentsExpand(el.id)" class="comment__allAnswers showAll">
              <p class="showAll__text">
                Смотреть все ответы ({{ el.answers.length - 1 }})
              </p>
              <img src="../../assets/images/Dropdown.svg" :id="`showRest-answers-comment-svg-${el.id}`" alt=""
                class="showAll__svg" />
            </button>
          </div>
        </div>
      </div>
      <div class="pages">
        <button @click="previousPage" class="pages__pageBtn">
          <img src="../../assets/images/angle-left-b.svg" alt="" class="pages__pageBtn--left">
        </button>
        <!-- <ul class="pageList">
          <li v-if="currentPage >= 3" class="pageList__pageNum--threeDot">...</li>
          <li v-if="currentPage > comments.length- 2" class="pageList__pageNum ">{{ currentPage -2 }}</li>
          <li v-if="currentPage > 1" class="pageList__pageNum ">{{ currentPage -1 }}</li>
          <li class="pageList__pageNum pageList__pageNum--selected">{{ currentPage }}</li>
          <li v-if="currentPage +1  <= comments.length"  class="pageList__pageNum">{{ currentPage +1 }}</li>
          <li v-if="currentPage + 2  <= comments.length" class="pageList__pageNum">{{ currentPage +2 }}</li>
          <li v-if="currentPage == 1" class="pageList__pageNum ">{{ currentPage +3 }}</li>
          <li v-if="currentPage < comments.length -2" class="pageList__pageNum--threeDot">...</li>
        </ul> -->
        <ul class="pageList">
        


          <!-- --------------------------------- -->
          <li ref="pagesListCurr" @click="el => chngCurr(el.target)" v-for="el, id in shownBlock" :key="id"
            class="pageList__pageNum">{{ id + 1}}</li>
          <!-- --------------------------------- -->
        


        </ul>
        <button @click="nextPage" class="pages__pageBtn">
          <img src="../../assets/images/angle-right-b.svg" alt="" class="pages__pageBtn--right">
        </button>
      </div>
    </div>

    .
  </div> 
</template>

<script setup>
// import counter from '../../stores/doctors'
// console.log(counter);
// ** above comment is the easier way of getting the store mentioned in the store [counter.js]

import { ref, watch, onMounted, computed } from "vue";
import { useCounterStore } from "../../stores/counter";

//----------------------------------------FILTER_SECTION-------------------------------------------\\
const store = useCounterStore();
const docList = ref(store.docs);
const inputables = ref(null);
const searchBar = ref("");
const filterCount = ref("");

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
  inputables.value.forEach((elem) => (elem.checked = false));
  filterCount.value.forEach((elem) => elem.classList.remove("doc__comQuantity--active"));
  searchBar.value = "";
}

onMounted(fetchDoctors);
//-----------------------------------------------------------------------------------\\

//--------------------------------------COMMENTS-------------------------------------\\

const comments = ref(store.users);
const pagesListCurr = ref('');
const pagesBtnToBeShown = 4            //easey--accesible--button-quantity--control
const separatedBlock = ref([])
let shownBlock = ref([])
let currentPage = ref(1)


// =================================================================================
let currentBlockArray = ref([{
  id:0,
  arr: ref([])
}])

// class SeparateArray{
//   constructor(arr, id) {
//     this.id = id;
//     this.arr = arr
//   }
// }



function chngCurr(elem) {
  if(elem.innerHTML !== currentPage.value){
    currentPage.value = elem.innerHTML;
    console.log(currentBlockArray.value);
    console.log(separatedBlock.value);
    console.log(shownBlock.value);
    updateCurr()
    const firstClass = elem.classList[0]
    pagesListCurr.value.forEach((el) => {
      el.classList.remove(`${firstClass}--selected`)
    })
    elem.classList.add(`${firstClass}--selected`)
  }
}

function letTheKidsPlay( ) {
  separatedBlock.value = ArrSeparater(comments.value, pagesBtnToBeShown)
  updateCurr()
}

function updateCurr(){
  currentBlockArray.value = comments.value[currentPage.value - 1]
  shownBlock.value = separatedBlock.value[currentBlockArray.value]
}

async function fetchComments() {
  await store.getComments();
  
  comments.value = store.users;
  comments.value = ArrSeparater(comments.value, pagesBtnToBeShown)
  letTheKidsPlay()
  
}

function nextPage() {
  if (currentPage.value < comments.value.length) {
    currentPage.value++
    // currentBlockArray.value = comments.value[currentPage.value - 1]
  }
}
function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    // currentBlockArray.value = comments.value[currentPage.value - 1]
  }
}

// =================================================================================

function ArrSeparater(arr, step) {
  let array = ref([]);
  for (let i = 0; i < arr.length; i = i + step) {
    array.value.push(arr.slice(i, i + step), i);
  }
  return array.value
}

function unixToReadable(unixTimestamp) {
  const dateObj = new Date(unixTimestamp * 1000);
  return dateObj.toLocaleString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

function commentsExpand(elem) {
  let wrapper = document.getElementById(`answers-${elem}`);
  wrapper.classList.toggle("answerer__wrapper--opened");
  // console.log(document.getElementById(`showRest-answers-comment-svg-${elem}`));
  document
    .getElementById(`showRest-answers-comment-svg-${elem}`)
    .classList.toggle("showAll__svg--rotateUp");
  if (!wrapper.classList.contains("answerer__wrapper--opened")) {
    showFullText;
  }
}



function showFullText(lema) {
  const modificationToAdd = `${lema.classList[0]}--nearSided`;
  const parentTextBox = lema.parentNode;
  parentTextBox.classList.toggle(`${parentTextBox.classList[0]}--full`);
  lema.classList.toggle(modificationToAdd);

  lema.classList.forEach((el) => {
    if (el === modificationToAdd) {
      lema.innerHTML = "Скрыть";
    } else {
      lema.innerHTML = "Читать полностью";
    }
  });
}


onMounted(fetchComments);
</script>

<style lang="scss" scoped></style>
