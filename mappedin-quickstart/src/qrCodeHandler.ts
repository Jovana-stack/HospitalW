import { Space } from "@mappedin/mappedin-js";

const predefinedStartSpaceId: string | null = null; // Default space ID if needed
let cachedSpaces: Space[] = [];  // Ensure this is initialized properly when map data is loaded

const navigationState = {
  startSpace: null as Space | null,
  endSpace: null as Space | null,
  isPathDrawn: false,
};

export function handleQRCodeScan(mapView: any): void {
  if (!predefinedStartSpaceId) {
    console.error("No predefined start space ID set.");
    return;
  }

  // Find the corresponding space in cached spaces
  const space = cachedSpaces.find(space => space.id === predefinedStartSpaceId);
  
  if (!space) {
    console.error("Predefined space ID not found in cached spaces.");
    return;
  }

  // Update navigation state and local storage
  navigationState.startSpace = space;
  localStorage.setItem("startSpaceId", predefinedStartSpaceId);

  // Switch to the correct floor
  switchToFloor(mapView, space);

  // Update the search bar
  updateSearchBarWithStartSpace(predefinedStartSpaceId);

  // Optionally update the URL or other UI elements
  updateUrlWithStartSpace(predefinedStartSpaceId);
}

// Function to switch to the correct floor based on the space
function switchToFloor(mapView: any, space: Space): void {
  const targetFloorId = space.floor.id;

  if (mapView.getFloor().id === targetFloorId) {
    console.log('Already on the correct floor.');
    return;
  }

  mapView.switchFloor(targetFloorId)
    .then(() => console.log(`Switched to floor with ID: ${targetFloorId}`))
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error("Error switching floor:", error.message);
      } else {
        console.error("Unknown error occurred while switching floor.");
      }
    });
}

function updateSearchBarWithStartSpace(spaceId: string): void {
  const space = cachedSpaces.find(space => space.id === spaceId);
  if (!space) {
    console.error("Space ID not found in cached spaces.");
    return;
  }

  const startSearchInput = document.getElementById("start-search") as HTMLInputElement | null;
  if (startSearchInput) {
    startSearchInput.value = space.name || '';
  }
}

function updateUrlWithStartSpace(startSpaceId: string): void {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("startSpace", startSpaceId);
  window.history.pushState({}, '', currentUrl.toString());
}
