import { MapContainer, TileLayer } from "react-leaflet";

const { VITE_USERNAME, VITE_STYLE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

const Map = ({
  position,
}: {
  position: {
    lat: number;
    log: number;
  };
}) => {
  return (
    <div className="w-full mt-8 h-full flex items-center justify-center">
      <MapContainer
        style={{ width: "80%", aspectRatio: "16/9" }}
        center={[position.lat, position.log]}
        zoom={13}
        className="b-2 b-darkBlue"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${VITE_USERNAME}/${VITE_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_ACCESS_TOKEN}`}
        />
      </MapContainer>
    </div>
  );
};
export default Map;
// https://api.mapbox.com/styles/v1/ashendhiaa/clbpgkdj3002d14qr0sllj3xo.html?title=view&access_token=&zoomwheel=true&fresh=true#16.49/35.708752/-0.664207
