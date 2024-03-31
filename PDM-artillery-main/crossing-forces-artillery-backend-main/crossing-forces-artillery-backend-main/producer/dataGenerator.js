function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const getRandElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const targetNames = [
  "כלי רכב עוין",
  "מנהרה",
  'אמל"ח',
  "חוליית מחבלים",
  "מבנה אזרחי",
];
const weaponNames = [
  "White Phosphorus (WP)",
  "Torpedo",
  "High Explosive (HE)",
  "Cluster Bomb",
  "Canister",
  "AGM-65 Maverick",
];
const targetDecsription = "מטרה חיה - רצועת עזה";
let danger = true;

const generateObject = () => {
  const isFriendlyFire = danger;
  danger = !danger;
  return {
    target_name: getRandElement(targetNames),
    target_id: makeid(15),
    lng: Math.random() * (34.42 - 34.23) + 34.23,
    lat: Math.random() * (31.5 - 31.26) + 31.26,
    weapon_name: getRandElement(weaponNames),
    weapon_radius: Math.floor(Math.random() * 300) + 40,
    target_description: targetDecsription,
    time_updated: new Date(),
    is_friendly_fire: isFriendlyFire,
  };
};

export default generateObject;
