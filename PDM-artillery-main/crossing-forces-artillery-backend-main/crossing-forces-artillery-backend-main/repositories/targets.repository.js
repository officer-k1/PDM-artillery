import fetch from "node-fetch";
import axios from 'axios'
import https from 'https';
const agent = new https.Agent({
    rejectUnauthorized: false
  })
const BASE_URL = "https://lda-api-core-soldiers.apps.hashlama013.bsmch.net";

const getAllTargets = async (apiKey) => {
    try{
        console.log(`${BASE_URL}/targets`)
    const response = await fetch(`${BASE_URL}/targets`,{agent:agent}
    //{headers: {authorization: apiKey}}
    );
    if(!response.ok){
        throw new Error(`Error fetching data: ${response.status}`);
    }
    const targets = await response.json()
    return targets;
    } catch(error) {
        console.error("Error:", error);
    }
}

export { getAllTargets } ;