# 实时新闻列表

<div id="news-list">加载中...</div>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  try {
    const response = await fetch('https://ranks-live-api.vercel.app/?sina.news')
    const data = await response.json()
    
    if (data.code === 200 && data.data?.items) {  // 检查 data.data.items 是否存在
      const newsList = document.getElementById('news-list')
      newsList.innerHTML = data.data.items
        .map(item => `<div class="news-item"><a href="${item.url}" target="_blank">${item.title}</a></div>`)
        .join('')
    } else {
      console.error('API 返回数据格式错误:', data)
      newsList.innerHTML = '暂无新闻数据'
    }
  } catch (error) {
    console.error('请求出错:', error)
    document.getElementById('news-list').innerHTML = '新闻加载失败'
  }
})
</script>

<style>
.news-item {
  margin: 10px 0;
  padding: 8px;
  border-bottom: 1px solid #eee;
}
.news-item a {
  color: var(--vp-c-brand);
  text-decoration: none;
}
.news-item a:hover {
  text-decoration: underline;
}
</style>
