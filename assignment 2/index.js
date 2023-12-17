
   let curId = 1000;
    const loadAllData = () => {
      
      const apiurl = `https://openapi.programming-hero.com/api/videos/category/${curId}`;
      fetch(apiurl)
       .then((res) => res.json())
       .then((data) => displayData(data.data));
       
      
   };
   loadAllData();
   const loadmusicData = () => {
   
   curId=1001;
   loadAllData();
};
const loadcomedyData = () => {
   
   curId=1003;
   loadAllData();
};
const loadDrawingData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1005")
   .then((res) => res.json())
   .then((data) => {
         if(data.length>0){
            displayData(data.data);
         }else{
            console.warn("No data available");
            
            // loading image
            
            const nodataimg = document.getElementById("cards-container");
            nodataimg.innerHTML=`
            
            <div><img class="icon-img" src="./icon.png" alt="no data to show" style="display:block; padding:20px;">
            <h2>No Data to show!</h2></div>
            
           `;
            
         }
   });

};

const sortbyView = () => {
   
   const apiurl = `https://openapi.programming-hero.com/api/videos/category/${curId}`;
   fetch(apiurl)
   .then((res) => res.json())
   .then((data)=> {
         
      data.data.sort(function(a, b) {
         var viewsA = parseInt(a.others.views);
         var viewsB = parseInt(b.others.views);

         return viewsB - viewsA; 
     });

     displayData(data.data);
 });
   
   };


function converttotime(time){
    const seconds = parseInt(time);

    if(isNaN(seconds)){
      return "Invalid time";
    }

    const days =parseInt((Math.floor(seconds / (3600*24))),0) ;
    var hours = Math.floor(seconds % (3600*24))/3600;
    const minutes = Math.floor((seconds%3600)/60);
    const remainingseconds = seconds%60;
    hours= parseInt(hours);

    const formattedTime = [];

    if (days > 0){
      formattedTime.push(`${days} day${days > 1 ? "s" : ""}`);
   }
   if (hours > 0){
      formattedTime.push(`${hours} hour${hours > 1 ? "s" : ""}`);

   }
   if(minutes>0){
      formattedTime.push(`${minutes} minitue${minutes >1 ? "s" : ""}`);
   }
   if(remainingseconds>0){
       formattedTime.push(`${remainingseconds} second${remainingseconds >1 ? "s" : ""}`);
   }
   return formattedTime.join(",")
}

    const displayData = (data) => {
        
      const cardcontainer= document.getElementById("cards-container");
      cardcontainer.innerHTML="";
      data.forEach((category)=> {
        
        const card = document.createElement("div");
        card.classList.add("box");
        const time = category.others.posted_date;
        const formattedtime = converttotime(time);
        
        card.className = "card-display-style col-md-3";
        card.innerHTML=`
        
        <div class="thumbnail-img">
        <img class="box-img" src=${category.thumbnail} alt="">
        <h6 class="upload-time" style="background:black ">${category.others.posted_date != "" ? formattedtime +" ago": ""} </h6>
        </div>
        
        
        <div class="profile-description">
        <div>
        <img class="pro-img" src=${category.authors[0].profile_picture} alt="author image">
        </div>

        <div>
        <h4>${category?.title}</h4>
        <div style="display:flex;">
        <h6>${category?.authors[0].profile_name}</h6>
        <div class="icon">${category.authors[0].verified !== false ? '<img  src="./icon-rem.png" style="width:30px;" />' : ''}</div>
        </div>
        <h6>${category?.others.views}</h6>
        </div>
        
        
        </div>
        
        `;
       
        cardcontainer.appendChild(card);

      });
    }
        

const btnlist = document.querySelectorAll('.btn');
btnlist.forEach(btnel => {
   btnel.addEventListener('click',() =>{
      // document.querySelector('.special')?.classList.remove('special');
     

     
      // btnel.classList.add('special');
     });
})

  