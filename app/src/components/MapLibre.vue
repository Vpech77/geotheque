<template>
  <div class="map-container">
    <SideMenu />
    <div id="map"></div>
    <!-- <BasecardSwitcher
      :layers="layers"
      :otherLayers="otherLayers"
      :activeLayerIndex="activeLayerIndex"
      :currentZoom="currentZoom"
      @layer-change="changeActiveLayer"
      @other-layer-toggle="handleOtherLayerToggle"
      @display-option-change="handleDisplayOptionChange"
    />
    <ZoomControl />
    <VisibilitySwitch @toggle-visibility="toggleLayerVisibility" />
    <DrawControl
      v-if="activeTab === 'phototheque'"
      :map="olMap"
      :isDrawModeActive="drawModeActive"
      @draw-complete="handleDrawComplete"
      @draw-mode-activated="handleDrawModeActivated"
      @deactivate-draw-mode="handleDeactivateDrawMode"
    />

    <MapNavBar
      :coordinates="mouseCoordinates"
      @update:territory="handleTerritoryUpdate"
      :territoryName="territoryData.name"
    /> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import SideMenu from './SideMenu.vue'

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    // style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 1,
  })

  const url_plan = `https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&style=normal&layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&tilematrixset=PM&format=image/png&width=256&height=256&tilematrix={z}&tilerow={y}&tilecol={x}`

  map.addSource('wmtsSource', {
    type: 'raster',
    tiles: [url_plan],
    tileSize: 256,
  })

  map.addLayer({
    id: 'wmtsLayer',
    type: 'raster',
    source: 'wmtsSource',
    paint: {},
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
