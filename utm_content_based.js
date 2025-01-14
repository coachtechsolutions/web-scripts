
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function waitForElement(selector) {
        while (!document.querySelector(selector)) {
            await sleep(100); // Wait for 100ms before checking again
        }
        return document.querySelector(selector);
    }
    let urlParams = new URLSearchParams(window.location.search);
    let utmContent = urlParams.get('utm_content');
    if (utmContent === 'video') {

        // Observe the parent element for the addition of the target element
        const appElement = document.getElementById('preview-container');
        const parentConfig = { childList: true, subtree: true };
        const parentObserver = new MutationObserver(function(mutationsList, observer) {       
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.id === 'observed-element') {
                            // Target element found, start observing it
                            startObservingTarget(node);

                            // Stop observing the parent element
                            observer.disconnect();
                            console.log('Stopped observing parent element.');
                        }
                    });
                }
            }
        });
    };

    parentObserver.observe(appElement, parentConfig);
    
    
    if (utmContent){
        if (utmContent==='content'){
            document.querySelectorAll('#image-ynhR_G9eeq')[0].style.display='none'
            document.querySelectorAll('.cvideo-TvI29pPHO9')[0].style.display = 'block';
        }
    }
