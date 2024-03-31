import { getAllTargets } from "../repositories/targets.repository.js";
import { getAllSoldiers } from "../repositories/soldiers.repository.js";
import { targets } from "../data/targets.js";
import { } from "../data/data.js";

const Targets = await getAllTargets("apiKey");
const soldiers = await getAllSoldiers("apiKey");

const updateDb = () => {
    for(let target of Targets){
        targets[target.target_id] = soldiers.filter(soldier => (isInRadius
            (target.lng, target.lat, soldier.airtag.lng, soldier.airtag.lat, 
                target.assignments.affiliation.weapon.weapon_radius)))
            .map(soldier =>soldier.soldier_id )
    }
}


 const getMappedTargets = async(apiKey) => {
   updateDb();
    return Targets.filter(target => ((target.status.status_id == 1)|| (target.status.status_id == 2)))
    .map((target => ({
        target_name: target.target_name,
        target_id: target.target_id,
        lng: target.lat,
        lat: target.lng,
        weapon_name : target.assignments.affiliation.weapon.weapon_type,
        weapon_radius: target.assignments.affiliation.weapon.weapon_radius,
        target_description: target.target_description,
        time_updated: target.time_updated,
        is_friendly_fire: targets[target.target_id].length > 0 
    })));
}  

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
   
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
   
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   
    const distance = R * c; // Distance in kilometers
    return distance ;
  }
   
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
   
  function isInRadius(lat1, lon1, lat2, lon2, radius) {
    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    return distance <= radius;
  }

export { getMappedTargets };