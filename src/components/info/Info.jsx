import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import React from "react";

function Info() {
  return (
    <YMaps>
      <div>
        <Map
          style={{ width: "50%", height: "700px" }}
          defaultState={{ center: [55.611914, 37.485882], zoom: 15 }}
        >
          <Placemark geometry={[55.611914, 37.485882]} />
        </Map>
      </div>
    </YMaps>
  );
}

export default Info;
