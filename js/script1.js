const profileTabs = document.querySelectorAll(".profile-box .tabs .tab-btn");
const contentBox = document.querySelectorAll(
  ".profile-box .content .content-box"
);
const tabWrapper = document.querySelector(".profile-box .tabs .tab-wrapper");

profileTabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const tabID = e.target.id;
    if (tabID === "all-content") {
      tabWrapper.classList.add("left");
      tabWrapper.classList.remove("right");
    } else if (tabID === "on-sale-content") {
      tabWrapper.classList.add("right");
      tabWrapper.classList.remove("left");
    }
    const activeContent = document.querySelector(
      `.profile-box .content-box#${tabID}`
    );

    contentBox.forEach((box) => {
      box.classList.add("hidden");
    });

    activeContent.classList.remove("hidden");
  });
});

const ordersTabs = document.querySelectorAll(".orders-box .tabs .tab-btn");
const ordersBox = document.querySelectorAll(".orders-box .items-box");
const ordersTabWrapper = document.querySelector(
  ".orders-box .tabs .tab-wrapper"
);

ordersTabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const tabID = e.target.id;
    if (tabID === "active-orders") {
      ordersTabWrapper.classList.add("left");
      ordersTabWrapper.classList.remove("right");
    } else if (tabID === "past-orders") {
      ordersTabWrapper.classList.add("right");
      ordersTabWrapper.classList.remove("left");
    }
    const activeContent = document.querySelector(
      `.orders-box .items-box#${tabID}`
    );

    ordersBox.forEach((box) => {
      box.classList.add("hidden");
    });

    activeContent.classList.remove("hidden");
  });
});

const rightArrow = document.querySelectorAll(
  ".search-category-box .right-arrow"
);

const leftArrow = document.querySelectorAll(".search-category-box .left-arrow");

console.log(rightArrow);

rightArrow.forEach((arrow) => {
  arrow.addEventListener("click", function (e) {
    const listID = "list-" + e.target.getAttribute("list-id");
    const list = document.getElementById(listID);
    list.scrollLeft += 170;
  });
});

leftArrow.forEach((arrow) => {
  arrow.addEventListener("click", function (e) {
    const listID = "list-" + e.target.getAttribute("list-id");
    const list = document.getElementById(listID);
    list.scrollLeft -= 170;
  });
});
