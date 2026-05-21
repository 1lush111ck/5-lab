<template>
  <div class="news-card">
    <div class="small-image"></div>
    <div class="small-info">
      <span class="small-date">{{ formatDate(news.date) }}</span>
      <h3 class="small-title">{{ news.title }}</h3>
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
.news-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.small-image {
  width: 100%;
  height: 180px;
  background-color: #e0e0e0;
}

.small-date {
  color: #a0a0a0;
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
}

.small-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: #333;
  margin: 0;
}
</style>