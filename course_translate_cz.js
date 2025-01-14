/*
comes from Sites/Client Portal/Settings/Branding/Advanced
*/

const translationMapS = {
    "(Coming Soon)": "(Brzy k dispozici)",
    "ABOUT THIS LESSON": "O TÉTO LEKCI",
    "All Courses": "Všechny kurzy",
    "Already have an account?": "Máte účet?",
    "An email has been sent. Please check your inbox.": "E-mail byl odeslán. Zkontrolujte svou schránku.",
    "Avatar": "Profilový obrázek",
    "Back": "Zpět",
    "Categories": "Kategorie",
    "Change Avatar": "Změnit profilový obrázek",
    "Completed": "Dokončeno",
    "Completing..": "Dokončuji...",
    "Confirm Password": "Potvrďte heslo",
    "Confirm New Password": "Potvrďte nové heslo",
    "Current Password": "Současné heslo",
    "Done": "Hotovo",
    "Edit Profile": "Upravit profil",
    "Email": "E-mail",
    "Email address": "E-mailová adresa",
    "Files": "Soubory",
    "Forgot Password ?": "Zapomenuté heslo",
    "Forgot your password?": "Zapomněli jste heslo?",
    "Full Name": "Celé jméno",
    "Generate Secure Code": "Generovat přístupový kód",
    "In Library": "V knihovně",
    "Invalid email or password": "Neplatný e-mail nebo heslo",
    "Lesson completed": "Lekce dokončena",
    "Lessons": "Lekce",
    "Login" : "Přihlásit",
    "Login with Password": "Přihlásit pomocí hesla",
    "Login with secure code": "Přihlásit kódem",
    "Log Out": "Odhlásit se",
    "Log out": "Odhlásit se",
    "Mark As Complete": "Označit jako dokončené",
    "Marking as Incomplete": "Označuji jako nedokončené",
    "My Courses": "Moje kurzy",
    "My Library": "Moje knihovna",
    "New Password": "Nové heslo",
    "Next": "Další",
    "Next Category": "Další kategorie",
    "Next lesson": "Další lekce",
    "Next lesson >": "Další lekce >",
    "No Recent Searches": "Žádné nedávné vyhledávání",
    "No content available!": "Žádný obsah k dispozici!",
    "No files are available for download!": "Žádné soubory nejsou k dispozici ke stažení!",
    "Offer": "Nabídka",
    "Password": "Heslo",
    "Password Set Succesfully,Logging in now...": "Heslo bylo úspěšně nastaveno, přihlašuji...",
    "Password Set Succesfully.Logging in now...": "Heslo bylo úspěšně nastaveno, přihlašuji...",
    "Password Settings": "Nastavení hesla",
    "Password must be at least 8 characters long": "Heslo musí mít alespoň 8 znaků.",
    "Password must be at least 8 characters long.": "Heslo musí mít alespoň 8 znaků.",
    "Please check your email for the secure code. If you did not receive any email from us,":
      "Prosím zkontrolje email. Pokud Vám od nás žádný email nepřišel, ",
    "Please enter a password of mininum 8 characters": "Heslo musí být alespoň 8 znaků",
    "Please enter a valid  email": "Prosím zadejte platný email",
    "Previous": "Předchozí",
    "Previous lesson": "Předchozí lekce",
    "Price": "Cena",
    "Product": "Produkt",
    "Profile": "Profil",
    "Purchase History": "Historie nákupů",
    "Purchased": "Zakoupeno",
    "Re-enter New Password": "Zadejte nové heslo znovu",
    "Recommended Dimension of": "Doporučené rozměry",
    "Remember me": "Zapamatovat si mě",
    "Reset Password": "Obnovit heslo",
    "Reset your password": "Obnovte své heslo",
    "Resume": "Pokračovat",
    "Resume Course": "Pokračovat v kurzu",
    "Save": "Uložit",
    "Search products, categories and lessons": "Vyhledávejte produkty, kategorie a lekce",
    "Secure code": "Zadejte kód",
    "Send me new password link": "Pošlete mi odkaz na nové heslo",
    "Set Password": "Nastavit heslo",
    "Set Password for your account": "Nastavte heslo pro svůj účet",
    "Set password": "Nastavit heslo",
    "Set password for your account": "Nastavte heslo pro svůj účet",
    "Settings": "Nastavení",
    "Sign In": "Přihlásit se",
    "Sign in": "Přihlásit se",
    "Sign in to your account": "Přihlaste se ke svému účtu",
    "Something went wrong while resetting customer password": "Něco se pokazilo při obnově hesla",
    "Start": "Start",
    "Start Course": "Začít kurz",
    "tap here to resend.": "Klikněte zde, a my ho pošleme znovu",
    "The password confirmation does not match": "Hesla nejsou stejná",
    "Update": "Aktualizovat",
    "User not found": "Uživatel nenalezen",
    "Verify Secure Code": "Přihlásit kódem",
    "Verify Password": "Ověřte heslo",
    "Your Profile": "Váš profil"
}


const selectorsS = [
    "#brandLogo + div span span + span",
    "#forgot-password-form-btn + div",
    "#library",
    "#library-title span",
    "#library-title span:nth-child(2)",
    "#next-category-button",
    "#pg-afcp-common__navbar-logout-btn",
    "#post-body span.lesson-body-title",
    "#post-completion-button span",
    "#previous-lesson-button span:first-child + span",
    "#product-breadcrumbs span:first-of-type a",
    "#product-list .offer-amount",
    "#search-wrapper div div div + div div",
    ".category-list-title + div +div button",
    ".category-list-title div",
    ".mark-as-post-completed span:first-child + span",
    ".materials-card-ttile",
    ".materials-card-ttile + div",
    ".n-form-item-feedback__line",
    ".n-input__placeholder span",
    ".post-title-container + div div",
    ".text-rose-600",
    ".ui-modal div + div div + div div",
    "[href=\"#\"]",
    "[href=\"#\"] span + span",
    "[href=\"/\"]",
    "[href=\"/recovery\"]",
    "[href=\"/settings/password\"]",
    "[href=\"/settings/password\"] span:first-child",
    "[href=\"/settings/profile\"]",
    "[href=\"/settings/purchase-history\"]",
    "[href=\"/settings/purchase-history\"] span",
    "b",
    "button",
    "button span",
    "button span",
    "div.grid div:last-child span:first-child + span",
    "h1",
    "h2",
    "input",
    "input + div + div",
    "input + div + div +div span",
    "input + div + div span",
    "label",
    "uitextmdnormal",
    "uitextsmregular"
];
/*
    "label + div div button",
    "h1 + div div div div + button",
*/
const regexSelectorsS = [
    {
        selector: "#product-progress-stats span",
        regex: /(\d+)\s*of\s*(\d+).*/,
        replacement: 'Hotovo $1 z $2 lekcí'
    },
    {
        selector: ".lesson-count",
        regex: /.*(\d+)\s*of\s*(\d+).*/,
        replacement: 'Lekce $1 z $2'
    },
    {
        selector: ".category-list-items div +div +div",
        regex: /(\d+\/\d+)\s*(Completed)/,
        replacement: 'Dokončeno $1'
    },
    {
        selector: "label + div div p",
        regex: /Recommended Dimension of/,
        replacement: 'Doporučené rozměry'
    },
    {
        selector: "span.playlist-length",
        regex: /Lessons/,
        replacement: 'Lekce'
    },
];

//let pkIntervalTimer_portal = setInterval(myTimer, 200);
const observerSite = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === "childList") {
            const translateOrReplaceNode = (selector, isRegex = false, regex = null, replacement = null) => {
                document.querySelectorAll(selector).forEach(node => {
                    if (node.childNodes.length) {
                        node.childNodes.forEach(child => {
                            if (child.nodeType === 3) {  // Check if the node is a text node
                                if (isRegex && regex && replacement) {
                                    child.nodeValue = child.nodeValue.replace(regex, replacement);
                                } else {
                                    const origText = child.nodeValue.trim();
                                    if (translationMapS[origText]) {
                                        child.nodeValue = translationMapS[origText];
                                    }
                                }
                            }
                        });                        
                    } else if (node.nodeName === "INPUT"){
                        const origText = node.placeholder.trim();
                        if (translationMapS[origText]) {
                            node.placeholder = translationMapS[origText];
                        }
                    }
                });
            };

            // Apply translations
            selectorsS.forEach(selector => {
                translateOrReplaceNode(selector);
            });

            // Apply regex replacements
            regexSelectorsS.forEach(({ selector, regex, replacement }) => {
                translateOrReplaceNode(selector, true, regex, replacement);
            });

            // Handle conditional translation for #library-title h2
            let node = document.querySelectorAll("#library-title h2");
            if (node.length) {
                const node2a = document.querySelectorAll("#library-all-courses span.bg-mobile-default-secondary");
                const node2b = document.querySelectorAll("#library-my-courses span.bg-mobile-default-secondary");
                if (node2a.length) {
                    node[0].childNodes[0].nodeValue = translationMapS["All Courses"];
                }
                if (node2b.length) {
                    node[0].childNodes[0].nodeValue = translationMapS["My Courses"];
                }
            }

            /*
            node = document.querySelectorAll(".post-title-container + div div");
            if (node.length){
                node[0].childNodes[7].nodeValue=node[0].childNodes[7].nodeValue.replace('Next lesson','Næste lektion');
            } 
            */
        }
    });
});

/*let myTimerRunning_portal = false;
function myTimer() {
  if (myTimerRunning_portal) return;
  myTimerRunning_portal = true;
*/
  try {
    let qNode;
    qNode = document.querySelectorAll("#app");
    if (qNode.length) {
      observerSite.observe(qNode[0], {
        childList: true, // observe direct children
        subtree: true, // lower descendants too
      });
      console.log("#app found");
      //clearInterval(pkIntervalTimer_portal);
    } else {
        console.log("#app not found");
    }
  } catch (e) {
    //clearInterval(pkIntervalTimer);
    console.error(e); // Log the error for debugging
  } finally {
    //myTimerRunning_portal = false;
  }
//}