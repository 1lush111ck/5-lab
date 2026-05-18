<template>
  <div class="app-wrapper">
    <TheNavbar @toggle-sidebar="toggleSidebar" />
    
    <div class="main-layout">
      <TheSidebar :isOpen="isSidebarOpen" />
      
      <main class="content" :class="{ 'full-width': !isSidebarOpen }">
  <router-view /> </main>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/UI/TheNavbar.vue';
import TheSidebar from './components/UI/TheSidebar.vue';

export default {
  components: { TheNavbar, TheSidebar },
  data() {
    return {
      isSidebarOpen: true
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      localStorage.setItem('sidebarStatus', JSON.stringify(this.isSidebarOpen));
    }
  },
  mounted() {
    const savedStatus = localStorage.getItem('sidebarStatus');
    if (savedStatus !== null) {
      this.isSidebarOpen = JSON.parse(savedStatus);
    }
  }
}
</script>

<style>
body { margin: 0; font-family: Arial, sans-serif; }
.main-layout { display: flex; padding-top: 60px; }
.content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}
.content.full-width {
  margin-left: 0;
}
</style>