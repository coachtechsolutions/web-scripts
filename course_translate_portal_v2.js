/*
comes from Memberships/courses/Settings/Site details/advanced/
*/
const translationMap = {
    "ABOUT THIS LESSON":"OM DENNE LEKTION",
    "An email has been sent. Please check your inbox.":"En e-mail er blevet sendt. Tjek venligst din indbakke.",
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
    "Email address" : "E-mailadresse",
    "Files": "Filer",
    "Forgot your password?" : "Glemt din adgangskode?",
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
    "New Password": "Ny adgangskode",
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
    "Re-enter New Password":"Bekræft ny adgangskode",
    "Remember me" : "Husk mig",
    "Reset your password" : "Opdater adgangskode",
    "Reset Password":"Opdater adgangskode",
    "Resume Course": "Genoptage kurset",
    "Resume": "Genoptage",
    "Save": "Gem",
    "Search products, categories and lessons":"Søg efter produkter, kategorier og lektioner",
    "Send me new password link" : "Send mig link til opdatering",
    "Set password":"Opdater adgangskode",
    "Set password for your account":"Opdater din nye adgangskode",
    "Settings": "Indstillinger",
    "Sign in to your account":"Log ind på din konto",
    "Sign in" : "Log ind",
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
    "[href=\"/recovery\"]",
    "[href=\"/settings/profile\"]",
    "[href=\"/settings/password\"] span:first-child",
    "[href=\"/settings/password\"]",
    "[href=\"/settings/purchase-history\"] span",
    "[href=\"/settings/purchase-history\"]",
    "[href=\"#\"] span + span",
    "[href=\"#\"]",
    "[href=\"/\"]",
    "#pg-afcp-common__navbar-logout-btn",
    "#product-list .offer-amount",
    "#post-completion-button span",
    "#post-body span.lesson-body-title",
    ".post-title-container + div div",
    "h1",
    "h2",
    "label",
    "b",
    ".materials-card-ttile",
    ".materials-card-ttile + div",
    "button",
    "button span",
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

//let pkIntervalTimer_portal = setInterval(myTimer, 50);
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === "childList") {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const translateOrReplaceNode = (node, isRegex = false, regex = null, replacement = null) => {
                        if (node.childNodes.length) {
                            node.childNodes.forEach(child => {
                                if (child.nodeType === 3) {  // Check if the node is a text node
                                    if (isRegex && regex && replacement) {
                                        child.nodeValue = child.nodeValue.replace(regex, replacement);
                                    } else {
                                        const origText = child.nodeValue.trim();
                                        if (translationMap[origText]) {
                                            child.nodeValue = translationMap[origText];
                                        }
                                    }
                                }
                            });                        
                        } else if (node.nodeName === "INPUT"){
                            const origText = node.placeholder.trim();
                            if (translationMap[origText]) {
                                node.placeholder = translationMap[origText];
                            }
                        }
                    // Check and apply translations
                    selectors.forEach(selector => {
                        if (node.matches(selector)) {
                            translateOrReplaceNode(node);
                        }
                    });

                    // Check and apply regex replacements
                    regexSelectors.forEach(({ selector, regex, replacement }) => {
                        if (node.matches(selector)) {
                            translateOrReplaceNode(node, true, regex, replacement);
                        }
                    });

                    // Handle conditional translation for #library-title h2
                    if (node.matches("#library-title h2")) {
                        const node2a = document.querySelectorAll("#library-all-courses span.bg-mobile-default-secondary");
                        const node2b = document.querySelectorAll("#library-my-courses span.bg-mobile-default-secondary");
                        if (node2a.length) {
                            node.childNodes[0].nodeValue = translationMap["Butik"];
                        }
                        if (node2b.length) {
                            node.childNodes[0].nodeValue = translationMap["Mine køb"];
                        }
                    }
                }
            });
        }
    });
});

/*
let myTimerRunning_portal = false;
function myTimer() {
  if (myTimerRunning_portal) return;
  myTimerRunning_portal = true;
*/
  try {
    let qNode;
    qNode = document.querySelectorAll("#app");
    if (qNode.length) {
      observer_portal.observe(qNode[0], {
        childList: true, // observe direct children
        subtree: true, // lower descendants too
      });
      //clearInterval(pkIntervalTimer_portal);
    }
  } catch (e) {
    //clearInterval(pkIntervalTimer);
    console.error(e); // Log the error for debugging
  } finally {
    myTimerRunning_portal = false;
  }
//}