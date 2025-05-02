<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1, // starting zoom
  })
})
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
