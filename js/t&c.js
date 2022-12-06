function Scroll_Win_Footer(){
    document.getElementById('Footer_View').scrollIntoView({
        behavior: 'smooth'
      });
}
function Call_Clicks() {
    let CallClicks_New = firebase.database().ref("Call_Clicks_ViewInfo");
    CallClicks_New.set({
        amount: window.callclicks + 1,
    });
}
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
// =======================================================================
let MobileNumber = firebase.database().ref("Content_Section").child("Tagline");
MobileNumber.on('value', (snapshot) => {
    const data = snapshot.val();
    var num = data['number']

    document.getElementById("enquiry").href="tel:"+num;
    document.getElementById("Mobile_Number").href="tel:"+num;
    document.getElementById("Mobile_Number_1").innerHTML=num;
    document.getElementById("Mobile_Number_2").innerHTML=num;
   
})