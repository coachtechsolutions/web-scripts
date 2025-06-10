//v10 - Simplified for blog content only
const pkdebug = false;

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
    "Mins": "min",
    "mins": "min",
    "Minutes": "minut",
    "Back to Top": "Na začátek",
    "Back to Blog": "Zpět na blog",
    "Previous": "Předchozí",
    "Next": "Následující",
    "Published on": "Zveřejněno",
    "Read more":"Číst dál",
    "Read More":"Číst dál"
};

const selectors = [
    'button',
    'a.blog-back-button span',
    'span.blog-read-time',
    'span.blog-publish-date',
    '.blog-button',

];

const regexTranslationMap = [
    /*   {
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
    */
    {   
        regex: /(\d+)(.*)(read)/,
        replacement: (match, gr1, gr2, gr3) => `doba čtení ${gr1} ${gr2}`
    },
    {
        regex: /(Published on)(\:.*)/,
        replacement: (match, gr1, gr2) => `${translationMap[gr1]}${gr2}`
    },
];

// Debug function to help us track what's happening
const debug = (message) => {
    if (pkdebug) {
        console.log(`[BlogTranslator] ${message}`);
    }
};

// Translate or replace node content
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
                            const rText = text.replace(regex, replacement);
                            if (rText !== child.nodeValue) {
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
    }
};

// Apply translations to any container
const applyTranslations = (container) => {
    if (!container) {
        debug('Container is null in applyTranslations');
        return;
    }
    
    debug(`Applying translations to ${container.className || container.tagName}`);
    
    selectors.forEach(selector => {
        try {
            const elements = container.querySelectorAll(selector);
            elements.forEach(translateOrReplaceNode);
        } catch (e) {
            debug(`Error with selector ${selector}: ${e.message}`);
        }
    });
};

// Main translation engine - simplified for blog content
class BlogTranslator {
    constructor() {
        this.observers = [];
        this.initialized = false;
        this.processedElements = new WeakSet();
        
        debug('Blog Translator created');
    }
    
    // Initialize the translator
    init() {
        if (this.initialized) return;
        
        debug('Initializing Blog Translator');
        
        // Find existing blog elements
        this.findAndHandleBlogElements();
        
        // Set up main observer for document
        this.setupMainObserver();
        
        this.initialized = true;
        debug('Blog Translator initialized'); 
    }
    
    // Find all blog elements currently on the page
    findAndHandleBlogElements() {
        debug('Looking for existing blog elements');
        
        const widgetSelectors = [
            '.c-blog-post',
            '.c-blog-content',
            '.c-blog-pined-post'
        ];
        
        let found = 0;
        
        widgetSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!this.processedElements.has(element)) {
                    found++;
                    this.handleBlogElement(element);
                }
            });
        });
        
        debug(`Found ${found} blog elements`);
        return found > 0;
    }
    
    // Handle a blog element when found
    handleBlogElement(element) {
        if (!element || this.processedElements.has(element)) return;
        
        debug(`Handling blog element: ${element.className}`);
        this.processedElements.add(element);
        
        // Apply translations immediately
        applyTranslations(element);
        
        // Set up observer for this element
        this.observeElement(element);
    }
    
    // Set up the main document observer
    setupMainObserver() {
        debug('Setting up main document observer');
        
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type !== 'childList') continue;
                
                // Check added nodes
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue; // Skip non-element nodes
                    
                    // Check if this node is a blog element
                    if (node.classList && 
                        (node.classList.contains('c-blog-post') || 
                         node.classList.contains('c-blog-content'))) {
                        debug('Main observer detected blog element');
                        this.handleBlogElement(node);
                    }
                    
                    // Also check for blog elements in subtree
                    if (node.querySelector) {
                        const blogElements = node.querySelectorAll('.c-blog-post, .c-blog-content');
                        blogElements.forEach(element => {
                            if (!this.processedElements.has(element)) {
                                debug('Main observer detected blog element in subtree');
                                this.handleBlogElement(element);
                            }
                        });
                    }
                }
            }
        });
        
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        });
        
        this.observers.push(observer);
        debug('Main observer started');
    }
    
    // Observe an element for changes
    observeElement(element) {
        if (!element) return null;
        
        debug(`Creating observer for element: ${element.className}`);
        
        const observer = new MutationObserver(mutations => {
            debug(`Mutation detected in ${element.className}`);
            applyTranslations(element);
        });
        
        observer.observe(element, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        this.observers.push(observer);
        return observer;
    }
    
    // Clean up method
    destroy() {
        debug('Destroying Blog Translator');
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
        this.initialized = false;
    }
}

// Create and start the translator
(function() {
    debug('Starting Blog Translator script');
    
    // Create the translator instance
    const translator = new BlogTranslator();
    
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
    window.blogTranslator = translator;
    
    debug('Blog Translator script initialized');
})();