<template>
<section class="text-black bg-white">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-black mb-20">
      {{ t("footer.about.title") }}
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577v-2.17c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.303 3.495.996.107-.774.42-1.303.762-1.602-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.006.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.921.431.372.816 1.1.816 2.215v3.287c0 .32.218.694.824.575C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-black text-lg title-font font-medium mb-2">{{ t("footer.sections.github.title") }}</h2>
          <p class="leading-relaxed text-base">{{ t("footer.sections.github.description") }}</p>
          <a href="https://github.com/RABESANDRATANAJeanHubert" target="_blank" class="mt-3 text-indigo-400 inline-flex items-center">{{ t("footer.sections.github.learn_more") }}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <g id="github">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577v-2.17c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.303 3.495.996.107-.774.42-1.303.762-1.602-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.006.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.921.431.372.816 1.1.816 2.215v3.287c0 .32.218.694.824.575C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"></path>
            </g>
            <g id="linkedin">
              <path d="M22.23 0H1.77C.792 0 0 .775 0 1.73v20.54C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.27V1.73C24 .775 23.208 0 22.23 0zM7.12 20.452H3.684V9h3.436v11.452zM5.402 7.661c-1.1 0-1.991-.896-1.991-1.996 0-1.105.892-2.002 1.991-2.002s1.993.897 1.993 2.002c0 1.1-.893 1.996-1.993 1.996zm15.052 12.791h-3.436v-5.74c0-1.367-.025-3.126-1.908-3.126-1.91 0-2.205 1.493-2.205 3.022v5.844H9.47V9h3.297v1.561h.047c.457-.862 1.575-1.767 3.24-1.767 3.463 0 4.103 2.28 4.103 5.247v6.411z"></path>
            </g>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-black text-lg title-font font-medium mb-2">{{ t("footer.sections.linkedin.title") }}</h2>
          <p class="leading-relaxed text-base">{{ t("footer.sections.linkedin.description") }}</p>
          <a href="https://www.linkedin.com/in/jean-hubert-rabesandratana-15b358189" target="_blank" class="mt-3 text-indigo-400 inline-flex items-center">{{ t("footer.sections.linkedin.learn_more") }}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-black text-lg title-font font-medium mb-2">{{ t("footer.sections.facebook.title") }}</h2>
          <p class="leading-relaxed text-base">{{ t("footer.sections.facebook.description") }}</p>
          <a href="https://www.facebook.com/yourprofile" target="_blank" class="mt-3 text-indigo-400 inline-flex items-center">{{ t("footer.sections.facebook.learn_more") }}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style>
.animate-wiggle {
  animation: wiggle 0.5s ease-in-out infinite alternate;
}

#about {
  font-family: var(--font-family);
}
</style>
