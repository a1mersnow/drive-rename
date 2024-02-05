<script setup lang="ts">
import { useMainStore } from '~/stores/main'
import { random } from '~/utils/tools'

const updateMsg = useUpdate()

const main = useMainStore()

function fillRandomPrefix() {
  const len = main.videoList.length
  if (!len)
    return
  const found = main.videoList[random(len)]
  if (found)
    main.prefix = found.name.replace(`.${found.file_extension}`, '')
}
</script>

<template>
  <div class="absolute z-100 mt-2 w-300px rounded-lg bg-primary-100 p-3 shadow">
    <p class="pb-2">
      批量重命名当前目录下的所有文件。<br>
      <a v-if="updateMsg" class="text-xs text-red-600 underline underline-dashed hover:text-red-600 hover:underline hover:underline-dashed" href="https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.user.js" target="_blank">{{ updateMsg }}</a>
    </p>

    <div class="mb-3 flex items-center gap-x-4">
      <div class="w-fit flex gap-x-1px overflow-hidden rounded text-xs text-white">
        <div
          class="cursor-pointer bg-primary px-2 py-1" :class="main.activeMode === 'extract' ? 'bg-primary-600' : ''"
          @click="main.activeMode = 'extract'"
        >
          剧集模式
        </div>
        <div
          class="cursor-pointer bg-primary px-2 py-1" :class="main.activeMode === 'regexp' ? 'bg-primary-600' : ''"
          @click="main.activeMode = 'regexp'"
        >
          正则模式
        </div>
      </div>

      <template v-if="main.activeMode === 'regexp'">
        <a
          class="text-xs text-primary-600 font-medium underline"
          href="https://regex101.com/"
          target="_blank"
        >
          正则可视化
        </a>

        <a
          class="text-xs text-primary-600 font-medium underline"
          href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
          target="_blank"
        >
          文档
        </a>
      </template>
    </div>

    <div class="grid gap-y-3 text-sm">
      <template v-if="main.activeMode === 'regexp'">
        <div>
          <label class="mb-1 block">From</label>
          <input v-model="main.from" autofocus placeholder="正则表达式" class="h-8 w-full rounded bg-white px-3 outline-none">
        </div>

        <div>
          <label class="mb-1 block">To</label>
          <input v-model="main.to" placeholder="替换表达式" class="h-8 w-full rounded bg-white px-3 outline-none">
        </div>

        <div class="text-xs font-mono">
          <span class="text-#b07d48">原文件名</span><span class="text-#999">.</span><span class="text-#59873a">replace</span><span class="text-#2993a3">(</span><span class="text-#ab5959">new</span> <span class="text-#59873a">RegExp</span><span class="text-#1e754f">(</span><span class="text-#b07d48">From</span><span class="text-#1e754f">)</span><span class="text-#999">,</span> <span class="text-#b07d48">To</span><span class="text-#2993a3">)</span>
        </div>
      </template>

      <template v-else>
        <div>
          <label class="mb-1 block flex items-center gap-x-2">
            剧名
            <i
              class="i-ion:dice block text-sm text-primary-700"
              title="随机填充原文件名"
              :class="main.videoList.length ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'"
              @click="fillRandomPrefix"
            />
          </label>
          <input v-model="main.prefix" autofocus placeholder="请输入" class="h-8 w-full rounded bg-white px-3 outline-none">
        </div>
        <div>
          <label class="mb-1 block">季</label>
          <input v-model="main.season" placeholder="0~99" class="h-8 w-full rounded bg-white px-3 outline-none">
        </div>
      </template>

      <div class="min-h-40px">
        <div v-if="main.error" class="text-xs text-red">
          {{ main.error }}
        </div>
        <div v-else-if="main.processData.total" class="text-xs text-gray">
          总共 {{ main.processData.total }} | 跳过 {{ main.processData.skip }} | 完成 {{ main.processData.done }}
        </div>

        <div v-if="main.warning" class="text-xs text-primary">
          {{ main.warning }}
        </div>
      </div>

      <div class="flex">
        <button
          class="flex items-center justify-center gap-x-1 bg-primary-600 px-3 py-2 text-xs text-white btn"
          :disabled="main.disabled || main.running"
          @click="main.run"
        >
          <i v-if="main.running" class="i-carbon:contour-finding block animate-spin" />
          Run It!
        </button>
      </div>
    </div>
  </div>
</template>
