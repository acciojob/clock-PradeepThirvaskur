//your JS code here. If required.
 const dateObj = new Date();
    const month   = dateObj.getUTCMonth() + 1; // months from 1-12
    const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    
    
    d1=document.querySelector("#date");
    d1.innerText=`${month}/${day}/${year}`;
    
    
   setInterval(() => {
     const dateObj = new Date();
     const hour= dateObj.getHours();
     const minutes= dateObj.getMinutes();
     const seconds= dateObj.getSeconds();
     
     const t1= document.querySelector("#time");
     t1.innerText=`${hour}:${minutes}:${seconds}`;
   }, 1000);

