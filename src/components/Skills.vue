<template>
  <div>
    <section class="mx-auto sm:px-6 lg:px-2">
      <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 custom-text">
          SKILLS
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="w-full bg-white rounded-lg p-6 flex flex-col justify-center items-center cursor-pointer shadow-md"
          @mouseenter="openDialog(skill)"
          @mouseleave="closeDialog"
        >
          <div class="mb-4">
            <img class="object-center object-cover rounded-full h-36 w-36" :src="`${skill.image}`" :alt="skill.name">
          </div>
          <div class="text-center">
            <p class="text-xl text-gray-700 font-bold mb-2 custom-name">{{ skill.name }}</p>
            <p class="text-base text-gray-400 font-normal custom-description">
              <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline hover:shadow-xs p-3 my-4">
                Show more detail ...
              </button>
            </p>
          </div>
          <transition name="fade">
            <ul v-if="skill.showFrameworks" class="absolute bottom-0 left-0 right-0 bg-white rounded-b-lg p-2 shadow-md">
              <li v-for="(framework, idx) in skill.frameworks" :key="idx" class="text-sm text-gray-700">{{ framework }}</li>
            </ul>
          </transition>
        </div>
      </div>
    </section>
    <DialogSkills
      :show-dialog="showDialog"
      :selected-skill="selectedSkill"
      @close-dialog="closeDialog"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DialogSkills from './DialogSkills.vue';
import { skilList } from '../models';

const skills = ref(skilList);

const showDialog = ref(false);
const selectedSkill = ref({});

const openDialog = (skill) => {
  selectedSkill.value = skill;
  showDialog.value = true;
};

const closeDialog = () => {
  showDialog.value = false;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.custom-text {
    font-family: var(--font-family);
    font-size: 16px;
}
.custom-name{
    font-family: var(--font-family);
    font-size: var(--font-size);
}
.custom-description{
    font-family: var(--font-family);
    font-size: var(--font-size);
}
</style>
