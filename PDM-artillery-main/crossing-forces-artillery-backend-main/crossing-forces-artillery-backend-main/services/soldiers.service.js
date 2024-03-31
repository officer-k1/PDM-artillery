import { getAllSoldiers } from "../repositories/soldiers.repository.js";
import { targets } from "../data/targets.js";


    const soldiers = await getAllSoldiers();
const getMappedSoldiers = async(apiKey) => {
    //const soldiers = await getAllSoldiers(apiKey);

    return soldiers.map((soldier => ({soldier_name: soldier.soldier_name,
        soldier_id: soldier.soldier_id,
        time_sent: soldier.airtag.time_sent,
        lng: soldier.airtag.lat,
        lat: soldier.airtag.lng,
        is_danger: isSoldierInTargetRange(soldier.soldier_id),
     })))
} 

const isSoldierInTargetRange = (soldierId) => {
   for(var target of Object.keys(targets)) {
        if (targets[target].includes(soldierId )){
        return true;
        }
    }

    return false;
}

export { getMappedSoldiers };