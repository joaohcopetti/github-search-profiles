<script setup lang="ts">
import type {
  ReposOption,
  ReposOptions,
  ReposSort,
  Repository,
} from '@/types/profile'
import { computed, ref } from 'vue'

import type { AppSelectOption } from '@/components/AppSelect.vue'
import { useTypedI18n } from '@/locales/i18n'

type ProfileReposOptionsProps = {
  repos: Repository[]
  options: ReposOptions
}

const { t } = useTypedI18n()

const emit = defineEmits(['update:options'])

const props = defineProps<ProfileReposOptionsProps>()

const selectOptions = ref<AppSelectOption[]>([
  {
    label: t('pages.profile.options.sort-by-options.full_name'),
    value: 'full_name',
  },
  {
    label: t('pages.profile.options.sort-by-options.created'),
    value: 'created',
  },
  { label: t('pages.profile.options.sort-by-options.pushed'), value: 'pushed' },
])

const onOptionsChange = ({ option, value }: ReposOption) => {
  emit('update:options', { option, value })
}

const forksCount = computed<number>(
  () => props.repos.filter((repo) => repo.fork).length,
)

const archivedCount = computed<number>(
  () => props.repos.filter((repo) => repo.archived).length,
)
</script>

<template>
  <div class="flex flex-col md:flex-row gap-5">
    <div class="grow">
      <AppSelect
        :value-model="options.sort"
        :options="selectOptions"
        label-icon="fas fa-sort"
        :label="t('pages.profile.options.sort-by')"
        size="sm"
        @change="
          (value: ReposSort) => onOptionsChange({ option: 'sort', value })
        "
      />
    </div>
    <div class="grow flex flex-col">
      <AppToggle
        class="mb-3"
        :model-value="options.hideForks"
        :label="
          t('pages.profile.options.hide-forks') +
          (forksCount ? ` (${forksCount})` : '')
        "
        :disabled="!forksCount"
        :disabled-message="t('pages.profile.options.no-public-forks')"
        @toggle="
          (value: boolean) => onOptionsChange({ option: 'hideForks', value })
        "
      />

      <AppToggle
        :model-value="options.hideArchived"
        :label="
          t('pages.profile.options.hide-archived') +
          (archivedCount ? ` (${archivedCount})` : '')
        "
        :disabled="!archivedCount"
        :disabled-message="t('pages.profile.options.no-public-archived')"
        @toggle="
          (value: boolean) => onOptionsChange({ option: 'hideArchived', value })
        "
      />
    </div>
  </div>
</template>
