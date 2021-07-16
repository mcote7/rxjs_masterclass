import { loadingService } from "./loadingService";

const overlay: HTMLElement = document.getElementById("loading-overlay");


loadingService.loadingStatus$.subscribe(isLoading => {
  if(isLoading) {
    overlay.classList.add("open");
  } else {
    overlay.classList.remove("open");
  }
});

loadingService.showLoading();

setTimeout(() => {
  loadingService.hideLoading();
}, 2500);
