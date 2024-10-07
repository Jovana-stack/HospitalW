import { Space, MapView } from "@mappedin/mappedin-js";

const predefinedStartSpaceId: string | null = null; // Initially null, might change after QR scan

let cachedSpaces: Space[] = [];
let mapView: MapView | null = null;

const navigationState = {
  startSpace: null as Space | null,
  endSpace: null as Space | null,
  isPathDrawn: false,
};

// Set cached spaces for lookup
export function setCachedSpaces(spaces: Space[]): void {
  cachedSpaces = spaces;
}

/*Set the MapView instance and check for URL parameters
//export function setMapView(view: MapView): void {
 mapView = view; 

  // Automatically check the URL for the start space ID and focus on it if it matches
  //const urlParams = new URLSearchParams(window.location.search);
  //const startSpaceIdFromUrl = urlParams.get("startSpace");
  */
 /* if (startSpaceIdFromUrl === "s_e9cd037ed27ccb23") {
    console.log("URL contains predefined start space ID. Focusing on it.");
    //focusOnStartSpace(startSpaceIdFromUrl);
  }
}*/

// Handle the QR code scan and set the start space
export async function handleQRCodeScan(): Promise<void> {
  if (predefinedStartSpaceId) {
    const space = cachedSpaces.find(space => space.id === predefinedStartSpaceId);

    if (space && mapView) {
      // Switch to the correct floor before setting the start space
      await mapView.setFloor(space.floor.id);
      navigationState.startSpace = space;

      // Update localStorage and UI
      localStorage.setItem("startSpaceId", predefinedStartSpaceId);
      updateSearchBarWithStartSpace(predefinedStartSpaceId);
      updateUrlWithStartSpace(predefinedStartSpaceId);

      // Optionally, highlight the space on the map
      mapView.updateState(space, { color: "#d4b2df" });

      console.log("Start space set from QR code:", predefinedStartSpaceId);
    } else {
      console.error("Predefined space ID not found in cached spaces or mapView is null.");
    }
  } else {
    console.error("No predefined start space ID set.");
  }
}

// Function to focus the camera on a given start space ID
/*async function focusOnStartSpace(startSpaceId: string) {
  const space = cachedSpaces.find(space => space.id === startSpaceId);

  if (space && mapView) {
    // Switch to the correct floor before focusing
    await mapView.setFloor(space.floor.id);

    // Animate the camera to focus on the start space
    mapView.Camera.animateTo(
      {
        bearing: 20,
        pitch: 20,
        zoomLevel: 18,
        center: space.center, // Use the space's center for focusing
      },
      { duration: 2000, easing: 'ease-in-out' }
    );
    
    console.log("Camera focused on start space:", startSpaceId);
  } else {
    console.error("Start space not found in cached spaces or mapView is null.");
  }
}*/

// Update search bar with the start space name
function updateSearchBarWithStartSpace(spaceId: string): void {
  const space = cachedSpaces.find(space => space.id === spaceId);
  if (space) {
    const startSearchInput = document.getElementById("start-search") as HTMLInputElement | null;
    if (startSearchInput) {
      startSearchInput.value = space.name || '';
    }
  } else {
    console.error("Space ID not found in cached spaces.");
  }
}

// Update the URL with the start space ID
function updateUrlWithStartSpace(startSpaceId: string): void {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("startSpace", startSpaceId);
  window.history.pushState({}, '', currentUrl.toString());
}
