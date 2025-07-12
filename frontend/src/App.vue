<script setup>
import { RouterView } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const patternRef = ref(null);
let onScroll;

onMounted(() => {
  onScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? scrollTop / docHeight : 0;
    const px = pct * 200; // total shift equal pattern size (200px)
    if (patternRef.value) {
      patternRef.value.setAttribute('patternTransform', `translate(${-px}, 0)`);
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll(); // inisialisasi awal
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <div class="font-sans relative">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="img-patt"
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
            ref="patternRef"
          >
            <image
              href="https://static.vecteezy.com/system/resources/thumbnails/008/143/181/small_2x/abstract-blue-and-purple-neon-lighting-arrows-pattern-on-dark-background-technology-futuristic-concept-vector.jpg"
              x="0"
              y="0"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#img-patt)" />
      </svg>
    </div>
    <RouterView />
  </div>
</template>
