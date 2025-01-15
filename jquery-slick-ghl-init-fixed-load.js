
    // Debug mode toggle
    const DEBUG_MODE = true;

    /**
     * Log messages to the console in debug mode.
     */
    function debugLog(message, ...optionalParams) {
        if (DEBUG_MODE) console.log(message, ...optionalParams);
    }

    /**
     * Dynamically load a script and execute a callback when loaded.
     */
    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }

    /**
     * Initialize toggle functionality for expanding and collapsing content.
     */
    function initializeToggleHandlers() {
        $(document).on('click', '.cts-expand, .cts-collapse', function () {
            const $ctsSlide = $(this).closest('.cts-slide');
            const $expand = $ctsSlide.find('.cts-expand');
            const $collapse = $ctsSlide.find('.cts-collapse');
            const $wrap = $ctsSlide.find('.cts-wrap');

            $expand.toggle();
            $collapse.toggle();
            $wrap.toggleClass('cts-collapsed cts-expanded');
        });
    }

    /**
     * Check and handle overflowing content in slides.
     */
     function initializeSlides() {
        let count = 1;
        let maxHeightAligned = 0;

        // Calculate max height of aligned elements
        $('.cts-slide').each(function () {
            const $align = $(this).find('.cts-slide-align-element');
            let sumHeight = 0;

            $align.each(function () {
                sumHeight += $(this).outerHeight(true); // Include margins
            });
            maxHeightAligned = Math.max(maxHeightAligned, sumHeight);
        });

        // Adjust slides based on calculated height
        $('.cts-slide').each(function () {
            const $slide = $(this);
            const $textContainer = $slide.find('.cts-wrap');
            const $expand = $slide.find('.cts-expand');
            const $collapse = $slide.find('.cts-collapse');
            const $helper = $slide.find('.cts-h-helper');
            
            $collapse.hide(); // Hide collapse initially

            // Calculate helper height
            let helpHeight = 0;
            $helper.each(function () {
                helpHeight += $(this).outerHeight(true); // Include margins
            });

            const wrapHeight = $slide.innerHeight() - maxHeightAligned - helpHeight;

            if ($textContainer.length > 0) {
                debugLog('Height #', count++, ':', wrapHeight, ' ScrollHeight:', $textContainer[0].scrollHeight);

                if ($textContainer[0].scrollHeight > wrapHeight) {
                    $expand.css("visibility", "visible");
                    $textContainer.addClass('cts-collapsed');
                    $textContainer.css("height", `${wrapHeight}px`); // Fixed dynamic height setting
                } else {
                    $expand.css("visibility", "hidden");
                    $textContainer.css("height", "auto"); // Ensure height is auto if not collapsed
                }
            }
        });
    }

    /**
     * Reorganize `.c-column` elements and initialize the Slick Slider.
     */
    function initializeSlickSlider() {
        debugLog('Slick Slider is initializing...');
        const $rows = $('.slick-row');

        if ($rows.length > 0) {
            // Clone the first row
            let $row = $rows.first().clone();

            // Clear the contents of the clone
            $row.empty();
            // Iterate through all rows and collect `.c-column` elements
            $rows.each(function (rowIndex) {
                const $currentRow = $(this);
                let columnIndex = 1;

                $currentRow.find('.inner .c-column').each(function () {
                    debugLog(`Processing row ${rowIndex + 1}, column ${columnIndex++}`, $(this)[0]);
                    const wrapped = $(this).wrap('<div class="slick-slide"></div>').parent();
                    $row.append(wrapped);
                });
            });

            // Remove all but the first row
            $rows.slice(1).each(function () {
                // Remove the row itself
                $(this).remove();

                // Also remove comments immediately before and after this row
                const previousSibling = this.previousSibling;
                const nextSibling = this.nextSibling;

                if (previousSibling && previousSibling.nodeType === Node.COMMENT_NODE) {
                    previousSibling.remove();
                }
                if (nextSibling && nextSibling.nodeType === Node.COMMENT_NODE) {
                    nextSibling.remove();
                }
            });
            // Replace the first row with the modified clone
            $rows.first().replaceWith($row);  
            debugger;   
        }
        const $slickRow=$('.slick-row');
        debugger;
        // Initialize Slick Slider
        try {
            $slickRow.on('init', (event, slick) => {
                debugLog('Slick initialized with settings:', slick.options);
                initializeSlides();
            });
            $slickRow.on('setPosition', (event, slick) => {
                $slickRow.attr('data-visible-slides', slick.options.slidesToShow);
            });
            $slickRow.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                ],
            });
        } catch (error) {
            console.error('Error initializing Slick:', error);
        }
    }

    /**
     * Main initialization logic after hydration is complete.
     */
    function initializeAfterHydration() {
        $(document).on('hydrationDone', function () {
            debugLog('Hydration complete, initializing components...');
            initializeToggleHandlers();
            initializeSlickSlider();
        });
    }

    /**
     * Load scripts in the correct order and initialize the page.
     */
    loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function () {
        loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', initializeAfterHydration);
    });
