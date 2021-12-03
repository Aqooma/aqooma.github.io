var link = document.getElementById("theme-link");

function ChangeTheme()
{
    let lightTheme = "lndcss/homelc.css";
    let darkTheme = "lndcss/homedc.css";

    var currTheme = link.getAttribute("href");

    if(currTheme == lightTheme)
    {  
   	    currTheme = darkTheme;
        localStorage.setItem('theme', 'dark');
    }
    else
    {    
   	    currTheme = lightTheme;
        localStorage.setItem('theme','light')
    }

    

    link.setAttribute("href", currTheme);
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null){
    ChangeTheme2('light');
}
else{
    ChangeTheme2(activeTheme);
}
function ChangeTheme2(currTheme){
    let lightTheme = "lndcss/homelc.css";
    let darkTheme = "lndcss/homedc.css";
    let lt = "light";
    if (currTheme == lt) {
        currTheme = lightTheme;
        
    } else {
        currTheme = darkTheme;
    }
    link.setAttribute("href", currTheme);
}