let pkIntervalTimer = setInterval(myTimer, 200);
let observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                let qNode = document.querySelectorAll('section.product-cost-total');
                if(qNode.length){
                    let qParent=qNode[0].parentNode;
                    qParent.parentNode.removeChild(qParent);                  
                }
                if (document.querySelectorAll('section.product-detail span').length){
                    document.querySelectorAll('section.product-detail span')[1].childNodes[0].nodeValue='Množství';
                }
                qNode=document.querySelectorAll('div.card-el-error-msg');
                if (qNode.length){
                    qNode[0].childNodes[1].nodeValue=" Prosím, potvrďte, že nejste robot a znovu dokončete objednávku";
                }
            };

        });
    });
let observer2 = new MutationObserver(mutations => {
    mutations.forEach(mutation =>
        { 
            if(mutation.addedNodes.length){
                let node=mutation.addedNodes[0];
                if((node.nodeType === Node.ELEMENT_NODE) && (node.className === "order-validation-error")){
                    node.childNodes[0].nodeValue=' Prosím, vyplňte Vaše jméno i příjmení ';
                }
            }
        })

})

let observer3 = new MutationObserver(mutations => {
    mutations.forEach(mutation =>
        { 
            if(mutation.addedNodes.length){
                if (document.querySelectorAll('section.product-detail span').length){
                    document.querySelectorAll('section.product-detail span')[1].childNodes[0].nodeValue='Množství';
                }
           }
        })

})
let myTimerRunning_1 = false;
let obs=true ,obs2=true, obs3 = true;

function myTimer() {
    if (myTimerRunning_1) return;
    myTimerRunning_1 = true;
    try {
        let qNode;
        if (obs2) {
            qNode=document.querySelectorAll('section.info');
            if (qNode.length) {
                observer2.observe(qNode[0], {
                childList: true, // observe direct children
                subtree: true, // lower descendants too
                });
                obs2 = false;
            }
        }
        if (obs) {
            qNode=document.querySelectorAll('form.order-form-v2');
            if (qNode.length) {
                observer.observe(qNode[0], {
                childList: true, // observe direct children
                subtree: true, // lower descendants too
                });
                obs=false;
            }
        }
        if (obs3) {
            qNode=document.querySelectorAll('#oc-product-detail');
            if (qNode.length) {
                observer3.observe(qNode[0], {
                childList: true, // observe direct children
                subtree: true, // lower descendants too
                });
                obs3=false
            }
        }
        if (!(obs | obs2 | obs3)){
            clearInterval(myTimer);
        }

        
    } catch (e) {
        //clearInterval(myIntervalTimer);
        console.error(e); // Log the error for debugging
    } finally {
        myTimerRunning_1 = false;
    }
}  