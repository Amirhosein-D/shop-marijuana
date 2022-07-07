//select elemnts
let iconBars = document.getElementById("iconBars");
let mainMenuBars = document.getElementById("mainMenuBars");
let navBaeOne = document.getElementById("navbarOne");
let navBaeTow = document.getElementById("navbarTow");
let searchForm = document.getElementById("search-form");
let Atags = document.querySelectorAll("#Atags");
let IconMenuBar = document.getElementById("main-icon-menu");
 
// event (1) for open menu bars to tow step and show option to tow step ;


iconBars.addEventListener("click", () => {

    // one if  
      if ((mainMenuBars.classList.contains("openMainMenuTow"),mainMenuBars.classList.contains("openMainMenuOne"),mainMenuBars.classList.contains("closeMenuBars"))) {
        closeMenubarsTow()
        //Icon menu bar(one)
        locationIconMenubarsCfor() 
        // nav bar one and tow
        removeTowNavbars()
        //search box 
        removeTowSearchFrom()
      }
    
    // tow if
      if ((mainMenuBars.classList.contains("openMainMenuTow"),mainMenuBars.classList.contains("openMainMenuOne"))) {
        closeMenubarsOne()
        //Icon menu bar(tow)
        locationIconMenubarsCthree()
        //close navbar one and tow 
        removeOneNavbars()
        //close search box
        removeOneSearchFrom ()
      }
    
    // three if  
      if (mainMenuBars.classList.contains("openMainMenuTow")) {
        mainMenuBars.classList.add("openMainMenuOne");
    
          //Icon menu bar(three)
        IconMenuBar.classList.add('for-if-three');
      }
    
    // for if  
      if (mainMenuBars.classList !== "openMainMenuTow") {
        mainMenuBars.classList.add("openMainMenuTow");
    
          //Icon menu bar(for)
        IconMenuBar.classList.add('for-if-for');
    
        // show nav bar one (for)
        navBaeOne.classList.add('showNavbarOne');
    
        //show nav bar tow (for)
        navBaeTow.classList.add('showNavbarTow')
    
        // show search form
        searchForm.classList.add('openSearch')
      }
    });




    // for if one for event (1)
    function closeMenubarsTow() {
        mainMenuBars.classList.remove("openMainMenuTow");
        mainMenuBars.classList.remove("openMainMenuOne");
        mainMenuBars.classList.remove("closeMenuBars");
    }
    // for if one for event (1)
    function locationIconMenubarsCfor() {
        IconMenuBar.classList.remove('for-if-tow');
        IconMenuBar.classList.remove('for-if-three');
        IconMenuBar.classList.remove('for-if-for');
    }
    // for if one for event (1)
    function removeTowNavbars() {
        navBaeOne.classList.remove('closeNavbarOne');
        navBaeTow.classList.remove('closeNavbarTow')
        navBaeOne.classList.remove('showNavbarOne');
        navBaeTow.classList.remove('showNavbarTow')
    }
    // for if one for event (1)
    function removeTowSearchFrom() {
        searchForm.classList.remove('closeSearch')
        searchForm.classList.remove('openSearch')
    }



    // for if three for eent (1)
    function closeMenubarsOne() {
        mainMenuBars.classList.add("closeMenuBars");
    }
    // for if three for eent (1)
    function locationIconMenubarsCthree() {
        IconMenuBar.classList.add('for-if-tow');
    }
    // for if three for eent (1)
    function removeOneNavbars() {
        navBaeOne.classList.add('closeNavbarOne');
        navBaeTow.classList.add('closeNavbarTow')
    }
    // for if three for eent (1)
    function  removeOneSearchFrom () {
        searchForm.classList.add('closeSearch')
    }


    