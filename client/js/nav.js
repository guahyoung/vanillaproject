import { getNode } from "../lib/index.js";

let categoryBtn = getNode(".category");
let categoryList = getNode(".category-list");

function hoverCategoryList(e) {
  categoryList.style.display =
    categoryList.style.display === "block" ? "none" : "block";
}

categoryBtn.addEventListener("mouseover", hoverCategoryList);
categoryBtn.addEventListener("mouseout", hoverCategoryList);
categoryList.addEventListener("mouseover", hoverCategoryList);
categoryList.addEventListener("mouseout", hoverCategoryList);

let smallCategoryBtn = getNode(".small-category");
let smallCategoryList = getNode(".small-category-list");

function smallHoverCategoryList(e) {
  smallCategoryList.style.display =
    smallCategoryList.style.display === "block" ? "none" : "block";
}

smallCategoryBtn.addEventListener("mouseover", smallHoverCategoryList);
smallCategoryBtn.addEventListener("mouseout", smallHoverCategoryList);
smallCategoryList.addEventListener("mouseover", smallHoverCategoryList);
smallCategoryList.addEventListener("mouseout", smallHoverCategoryList);

// 스크롤
const navigation = getNode(".nav-center");
const mini = getNode(".nav-small");

function scrollHandeler(e) {
  if (window.scrollY >= 175) {
    mini.style.display = "flex";
    navigation.style.display = "none";
  } else {
    mini.style.display = "none";
    navigation.style.display = "flex";
  }
}

window.addEventListener("scroll", scrollHandeler);
