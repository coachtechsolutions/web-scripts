// if you like the script, you may consider some tip on this link:
// https://buy.stripe.com/28o29r4RHefu1Wg8ww
// Thanks :)
const translationMap = {
    "January": "Leden", 
    "February": "Únor", 
    "March": "Březen", 
    "April": "Duben", 
    "May": "Květen", 
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
    "May": "Kvě", 
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
    "AM":"dop.",
    "PM":"odp.",
    "Additional Information": "Další informace",
    "Available Starting times for":"Dostupné časy ",
    "Book Appointment":"Rezervovat schůzku",
    "Choose Time Slot": "Vyberte čas",
    "Enter Details": "Vyplňte údaje",
    "First Name": "Křestní jméno",
    "First Name is required":"Zadejte jméno",
    "Last Name": "Příjmení",
    "Last Name is required":"Zadejte příjmení",
    "No Slots available":"Žádný volný termín",
    "Phone": "Telefon",
    "Phone is required":"Zadejte telefon",
    "Email is required":"Zadejte Email",
    "Please accept the terms and conditions":"Prosím potvrďte souhlas",
    "Select": "Zvolit",
    "Mins" : "minut",
    "Minutes" : "minut",
    "Select Date" : "Vybrat datum",
    "Select time":"Vybrat",
    "Select Date & Time": "Vyberte datum a čas",
    "Skip":"Přeskočit",
    "Submit":"Odeslat",
    "Pick a Date and Time": "Vyberte datum a čas",
    "Time zone": "Časová zóna",
    "Additional_Info": "Je něco, co bych měl vědět předem?", //this is the placeholder text in the textbox labeled Additional Information
    "Your Meeting has been Scheduled":"Vaše schůzka je naplánovaná",
    "Your Meeting has been Rescheduled" : "Vaše schůzka je přeplánovaná",
    "Calendar":"Kalendář",
    "Duration":"Délka",
    "Any Available":"Kdokoliv volný",
    "Load More":"Více",
    "Add to":"Přidat do",
    "No slot available this month.":"Tento měsíc není dostupný žádný termín.",
    "Find next available slot":"Najít další volný termín",
    "(Previous time)":" (Původní čas) ",
    "Cancel Meeting ?":"Zrušit schůzku?",
    "Cancellation Reason" : "Důvod zrušení",
    "Cancel Appointment" : "Zrušit schůzku",


};

const selectors = [
    'h3.cal-title',
    'a.load-more',
    'div.details-item-step2 h3',
    'h3 strong',
    'div.pick-hours--am h4',
    'div.pick-hours--am p',
    'div.pick-hours--pm h4',
    'div.pick-hours--pm p',
    'h4.label-select-date',
    'h4.text-info',
    '.timezone-label',
    'thead tr th span',
    'div.booking-info-value',
    'div.booking-info-value span',
    'button',
    'button div',
    'li.widgets-time-slot span',
    '.selected-day',
    '.selected-date',
    'div.selected-appointment-date span',
    'label',
    'textarea[name="calendar_notes"]',
    'textarea.form-control',
    '.error',
    'h5.confirmation-message',
    'a.add-calendar-button',
    'span.multiselect__single',
    '.field-container div input',
    'div.calendar-details-container div span span',
    'a.calendar-button span',
    '.no-slots-container',
    '.no-slots-container a',
    '.cancel-meeting-text'
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
        regex: /(\d{1,2}) Mins/,
        replacement: (match, minutes) => `${minutes} ${translationMap["Mins"]||"Mins"}`
    },
    {
        regex: /(\d{1,2}) Minutes/,
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
    }
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
                            rText=text.replace(regex, replacement);
                            if(rText!==child.nodeValue) {
                                child.nodeValue = rText;
                            }
                            break;
                        }
                    }
                }
            }
        });
    } else if ((node.nodeName === "INPUT") | (node.nodeName === "TEXTAREA")) {
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
    } /*else if (node.nodeName === "TEXTAREA") {
        const origText = node.placeholder.trim();
        node.placeholder = translationMap["Additional_Info"];
    }*/
};

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
    }

}, 50);
