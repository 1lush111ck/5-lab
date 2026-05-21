<template>
  <div class="main-news-card">
    <div class="image-placeholder"></div>
    <div class="content">
      <span class="date">{{ formatDate(news.date) }}</span>
      <h2 class="title">{{ news.title }}</h2>
      <p class="description">{{ news.description }}</p>
      <button class="btn-more">Читать далее</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)

      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()

      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')

      return `${day}.${month}.${year}, в ${hours}:${minutes}`
    }
  }
}
</script>

<style scoped>
.main-news-card {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  background: #fff;
}

.image-placeholder {
  flex: 0 0 55%;
  height: 380px;
  background-color: #e0e0e0;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  margin: 0;
}

.date {
  color: #a0a0a0;
  font-size: 14px;
  margin-bottom: 15px;
}

.title {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 20px;
  color: #333;
}

.description {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.btn-more {
  width: fit-content;
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-more:hover {
  background-color: #303f9f;
}
</style>