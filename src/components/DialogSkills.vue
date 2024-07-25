<template>
    <div
      v-show="showDialog"
      :class="[
        'fixed inset-0 z-[50] grid h-screen w-screen place-items-center transition-all duration-300',
        isShowDialog
      ]"
    >
      <div class="relative m-4 w-3/4 min-w-[75%] max-w-[75%] rounded-lg bg-white shadow-2xl">
        <div class="flex items-center justify-between p-4 text-2xl font-semibold text-blue-gray-900">
          <div class="flex items-center gap-3">
            <img :src="selectedSkill.image" alt="skill" class="h-9 w-9 rounded-full object-cover" />
            <div class="flex flex-col">
              <p class="text-sm font-medium">{{ selectedSkill.name }}</p>
            </div>
          </div>
          <button
            @click="closeDialog"
            class="p-0 w-10 h-10 bg-black rounded-full hover:bg-black active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                        C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
        <div class="p-4 text-blue-gray-500">
          <div class="bg-white">
            <div class="grid grid-cols-12 gap-0">
              <div
                class="bg-fixed relative col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 hidden md:block"
                :style="backgroundStyle"
              >

              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                <div>
                  <div class="border-b">
                    <div class="my-4 px-6">
                      <h2 class="font-semibold text-2xl">{{ selectedSkill.name }}</h2>
                    </div>
                  </div>
                  <div class="px-8 py-2">
                    <h4 class="text-lg text-gray-500 font-thin">{{ selectedSkill.name }}</h4>
                  </div>
                  <div class="px-8 my-6">
                    <div class="my-4 border-b w-full">
                      <h2 class="font-semibold text-lg">Description</h2>
                    </div>
                    <div
                      class="ml-6 relative bg-white p-4 border-r-8 shadow-md my-4 flex justify-between border-green-500"
                    >
                      <div class="absolute -left-6">
                        <div class="cursor-pointer  p-2 w-6 flex items-center text-xs text-white justify-center">
                         
                        </div>
                      </div>
                      <div>
                        <p>{{ selectedSkill.description }}</p>
                      </div>
                    </div>
                    <div
                      class="ml-6 relative bg-white p-4 border-r-8 shadow-md my-4 flex justify-between border-green-500"
                    >
                      <div class="absolute -left-6">
                        <div class="cursor-pointer p-2 w-6 flex items-center text-xs text-white justify-center">
                          
                        </div>
                      </div>
                      <div>
                        <ul v-if="selectedSkill.frameworks && selectedSkill.frameworks.length">
                          <li
                            class="mt-2"
                            v-for="(framework, index) in selectedSkill.frameworks"
                            :key="index"
                          >
                            {{ framework }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { defineProps, computed } from 'vue'
import { event } from './config'

const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true,
  },
  selectedSkill: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      image: '',
      description: '',
      frameworks: []
    })
  }
})

const emit = defineEmits([event.closeDialog])
const closeDialog = () => { emit(event.closeDialog) }
const isShowDialog = computed(() => props.showDialog ? 'opacity-100 scale-100' : 'opacity-0 scale-90')
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.selectedSkill.image})`,
  backgroundSize: 'cover'
}))
</script>

  <style scoped>
  .transition-all {
    transition: all 0.3s ease-in-out;
    font-family: var(--font-family);
  }
  </style>
  