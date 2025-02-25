let pkIntervalTimer = setInterval(myTimer, 200);
    const myMonths={January:"Leden", February:"Únor", March:"Březen", April:"Duben", May:"Květen", June:"Červen", 
    July:"Červenec", August:"Srpen", September:"Září", October:"Říjen", November:"Listopad", December:"Prosinec"};
    const myMon={Jan:"Led", Feb:"Úno", Mar:"Bře", Apr:"Dub", May:"Kvě", Jun:"Čvn", Jul:"Čvc", Aug:"Srp", Sep:"Zář", Oct:"Říj", Nov:"Lis", Dec:"Pro"};
    const myDay={Mon:"Po", Tue:"Út", Wed:"St", Thu:"Čt", Fri:"Pá", Sat:"So", Sun:"Ne"};
    const myLongDay={Monday:"Pondělí", Tuesday:"Úterý", Wednesday:"Středa", Thursday:"Čtvrtek", Friday:"Pátek", Saturday:"Sobota", Sunday:"Neděle"};
    const myLabels={"First Name":"Křestní jméno","Last Name":"Příjmení","Phone":"Telefon","Additional Information":"Další informace"};
    let myTimerRunning = false;
    let myCNT=0;
    function myTimer() {
        if (myTimerRunning) return;
        myTimerRunning = true;
    
        try {
            const appointmentWidgets = document.getElementById('appointment_widgets--revamp');
            if (appointmentWidgets) {
                let whichPage = document.getElementsByClassName('widgets-step-1');
                let qNode;
                if (whichPage.length > 0) {
                    updateBookingInfo();
                    updateDateSelectors();
                    updateBookingInfoValues();
                    qNode=document.querySelectorAll('button.selected-slot');
                    if (qNode.length>0) {
                        qNode[0].childNodes[0].childNodes[0].nodeValue=' Zvolit';
                    }
                    qNode=document.querySelectorAll('div.selected-appointment-date');
                    if (qNode.length>0){
                        qNode[0].childNodes[0].childNodes[0].nodeValue=qNode[0].childNodes[0].childNodes[0].nodeValue.replace('Duration','Délka');
                        qNode[0].childNodes[0].childNodes[0].nodeValue=qNode[0].childNodes[0].childNodes[0].nodeValue.replace('Mins','Minut');
                    }
                    qNode=document.querySelectorAll('.no-slots-container');
                    if (qNode.length>0){
                        qNode[0].childNodes[0].nodeValue='Tento měsíc není žádný volný termín';
                        qNode[0].childNodes[1].childNodes[0].nodeValue='Najít další volný termín';
                    }

                }
                whichPage = document.getElementsByClassName('hl_widget-step2');
                if (whichPage.length > 0){
                    if(!document.getElementById('form-builder')){
                        const labels = document.querySelectorAll('div.field-container label');
                        labels.forEach(element => {
                            element.childNodes[0].nodeValue=(myLabels[element.childNodes[0].nodeValue.trim()]|| element.childNodes[0].nodeValue.trim())+' ';
                        });
                        const inputs=document.querySelectorAll('input');
                        inputs.forEach(element => {
                            if(element.attributes.placeholder){
                                element.attributes.placeholder.value=myLabels[element.attributes.placeholder.value.trim()] || element.attributes.placeholder.value;
                            }
                        })
                        document.querySelector('textarea').attributes.placeholder.value='Co bych měla vědět ještě před schůzkou?';
                        document.querySelector('h4.text-info').innerText='Prosím, vyplňte informace';
                    }
                    updateBookingInfoValues();
                    const errors=document.querySelectorAll('div.error');
                        if(errors.length>0){
                            errors.forEach(element => {
                                element.innerText="Toto pole je povinné";
                            })
                        }
                }
                whichPage = document.getElementsByClassName('appointment_widgets--revamp--confirmation');
                if (whichPage.length > 0){
                    document.querySelector('h5.confirmation-message').innerText='Vaše konzultace je naplánovaná';
                    updateBookingInfo();
                    updateBookingInfoValues();
                    //qNode=document.querySelectorAll('a[href*="event"] span').innerText='Přidat do kalendáře Google';
                    //document.querySelector('a[href*="ics"] span').innerText='Přidat do Outlooku / iCal';
                    if (!(document.querySelector('.btn-visible'))){
                        if (document.querySelector('div.btn-hidden')) {
                            newdiv=document.createElement('div')
                            newdiv.innerHTML=document.querySelectorAll('div.btn-hidden')[0].outerHTML.replace("btn-hidden","btn-visible");
                            document.querySelectorAll('.hl_events-buttons')[0].parentNode.appendChild(newdiv);
                        }
                    }
                    qNode=document.querySelectorAll('.pointer');
                    if (qNode.length>0){
                        qNode[0].childNodes[0].nodeValue=" Další...";
                    }

                }
                qNode=document.querySelectorAll('button.btn-schedule');
                if (qNode.length>0){
                    qNode[0].childNodes[0].nodeValue= 'Naplánovat schůzku'
                }
            }
        } catch (e) {
            //clearInterval(myIntervalTimer);
            console.error(e); // Log the error for debugging
        } finally {
            myTimerRunning = false;
        }
    }  
    
    function updateBookingInfoValues() {
        let bookingInfoDuration = document.querySelectorAll('div.booking-info--duration div.booking-info-value');
    
        // Update booking duration
        if (bookingInfoDuration.length > 0) {
            bookingInfoDuration[0].childNodes[0].nodeValue = bookingInfoDuration[0].childNodes[0].nodeValue.replace('Mins','Minut');
        }
    
        // Update booking date and time
        let bookingInfoDateTime=document.querySelectorAll('div.booking-info--datetime div.booking-info-value');
        if (bookingInfoDateTime.length > 0) {
            bookingInfoDateTime[0].childNodes[1].nodeValue=translateDateTime(bookingInfoDateTime[0].childNodes[1].nodeValue);
        }
    }
    
    function updateBookingInfo() {
        const provider=document.querySelector('.provider-branding');
        if(provider){
            provider.parentNode.removeChild(provider);
        }
        let qNode=document.querySelectorAll('div.appointment_widgets--revamp--selected-slot-info .selected-day');
        if(qNode.length>0){
            qNode[0].childNodes[0].nodeValue=myLongDay[qNode[0].childNodes[0].nodeValue]||qNode[0].childNodes[0].nodeValue; 
        }
        qNode=document.querySelectorAll('div.appointment_widgets--revamp--selected-slot-info .selected-date');
        if(qNode.length>0) {
            let dateParts=qNode[0].childNodes[0].nodeValue.split(' ');
            dateParts[0]=myMonths[dateParts[0]]||dateParts[0];
            qNode[0].childNodes[0].nodeValue=dateParts.join(' ');
        }
    }

    function updateDateSelectors() {
        const selDateTime=document.querySelector('.label-select-date');
        if (selDateTime){
            selDateTime.childNodes[0].nodeValue='Vyberte datum a čas';
        }
        const btn = document.querySelector('button.text-capitalize');
        btn.innerText = myMonths[btn.innerText] || btn.innerText;
    
        const spans = document.querySelectorAll('span.vdpHeadCellContent');
        spans.forEach(span => {
            span.innerText = myDay[span.innerText] || span.innerText;
        });
        document.querySelector('div.timezone-label').innerText='Časová zóna';
        
    }
    function translateDateTime(dateTime) {
        let dateTimeParts = dateTime.split(' ');
            dateTimeParts[1] = (myDay[dateTimeParts[1].split(',')[0]]||dateTimeParts[1].split(',')[0])+','
            dateTimeParts[2] = myMon[dateTimeParts[2]] || dateTimeParts[2];
            return dateTimeParts.join(' ');
    }