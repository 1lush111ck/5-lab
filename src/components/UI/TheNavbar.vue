<template>
  <header class="header">
    <div class="header-left">
      <button @click="$emit('toggle-sidebar')" class="menu-btn">☰</button>

      <span class="logo">
        <img
          src="@/assets/icons/bullhorn.svg"
          alt="bullhorn"
          class="bullhorn"
        >
        Новости
      </span>
    </div>

    <div class="header-right">
      <div class="search">
        <span class="icon mdi mdi-magnify search-icon"></span>

        <input
          type="text"
          placeholder="Поиск документа"
          class="search-input"
        />
      </div>

      <!-- USER DROPDOWN -->
      <div class="user-dropdown" ref="dropdown">
        <button class="user-btn" @click="toggleMenu">
          Иванов А.А.
          <span class="arrow" :class="{ open: isOpen }">▾</span>
        </button>

        <transition name="fade">
          <div v-if="isOpen" class="dropdown-menu">
            <div class="dropdown-item">
              <span class="mdi mdi-cog-outline"></span>
              Настройки
            </div>

            <div class="dropdown-item logout">
              <span class="mdi mdi-logout"></span>
              Выход
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const dropdown = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #1a4f8b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bullhorn {
  height: 15px;
}

/* SEARCH */

.search {
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  height: 27px;
  padding: 0 8px;
}

.search-input {
  border: none;
  outline: none;
  font-size: 14px;
  width: 200px;
  color: black;
}

.search-icon {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 6px;
}

/* DROPDOWN */

.user-dropdown {
  position: relative;
}

.user-btn {
  height: 40px;
  padding: 0 14px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;
}

.user-btn:hover {
  background: rgba(255, 255, 255, 0.12);
}

.arrow {
  transition: transform 0.2s;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 42px;
  right: 0;
  width: 180px;
  background: #f1f1f1;
  color: #333;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  z-index: 2000;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: #e4e4e4;
}

.dropdown-item .mdi {
  font-size: 18px;
  color: #666;
}

.logout {
  border-top: 1px solid #d8d8d8;
}

/* ANIMATION */

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>