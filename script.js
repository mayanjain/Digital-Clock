function show(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    let month = date.getMonth();
    let today = date.getDate();
    let year = date.getFullYear();
    let amp;
    if(hours==0){
        hours=12;
        amp = "AM";
    }
    else if(hours<=12){
        amp = "AM";
    }
    else{
        hours-=12;
        amp="PM";
    }
    if(hours<10)hours = "0"+hours;
    if(min<10)min = "0"+min;
    if(sec<10)sec = "0"+sec;
    document.querySelector('.time').innerHTML=hours+":"+min+":"+sec;
    document.querySelector('.ampm').innerHTML=amp;
    
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    document.querySelector('.date').innerHTML=months[month]+" "+today+", "+year;
}

setInterval(() => {
    show();
}, 1000);