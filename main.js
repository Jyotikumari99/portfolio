// console.log("hi");

/*------------------------About section tabs--------------------------*/
/*immedidately invoked function*/
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
   /*if event.target.classList conatins 'tab-item' class and not contains 'active' class*/
  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")) {
         const target=event.target.getAttribute("data-target");
     //     console.log(target);
     // deactivate existing active 'tab-item'
     tabsContainer.querySelector(".active").classList.remove("outer-shadow"
     ,"active");
     //active new 'tab-item'
     event.target.classList.add("active","outer-shadow");
     // deactivating existing active 'tab-item'
     aboutSection.querySelector(".tab-content.active").classList.remove("active");
     //activate new 'tab-content'
     aboutSection.querySelector(target).classList.add("active");

    }
  });
})();
