//membership setting js
let pkIntervalTimer = setInterval(myTimer, 200);
let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const translationMap = {
    	"Start Course": "Začít kurz",
    	"Resume Course": "Pokračovat v kurzu",
      "Mark As Complete" :"Marker som gennemført",
      "Marking as Incomplete" :"Markeres som uigennemført",
      "Completing.." :"Gennemføres",
      "Completed" :"Gennemført",
      " Full Name ": "Fulde Navn",
      " Email ":"E-mail",
      " Avatar ":"Avatar"
	  };
    if (mutation.type === "childList") {
      node = document.querySelectorAll("#library");
      if (node.length){
        node[0].childNodes[0].nodeValue=" Mine køb ";
      }

      node = document.querySelectorAll("#library-title h2");
      if (node.length){
        node2 = document.querySelectorAll("#library-all-courses span.bg-mobile-default-secondary");
        if(node2.length){
          node[0].childNodes[0].nodeValue=" Butik ";
        }
        node2 = document.querySelectorAll("#library-my-courses span.bg-mobile-default-secondary");  
        if(node2.length){
          node[0].childNodes[0].nodeValue=" Mine køb ";
        }
      }

      node = document.querySelectorAll("#library-title span");     
      if (node.length){
        node[0].childNodes[0].nodeValue=" Butik ";
        node[1].childNodes[0].nodeValue=" Mine køb ";
      }

      node = document.querySelectorAll("#product-list .offer-amount");
      node.forEach(n => {
        if (n.childNodes.length > 0) {
            n.childNodes[0].nodeValue=n.childNodes[0].nodeValue.replace('In Library','Købt');
        }
      });

      node = document.querySelectorAll("#product-breadcrumbs span:first-of-type a");
      if (node.length){
        node[0].childNodes[0].nodeValue=" Inhold ";
      }

      node = document.querySelectorAll(".category-list-title div");
      if (node.length){
        node[0].childNodes[0].nodeValue=" Inhold ";
      }

      node = document.querySelectorAll("#product-progress-stats span");
      if (node.length){
        let origText=node[0].childNodes[0].nodeValue;
        node[0].childNodes[0].nodeValue=origText.replace(/(\d+)\s*of\s*(\d+).*/, '$1 ud af $2 lektioner fuldført');
      }

      node = document.querySelectorAll(".lesson-count");
      if (node.length){
      	origText=node[0].childNodes[0].nodeValue;
        node[0].childNodes[0].nodeValue=origText.replace(/.*(\d+)\s*of\s*(\d+).*/, 'Lektion $1 af $2');
      }

      node = document.querySelectorAll(".category-list-items div +div +div");
      if (node.length){
      	node.forEach(n => {
          origText=n.childNodes[0].nodeValue;
          n.childNodes[0].nodeValue=origText.replace(/(\d+\/\d+)\s*(Completed)/,'Fuldført $1');
        })      
      }

      node = document.querySelectorAll("span.playlist-length");
      if (node.length){
      	origText=node[0].childNodes[0].nodeValue;
        node[0].childNodes[0].nodeValue=origText.replace('Lessons','Lektioner');
      }  
 
      node = document.querySelectorAll("#next-category-button");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Næste";
      }

      node = document.querySelectorAll("#post-completion-button span");
      if (node.length){
      	origText=node[0].childNodes[0].nodeValue;
        if (translationMap[origText]) {
          node[0].childNodes[0].nodeValue = translationMap[origText];
        }
      }

      node = document.querySelectorAll(".mark-as-post-completed span:first-child + span");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Marker som gennemført";
      }


      node = document.querySelectorAll(".post-title-container + div div");
      if (node.length){
      	node[0].childNodes[7].nodeValue=node[0].childNodes[7].nodeValue.replace('Next lesson','Næste lektion');
      }     
      
      node = document.querySelectorAll("#previous-lesson-button span:first-child + span");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Forrige lektion";
      }
      
      node = document.querySelectorAll("#brandLogo + div span span + span ");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Tilbage";
      }

      node = document.querySelectorAll(".category-list-title + div +div button ");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Start";
      }

      node = document.querySelectorAll("div.grid div:last-child span:first-child + span");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Færdig";
      }

      node = document.querySelectorAll("#load-next-post");
      if (node.length){
      	origText=node[0].childNodes[0].nodeValue;
            if (translationMap[origText]) {
              node[0].childNodes[0].nodeValue = translationMap[origText];
            }
      }

      node = document.querySelectorAll("[href=\"/settings/profile\"]");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Editer profil";
      }

      node = document.querySelectorAll("[href=\"/settings/password\"] span");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Adgangskode";
      }

      node = document.querySelectorAll("[href=\"/settings/purchase-history\"] span");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Købshistorik";
      }

      node = document.querySelectorAll("[href=\"#\"] span + span");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Log ud";
      }

      node = document.querySelectorAll("[href=\"#\"]");
      if (node.length){
      	node[0].childNodes[0].nodeValue="Log ud";
      }

      node = document.querySelectorAll("#pg-afcp-common__navbar-logout-btn");
      if (node.length){
        node[0].childNodes[0].nodeValue =" Log ud";
      }
      
      node = document.querySelectorAll("h1");
      if (node.length){
      	node[0].childNodes[0].nodeValue=node[0].childNodes[0].nodeValue.replace('Settings','Indstillinger');
      } 

      node = document.querySelectorAll("h2");
      if (node.length){
      	node[0].childNodes[0].nodeValue=node[0].childNodes[0].nodeValue.replace('Your Profile','Din profil');
      } 

      node = document.querySelectorAll("label");
      if (node.length){
      	node.forEach(n => {
          n.childNodes[0].nodeValue=translationMap[n.childNodes[0].nodeValue];
        })      
      }

      
    }
  });
});

let myTimerRunning = false;
function myTimer() {
  if (myTimerRunning) return;
  myTimerRunning = true;

  try {
    let qNode;
    qNode = document.querySelectorAll("#app");
    if (qNode.length) {
      observer.observe(qNode[0], {
        childList: true, // observe direct children
        subtree: true, // lower descendants too
      });
      clearInterval(pkIntervalTimer);
    }
  } catch (e) {
    //clearInterval(pkIntervalTimer);
    console.error(e); // Log the error for debugging
  } finally {
    myTimerRunning = false;
  }
}

