import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ScaleControl,
  FeatureGroup,
} from "react-leaflet";
import {EditControl} from 'react-leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { Icon } from "leaflet";
import * as L from "leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";
import { useEffect, useState } from "react";
import React from "react";
import bluePin from "../../assets/soldiersReal.png";
import redPin from "../../assets/targetReal.png";
import adiIcon from '../../assets/adiImage.png'
import zIndex from "@mui/material/styles/zIndex";
import { printGoat } from "../../goat";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function Map({ coords, zoom, radius, forcesData, targetsData }) {
  const [map, setMap] = useState(null);
  const [friendlyData, setFriendlyPostions] = useState([]);
  const [enemyData, setEnemyPostions] = useState([]);
  const [firstTime, setFirstTime] = useState([true]);

  useEffect(() => {
    if (map) {
      map.flyTo(coords, zoom, {
        animate: true,
        duration: 1.5
});
 
      if (radius !== undefined) {
        const circle = L.circle(coords, {radius: radius, color: 'black'}).addTo(map);
        setTimeout(() => {
          map.removeLayer(circle);
        }, 2 * 60 * 1000)
      }
      }
  }, [coords, zoom]);

  const drawCircle = (position) => {
    const circle = L.circle([position.lat, position.lng], {
      radius: position.weapon_radius,
      color: "black",
    }).addTo(map);

    setTimeout(() => {
      map.removeLayer(circle);
    }, 8000);
  };

  const theme = createTheme({
    palette: {
      primary:{main: '#94cbe0'},
    },
  });

  useEffect(() => {
    setFriendlyPostions(forcesData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forcesData]);

  useEffect(() => {
    setEnemyPostions(targetsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetsData]);

  const bluePinIcon = new Icon({
    iconUrl: bluePin,
    iconSize: [38, 38],
  });

  const redPinIcon = new Icon({
    iconUrl: redPin,
    iconSize: [38, 38],
  });

  const adiPinIcon = new Icon({
    iconUrl: adiIcon,
    iconSize: [200, 200],
  });

  if (firstTime) {
    setFirstTime(false);
    printGoat();
  }

  return (
    <div>
      {friendlyData.length >= 0 && friendlyData.length >= 0 && (
        <MapContainer
          center={[30.915769, 34.811643]}
          zoom={9}
          style={{ zIndex: 1 }}
          ref={setMap}
          worldCopyJump={true}
        >
          <TileLayer
            attribution="Adi Goldshtein siz"
            url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
            minZoom={3}
          />

          {friendlyData.map((position, index) => {
            const time = new Date(position.time_sent);
            const formatedTime = time.toLocaleString('he-IL', { timeZone: 'UTC' });

            return (
              <Marker
                key={index}
                icon={bluePinIcon}
                position={[position.lat, position.lng]}
              >
                <Popup>
                  <h1>{position.soldier_name}</h1>
                  <ul>
                    <li>
                      מספר מזהה: <br></br> {position.soldier_id}
                    </li>
                    <div>
                      {position.is_danger ? (
                        <li className="negativeAttackStatus">
                          סטטוס: בסכנת פגיעה
                        </li>
                      ) : (
                        <li className="positiveAttackStatus">סטטוס: בטוח</li>
                      )}
                    </div>
                    <li>עודכן ב: {formatedTime}</li>
                  </ul>
                </Popup>
              </Marker>
            );
          })}

          {enemyData.map((position, index) => {
            const time = new Date(position.time_updated);
            const formatedTime = time.toLocaleString('he-IL', { timeZone: 'UTC' });

            return (
              <Marker
                key={index}
                icon={redPinIcon}
                position={[position.lat, position.lng]}
              >
                <Popup>
                  <h1>{position.target_name}</h1>
                  <ul>
                    <li>
                      מספר מזהה: <br></br> {position.target_id}
                    </li>
                    <div>
                      {position.is_friendly_fire ? (
                        <li className="negativeAttackStatus">סטטוס: לא רשאי</li>
                      ) : (
                        <li className="positiveAttackStatus">סטטוס: רשאי</li>
                      )}
                    </div>
                    <li>עודכן ב: {formatedTime}</li>
                    <li>תיאור: {position.target_description}</li>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => drawCircle(position)}
                      style={{
                        fontWeight: "bold",
                        color: "#2d3030"
                      }}
                    >
                      show range
                    </Button>
                    </ThemeProvider>
                  </div>
                </Popup>
              </Marker>
            );
          })}


            <Marker
                key={"adiGoat"}
                icon={adiPinIcon}
                position={[-79.801276, -114.962975]}
              >
                <Popup>
                 <h1>adiGoat</h1>
                 <h2>padam avengers</h2>
                </Popup>
              </Marker>

          <FeatureGroup>
            <EditControl position="topright" draw={{ marker: false, circlemarker: false}}/>
          </FeatureGroup>

          <ScaleControl imperial={false} />
          <FullscreenControl/>
        </MapContainer>
      )}
    </div>
  );
}
