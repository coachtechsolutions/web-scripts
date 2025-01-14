let pkIntervalTimerCookie = setInterval(myTimer, 200);
let myTimerRunning = false;
function myTimer() {
    if (myTimerRunning) return;
    myTimerRunning = true;

    try {
        let qNode;
        qNode=document.querySelectorAll('button.primary');
        if (qNode.length) {
            qNode[0].childNodes[0].nodeValue='Přijmout';
        }
        qNode=document.querySelectorAll('button.secondary');
        if (qNode.length) {
            qNode[0].childNodes[0].nodeValue='Pouze nezbytné';
        }
        
    } catch (e) {
        //clearInterval(myIntervalTimer);
        console.error(e); // Log the error for debugging
    } finally {
        myTimerRunning = false;
    }
}  
    
