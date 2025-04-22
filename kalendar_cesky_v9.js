//v10 - Simplified Reliable Version
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
};

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

// Debug function to help us track what's happening
const debug = (message) => {
    console.log(`[CalendarTranslator] ${message}`);
};

// Your existing translateOrReplaceNode function
const translateOrReplaceNode = (node) => {
    if (!node) return;  

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

// Apply translations to any widget
const applyTranslations = (container) => {
    if (!container) {
        debug('Container is null in applyTranslations');
        return;
    }
    
    debug(`Applying translations to ${container.id || container.tagName}`);
    
    selectors.forEach(selector => {
        try {
            const elements = container.querySelectorAll(selector);
            elements.forEach(translateOrReplaceNode);
        } catch (e) {
            debug(`Error with selector ${selector}: ${e.message}`);
        }
    });
};

// Main translation engine - keeps track of all widgets and observers
class CalendarTranslator {
    constructor() {
        this.observers = [];
        this.initialized = false;
        this.knownWidgetIds = new Set();
        
        debug('Calendar Translator created');
    }
    
    // Initialize the translator
    init() {
        if (this.initialized) return;
        
        debug('Initializing Calendar Translator');
        
        // Find existing widgets
        this.findAndHandleAllWidgets();
        
        // Set up main observer for document body
        this.setupMainObserver();
        
        this.initialized = true;
        debug('Calendar Translator initialized');
    }
    
    // Find all widgets currently on the page
    findAndHandleAllWidgets() {
        debug('Looking for existing widgets');
        
        // Calendar widget IDs
        const widgetSelectors = [
            '#appointment_widgets--revamp',
            '#hl_widget',
            '#cal_servicemenu_widgets'
        ];
        
        let found = 0;
        
        // Check for each possible widget ID
        widgetSelectors.forEach(selector => {
            const widgets = document.querySelectorAll(selector);
            widgets.forEach(widget => {
                found++;
                this.handleWidget(widget);
            });
        });
        
        // Check for overlay
        const overlay = document.getElementById('overlay');
        if (overlay) {
            debug('Found existing overlay');
            this.handleOverlay(overlay);
            found++;
        }
        
        debug(`Found ${found} widget elements`);
        return found > 0;
    }
    
    // Handle a widget when found
    handleWidget(widget) {
        if (!widget || !widget.id || this.knownWidgetIds.has(widget.id)) return;
        
        debug(`Handling widget: ${widget.id}`);
        this.knownWidgetIds.add(widget.id);
        
        // Apply translations immediately
        applyTranslations(widget);
        
        // Set up observer
        this.observeWidget(widget);
    }
    
    // Handle an overlay when found
    handleOverlay(overlay) {
        debug('Handling overlay');
        
        // Check for popup inside overlay
        const popup = overlay.querySelector('#hl_main_popup');
        if (popup) {
            debug('Found popup inside overlay');
            this.handlePopup(popup);
        } else {
            debug('No popup found in overlay, setting up observer');
            // Observe overlay for popup appearance
            this.observeOverlay(overlay);
        }
    }
    
    // Handle popup when found
    handlePopup(popup) {
        debug('Handling popup');
        
        // Find widgets inside popup
        const widgetSelectors = [
            '#appointment_widgets--revamp',
            '#hl_widget',
            '#cal_servicemenu_widgets'
        ];
        
        let foundWidget = false;
        
        // Look for known widget types in popup
        for (const selector of widgetSelectors) {
            const widget = popup.querySelector(selector);
            if (widget) {
                debug(`Found ${selector} inside popup`);
                this.handleWidget(widget);
                foundWidget = true;
            }
        }
        
        // If no standard widget found, treat the popup itself as a widget
        if (!foundWidget) {
            debug('No standard widget found in popup, treating popup as widget');
            applyTranslations(popup);
            this.observeWidget(popup);
        }
    }
    
    // Set up the main document observer
    setupMainObserver() {
        debug('Setting up main document observer');
        
        const observer = new MutationObserver((mutations) => {
            let foundNewOverlay = false;
            let foundNewWidget = false;
            
            for (const mutation of mutations) {
                if (mutation.type !== 'childList') continue;
                
                // Check added nodes
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue; // Skip non-element nodes
                    
                    // Check if this is an overlay
                    if (node.id === 'overlay') {
                        debug('Main observer detected overlay');
                        this.handleOverlay(node);
                        foundNewOverlay = true;
                    }
                    
                    // Also check for any widgets that might have been added
                    if (node.querySelector) {
                        // Check for overlay in this subtree
                        if (!foundNewOverlay) {
                            const overlay = node.querySelector('#overlay');
                            if (overlay) {
                                debug('Main observer detected overlay in subtree');
                                this.handleOverlay(overlay);
                                foundNewOverlay = true;
                            }
                        }
                        
                        // Check for calendar widgets
                        if (!foundNewWidget) {
                            const widgetSelectors = [
                                '#appointment_widgets--revamp',
                                '#hl_widget',
                                '#cal_servicemenu_widgets'
                            ];
                            
                            for (const selector of widgetSelectors) {
                                // Check if node itself matches
                                if (node.matches && node.matches(selector)) {
                                    debug(`Main observer detected widget: ${selector}`);
                                    this.handleWidget(node);
                                    foundNewWidget = true;
                                    break;
                                }
                                
                                // Check children
                                const widgets = node.querySelectorAll(selector);
                                if (widgets.length > 0) {
                                    widgets.forEach(widget => {
                                        debug(`Main observer detected widget in subtree: ${selector}`);
                                        this.handleWidget(widget);
                                        foundNewWidget = true;
                                    });
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        });
        
        // Use document.documentElement (html) to catch all changes including Vue root
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        });
        
        this.observers.push(observer);
        debug('Main observer started');
    }
    
    // Observe a widget for changes
    observeWidget(widget) {
        if (!widget) return null;
        
        debug(`Creating observer for widget: ${widget.id || widget.tagName}`);
        
        const observer = new MutationObserver(mutations => {
            debug(`Widget mutation detected in ${widget.id || widget.tagName}`);
            applyTranslations(widget);
        });
        
        observer.observe(widget, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        this.observers.push(observer);
        return observer;
    }
    
    // Observe overlay for popup appearance
    observeOverlay(overlay) {
        if (!overlay) return;
        
        debug('Creating observer for overlay');
        
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type !== 'childList') continue;
                
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;
                    
                    if (node.id === 'hl_main_popup') {
                        debug('Overlay observer detected popup');
                        this.handlePopup(node);
                        break;
                    }
                    
                    // Also check children if this might be a wrapper
                    if (node.querySelector) {
                        const popup = node.querySelector('#hl_main_popup');
                        if (popup) {
                            debug('Overlay observer detected popup in subtree');
                            this.handlePopup(popup);
                            break;
                        }
                    }
                }
            }
        });
        
        observer.observe(overlay, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        });
        
        this.observers.push(observer);
        
        // Clean up observer when overlay is removed
        const checkInterval = setInterval(() => {
            if (!document.body.contains(overlay)) {
                observer.disconnect();
                this.observers = this.observers.filter(obs => obs !== observer);
                clearInterval(checkInterval);
                debug('Overlay removed, observer cleaned up');
            }
        }, 1000);
    }
}

// Create and start the translator
(function() {
    debug('Starting Calendar Translator script');
    
    // Create the translator instance
    const translator = new CalendarTranslator();
    
    // Start the translator based on document readiness
    if (document.readyState === 'loading') {
        debug('Document still loading, waiting for DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', () => {
            debug('DOMContentLoaded fired, initializing translator');
            translator.init();
        });
    } else {
        debug('Document already loaded, initializing translator immediately');
        translator.init();
    }
    
    // Add a global reference for debugging
    window.calendarTranslator = translator;
    
    debug('Calendar Translator script initialized');
})();