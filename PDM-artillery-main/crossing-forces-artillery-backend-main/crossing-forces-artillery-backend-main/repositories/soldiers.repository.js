import fetch from "node-fetch";
import axios from 'axios'
import https from 'https';
const agent = new https.Agent({
    rejectUnauthorized: false
  })
const BASE_URL = "https://lda-api-core-soldiers.apps.hashlama013.bsmch.net";

const getAllSoldiers = async (apiKey) => {
    try{
    const response = await fetch(`${BASE_URL}/soldiers`,{agent:agent}
    //{headers: {authorization: apiKey}}
    );
    if(!response.ok){
        throw new Error(`Error fetching data: ${response.status}`);
    }
    const soldiers = await response.json()

    return soldiers;
    } catch(error) {
        console.error("Error:", error);
    }
}

export { getAllSoldiers } ;