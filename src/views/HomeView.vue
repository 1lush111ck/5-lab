<template>
  <div class="home-page">
    <h1 class="main-heading">Последние новости</h1>
    
    <MainNewsCard v-if="mainNews" :news="mainNews" />

    <div class="news-grid">
      <NewsCard 
        v-for="item in otherNews" 
        :key="item.id" 
        :news="item" 
      />
    </div>
  </div>
</template>

<script>
import newsData from '/NarfuNewsData.json';
import MainNewsCard from '@/components/UI/MainNewsCard.vue';
import NewsCard from '@/components/UI/NewsCard.vue';

export default {
  components: {
    MainNewsCard,
    NewsCard
  },
  data() {
    return {
      allNews: newsData
    }
  },
  computed: {
    mainNews() {
      return this.allNews.find(n => n.isMain);
    },
    otherNews() {
      return this.allNews.filter(n => !n.isMain);
    }
  }
}
</script>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
}

.main-heading {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #000;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  row-gap: 40px;
}
</style>