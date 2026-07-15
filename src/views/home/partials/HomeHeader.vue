<script setup lang="ts">
import { useTypedI18n } from '@/locales/i18n'

const { t } = useTypedI18n()
</script>

<template>
  <div>
    <div class="flex justify-center">
      <FWIcon
        class="text-neutral dark:text-white text-9xl md:text-[10rem]"
        icon="fa-brands fa-github-alt"
      />
    </div>
    <div class="md:text-2xl text-center mt-5">
      <h4>
        {{ t('pages.home.header.greeting') }}. {{ t('general.eg') }}
        <b>vuejs</b>
      </h4>
    </div>
  </div>
</template>
