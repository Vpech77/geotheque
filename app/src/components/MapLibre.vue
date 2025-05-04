<template>
  <div class="map-container">
    <SideMenu />
    <div id="map"></div>
    <BasecardSwitcher
      :layers="layers"
      :otherLayers="otherLayers"
      :activeLayerIndex="activeLayerIndex"
      :currentZoom="currentZoom"
      @layer-change="changeActiveLayer"
      @other-layer-toggle="handleOtherLayerToggle"
      @display-option-change="handleDisplayOptionChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import SideMenu from './SideMenu.vue'
import BasecardSwitcher from './BasecardSwitcher.vue'

import { createWmtsLayers } from './composable/getBasemapLayers'

import { layers_carto, otherLayersCartoFrance } from './composable/baseMap'

const layers = ref(layers_carto)
const otherLayers = ref(otherLayersCartoFrance)
const currentZoom = ref(5)
const activeLayerIndex = ref(0)
let map = null

function changeActiveLayer(index) {
  activeLayerIndex.value = index
  const layerId = layers.value[index].id
  map.getStyle().layers.forEach((layer) => {
    if (map.getLayer(layer.id)) {
      map.setLayoutProperty(layer.id, 'visibility', layer.id === layerId ? 'visible' : 'none')
    }
  })
}

function handleOtherLayerToggle(layer) {
  console.log('handleOtherLayerToggle')
}

function handleDisplayOptionChange({ option, value }) {
  console.log('handleDisplayOptionChange')
}

onMounted(() => {
  map = new maplibregl.Map({
    container: 'map',
    // style: 'https://demotiles.maplibre.org/style.json',
    center: [2, 48],
    zoom: 5,
  })

  const wmtsLayers = createWmtsLayers(layers_carto)

  wmtsLayers.forEach((layer) => {
    map.addSource(layer.id, {
      type: 'raster',
      tiles: [layer.url],
      tileSize: 256,
    })

    map.addLayer({
      id: layer.id,
      type: 'raster',
      source: layer.id,
      layout: { visibility: layer.id === 'plan' ? 'visible' : 'none' },
    })
  })
})
</script>

<style scoped>
.map-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
}

#map {
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
