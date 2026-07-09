import { Marker, Popup } from "react-leaflet"

function PlantMarker({
  position,
  image,
  name,
  humidity,
  ph,
  link
}) {
  return (
    <Marker position={position}>
      <Popup>
        <div
          style={{
            width: "220px"
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              borderRadius: "10px"
            }}
          />

          <h2>{name}</h2>

          <p>습도 : {humidity}%</p>
          <p>pH : {ph}</p>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            자세히 보기
          </a>
        </div>
      </Popup>
    </Marker>
  )
}

export default PlantMarker