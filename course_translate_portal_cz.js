const translationMap = {
    "The password confirmation does not match": "Hesla nejsou stejná",
    "Please enter a password of mininum 8 characters":
      "Heslo musí být alespoň 8 znaků",
    "New Password": "Nové heslo",
    "Confirm New Password": "Potvrďte nové heslo",
  };
  
  const selectors = [".n-input__placeholder span", ".n-form-item-feedback__line"];
  
  const regexSelectors = [
    {
      selector: "#product-progress-stats span",
      regex: /(\d+)\s*of\s*(\d+).*/,
      replacement: "$1 ud af $2 lektioner fuldført",
    },
  ];
  
  //let pkIntervalTimer_portal = setInterval(myTimer, 200);
  const observer_portal = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        const translateOrReplaceNode = (
          selector,
          isRegex = false,
          regex = null,
          replacement = null
        ) => {
          document.querySelectorAll(selector).forEach((node) => {
            if (node.childNodes.length) {
              node.childNodes.forEach((child) => {
                if (child.nodeType === 3) {
                  // Check if the node is a text node
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
            } else if (node.nodeName === "INPUT") {
              const origText = node.placeholder.trim();
              if (translationMap[origText]) {
                node.placeholder = translationMap[origText];
              }
            }
          });
        };
  
        // Apply translations
        selectors.forEach((selector) => {
          translateOrReplaceNode(selector);
        });
  
        // Apply regex replacements
        regexSelectors.forEach(({ selector, regex, replacement }) => {
          translateOrReplaceNode(selector, true, regex, replacement);
        });
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
      observer_portal.observe(qNode[0], {
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
  