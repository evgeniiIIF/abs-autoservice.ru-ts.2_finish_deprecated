<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
import { useHomeStore } from '~/store/home';

const { isMobile } = useMediaSizes();

const { homeState } = useHomeStore();
const { scrollTo } = useScrollTo();

const [isOpenModal, openModal, closeModal] = useBooleanState();

const welcomeState = computed(() => homeState.value.welcome?.[0]);

const scrollToAnchor = () => {
  scrollTo('#section-cost-calculation');
};
</script>

<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__ellipse-top"></div>
      <div class="banner__ellipse-left"></div>
      <div class="banner__body">
        <div class="banner__image ibg">
          <NuxtPicture
            format="webp"
            :src="homeState.welcome_image ?? 'undefined'"
            :alt="homeState.welcome[0].welcome_image_alt ?? ''"
            :title="homeState.welcome[0].welcome_image_title ?? ''"
          />
        </div>
        <div class="banner__content">
          <h1 class="banner__title">{{ welcomeState?.title }}</h1>
          <div class="banner__tickers tickers">
            <ClientOnly v-if="isMobile">
              <Vue3Marquee :duration="8">
                <div v-for="tickerItem in welcomeState?.advantage_tags" :key="tickerItem" class="tickers__column">
                  <div class="tickers__item">
                    {{ tickerItem }}
                  </div>
                </div>
              </Vue3Marquee>
            </ClientOnly>
            <template v-else>
              <div v-for="tickerItem in welcomeState?.advantage_tags" :key="tickerItem" class="tickers__column">
                <div class="tickers__item">
                  {{ tickerItem }}
                </div>
              </div>
            </template>
          </div>
          <div class="banner__buttons">
            <UINewButton size="big" :is-full-width="isMobile" @click="scrollToAnchor">
              {{ welcomeState?.btn?.[0].title }}
            </UINewButton>
            <UINewButton size="big" fill="outline" :is-full-width="isMobile" @click="openModal">
              {{ welcomeState?.btn?.[1].title }}
            </UINewButton>
            <CallbackFormModal :is-open="isOpenModal" @on-close="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  background: var(--black-primary-black, #111212);

  &__container {
    @include container;
    position: relative;
  }

  &__ellipse-top {
    position: absolute;
    width: 255px;
    height: 255px;
    right: -48px;
    top: -20px;
    background: #00a19c;
    opacity: 0.34;
    filter: blur(70px);
  }

  &__ellipse-left {
    position: absolute;
    width: 255px;
    height: 255px;
    left: -28px;
    top: 120px;
    background: #00a19c;
    opacity: 0.34;
    filter: blur(70px);
  }

  &__body {
    position: relative;
  }

  &__image {
    position: relative;
    margin-bottom: 10px;
    padding-top: 40.1993355%;
    border-radius: 20px;
    overflow: hidden;

    @include desktop {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin-bottom: 0;
      padding-top: 0;
      border-radius: 40px;
    }
  }

  &__content {
    position: relative;
    z-index: 2;

    @include desktop {
      padding: 80px 0px 144px 80px;
    }
  }

  &__title {
    max-width: 290px;
    margin-bottom: 10px;
    color: var(--1, #fff);

    @include TitleXSBold;

    @include media(385px) {
      max-width: 500px;
    }

    @include tablet {
      @include TitleMBold;
      max-width: 689px;
    }
  }

  &__tickers {
    margin-bottom: 20px;

    @include desktop {
      margin-bottom: 48px;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    color: var(--black-black-00, #fff);

    @include buttonText;
  }

  .vue3-marquee > .marquee {
    min-width: auto !important;
  }
}

.tickers {
  overflow: hidden;
  position: relative;
  display: flex;

  &__column {
    padding: 0 5px;
  }

  &__item {
    flex: 0 0 auto;
    white-space: nowrap;
    padding: 8px 16px;
    border-radius: 10px;
    border: 0px solid var(--black-black-80, #414141);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    @include SubtitleSRegular;
    color: var(--black-black-10, #e5e5e5);
  }
}
</style>
