const getWmtsUrl = (layerId) => {
    if (layerId === 'cartesign' || layerId === 'scan25') {
        return `https://data.geopf.fr/private/wmts?apikey=ign_scan_ws&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&style=normal`
      } else if (layerId === 'ortho1950') {
        return `https://data.geopf.fr/wms-r`
      }
      return `https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&style=normal`
    }

const getWmtsLayerName = (layerId) => {
    switch (layerId) {
        case 'plan':
          return 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2'
        case 'ortho':
          return 'ORTHOIMAGERY.ORTHOPHOTOS'
        case 'bdparcellaire':
          return 'CADASTRALPARCELS.PARCELS'
        case 'cartesign':
          return 'GEOGRAPHICALGRIDSYSTEMS.MAPS'
        case 'scan25':
          return 'GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR'
        case 'ortho1950':
          return 'ORTHOIMAGERY.ORTHOPHOTOS.1950-1965'
        default:
          return 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2'
      }
}

const getFormatWmtsLayer = (layerId) => {
    switch (layerId) {
        case 'cartesign':
        case 'ortho':
        case 'scan25':
          return 'image/jpeg'
        case 'plan':
        case 'bdparcellaire':
          return 'image/png'
        case 'ortho1950':
          return 'image/png'
        default:
          return 'image/jpeg'
      }
}

export const createWmtsLayers = (layers) => {
    return layers.map(layer => {
        return {
            id : layer.id,
            url : `${getWmtsUrl(layer.id)}&layer=${getWmtsLayerName(layer.id)}&tilematrixset=PM&format=${getFormatWmtsLayer(layer.id)}&width=256&height=256&tilematrix={z}&tilerow={y}&tilecol={x}`
        }
    })
}
