<template>
  <div class="info-pva">
    <div class="mission-card" v-if="Object.keys(currentPhotoInfo).length !== 0">
      <div class="preview-details" :key="JSON.stringify(currentPhotoInfo)">
        <div
          v-for="(val, key, index) in currentPhotoInfo"
          :key="key"
          class="detail-item"
          :style="{ 'animation-delay': `${index * 0.05}s` }"
        >
          <div class="detail-label">{{ key }}</div>
          <div class="detail-value">{{ val }}</div>
        </div>
      </div>
    </div>
    <div v-else class="no-data">
      Veuillez survolée avec la souris un cliché pour voir ses informations
    </div>
  </div>
</template>

<script setup>
import { useScanStore } from '@/components/store/scan'
import { storeToRefs } from 'pinia'

const scanStore = useScanStore()
const { currentPhotoInfo } = storeToRefs(scanStore)
</script>

<style scoped>
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.info-pva {
  padding-bottom: 100px;
}

.mission-card {
  background-color: white;
  border-radius: 8px;
  border: 1px solid #ddd;
  overflow: hidden;
  transition: all 0.3s ease;
}

.mission-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eaeaea;
}

.mission-header h3 {
  margin: 0;
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

.preview-details {
  padding: 16px 20px;
}

.detail-item {
  display: flex;
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid #f0f0f0;
  animation: slideInRight 0.5s forwards;
}

.detail-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.detail-label {
  flex: 0 0 45%;
  font-weight: 500;
  color: #555;
  font-size: 11px;
}

.detail-value {
  flex: 0 0 60%;
  color: #333;
  font-size: 11px;
}
</style>
