import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup
} from "react-leaflet"

import 강나윤 from "./components/강나윤"
import 박혜은 from "./components/박혜은"
import 최수아 from "./components/최수아"
import 피경림 from "./components/피경림"


import L from "leaflet"
import "leaflet/dist/leaflet.css"

import mapImage from "./assets/map.png"

const bounds = [
  [0, 0],
  [987, 2000]
]

//53번째 줄 참고해 마커 표시하는 건데 나중에 그물망 형태로 바꾸자 -수아

function App() {
  return (
    <div>
      <h1
        style={{
          position: "absolute",
          zIndex: 1000,
          left: "20px",
          top: "10px",
          background: "white",
          padding: "10px 15px",
          borderRadius: "10px"
        }}
      >
        양여 생태 지도
      </h1>

      <MapContainer
        center={[493, 1000]}
        zoom={0}
        minZoom={-2}
        maxZoom={4}
        crs={L.CRS.Simple}
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
        <ImageOverlay
          url={mapImage}
          bounds={bounds}
        />
        <최수아 />
        <박혜은 />
        <강나윤 />
        <피경림 />
      </MapContainer>
    </div>
  )
}

export default App