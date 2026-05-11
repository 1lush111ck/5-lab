<template>
  <aside class="sidebar" :class="{ 'is-closed': !isOpen }">
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/"><span class="icon mdi mdi-home"></span> Последние новости</router-link>
        </li>
        <li>
          <router-link to="/most-viewed"><span class="icon mdi mdi-fire"></span> Самые просматриваемые</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 250px;
  background: #f4f4f4;
  border-right: 1px solid #ddd;
  transition: transform 0.3s ease;
}
.sidebar.is-closed {
  transform: translateX(-100%);
}
.sidebar-nav ul { list-style: none; padding: 20px; }
.sidebar-nav li { margin-bottom: 15px; }
.sidebar-nav a { text-decoration: none; color: #333; font-size: 14px; }
</style>