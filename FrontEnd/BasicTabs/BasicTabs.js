function getData(event, menuName) {
  let i;
  const contents = document.getElementsByClassName("content");
  for (i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  const tabMenus = document.getElementsByClassName("tab-menu");
  for (i = 0; i < tabMenus.length; i++) {
    tabMenus[i].className = tabMenus[i].className.replace(" selected", "");
  }

  document.getElementById(menuName).style.display = "block";
  event.currentTarget.className += " selected";
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("home").style.display = "block";
  },
  false
);
