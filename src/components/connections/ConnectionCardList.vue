<template>
  <template v-if="!renderConnections.length">
    <div class="card m-2 flex-row p-2 text-sm">
      {{ $t('noContent') }}
    </div>
  </template>
  <VirtualScroller
    v-else
    :data="renderConnections"
    :size="size"
  >
    <template v-slot="{ item }: { item: Connection }">
      <ConnectionCard
        class="mb-1"
        :conn="item"
      ></ConnectionCard>
    </template>
  </VirtualScroller>
</template>

<script setup lang="ts">
import { renderConnections } from '@/store/connections'
import { connectionCardLines } from '@/store/settings'
import type { Connection } from '@/types'
import { computed } from 'vue'
import VirtualScroller from '../common/VirtualScroller.vue'
import ConnectionCard from './ConnectionCard'

const size = computed(() => {
  return connectionCardLines.value.length * 28 + 4
})
</script>
