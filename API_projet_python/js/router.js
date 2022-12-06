const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();


//movie arrow slider
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if(itemNumber - (4 + clickCounter) > 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else if(itemNumber - (4 + clickCounter) == 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-50}px)`;
        }
        else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });
});


//night mode toggle
const ball =  document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container, .sidebar, .left-menu-icon, .toggle");

ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})

function scrollEcs(){
    window.scrollTo(0, 24800);
}

function scrollLSD(){
    window.scrollTo(0, 39030);
}

function scrollChampi(){
    window.scrollTo(0, 34960);
}

function scrollCana(){
    window.scrollTo(0, 43140);
}

function scrollbar(){
    window.scrollTo(0, 19750);
}

function scrollUp(){
    window.scrollTo(document.body.scrollHeight,0);
}

function scrollmodel(){
    window.scrollTo(0,23780);
}

function scrollAffiche(){
    window.scrollTo(0,330);
}

function scrollClassic(){
    window.scrollTo(0,1350);
}

function scrollHeat(){
    window.scrollTo(0, 16300);
}


const $drowdownArrow = document.querySelector('.fa-angle-down');
const $checkbox = document.getElementById('openDropdown');
const $dropdownMenu = document.querySelector('.dropdown-menu');

$checkbox.addEventListener('change', () => {
  $drowdownArrow.classList.toggle('rotate-dropdown-arrow');
});

$dropdownMenu.addEventListener('click', (e) => {
  $checkbox.checked = false;
  // setting checked to false won't trigger 'change'
  // event, manually dispatch an event to rotate
  // dropdown arrow icon
  $checkbox.dispatchEvent(new Event('change'));
});