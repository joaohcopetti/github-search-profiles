<script setup lang="ts">
import { useTypedI18n } from '@/locales/i18n'
import { ref } from 'vue'

const { t } = useTypedI18n()
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const input = ref<HTMLInputElement>()

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  emit('update:modelValue', value)
}

const focus = () => {
  input.value?.focus()
}

defineExpose({ focus })
</script>

<template>
  <input
    ref="input"
    :value="modelValue"
    type="text"
    :placeholder="t('pages.home.search-input.placeholder')"
    class="input input-bordered w-full md:input-lg rounded-lg"
    name="username"
    @input="onInput"
  />
</template>
