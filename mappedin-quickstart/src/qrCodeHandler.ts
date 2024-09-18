import { Space } from "@mappedin/mappedin-js";

// Define the predefined start space ID
const predefinedStartSpaceId: string | null = null; // Set your default space ID if needed

let cachedSpaces: Space[] = [];
const navigationState = {
  startSpace: null as Space | null,
  endSpace: null as Space | null,
  isPathDrawn: false,
};

export function handleQRCodeScan(): void {
  if (predefinedStartSpaceId) {
    // Ensure the spaceId is valid and find the corresponding space
    const space = cachedSpaces.find(space => space.id === predefinedStartSpaceId);
    
    if (space) {
      // Update navigation state and local storage
      navigationState.startSpace = space;
      localStorage.setItem("startSpaceId", predefinedStartSpaceId);
      
      // Update the search bar
      updateSearchBarWithStartSpace(predefinedStartSpaceId);
      
      // Optionally update the URL or other UI elements
      updateUrlWithStartSpace(predefinedStartSpaceId);
    } else {
      console.error("Predefined space ID not found in cached spaces.");
    }
  } else {
    console.error("No predefined start space ID set.");
  }
}

export function setCachedSpaces(spaces: Space[]): void {
  cachedSpaces = spaces;
}

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

function updateUrlWithStartSpace(startSpaceId: string): void {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("startSpace", startSpaceId);
  window.history.pushState({}, '', currentUrl.toString());
}
