const translationMap = {
    "All Courses": "Butik",
    "Avatar": "Avatar",
    "Back": "Tilbage",
    "Categories": "Inhold",
    "Change Avatar": "Skifte avatar",
    "Completing..": "Gennemføres",
    "Completed": "Gennemført",
    "Current Password": "Nuværende adgangskode",
    "Done": "Færdig",
    "Edit Profile": "Editer profil",
    "Email": "E-mail",
    "Files": "Filer",
    "Full Name": "Fulde Navn",
    "In Library": "Købt",
    "Lektionen fuldført": "Lektionen fuldført",
    "Lessons": "Lektioner",
    "Log out": "Log ud",
    "Log Out": "Log ud",
    "Mark As Complete": "Marker som gennemført",
    "Marking as Incomplete": "Markeres som uigennemført",
    "My Courses": "Mine Køb",
    "My Library": "Mine Køb",
    "Next": "Næste",
    "Next Category": "Næste",
    "Next lesson": "Næste lektion",
    "New Password": "Nyt adgangskod",
    "No files are available for download!": "Ingen filer til download i denne lektion",
    "No Recent Searches":"Ingen seneste søgninger",
    "Offer": "Tilbud",
    "Password": "Adgangskode",
    "Password Settings": "Adgangskodeindstillinger",
    "Previous lesson": "Forrige lektion",
    "Price": "Pris",
    "Product": "Produkt",
    "Profile": "Profil",
    "Purchase History": "Købshistorik",
    "Purchased": "Kobt",
    "Recommended Dimension of": "Anbefalet dimension af",
    "Resume Course": "Genoptage kurset",
    "Resume": "Genoptage",
    "Save": "Gem",
    "Search products, categories and lessons":"Søg efter produkter, kategorier og lektioner",
    "Settings": "Indstillinger",
    "Start": "Start",
    "Start Course": "Start",
    "Update": "Opdatere",
    "Verify Password": "Bekræft adgangskod",
    "Your Profile": "Din profil"
};



const selectors = [
    "#library",
    "#library-title span",
    "#library-title span:nth-child(2)",
    "#product-breadcrumbs span:first-of-type a",
    ".category-list-title div",
    "#next-category-button",
    ".mark-as-post-completed span:first-child + span",
    "#previous-lesson-button span:first-child + span",
    "#brandLogo + div span span + span",
    ".category-list-title + div +div button",
    "div.grid div:last-child span:first-child + span",
    "[href=\"/settings/profile\"]",
    "[href=\"/settings/password\"] span:first-child",
    "[href=\"/settings/password\"]",
    "[href=\"/settings/purchase-history\"] span",
    "[href=\"/settings/purchase-history\"]",
    "[href=\"#\"] span + span",
    "[href=\"#\"]",
    "#pg-afcp-common__navbar-logout-btn",
    "#product-list .offer-amount",
    "#post-completion-button span",
    "#post-body span",
    "h1",
    "h2",
    "label",
    "b",
    ".materials-card-ttile",
    ".materials-card-ttile + div",
    "button",
    "#search-wrapper div div div + div div",
    ".ui-modal div + div div + div div",
    "input",

];
/*
    "label + div div button",
    "h1 + div div div div + button",
*/
const regexSelectors = [
    {
        selector: "#product-progress-stats span",
        regex: /(\d+)\s*of\s*(\d+).*/,
        replacement: '$1 ud af $2 lektioner fuldført'
    },
    {
        selector: ".lesson-count",
        regex: /.*(\d+)\s*of\s*(\d+).*/,
        replacement: 'Lektion $1 af $2'
    },
    {
        selector: ".category-list-items div +div +div",
        regex: /(\d+\/\d+)\s*(Completed)/,
        replacement: 'Fuldført $1'
    },
    {
        selector: "label + div div p",
        regex: /Recommended Dimension of/,
        replacement: 'Anbefalet dimension af'
    },
    {
        selector: "span.playlist-length",
        regex: /Lessons/,
        replacement: 'Lektioner'
    },
];

let pkIntervalTimer = setInterval(myTimer, 200);
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === "childList") {
            const translateOrReplaceNode = (selector, isRegex = false, regex = null, replacement = null) => {
                console.log(selector);
                document.querySelectorAll(selector).forEach(node => {
                    console.log(node.nodeName);
                    if (node.childNodes.length) {
                        if(node.childNodes[0].nodeType == 3){
                            if (isRegex && regex && replacement) {
                                node.childNodes[0].nodeValue = node.childNodes[0].nodeValue.replace(regex, replacement);
                            } else {
                                const origText = node.childNodes[0].nodeValue.trim();
                                if (translationMap[origText]) {
                                    node.childNodes[0].nodeValue = translationMap[origText];
                                }
                            }
                        }
                    } else if (node.nodeName === "INPUT"){
                        console.log
                        const origText = node.placeholder.trim();
                        if (translationMap[origText]) {
                            node.placeholder = translationMap[origText];
                        }
                    }
                });
            };

            // Apply translations
            selectors.forEach(selector => {
                translateOrReplaceNode(selector);
            });

            // Apply regex replacements
            regexSelectors.forEach(({ selector, regex, replacement }) => {
                translateOrReplaceNode(selector, true, regex, replacement);
            });

            // Handle conditional translation for #library-title h2
            let node = document.querySelectorAll("#library-title h2");
            if (node.length) {
                const node2a = document.querySelectorAll("#library-all-courses span.bg-mobile-default-secondary");
                const node2b = document.querySelectorAll("#library-my-courses span.bg-mobile-default-secondary");
                if (node2a.length) {
                    node[0].childNodes[0].nodeValue = translationMap["All Courses"];
                }
                if (node2b.length) {
                    node[0].childNodes[0].nodeValue = translationMap["My Courses"];
                }
            }

            node = document.querySelectorAll(".post-title-container + div div");
            if (node.length){
                node[0].childNodes[7].nodeValue=node[0].childNodes[7].nodeValue.replace('Next lesson','Næste lektion');
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