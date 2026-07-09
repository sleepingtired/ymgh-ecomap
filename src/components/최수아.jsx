import PlantMarker from "./PlantMarker"

function 최수아() {
  return (
    <>
      <PlantMarker
        position={[500, 1000]}
        image="https://사진주소"
        name="잣나무"
        humidity="81"
        ph="6.3"
        link="https://example.com"
      />
      <PlantMarker
        position={[0, 0]}
        image="https://사진주소"
        name="000"
        humidity="00"
        ph="00"
        link="https://example.com"
      />
    </>
  )
}

export default 최수아