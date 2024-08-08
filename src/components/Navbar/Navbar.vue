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
        
        <p class="panel__desc">Консультация <br> от врачей</p>
      </div>

      <button class="catalog">
        <img src="../../assets/images/CatalogBtnVector.svg" alt="" class="catalog__svg" />
        <p class="catalog__text">Каталог услуг</p>
        <img src="../../assets/images/DropdownCatalog.svg" alt="" class="catalog__drpdwn" />
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
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
