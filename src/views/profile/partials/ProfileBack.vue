<script setup lang="ts">
import { useTypedI18n } from '@/locales/i18n'

defineEmits(['back'])

const { t } = useTypedI18n()
</script>

<template>
  <div>
    <button
      class="btn btn-ghost font-bold"
      @click="$emit('back')"
    >
      <FWIcon
        icon="fa-solid fa-arrow-left"
        size="lg"
        class="mr-1"
      />
      <span class="uppercase">{{ t('general.back') }}</span>
    </button>
  </div>
</template>
