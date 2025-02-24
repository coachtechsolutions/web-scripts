   // Debug mode togggle
    const DEBUG_MODE = true;

    /**
     * Log messages to the console in debug mode.
     */
    function debugLog(message, ...optionalParams) {
        if (DEBUG_MODE) console.log(message, ...optionalParams);
    }

    /**
     * Calculate the height of an element based on a given class.
     * Creates a temporary DOM element to determine the height.
     */
    function getHeightFromClass(className) {
        const $tempElement = $('<div>')
            .addClass(className)
            .css({ position: 'absolute', visibility: 'hidden' })
            .appendTo('body');
        let wrapHeight = $tempElement.css('--wrap-height')||'0';
        $tempElement.remove();
        wrapHeight = parseFloat(wrapHeight.replace('px', '').trim()) || 0;
        return wrapHeight||0;
    }

    function setEqualHeights() {
        let maxHeight = 0;
        // Reset heights to auto to ensure accurate recalculation
        $('.cts-slide h1').css('height', 'auto');

        // Find the maximum height among all slides
        $('.cts-slide h1').each(function () {
            const currentHeight = $(this).outerHeight(true);
            if (currentHeight > maxHeight) {
                maxHeight = currentHeight;
            }
        });
        // Apply the maximum height to all slides
        $('.cts-slide h1').css('height', maxHeight + 'px');
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
            const $jmslide = $(this).closest('.cts-slide');
            const $expand = $jmslide.find('.cts-expand');
            const $collapse = $jmslide.find('.cts-collapse');
            const $wrap = $jmslide.find('.cts-wrap');

            $expand.toggle();
            $collapse.toggle();
            $wrap.toggleClass('cts-collapsed cts-expanded');
        });
    }

    /**
     * Check and handle overflowing content in slides.
     */
    function initializeSlides() {
        let count=1;
        $('.cts-slide').each(function () {
            const $slide = $(this);
            const $textContainer = $slide.find('.cts-wrap');
            const $expand = $slide.find('.cts-expand');
            const $collapse = $slide.find('.cts-collapse');

            $collapse.hide();

            if ($textContainer.length > 0) {
                const wrapHeight=getHeightFromClass('slick-slide')
                debugLog('Height #',count++,':', wrapHeight, ' ScrollHeight: ',$textContainer[0].scrollHeight);
                if ($textContainer[0].scrollHeight > wrapHeight) {
                    $expand.css("visibility","visible");
                    $textContainer.addClass('cts-collapsed');
                } else {
                    $expand.css("visibility","hidden");
                    $textContainer.addClass('cts-fits-in');
                    //$textContainer.addClass('cts-expanded');
                }
            }
            //setEqualHeights();
        });
    }

    /**
     * Reorganize `.c-column` elements and initialize the Slick Slider.
     */
    function initializeSlickSlider() {
      	debugLog('Slick Slider is initializing...');
        const $row=$('.slick-row');
        const $ctsSlickRow = $('.cts-slick-row');
        $ctsSlickRow.after($row);
        let $count = 1;
        // Move `.c-column` elements to `.slick-row`
        $ctsSlickRow.find('.inner .c-column').each(function () {
            debugLog('Moving column:',$count++, $(this)[0]);
            const wrapped = $(this).wrap('<div class="slick-slide"></div>').parent();
            wrapped.appendTo($row);
        });

        // Remove empty `.inner` containers
        //$row.find('> .inner > span').remove();
        //$row.find('> .inner').remove();
        $ctsSlickRow.addClass('hidden');


        // Initialize Slick Slider
        try {
            $row.on('init', (event, slick) => {
                debugLog('Slick initialized with settings:', slick.options);
                initializeSlides();
                setEqualHeights();
            });
            $row.on('setPosition', (event, slick) => {
                $row.attr('data-visible-slides', slick.options.slidesToShow);
            });
            $row.slick({
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