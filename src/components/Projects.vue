<template>
  <section class="mx-auto sm:px-6 lg:px-2">
    <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 custom-text">
          EXPERIENCES PROFESSIONAL
        </h1>
        <div class="mt-5 p-y-10">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in experiences"
          :key="index"
          class=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100 custom-card"
        >
          <div class="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
            <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">{{ project.name }}</h5>
          </div>
          <div class="p-6 border-t border-blue-gray-50">
            <ul class="flex flex-col gap-3">
              <li class="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4 text-blue-gray-900"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
                <p
                  class="block antialiased font-sans text-sm leading-normal font-normal text-inherit"
                  v-html="project.description"
                ></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '../models';
</script>

<style scoped>
#projects {
  font-family: var(--font-family);
}
.custom {
  border: 0.02px solid rgb(236, 233, 233);
}
.custom-text {
  font-family: var(--font-family);
  font-size: 18px;
}
.description {
  font-family: var(--font-family);
  font-size: var(--font-size);
}
.custom-card {
  transition: transform 0.3s ease-in-out;
}
.custom-card:hover {
  transform: translate(10px, 10px);
}
</style>
