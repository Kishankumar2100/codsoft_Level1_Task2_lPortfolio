var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// Defining opentab function
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    // Displaying content
    event.currentTarget.classList.add("active-link");
    //active link to show red line
    document.getElementById(tabname).classList.add("active-tab");
}
