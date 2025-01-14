const translationMap = {
    "Please enter both first name and last name" : "Prosím zadejte jméno i příjmení",
    "Make sure that you filled all the details!" : "Ujistěte se, že jste zadali věechny údaje",

};


const selectors = [
    "div.card-el-error-msg",
    "div.order-validation-error"

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
];

//let pkIntervalTimer_portal = setInterval(myTimer, 200);
const observer_portal = new MutationObserver(mutations => {
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
    qNode = document.querySelectorAll("#preview-container");
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
    //myTimerRunning_portal = false;
  }
//}