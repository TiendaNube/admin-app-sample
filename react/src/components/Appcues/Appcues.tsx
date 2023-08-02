import { useEffect, useState } from 'react';
import nexo from '../../nexoClient';
import { useScript } from '../../hooks';

const APPCUES_ID = 126721;

declare global {
  interface Window {
    AppcuesSettings: Record<string, boolean>;
    Appcues: {
      identify: (email: string, config: Record<string, string>) => void;
    };
  }
}

/* Nexo actions & interfaces */
const ACTION_STORE_INFO = 'app/store/info';
const ACTION_USER_INFO = 'app/user/info';

interface UserInfo {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAtStore: number;
}

interface StoreInfo {
  id: string;
  name: string;
  url: string;
  language: string;
  currency: string;
  country: string;
  createdAt: string;
}

function Appcues(): null {
  const statusScript = useScript(`https://fast.appcues.com/${APPCUES_ID}.js`);
  const [storeInfo, setStoreInfo] = useState<StoreInfo>();
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    nexo.dispatch({ type: ACTION_STORE_INFO });
    nexo.dispatch({ type: ACTION_USER_INFO });

    nexo.suscribe(ACTION_STORE_INFO, (payload: StoreInfo) => {
      setStoreInfo(payload);
    });

    nexo.suscribe(ACTION_USER_INFO, (payload: UserInfo) => {
      setUserInfo(payload);
    });
  }, []);

  useEffect(() => {
    if (!storeInfo || !userInfo) {
      console.error('Appcues store & user info not present');
      return;
    }

    window.AppcuesSettings = {
      enableURLDetection: true,
    };

    if (statusScript === 'ready') {
      if (!window.Appcues || !window.Appcues.identify) {
        console.error('No Appcues and identify found in window');
        return;
      }

      window.Appcues.identify(userInfo.email, {
        externalUserId: userInfo.id,
        storeId: storeInfo.id,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        storeName: storeInfo.name,
        countryCode: storeInfo.country,
        storeUrl: storeInfo.url,
        createdAt: storeInfo.createdAt,
      });
    }
  }, [statusScript, storeInfo, userInfo]);

  return null;
}

export default Appcues;
