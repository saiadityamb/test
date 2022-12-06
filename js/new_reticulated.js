window.confirmation = false
function Lead_Form() {
    if (window.lead_form == 'true') {
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").classList.remove("animate__zoomOutDown");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = (window.pageYOffset).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;


        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
        window.confirmation = true;
    }
    else{
        document.getElementById("processed_splash").classList.remove("animate__zoomOutDown");
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById('processed_splash').style.display = "block";
    
        document.getElementById("processed_splash").style.top = (window.pageYOffset).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted, set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }
}
function Remove_Popup() {
    document.getElementById("splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    window.confirmation = false;

}
function Display_Popup() {
    if (window.confirmation == false) {
        document.getElementById("processed_splash").classList.remove("animate__zoomOutDown");
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("processed_splash").style.display = "block";
        document.getElementById("processed_splash").style.top = (window.pageYOffset - 40).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted, set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }
    else {
        document.getElementById("processed_splash").classList.add("animate__zoomOutDown");
        setTimeout(function () {
            document.getElementById("main_content").classList.remove("main_imp");
            document.getElementById("processed_splash").style.display = "none";
        }, 1000);
        window.onscroll = function () { };
        window.confirmation = false;

    }
}
function Remove_Processed_Popup() {
    document.getElementById("processed_splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("processed_splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    window.confirmation = false;

}
function New_Lead_Collection() {
    var Name = document.getElementById("new_name").value
    var Number = document.getElementById("new_phone_number").value
    var Email = document.getElementById("new_email").value
    if (Name != '' && Number != '' && Email != '') {
        document.getElementById("new_entries").style.display = "none";
        document.getElementById("new_success").style.display = "block";
        setTimeout(function () {
            document.getElementById("new_success").style.display = "none";
            document.getElementById("new_name").value = '';
            document.getElementById("new_phone_number").value = '';
            document.getElementById("new_email").value = '';
            document.getElementById("new_entries").style.display = "block"
            Remove_Processed_Popup()
        }, 1500)
    }
    else {
        alert("First fill all the details")
    }

}
function Call_Clicks() {
    let CallClicks_New = firebase.database().ref("Call_Clicks_ViewInfo");
    CallClicks_New.set({
        amount: window.callclicks + 1,
    });
}
function Scroll_Win_Footer(){
    document.getElementById('Footer_View').scrollIntoView({
        behavior: 'smooth'
      });
}
let LeadForm_Clickable = firebase.database().ref("Visibility_Section").child("Lead-form_Clickable-form");
LeadForm_Clickable.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == "true") {
        window.lead_form = "true";
    }
    else {
        window.lead_form = "false";
    }
});
let CallClicks = firebase.database().ref("Call_Clicks_ViewInfo").child("amount");
CallClicks.on('value', (snapshot) => {
    const data = snapshot.val();
    window.callclicks = data;
});
let formMessaging = firebase.database().ref("Content_Section").child("Tagline");
formMessaging.on('value', (snapshot) => {
    const data = snapshot.val();
    window.tagline = data['content'];
   
    document.getElementById("tagline_new").innerHTML = tagline;
});
// ===================================================================================================
let SticyCallButton = firebase.database().ref("Visibility_Section").child("Sticky-Call-Button");
SticyCallButton.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == "true") {
        if (screen.width < "900") {
            document.getElementById("enquiry").style.display = "block"
        }
    }
    else {
        document.getElementById("enquiry").style.display = "none";
    }
});
// ==========================================================================================================
let MobileNumber = firebase.database().ref("Content_Section").child("Tagline");
MobileNumber.on('value', (snapshot) => {
    const data = snapshot.val();
    var num = data['number']
    document.getElementById("Mobile_Number_1").href="tel:"+num;
    document.getElementById("Mobile_Number_2").href="tel:"+num;
    document.getElementById("Mobile_Number_3").href="tel:"+num;
    document.getElementById("Mobile_Number_4").href="tel:"+num;
    document.getElementById("Mobile_Number_5").href="tel:"+num;
    document.getElementById("Mobile_Number_6").href="tel:"+num;
    document.getElementById("Mobile_Number_6").href="tel:"+num;
    document.getElementById("enquiry").href="tel:"+num;
    document.getElementById("Mobile_Number_7").innerHTML=num;
    document.getElementById("Mobile_Number_8").innerHTML=num;
    document.getElementById("Mobile_Number_9").innerHTML=num;
    document.getElementById("Mobile_Number_10").innerHTML="Call us "+num;
})