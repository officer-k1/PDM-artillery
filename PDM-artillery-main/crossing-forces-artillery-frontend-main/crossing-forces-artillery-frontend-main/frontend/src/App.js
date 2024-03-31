import "./App.css";
import { io } from "socket.io-client";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Map from './components/Map/Map';
import { useAlert } from 'react-alert'
import logo from './logo.png'
import { MyTable } from "./components/DataTable/DataTable";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { border, height } from '@mui/system';
import useAuth from './hooks/useAuth';
import Unauthorised from './unauthorised'
import Navbar from "./components/NavBar/NavBar";
import { HiddenEasterEgg } from "react-hidden-easter-egg";
import { ConfettiCanvas } from "react-raining-confetti";
import { HackText } from "react-hacker-text-effect";
import Popup from "reactjs-popup";

const targetCategories = [
  "שם המטרה",
  "מספר מזהה",
  "רדיוס פגיעה (מטר)",
  "תיאור",
  "עדכון אחרון",
];

const URL = "https://pdm-crossing-forces-artillery-api.apps.hashlama013.bsmch.net/";
const socket = io(URL);

const soldierCategories = ["שם החייל", `מספר מזהה`, "עדכון אחרון"];

function App() {
  const bsmch = {"target_name":"בסמח","target_id":"469e32e8-a46c-4fe5-a7bd-414aff217add","lat":31.264186199061452,"lng":34.814121149700824,"weapon_name":"Shrapnel Shell","weapon_radius":280,"target_description":"מטרה חיה - רצועת עזה","time_updated":"2023-12-28T00:00:01.000Z","is_friendly_fire":true}

  const alert = useAlert();

  const [coords, setCoords] = useState([30.915769, 34.811643]);
  const [zoom, setZoom] = useState(9);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);
  const [radius, setRadius] = useState(1);

  const [show, setShow] = useState(false);
  let targets = [bsmch];

  useEffect(() => {
    setTimeout(() => setFade(false), 1300);
    setTimeout(() => setLoading(false), 2800);

    const style = {
      textTransform: "initial",
      direction: "rtl",
      whiteSpace: "pre-line",
      color: "black",
      fontFamily: "Heebo",
    };

    const isTrue = false;

    const focusTarget = (coords, radius, zoom) => {
      setCoords(coords);
      setZoom(zoom);
      setRadius(radius);
    };

    const soldier_ids = ['b65a1585-33e0-423c-aa2d-94abeb4de099', '75047e50-cbab-46ff-b0dc-f1a004d4bed3', 'f55929dd-7e11-4877-968d-d604efd56904', '3982144a-6f65-4bb4-8ea9-3d215b2c7427', '203acd48-a59b-47d7-8db6-3110fe32a35b', 'b65a1585-33e0-423c-aa2d-94abeb4de099'];

    socket.on(
      "event",
      (target) => {
        const messageTemplate = `
        שם: ${target.target_name}
        כלי תקיפה: ${target.weapon_name}
        רדיוס: ${target.weapon_radius}
        מטרת תקיפה: ${target.target_description}`;

        alert.info(<div style={style}>
          <h3 style={{margin: 0}}>מטרה חדשה התקבלה!</h3>
          {messageTemplate}{'\n\n'}
          <Button onClick={() => focusTarget([target.lat, target.lng], target.weapon_radius, 17)} style={{margin: '5px'}} variant="contained">התמקדות</Button>
          <Button variant="contained" color="success" style={{margin: '10px'}}>אשר תקיפה</Button>
          <span>{'\n'}</span>
          <span style={{fontWeight: 'bold', marginRight: '0px'}}>{'המלצה: '}</span>
          <span style={{fontWeight: 'bold', color: isTrue ? 'green' : 'red'}}>{`${isTrue ? 'אישור' : 'אי אישור'}`}</span>
          {!isTrue && (
          <Tooltip title={soldier_ids.map((soldier_id, index) => `${index + 1}. ${soldier_id}\n`)} placement="bottom" arrow style={{marginRight: '50px'}}>
            <span style={{width: '50px', marginRight: '50px'}}>
              <span>חיילים מקושרים</span>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </span>
          </Tooltip>
          )}
        </div>)

        setTargetsData([...targets, target])
        targets.push(target)
      }
    );
  }, []);

  const [forcesData, setForcesData] = useState([]);
  const [targetsData, setTargetsData] = useState([bsmch]);
  const [selectedForce, setSelectedForce] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  //const [isLogin , token , error] = useAuth();
  //const isLogin=true
  const receiveFocusCords = (coords, radius) => {
    setCoords(coords);
    setRadius(radius);
    setZoom(17);
  };

  useEffect(() => {
    const fetchForcesData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/soldiers");
        setForcesData(response.data);
      } catch (error) {
        console.error("Error fetching Forces data:", error);
      }
    };

    const fetchTargetsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/targets");
        setTargetsData([...response.data, bsmch])
        targets = [...response.data, bsmch]
      } catch (error) {
        console.error("Error fetching Targets data:", error);
      }
    };

    fetchForcesData();
    fetchTargetsData();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <header className="Loading-header">
          <img className={fade ? 'shown' : 'hidden'} src={logo} width={500} height={500}></img>
        </header>
      </div>
    );
  }


  /*if (error) {
    return <div>Error: {error}</div>; // Render the error message
  }
  if (isLogin === null) {
    return (
      <div className="App">
        <header className="Loading-header">
          <img
            className={fade ? "shown" : "hidden"}
            src={logo}
            width={500}
            height={500}
          ></img>
        </header>
      </div>
    );
  }
  if (isLogin === false) {
    return <Unauthorised></Unauthorised>;
  }*/

  return (
    <div className="App">
      <header className={"App-header"} >
        <Navbar style={{}}></Navbar>

        <Grid container  className={show? 'fade':'show'}>
          <Grid xs={6} >
          <Map coords={coords} zoom={zoom} radius={radius} forcesData={forcesData} targetsData={targetsData}></Map>
          </Grid>
          <Grid xs={6} style={{ height: "90vh" }}>
            <Grid
              item
              xs={12}
              style={{ height: "40%", display: "flex", alignItems: "center" }}
            >
              <MyTable
                categories={soldierCategories}
                data={forcesData.map((force) => ({
                  name: force.soldier_name,
                  id: force.soldier_id,
                  lastUpdate: new Date(force.time_sent).toLocaleString('he-IL', { timeZone: 'UTC' }),
                  lat: force.lat,
                  lng: force.lng,
                  is_danger: force.is_danger,
                }))}
                entity={"כוחות"}
                sendCords={receiveFocusCords}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ height: "45%", alignItems: "center", marginTop: "10%" }}
            >
              <MyTable
                categories={targetCategories}
                data={targetsData.map((target) => ({
                  name: target.target_name,
                  id: target.target_id,
                  radius: target.weapon_radius,
                  desc: target.target_description,
                  lastUpdate: new Date(target.time_updated).toLocaleString('he-IL', { timeZone: 'UTC' }),
                  lat: target.lat,
                  lng: target.lng,
                  is_danger: target.is_friendly_fire,
                }))}
                entity={"מטרות"}
                sendCords={receiveFocusCords}
              />
            </Grid>
          </Grid>
        </Grid>
      </header>
      <HiddenEasterEgg code={['c', 'o', 'n', 'f', 'e', 't', 't', 'i']} resetEggMs={10000} cb={() => console.log('start raining')}>
         <ConfettiCanvas active={true} fadingMode="LIGHT" stopAfterMs={5000}/>
      </HiddenEasterEgg>

      <HiddenEasterEgg
        code={["h", "a", "c", "k"]}
        resetEggMs={5000}
        cb={() => {setShow(true)}}
        key="test-1"
      />
      <Popup open={show} closeOnDocumentClick onClose={() => setShow(false)}>
        <div>
          <HackText word="Artillery" textSize="40px"/>
        </div>
      </Popup>
      

    </div>
  );
}

export default App;
