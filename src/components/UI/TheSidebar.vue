<template>
  <aside class="sidebar" :class="{ 'is-closed': !isOpen }">
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/" class="nav-link">
            <img
              src="@/assets/icons/bluehome.svg"
              alt="home"
              class="home-icon"
            />
            Последние новости
          </router-link>
        </li>

        <li>
          <router-link to="/most-viewed" class="nav-link">
            <img
              src="@/assets/icons/bluefire.svg"
              alt="fire"
              class="fire-icon"
            />
            Самые просматриваемые
          </router-link>
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
  top: 20px;
  bottom: 0;
  width: 250px;
  background: #f4f4f4;
  border-right: 1px solid #ddd;
  transition: transform 0.7s ease;
}

.sidebar.is-closed {
  transform: translateX(-100%);
}

.sidebar-nav ul {
  list-style: none;
  padding: 20px;
}

.sidebar-nav li {
  margin-bottom: 10px;
}

/* ОБЫЧНАЯ КНОПКА */
.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 14px;
  border-radius: 8px;

  text-decoration: none;
  color: #333;
  font-size: 18px;

  transition:
    background 0.2s,
    color 0.2s;
}

/* ЭФФЕКТ ПРИ НАВЕДЕНИИ */
.nav-link:hover {
  background: #e6eef8;
}

/* АКТИВНАЯ СТРАНИЦА */
.nav-link.router-link-active {
  background: #d8e9ff;
  color: #1565c0;
  font-weight: 600;
}

/* ИКОНКИ */
.home-icon,
.bluefire,
.bluehome,
.fire-icon {
  width: 20px;
  height: 20px;
}
</style>