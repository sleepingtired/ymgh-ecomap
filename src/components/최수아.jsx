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
        position={[430, 800]}
        image="https://사진주소"
        name="은행나무"
        humidity="79"
        ph="6.5"
        link="https://example.com"
      />

      <PlantMarker
        position={[620, 950]}
        image="https://사진주소"
        name="벚나무"
        humidity="80"
        ph="6.4"
        link="https://example.com"
      />

      <PlantMarker
        position={[700, 1200]}
        image="https://사진주소"
        name="소나무"
        humidity="83"
        ph="6.2"
        link="https://example.com"
      />
    </>
  )
}

export default 최수아