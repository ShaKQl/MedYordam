<template>
  <div class="nav">
    <div class="nav__localize webSettings">
      <div class="curLocation">
        <img src="../../assets/images/CurrentPlace.svg" alt="" class="curLocation__svg" />
        <button class="curLocation__btn">
          <span class="curLocation__city">Ташкент</span>
          <img
            src="../../assets/images/Dropdown.svg"
            alt=""
            class="curLocation__dropdown"
          />
        </button>
      </div>

      <div class="webLanguage">
        <img src="../../assets/images/RuFlag.svg" alt="" class="webLanguage__flag" />
        <div class="webLanguage__changeLang">
          <p class="webLanguage__txt">Язык:</p>
          <button class="webLanguage__btn">
            <span class="webLanguage__option">Русский</span>
            <img src="../../assets/images/Dropdown.svg" alt="" class="webLanguage__svg" />
          </button>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel__info">
        <div class="logo">
          <img src="../../assets/images/Logo.svg" alt="" class="logo__img" />
          <img src="../../assets/images/MedYordam.svg" alt="" class="logo__company" />
        </div>

        <p class="panel__desc">
          Консультация <br />
          от врачей
        </p>
      </div>

      <button class="catalog">
        <img src="../../assets/images/CatalogBtnVector.svg" alt="" class="catalog__svg" />
        <p class="catalog__text">Каталог услуг</p>
        <img
          src="../../assets/images/DropdownCatalog.svg"
          alt=""
          class="catalog__drpdwn"
        />
      </button>

      <div class="getInfo">
        <p class="getInfo__option">О проекте</p>
        <p class="getInfo__option">Партнерство</p>
        <p class="getInfo__option">Контакты</p>
      </div>

      <button class="signIn">
        <div class="signIn__auth">Вход</div>
        /
        <div class="signIn__registrate">Регистрация</div>
      </button>
    </div>

    <div class="nav__infoSlide infoSlide">
      
      <p class="infoSlide__serviceName">Консультация от врачей</p>
      <h1 class="infoSlide__servicePromote">
        Получайте бесплатную консультацию <br>от лучших специалистов
      </h1>
      <ul class="infoSlide__refs references">
        <li class="references__card reference">
          <img src="../../assets/images/Star.svg" alt="" class="reference__svg" />
          <a href="#" class="reference__link">Лучшие консультанты</a>
        </li>
        <li class="references__card reference">
          <img
            src="../../assets/images/question-circle.svg"
            alt=""
            class="reference__svg"
          />
          <a href="#" class="reference__link">Задать вопрос</a>
        </li>
        <li class="references__card reference">
          <img
            src="../../assets/images/files-landscapes-alt.svg"
            alt=""
            class="reference__svg"
          />
          <a href="#" class="reference__link">Популярные вопросы</a>
        </li>
      </ul>

      <ul class="infoSlide__facilities facilities">
        <li class="facilities__card">
          <p class="facilities__numberOf">+1 000</p>
          <p class="facilities__desc">Врачей различных специализаций </p>
        </li>
        <li class="facilities__card">
          <p class="facilities__numberOf">24/7</p>
          <p class="facilities__desc">Доступ к медицинской помощи</p>
        </li>
        <li class="facilities__card">
          <p class="facilities__numberOf">+ 95%</p>
          <p class="facilities__desc">Положительных отзывов</p>
        </li>
        <li class="facilities__card">
          <p class="facilities__numberOf">+20 000</p>
          <p class="facilities__desc">Анкет пользователей</p>
        </li>
      </ul>
      <img src="../../assets/images/question-circle.png" alt="" class="infoSlide__bgImg">
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
