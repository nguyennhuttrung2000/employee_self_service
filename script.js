var IS_OPEN_SIDE_BAR = true;

function openSidebar() {
  let sideBar = document.getElementsByClassName("side-bar");
  let mainElement = document.getElementsByClassName("main");
  let menuIcon = document.querySelector(".main .main-title i");

  if (IS_OPEN_SIDE_BAR) {
    IS_OPEN_SIDE_BAR = false;
    sideBar[0].style.left = "0px";
    mainElement[0].style = "transition: 1.2s; left: 250px";
    menuIcon.style = "transform: rotate(90deg); padding: 0 0 0 8px;";
  } else {
    IS_OPEN_SIDE_BAR = true;
    sideBar[0].style.left = "-300px";
    mainElement[0].style = "transition: 1.2s; left: 0px";
    menuIcon.style = "transform: rotate(0deg);";
  }
}
