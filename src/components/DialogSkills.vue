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
  