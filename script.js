const btn = document.querySelector('.toggle');
const elementsToToggle = document.querySelectorAll('h2, p, li, ul'); // Selecting multiple elements
const b = document.querySelector(".skills");
const c=document.querySelector(".education")
const d=document.querySelector(".achievements")
const e=document.querySelector(".contact")
const f=document.querySelector(".projects")
const g=document.querySelector(".languages")
const li=document.querySelectorAll('.skills>ul>li')
console.log(li);

btn.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
    elementsToToggle.forEach((ele) => {
        ele.classList.toggle('toggle-color');
    });
    // Toggle background color for .skills section
    if (document.body.classList.contains('dark-mode')) {
        li.forEach((ele)=>{
            // console.log(ele);
            ele.style.backgroundColor="#979075"
        })
        b.style.backgroundColor = "rgb(25,39,52)"
        c.style.backgroundColor = "rgb(25,39,52)"
        d.style.backgroundColor = "rgb(25,39,52)"
        e.style.backgroundColor = "rgb(25,39,52)"
        f.style.backgroundColor = "rgb(25,39,52)"
        g.style.backgroundColor = "rgb(25,39,52)"
    } else {
        li.forEach((ele)=>{
            // console.log(ele);
            ele.style.backgroundColor=""
        })
        b.style.backgroundColor = ""; // Reset to default if not in dark mode
        c.style.backgroundColor = ""; // Reset to default if not in dark mode
        d.style.backgroundColor = ""; // Reset to default if not in dark mode
        e.style.backgroundColor = ""; // Reset to default if not in dark mode
       f.style.backgroundColor = ""; // Reset to default if not in dark modergb(25,39,52)";
       g.style.backgroundColor = ""; // Reset to default if not in dark modergb(25,39,52)";
    }
})