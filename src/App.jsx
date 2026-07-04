import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup
} from "react-leaflet"

import L from "leaflet"
import "leaflet/dist/leaflet.css"

import mapImage from "./assets/map.png"

const bounds = [
  [0, 0],
  [987, 2000]
]

//53번째 줄 참고해 마커 표시하는 건데 나중에 그물망 형태로 바꾸자 -최수아

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

        <Marker position={[500, 1000]}>
          <Popup>
            <div
              style={{
                width: "220px"
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQUiM2T-Ld2RgbhugiMudtJ8yL6RKe_knavz4rH1wJCDzUIL1hk50y5YhlqTioyUvJyswlJDhT9BOKA9UOIj0XG9x9llXK40kwP1w40E&s=10"
                alt="생물"
                style={{
                  width: "100%",
                  borderRadius: "10px"
                }}
              />

              <h2>잣나무</h2>

              <p> 온도: 24℃</p>
              <p> 습도: 81%</p>
              <p> pH: 6.3</p>

              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
              >
                자세히 보기
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default App