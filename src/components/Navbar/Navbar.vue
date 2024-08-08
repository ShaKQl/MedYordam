<template>
  <div class="nav">
    <div class="webSettings">
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
      <div class="logo">
        <img src="../../assets/images/Logo.svg" alt="" class="logo__img" />
        <img src="../../assets/images/MedYordam.svg" alt="" class="logo__company" />
        <p class="logo__desc">Консультация от врачей</p>
      </div>

      
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
