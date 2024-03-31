import React,{ useState,useEffect,useRef } from "react";
import Keycloak from "keycloak-js"
 
const URL = 'https://keycloak.apps.hashlama013.bsmch.net/'
const AUTH = 'https://keycloak.apps.hashlama013.bsmch.net/realms/bsmchRealm/account/'

const client = new Keycloak({
  url: URL,
  realm: 'bsmchRealm',
  clientId: 'PDM-CrossingForces-Artillery',
  clientSecret:'vcPfR4bISu9GeZmSit2TmKhWCBGMTssD',
  authorizationUrl: AUTH,
});

 
const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(null);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    if (isRun.current) return;
    
    isRun.current = true;
  
    client
      .init({
        onLoad: 'login-required',
      })
      .then((authenticated) => {
        setLogin(authenticated);
        setToken(client.token)
        console.log(client.token)
      })
      .catch((error) => {
        setError('Keycloak initialization error: '+ error);
      });
      
  }, []);

  
  return [isLogin , token , error];
};
 
export default useAuth;