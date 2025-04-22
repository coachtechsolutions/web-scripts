
//v9
const translationMap = {
    "January": "Leden", 
    "February": "Únor", 
    "March": "Březen", 
    "April": "Duben", 
    "May": "Kvě", 
    "June": "Červen", 
    "July": "Červenec", 
    "August": "Srpen", 
    "September": "Září", 
    "October": "Říjen", 
    "November": "Listopad", 
    "December": "Prosinec",
    "Jan": "Led", 
    "Feb": "Úno", 
    "Mar": "Bře", 
    "Apr": "Dub", 
    "Jun": "Čvn", 
    "Jul": "Čvc", 
    "Aug": "Srp", 
    "Sep": "Zář", 
    "Oct": "Říj", 
    "Nov": "Lis", 
    "Dec": "Pro",
    "Mon": "Po", 
    "Tue": "Út", 
    "Wed": "St", 
    "Thu": "Čt", 
    "Fri": "Pá", 
    "Sat": "So", 
    "Sun": "Ne",
    "Monday": "Pondělí", 
    "Tuesday": "Úterý", 
    "Wednesday": "Středa", 
    "Thursday": "Čtvrtek", 
    "Friday": "Pátek", 
    "Saturday": "Sobota", 
    "Sunday": "Neděle",
    "AM": "dop.",
    "PM": "odp.",
    "Additional Information": "Další informace",
    "Available Starting times for": "Dostupné časy ",
    "Add":"Přidat",
    "Add Services":"Přidat službu",
    "Add to": "Přidat do",
    "Additional_Info": "Je něco, co bych měl vědět předem?",
    "Any Available": "Kdokoliv volný",
    "Any staff available": "Kdokoliv volný",
    "Back":"Zpět",
    "Book": "Rezervovat",
    "Book Appointment": "Rezervovat schůzku",
    "Calendar": "Kalendář",
    "Change time":"Změnit čas",
    "Choose Time Slot": "Vyberte čas",
    "Choose a service": "Vyberte službu",
    "Continue":"Pokračovat",
    "Confirm":"Potvrdit",
    "Duration": "Délka",
    "Email is required": "Zadejte Email",
    "Enter Details": "Vyplňte údaje",
    "First Name": "Křestní jméno",
    "First Name is required": "Zadejte jméno",
    "Guest":"Host",
    "Guests": "Hosté",
    "Just Me":"Jen já",
    "Last Name": "Příjmení",
    "Last Name is required": "Zadejte příjmení",
    "Load More": "Více",
    "Mins": "min",
    "mins": "min",
    "Minutes": "minut",
    "more guest(s)":"další host(é)",
    "No Slots available": "Žádný volný termín",
    "people":"lidi",
    "People":"lidi",
    "Phone": "Telefon",
    "Phone is required": "Zadejte telefon",
    "Pick a Date and Time": "Vyberte datum a čas",
    "Please accept the terms and conditions": "Prosím potvrďte souhlas",
    "Schedule Meeting": "Naplánovat schůzku",
    "Schedule Appointment": "Zarezervovat",
    "Scheduling appointment":"Probíhá rezervace",
    "Search": "Vyhledat",
    "Select": "Zvolit",
    "Select different services":"Vybrat jiné služby",
    "Select Date": "Vybrat datum",
    "Select Date & Time": "Vyberte datum a čas",
    "Select a Date & Time": "Vyberte datum a čas",
    "Select Staff":"Vybrat zaměstnance",
    "Select time": "Vybrat",
    "Selected Services":"Vybrané služby",
    "Skip": "Přeskočit",
    "Submit": "Odeslat",
    "Time zone": "Časová zóna",
    "To maximize the total available slot select this option":"Pro maximalizaci celkového dostupného počtu časových slotů vyberte tuto možnost",
    "Your Meeting has been Scheduled": "Vaše schůzka je naplánovaná",
    "Your appointment has been scheduled": "Vaše rezervace je hotova",
    "(You)":"(Vy)",
    "You and":"Vy a ",
    "With any available staff":"S jakýmkoli dostupným personálem",
    "with":"s",
}
const selectors = [
    '.back-button-container a',
    '.calendars-service-action-container',
    '.confirmation-message',
    '.continue-button-container a',
    '.custom-label div',
    '.error',
    '.field-container div input',
    '.selected-date',
    '.selected-day',
    '.selectedOptionText',
    '.timezone-label',
    'a.add-calendar-button',
    'a.calendar-button span',
    'a.load-more',
    'button',
    'button div',
    'div.booking-info-value',
    'div.booking-info-value span',
    'div.cal_servicemenu_widgets--service-menu-info div',
    'div.calendar-details-container div span span',
    'div.calendar-service-staff-main-container div',
    'div.calendars-guests-label',
    'div.calendars-guests-info',
    'div.calendars-select-guest-name',
    'div.calendars-select-guest-service',
    'div.calendars-selected-service div',
    'div.details-item-step2 h3',
    'div.duration span',
    'div.pick-hours--am h4',
    'div.pick-hours--am p',
    'div.pick-hours--pm h4',
    'div.pick-hours--pm p',
    'div.selected-appointment-date span',
    'div.service-menu-booking-form-right-bottom-container div',
    'div.service-menu-booking-form-right-top-container div',
    'div.service-menu-booking-form-right-top-container span',
    'div.service-menu-confirmation-container div',
    'div.service-menu-loading-container p',
    'div.service-search-input-container input',
    'h3 strong',
    'h3.cal-title',
    'h4.label-select-date',
    'h4.text-info',
    'h5.confirmation-message',
    'label',
    'li.widgets-time-slot span',
    'li div li',
    'span.multiselect__single',
    'textarea.form-control',
    'textarea[name="calendar_notes"]',
    'thead tr th span',
];

const regexTranslationMap = [
    {
        regex: /\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\w+) (\d{1,2}), (\d{4})\b/,
        replacement: (match, day, month, date, year) => {
            const dayTranslation = translationMap[day]|| day;
            const monthTranslation = translationMap[month] || month;
            return `${dayTranslation}, ${monthTranslation} ${date}, ${year}`;
        }
    },
    {
        // Matches time range format: 05:00 PM - 05:30 PM
        regex: /(\d{1,2}:\d{2}) (AM|PM) - (\d{1,2}:\d{2}) (AM|PM)/,
        replacement: (match, startTime, startPeriod, endTime, endPeriod) => {
            const startPeriodTranslation = translationMap[startPeriod] || startPeriod;
            const endPeriodTranslation = translationMap[endPeriod] || endPeriod;
            return `${startTime} ${startPeriodTranslation} - ${endTime} ${endPeriodTranslation}`;
        }
    },
    {
        regex: /(\d{1,2}:\d{2}) (AM|PM)/,
        replacement: (match, time, period) => {
            const periodTranslation = translationMap[period]||period;
            return `${time} ${periodTranslation}`;
        }
    },
    {
        regex: /(Duration) (.*)/,
        replacement: (match, duration, theRest) => {
            const durationTranslate=translationMap[duration]||duration;
            return `${durationTranslate} ${theRest}`;
        }
    },
    {
        regex: /(\d{1,2}) (people|People)/,
        replacement: (match, number, people) => `${number} ${translationMap[people]||people}`
    },
    {
        regex: /(\d{1,3}) (Mins|mins)/,
        replacement: (match, mins, smins) => `${mins} ${translationMap[smins]||smins}`
    },
    {
        regex: /(\d{1,3}) Minutes/,
        replacement: (match, minutes) => `${minutes} ${translationMap["Minutes"]||"Minutes"}`
    },
    {
        regex: /^(\w+) (\d{1,2},) (\d{4})/,
        replacement: (match, month, day, year) => {
            const monthTranslation = translationMap[month]||month;
            return `${monthTranslation} ${day} ${year}`;
        }
    },
    {
        regex: /(\w+) (\d{4})/,
        replacement: (match, month, year) => {
            const monthTranslation = translationMap[month]||month;
            return `${monthTranslation} ${year}`;
        }
    },
    {
        regex: /(\bAdd to) (.*)/,
        replacement: (match, addTo, theRest) => {
            const addToTranslation = translationMap[addTo]||addTo;
            return `${addToTranslation} ${theRest}`;
        }
    },
    {
        regex: /(\w) (Calendar)/,
        replacement: (match, provider, calendar) => {
            const calendarTranslation = translationMap[calendar]||calendar;
            return `${provider} ${calendarTranslation}`;
        }
    },
    {
        regex: /(.*\S)\s(\d+)\s(.*)/,
        replacement: (match, text1, number, text2) => `${translationMap[text1.trim()]||text1.trim()} ${number} ${translationMap[text2.trim()]||text2.trim()}`
    },
    {
        regex: /(.*?)(\d+)/,
        replacement: (match, text, number) => `${translationMap[text.trim()]||text.trim()} ${number}`
    },
];

var pkdebug=false;
const translateOrReplaceNode = (node) => {
    if (!node) return;  

    // Skip nodes that have already been translated
    //if (node.getAttribute && node.getAttribute('data-translated') === 'true') return;
    if (pkdebug){
        debugger;
        pkdebug=false;
    }
    if (node.childNodes && node.childNodes.length > 0) {
        node.childNodes.forEach(child => {
            if (child.nodeType === 3) {  // Check if the node is a text node
                let text = child.nodeValue.trim();

                // Check for static translation
                if (translationMap[text]) {
                    if (child.nodeValue !== translationMap[text]) {
                    child.nodeValue = translationMap[text];
                    }
                } else {
                    // Check for regex-based dynamic translation
                    for (const { regex, replacement } of regexTranslationMap) {
                        text = child.nodeValue;
                        if (regex.test(text)) {
                            const rText=text.replace(regex, replacement);
                            if(rText!==child.nodeValue) {
                                child.nodeValue = rText;
                            }
                            break;
                        }
                    }
                }
            }
        });
    } else if (node.nodeName === "INPUT") {
        const origText = node.placeholder.trim();

        // Check for static translation
        if (translationMap[origText]) {
            node.placeholder = translationMap[origText];
        } else {
            // Check for regex-based dynamic translation
            for (const { regex, replacement } of regexTranslationMap) {
                if (regex.test(origText)) {
                    node.placeholder = origText.replace(regex, replacement);
                    break;
                }
            }
        }
    } else if (node.nodeName === "TEXTAREA") {
        node.placeholder = translationMap["Additional_Info"];
    }
};

////new
const applyTranslations = (container) => {
    if (!container) return;
    
    selectors.forEach(selector => {
        const elements = container.querySelectorAll(selector);
        elements.forEach(translateOrReplaceNode);
    });
};

// Create an observer for a specific widget container
const createWidgetObserver = (container) => {
    if (!container) return null;
    
    const observer = new MutationObserver(mutations => {
        applyTranslations(container);
    });
    
    observer.observe(container, { 
        childList: true, 
        subtree: true, 
        characterData: true
    });
    
    console.log("Widget observer created for:", container);
    return observer;
};

// Handle when a popup widget is found
const handlePopupWidget = (popup) => {
    if (!popup) return;
    
    console.log("Popup widget detected:", popup);
    
    // Apply translations immediately
    applyTranslations(popup);
    
    // Create dedicated observer for popup content
    createWidgetObserver(popup);
};

// Main observer setup that will run for the entire page lifecycle
const setupPersistentObserver = () => {
    // First get the Vue root if it exists
    const vueRoot = document.getElementById('__nuxt');
    const targetContainer = vueRoot || document.body;
    
    console.log("Setting up persistent observer on:", targetContainer.tagName + (vueRoot ? '#__nuxt' : ''));
    
    // First find and handle any existing booking widgets
    findAndHandleExistingWidgets();
    
    // Create a persistent observer that will never disconnect
    const persistentObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') continue;
            
            // Check newly added nodes for our targets
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue; // Skip non-element nodes
                
                // Check if this is the overlay
                if (node.id === 'overlay') {
                    handleOverlay(node);
                    continue;
                }
                
                // Check if this might contain our overlay
                if (node.querySelector) {
                    const overlay = node.querySelector('#overlay');
                    if (overlay) {
                        handleOverlay(overlay);
                        continue;
                    }
                }
                
                // Also check for booking widgets in the main content
                checkForBookingWidgets(node);
            }
        }
    });
    
    // Start observing - we need subtree here since elements could appear anywhere
    persistentObserver.observe(targetContainer, { 
        childList: true, 
        subtree: true,
        attributes: false,  // Don't need attribute changes for detection
        characterData: false // Don't need text changes for detection
    });
    
    console.log("Persistent observer is now running");
};

// Check for booking widgets in a node
const checkForBookingWidgets = (node) => {
    if (!node || node.nodeType !== 1) return;
    
    const widgetSelectors = [
        '#appointment_widgets--revamp',
        '#hl_widget',
        '#cal_servicemenu_widgets'
    ];
    
    // Check if the node itself is a booking widget
    for (const selector of widgetSelectors) {
        if (node.matches && node.matches(selector)) {
            console.log(`Found booking widget: ${selector}`);
            applyTranslations(node);
            createWidgetObserver(node);
            return;
        }
    }
    
    // Check children if this node might contain a booking widget
    if (node.querySelector) {
        for (const selector of widgetSelectors) {
            const widget = node.querySelector(selector);
            if (widget) {
                console.log(`Found booking widget: ${selector}`);
                applyTranslations(widget);
                createWidgetObserver(widget);
            }
        }
    }
};

// Handle when an overlay is found
const handleOverlay = (overlay) => {
    if (!overlay) return;
    
    console.log("Overlay detected:", overlay);
    
    // Check if popup exists inside overlay
    const popup = overlay.querySelector('#hl_main_popup');
    if (popup) {
        handlePopupWidget(popup);
        return;
    }
    
    // If no popup yet, observe the overlay for it to appear
    const overlayObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') continue;
            
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;
                
                if (node.id === 'hl_main_popup') {
                    handlePopupWidget(node);
                    return;
                }
                
                // Also check children if this is a container
                if (node.querySelector) {
                    const popup = node.querySelector('#hl_main_popup');
                    if (popup) {
                        handlePopupWidget(popup);
                        return;
                    }
                }
            }
        }
    });
    
    overlayObserver.observe(overlay, {
        childList: true,
        subtree: true // Check children in case popup is nested
    });
    
    // Disconnect this observer when overlay is removed
    const disconnectWhenRemoved = setInterval(() => {
        if (!document.body.contains(overlay)) {
            overlayObserver.disconnect();
            clearInterval(disconnectWhenRemoved);
            console.log("Overlay removed, observer disconnected");
        }
    }, 1000); // Check every second if overlay still exists
};

// Find and handle any widgets that already exist on the page
const findAndHandleExistingWidgets = () => {
    const widgetSelectors = [
        '#appointment_widgets--revamp',
        '#hl_widget',
        '#cal_servicemenu_widgets'
    ];
    
    let foundWidget = false;
    
    widgetSelectors.forEach(selector => {
        const widgets = document.querySelectorAll(selector);
        widgets.forEach(widget => {
            foundWidget = true;
            console.log(`Found existing booking widget: ${selector}`);
            applyTranslations(widget);
            createWidgetObserver(widget);
        });
    });
    
    // Also check for existing overlay
    const overlay = document.getElementById('overlay');
    if (overlay) {
        handleOverlay(overlay);
    }
    
    return foundWidget;
};

// Start the script
(function() {
    console.log("Calendar widget translation script starting");
    
    // Try to set up observers immediately
    if (document.readyState === 'loading') {
        // If document not fully loaded, wait for DOMContentLoaded
        document.addEventListener('DOMContentLoaded', setupPersistentObserver);
    } else {
        // If document already loaded, set up observers now
        setupPersistentObserver();
    }
})();



////old 
/*
const applyTranslations = () => {
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(translateOrReplaceNode);
    });
};

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        applyTranslations();
    });
});

const checkForElement = setInterval(() => {
    let appElement = document.querySelector('#appointment_widgets--revamp');
    if (appElement) {
        clearInterval(checkForElement);
        applyTranslations();
        observer.observe(appElement, { childList: true, subtree: true, characterData: true});
        return;
    } else appElement = document.querySelector('#hl_widget');
    if (appElement) {
        clearInterval(checkForElement);
        applyTranslations();
        observer.observe(appElement, { childList: true, subtree: true, characterData: true});
    } else appElement = document.querySelector('#cal_servicemenu_widgets');
    if (appElement) {
        clearInterval(checkForElement);
        applyTranslations();
        observer.observe(appElement, { childList: true, subtree: true, characterData: true});
    }
    console.log("Element found:", appElement)

}, 50);
*/
