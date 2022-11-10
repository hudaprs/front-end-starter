import { watch, reactive } from "vue";

type ILocation = {
  latitude: number | null;
  longitude: number | null;
};

/**
 * @description Handle Get Geolocation from browser
 *
 * @return {Promise<void>}
 */
export const useLocation_getGeolocationUser = async () => {
  const location = reactive<ILocation>({
    latitude: 0,
    longitude: 0,
  });

  if ("permissions" in navigator && "geolocation" in navigator) {
    const permission = await navigator.permissions.query({
      name: "geolocation",
    });

    if (permission.state === "prompt" || permission.state === "granted") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position, "success callback");
          //--> This is success callback ✅
          location.latitude = position.coords.latitude;
          location.longitude = position.coords.longitude;
        },
        //--> This is error callback ❌
        () => {
          console.log("error callback");
          location.latitude = null;
          location.longitude = null;
        },
        //--> This is options 📑
        { timeout: 60000, enableHighAccuracy: true }
      );
    } else {
      console.log("error condition");
      location.latitude = 0;
      location.longitude = 0;
    }
  } else {
    console.log("error condition");
    location.latitude = null;
    location.longitude = null;
  }

  watch(location, (val) => {
    console.log("watch location", val);
  });

  return location;
};
