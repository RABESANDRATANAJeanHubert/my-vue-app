<template>
  <div id="app">
    <header class="header from-blue-500 to-indigo-600 text-black p-6 w-full fixed top-0">
      <div class="py-3 px-5 bg-white rounded shadow-xl">
        <div class="-mx-1">
          <ul class="flex w-full flex-wrap items-center h-10">
            <li class="block relative">
              <a
                href="#contact"
                :class="['link', { active: activeSection === 'contact' }]"
                @click.prevent="handleClick('#contact')"
                class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span class="mr-3 text-xl"> <i class="mdi mdi-phone"></i> </span>
                <span>Contact</span>
              </a>
            </li>
            <li class="block relative">
              <a
                href="#skills"
                :class="['link', { active: activeSection === 'skills' }]"
                @click.prevent="handleClick('#skills')"
                class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span class="mr-3 text-xl"> <i class="mdi mdi-school"></i> </span>
                <span>Skills</span>
              </a>
            </li>
            <li class="block relative">
              <a
                href="#projects"
                :class="['link', { active: activeSection === 'projects' }]"
                @click.prevent="handleClick('#projects')"
                class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span class="mr-3 text-xl"> <i class="mdi mdi-briefcase"></i> </span>
                <span>Experience</span>
              </a>
            </li>
            <li class="block relative">
              <a
                href="#about"
                :class="['link', { active: activeSection === 'about' }]"
                @click.prevent="handleClick('#about')"
                class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span class="mr-3 text-xl"> <i class="mdi mdi-account"></i> </span>
                <span>About</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section id="contact" class="section">
        <Contact />
      </section>
      <section id="skills" class="section">
        <Skills />
      </section>
      <section id="projects" class="section">
        <Projects />
      </section>
      <section id="about" class="section">
        <About />
      </section>
    </main>
    <Chatbot />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Chatbot from '../components/Chatbot.vue';

const activeSection = ref('');

const checkActiveSection = () => {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY;
  const navbarHeight = document.querySelector('header').offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight; // Adjust based on header height
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
      const navbarHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
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

<style>
body {
  font-family: var(--font-family);
  background-color: rgb(241, 241, 241);
  margin: 0;
  padding: 0;
}

main {
  margin-top: 80px; /* Adjust based on header height */
}

.header-navigation a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.header-navigation a.active {
  color: var(--header-navigation-color);
}

.header {
  background-color: rgb(228, 228, 236);
  width: 100%;
  border: 1 px solid rgb(68, 0, 255);
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.section {
  padding: 10px 0;
}

.header {
  border: 1px solid rgba(199, 187, 187, 0.3);
  border-radius: 8px;
  font-family: var(--font-family);
}

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
