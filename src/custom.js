import isitHDRReady from "isit-hdr-ready";

console.log("isitHDRReady", isitHDRReady());

const hdrReadyMessage = document.querySelector(".hdr-ready-message");
if (isitHDRReady()) {
  hdrReadyMessage.classList.remove("hidden");
}
