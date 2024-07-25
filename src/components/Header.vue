<template>
  
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-bold">My Portfolio</h1>
      <ul class="flex space-x-6">
        <li>
          <a
            href="#contact"
            :class="['link', { active: activeSection === 'contact' }]"
            @click.prevent="handleClick('#contact')"
          >About</a>
        </li>
        <li>
          <a
            href="#skills"
            :class="['link', { active: activeSection === 'skills' }]"
            @click.prevent="handleClick('#skills')"
          >Skills</a>
        </li>
        <li>
          <a
            href="#projects"
            :class="['link', { active: activeSection === 'projects' }]"
            @click.prevent="handleClick('#projects')"
          >Experience</a>
        </li>
        <li>
          <a
            href="#about"
            :class="['link', { active: activeSection === 'about' }]"
            @click.prevent="handleClick('#about')"
          >Follows</a>
        </li>
      </ul>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('');

const checkActiveSection = () => {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 110; // Adjust based on header height
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop) {
      activeSection.value = sectionId;
    }
  });
};

const handleClick = (target) => {
  scrollToElement(target, 0);
};

const scrollToElement = (target, delay) => {
  setTimeout(() => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth',
      });
    }
  }, delay);
};

onMounted(() => {
  checkActiveSection();
  window.addEventListener('scroll', checkActiveSection);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection);
});
</script>

<style scoped>
.link {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.link:hover,
.link.active {
  border-color: var(--link-border-color);
  background-color: var(--link-background-color);
  text-decoration: none;
  animation: hoverAnimation 0.3s forwards;
  border: var(--link-border);
}

@keyframes hoverAnimation {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
