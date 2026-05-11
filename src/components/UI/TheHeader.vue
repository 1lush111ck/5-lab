<template>
  <header class="header">
    <div class="header-left">
      <button @click="$emit('toggle-sidebar')" class="menu-btn">☰</button>
      <span class="logo">Новости</span>
    </div>
    <div class="header-right">
      <div class="search">
        <span class="icon mdi mdi-magnify search-icon"></span>
        <input type="text" placeholder="Поиск документа" class="search-input" />
      </div>
      <div class="user-info">Иванов А.А. ▾</div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1a4f8b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
}
.menu-btn { 
  background: none; 
  border: none; 
  color: white; 
  cursor: pointer; 
  font-size: 20px; 
}

.search-input { 
  padding: 8px 30px;
  justify-content: space-between;
  border-radius: 4px; 
  border: none; 
  margin-right: 200x; 
}

user-info {
  cursor: pointer;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header-left {
  align-items: center;
}

.search-icon {
  position: absolute;
    left: 12px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);;
    pointer-events: none;
}

.search {
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  align-items: center;
}

.search input {
  padding-left: 32px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  width: 291px;
  height: 32px;
  color: rgba(255, 255, 255, 1);
}

</style>