//شاشة أولي وتانيه 
playSound("assets/mahmoud1_-cut_2sec-.mp3", false);
var direction = 1;
var speed = 2;
function moveBoy() {
  var y = getProperty("hand", "y");
  setProperty("hand", "y", y + speed * direction);
  if (y > 300 || y < 200) { 
    direction *= -1; 
  }
}
setInterval(moveBoy, 50);
setProperty("hand2", "x", 950);
setProperty("hand2", "y", 300);
var directionHand = 1;
var speedHand = 2;
function moveHand() {
  var y = getProperty("hand2", "y");
  setProperty("hand2", "y", y + speedHand * directionHand);
  if (y > 200 || y < 100) {
    directionHand *= -1;
  }
}
setInterval(moveHand, 50);
onEvent("boyBtn", "click", function() {
  playSound("assets/category_app/app_button_4.mp3", false);
  stopSound("assets/mahmoud1_-cut_2sec-.mp3");
  setScreen("LanguageScreen");
  playSound("assets/2.mp3", false);
});
setProperty("cardImg", "x", 930);
setProperty("cardImg", "y", 500);
setProperty("cardImg", "width", 200);
setProperty("cardImg", "height", 200);
function insertCard() {
  var interval = setInterval(function() {
    var x = getProperty("cardImg", "x");
    var width = getProperty("cardImg", "width");
    var height = getProperty("cardImg", "height");
    if (width > 0 && height > 0) {
      setProperty("cardImg", "x", x + 1);
      setProperty("cardImg", "width", width - 2);
      setProperty("cardImg", "height", height - 1.2);
    } else {
      clearInterval(interval); 
      setScreen("NextScreen");
      playSound("assets/3.mp3", false);
      setProperty("cardImg", "hidden", true); 
    }
  }, 20);
}
onEvent("cardImg", "click", insertCard);
onEvent("cardImg", "click", function( ) {
stopSound("assets/2.mp3");
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
});
//**********************
setProperty("image9", "x", 1000);
setProperty("image9", "y", 500);
setProperty("image9", "width", 100);
setProperty("image9", "height", 60);

function insertCard22() {
  var interval = setInterval(function() {
    var x = getProperty("image9", "x");
    var width = getProperty("image9", "width");
    var height = getProperty("image9", "height");
    if (width > 0 && height > 0) {
      setProperty("image9", "x", x + 1);
      setProperty("image9", "width", width - 2);
      setProperty("image9", "height", height - 1.2);
    } else {
      clearInterval(interval); 
      setScreen("NextScreen"); 
      setProperty("image9", "hidden", true); 
    }
  }, 20);
}
onEvent("image9", "click", insertCard22);
onEvent("image9", "click", function( ) {
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
});
// -------- صورة فيزا --------
setProperty("imageVisa", "x", 1000);
setProperty("imageVisa", "y", 500);
setProperty("imageVisa", "width", 10);
setProperty("imageVisa", "height", 10);
setProperty("imageVisa", "hidden", true);
function insertVisa() {
  var interval = setInterval(function() {
    var x = getProperty("imageVisa", "x");
    var width = getProperty("imageVisa", "width");
    var height = getProperty("imageVisa", "height");
    if (width > 0 && height > 0) {
      setProperty("imageVisa", "x", x + 1);
      setProperty("imageVisa", "width", width - 2);
      setProperty("imageVisa", "height", height - 1.2);
    } else {
      clearInterval(interval); 
      setScreen("NextScreen"); 
      setProperty("imageVisa", "hidden", true); 
    }
  }, 20);
}
onEvent("imageVisa", "click", insertVisa);
// -------- التنقل بين اللغات --------
onEvent("arabicBtn", "click", function() {
  stopSound("assets/3.mp3");
  setScreen("NextScreenArabic");
  playSound("assets/category_app/app_button_4.mp3", false);
  playSound("assets/4mahmouuuuud.mp3", false);
});
onEvent("image12", "click", function( ) {
 playSound("assets/4mahmouuuuud.mp3", false);
 stopSound("assets/4mahmouuuuud.mp3");
 playSound("assets/4mahmouuuuud.mp3", false);
});
onEvent("englishBtn", "click", function() {
  stopSound("assets/3.mp3");
  setScreen("NextScreenEnglish");
  playSound("assets/category_app/app_button_4.mp3", false);
  playSound("assets/انجليزي باس.mp3", false);
});
// -------- أزرار الإلغاء --------
function cancelAction() {
  setScreen("EndScreen");
  setProperty("imageVisa","hidden", false); // الفيزة تظهر
  setTimeout(function() { animateVisa(); }, 200);

  // امسح كل إدخالات الباسورد
  enteredCode = "";
  enteredCode2 = "";
  setProperty("text_input1","text","");
  setProperty("text_input2","text","");

  // إعادة النصوص الافتراضية باللون الأسود
  setProperty("label1","text","رجاء ادخل كلمة المرور");
  setProperty("label1","text-color","black");  
  setProperty("label2","text","Please enter the password");
  setProperty("label2","text-color","black");  

  // مسح رسالة الخطأ النهائية إذا كانت موجودة
  setText("labelEnd","");
  
  // إعادة عدد المحاولات للصفر
  attempts = 0;
  attempts2 = 0;
}
onEvent("imageVisa", "click", function( ) {
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
playSound("assets/3.mp3", false);
});
onEvent("btnCancelNext", "click", cancelAction);
onEvent("btnCancelNext", "click", function( ) {
stopSound("assets/3.mp3", false);
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);   
});
onEvent("button410", "click", cancelAction);
onEvent("button410", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
stopSound("assets/---------Pleas......osit..mp3");
stopSound("assets/chat-E.mp3");
});
onEvent("button192", "click", cancelAction);
onEvent("button192", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
stopSound("assets/default.mp3");
});
onEvent("button158", "click", cancelAction);
onEvent("button158", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button370", "click", cancelAction);
onEvent("button370", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button455", "click", cancelAction);
onEvent("button455", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button320", "click", cancelAction);
onEvent("button320", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button118", "click", cancelAction);
onEvent("button118", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);

});
onEvent("button285", "click", cancelAction);
onEvent("button285", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
stopSound("assets/خدمات شات صوت.mp3");

});
onEvent("btnCancel", "click", cancelAction);
onEvent("btnCancel", "click", function( ) {
  stopSound("assets/4mahmouuuuud.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("btnCancelE", "click", cancelAction);
onEvent("btnCancelE", "click", function( ) {
 stopSound("assets/4mahmouuuuud.mp3");
 stopSound("assets/انجليزي باس.mp3");
playSound("assets/category_app/app_button_4.mp3", false);
 playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button148", "click", function() {
    cancelAction(); 
    playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button5", "click", cancelAction);
onEvent("button5", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button28", "click", cancelAction);
onEvent("button28", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button82", "click", cancelAction);
onEvent("button82", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button76", "click", cancelAction);
onEvent("button76", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button180", "click", cancelAction);
onEvent("button180", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("button258", "click", cancelAction);
onEvent("button258", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
    playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
onEvent("كنسل", "click", cancelAction);
onEvent("كنسل", "click", function( ) {
   stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
});
// -------- أنيميشن صورة الفيزا --------
function animateVisa() {
  setProperty("imageVisa", "width", 10);
  setProperty("imageVisa", "height", 10);
  setProperty("imageVisa", "x", 1000); 
  setProperty("imageVisa", "y", 500); 
  setProperty("imageVisa", "hidden", false); // الفيزة تظهر
  var targetWidth = 75;
  var targetHeight = 100;
  var growStep = 1;
  var intervalTime = 20;
  var animationInterval = setInterval(function() {
    var currentWidth = getProperty("imageVisa", "width");
    var currentHeight = getProperty("imageVisa", "height");
    if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
      clearInterval(animationInterval);
    } else {
      setProperty("imageVisa", "width", Math.min(currentWidth + growStep, targetWidth));
      setProperty("imageVisa", "height", Math.min(currentHeight + growStep, targetHeight));
    }
  }, intervalTime);
}

// -------- بيانات الباسورد --------
var enteredCode = "";
var attempts = 0;
var enteredCode2 = "";
var attempts2 = 0;

function resetPasswordData() {
  enteredCode = "";
  attempts = 0;
  enteredCode2 = "";
  attempts2 = 0;
  setProperty("text_input1","text","");
  setProperty("text_input2","text","");
  
  // ترجع النصوص للون الأسود الافتراضي
  setProperty("label1","text","رجاء ادخل كلمة المرور");
  setProperty("label1","text-color","black");  
  setProperty("label2","text","Please enter the password");
  setProperty("label2","text-color","black");  
}


// -------- شاشة العربية --------
onEvent("NextScreenArabic", "show", resetPasswordData);
onEvent("NextScreenEnglish", "show", resetPasswordData);
onEvent("LanguageScreen", "show", resetPasswordData);

// -------- دوال إدخال الأرقام --------
function addDigit(digit) {
  if (enteredCode.length < 4) {
    enteredCode += digit;
    setProperty("text_input1", "text", getProperty("text_input1", "text") + "*");
  }
}
function addDigit2(digit) {
  if (enteredCode2.length < 4) {
    enteredCode2 += digit;
    setProperty("text_input2", "text", getProperty("text_input2", "text") + "*");
  }
}

// -------- أزرار الأرقام --------
["1","2","3","4","5","6","7","8","9","0"].forEach(function(num){
  onEvent("btn"+num,"click",function(){ 
    stopSound("assets/4mahmouuuuud.mp3");
    stopSound("assets/انجليزي باس.mp3");
    playSound("assets/category_app/app_button_4.mp3", false);
    addDigit(num); });
  onEvent("btn"+num+"_2","click",function(){ 
    stopSound("assets/4mahmouuuuud.mp3");
    stopSound("assets/انجليزي باس.mp3");
    playSound("assets/category_app/app_button_4.mp3", false);
    addDigit2(num); });
});

// -------- زرار المسح1 شاشة الأولى --------
onEvent("btnClear","click",function(){
   playSound("assets/category_app/app_button_4.mp3", false);
    stopSound("assets/4mahmouuuuud.mp3");
  if (enteredCode.length > 0) {
    enteredCode = enteredCode.slice(0,-1); // مسح آخر رقم فقط
    var currentText = getProperty("text_input1","text");
    setProperty("text_input1","text", currentText.slice(0,-1));
  }
  if (enteredCode.length === 0) {
    setProperty("label1","text","رجاء ادخل كلمة المرور");
  }
});

// -------- زرار المسح شاشة الثانية --------
onEvent("btnClear2","click",function(){
   playSound("assets/category_app/app_button_4.mp3", false);
   stopSound("assets/انجليزي باس.mp3");
  if (enteredCode2.length > 0) {
    enteredCode2 = enteredCode2.slice(0,-1); // مسح آخر رقم فقط
    var currentText = getProperty("text_input2","text");
    setProperty("text_input2","text", currentText.slice(0,-1));
  }
  if (enteredCode2.length === 0) {
    setProperty("label2","text","Please enter the password");
  }
});
onEvent("image19", "click", function( ) {
  playSound("assets/انجليزي باس.mp3", false);
 stopSound("assets/انجليزي باس.mp3");
  playSound("assets/انجليزي باس.mp3", false);
});


// -------- زر Enter شاشة الأولى --------
onEvent("btnEnter", "click", function() {
  var correctPassword = "6577";
  if (enteredCode.length < 4) {
    return; // منع الدخول لو أقل من 4 أرقام
  }
  if (enteredCode === correctPassword) {
    playSound("assets/category_app/app_button_4.mp3", false);
      playSound("assets/مرحبا.mp3", false);
    setScreen("وش");
    resetPasswordData();
    attempts = 0;
  } else {
    attempts = attempts + 1;
    if (attempts >= 3) {
      setText("labelEnd", "لقد أدخلت كلمة السر 3 مرات خطأ، حاول مرة أخرى لاحقًا");
      setProperty("labelEnd", "text-color", "red");      // اللون أحمر
    setProperty("labelEnd", "font-size", 18);         // حجم الخط 18
    setProperty("labelEnd", "text-align", "center");
      animateVisa(); // مش هيبان كبلوك
      setTimeout(function() {
        setScreen("EndScreen");
        resetPasswordData();
      }, 1500); // برضه مش هيبان كبلوك
    } else {
      setProperty("label1","text","كلمة السر خاطئة، حاول مرة أخرى");
      setProperty("label1","text-color","red");
      enteredCode = "";
      setProperty("text_input1","text","");
    }
  }
});

// -------- زر Enter شاشة الثانية --------
onEvent("btnEnter2", "click", function() {
      setScreen("وش2");

  var correctPassword = "6577";
  if (enteredCode2.length < 4) {
    return; // منع الدخول لو أقل من 4 أرقام
  }
  if (enteredCode2 === correctPassword) {
       playSound("assets/category_app/app_button_4.mp3", false);
      playSound("assets/---------Pleas......reen..mp3", false);
    setScreen("وش2");
    resetPasswordData();
    attempts2 = 0;
  } else {
    attempts2 = attempts2 + 1;
    if (attempts2 >= 3) {
      setText("labelEnd", "You have entered the password incorrectly 3 times. Please try again later");
      animateVisa(); // مش هيبان كبلوك
      setTimeout(function() {
        setScreen("EndScreen");
        resetPasswordData();
      }, 1500); // برضه مش هيبان كبلوك
    } else {
      setProperty("label2","text","Incorrect password, try again.");
      setProperty("label2","text-color","red");
      enteredCode2 = "";
      setProperty("text_input2","text","");
    }
  }
});

   
onEvent("buttonالسحب", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("الفلوس💵");
});
onEvent("السحب-صوت", "click", function( ) {
  playSound("assets/-----------------.mp3", false);
});

onEvent("button116", "click", function( ) {
     playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("Money");
});

// إضافة الرقم لنهاية النص الحالي
onEvent("button1", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "1");
});
onEvent("button2", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "2");
});
onEvent("button3", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "3");
});
onEvent("button44", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "4");
});
onEvent("button55", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "5");
});
onEvent("button666", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "6");
});
onEvent("button7", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "7");
});
onEvent("button8", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "8");
});
onEvent("button9", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "9");
});
onEvent("button0", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input4", getText("text_input4") + "0");
});
onEvent("button4", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  var current = getText("text_input4");         // النص الحالي
  if (current.length > 0) {
    setText("text_input4", current.substring(0, current.length - 1));
  }
});
onEvent("buttonاختيار", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
setProperty("image7", "width", 10);
setProperty("image7", "height", 10);
setProperty("image7", "x", 1000); 
setProperty("image7", "y", 500); 
setProperty("image7", "hidden", false); // الفيزة تظهر

var targetWidth = 75;
var targetHeight = 100;
var growStep = 1;
var intervalTime = 20;
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
var animationInterval = setInterval(function() {
  var currentWidth = getProperty("image7", "width");
  var currentHeight = getProperty("image7", "height");
  if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
    clearInterval(animationInterval);
  } else {
    setProperty("image7", "width", Math.min(currentWidth + growStep, targetWidth));
    setProperty("image7", "height", Math.min(currentHeight + growStep, targetHeight));
  }
}, intervalTime);

});
onEvent("image7", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  hideElement("image7");
 setText("label7", "برجاء اخذ النقديه");
   
});
onEvent("100", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
   setScreen("تاكيد");
});
onEvent("200", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("تاكيد");
});
onEvent("300", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("تاكيد");
});
onEvent("500", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("تاكيد");
});
onEvent("خدمات", "click", function( ) {
    playSound("assets/برجاء اختيار المبلغ.mp3", false);
   playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("اختيار");


  
});
onEvent("image22", "click", function( ) {
playSound("assets/مبلغ اخر.mp3", false);
stopSound("assets/مبلغ اخر.mp3");
playSound("assets/مبلغ اخر.mp3", false); 

});
// لما تضغطي على "نعم"
onEvent("نعم", "click", function() {
  playSound("assets/category_app/app_button_4.mp3", false);
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);

  hideElement("image8");
  setText("text_input4", ""); 
  setScreen("السحب");

  // إعداد صورة 7
  setProperty("image7", "width", 10);
  setProperty("image7", "height", 10);
  setProperty("image7", "x", 1000); 
  setProperty("image7", "y", 500); 
  showElement("image7"); // بدل hidden=false

  animateGrow("image7", 75, 100, 1, 20);
});

// لما تضغطي على صورة 7
onEvent("image7", "click", function() {
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);

  // إعداد صورة 8
  setProperty("image8", "width", 10);
  setProperty("image8", "height", 10);
  setProperty("image8", "x", 500); 
  setProperty("image8", "y", 500); 
  showElement("image8"); // بدل hidden=false

  animateGrow("image8", 75, 100, 1, 20);
});

// دالة لمضاعفة الصور تدريجيًا
function animateGrow(imageId, targetWidth, targetHeight, growStep, intervalTime) {
  var interval = setInterval(function() {
    var currentWidth = getProperty(imageId, "width");
    var currentHeight = getProperty(imageId, "height");
    if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
      clearInterval(interval);
    } else {
      setProperty(imageId, "width", Math.min(currentWidth + growStep, targetWidth));
      setProperty(imageId, "height", Math.min(currentHeight + growStep, targetHeight));
    }
  }, intervalTime);
}

//********************************
onEvent("لا", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
     playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
  setText("text_input4", ""); 
  showElement("imageVisa");
   setProperty("imageVisa", "width", 10);
setProperty("imageVisa", "height", 10);
setProperty("imageVisa", "x", 1000); 
setProperty("imageVisa", "y", 500); 
setProperty("imageVisa", "hidden", false); // الفيزة تظهر
var targetWidth = 75;
var targetHeight = 100;
var growStep = 1;
var intervalTime = 20;
var animationInterval = setInterval(function() {
  var currentWidth = getProperty("imageVisa", "width");
  var currentHeight = getProperty("imageVisa", "height");
  if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
    clearInterval(animationInterval);
  } else {
    setProperty("imageVisa", "width", Math.min(currentWidth + growStep, targetWidth));
    setProperty("imageVisa", "height", Math.min(currentHeight + growStep, targetHeight));
  }
}, intervalTime);
setScreen("EndScreen");

});

//***** انجليزي
// إضافة الرقم لنهاية النص الحالي
onEvent("button1*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "1");
});
onEvent("button2*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "2");
});
onEvent("button3*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "3");
});
onEvent("button4*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "4");
});
onEvent("button5*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "5");
});
onEvent("button6*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "6");
});
onEvent("button7*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "7");
});
onEvent("button8*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "8");
});
onEvent("button9*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "9");
});
onEvent("button0*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", getText("text_input5") + "0");
});
//onEvent("button259", "click", function() {
  // playSound("assets/category_app/app_button_4.mp3", false);
 //setScreen("Withdrawal");
//});
onEvent("button44*", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  var current = getText("text_input5");         // النص الحالي
  if (current.length > 0) {
    setText("text_input5", current.substring(0, current.length - 1));
  }
});
//**********************************************************
onEvent("1000", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
   setScreen("Confirm");
});
onEvent("2000", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Confirm");
});
onEvent("3000", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Confirm");
});
onEvent("5000", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Confirm");
});
onEvent("Services1", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("Selection");
});
onEvent("Yes", "click", function( ) {
 playSound("assets/category_app/app_button_4.mp3", false);
 setText("text_input5", ""); 
 hideElement("image18");
 setScreen("Withdrawal");
  setProperty("image17", "width", 10);
setProperty("image17", "height", 10);
setProperty("image17", "x", 1000); 
setProperty("image17", "y", 500); 
setProperty("image17", "hidden", false); // الفيزة تظهر

var targetWidth = 75;
var targetHeight = 100;
var growStep = 1;
var intervalTime = 20;

var animationInterval = setInterval(function() {
  var currentWidth = getProperty("image17", "width");
  var currentHeight = getProperty("image17", "height");
  if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
    clearInterval(animationInterval);
  } else {
    setProperty("image17", "width", Math.min(currentWidth + growStep, targetWidth));
    setProperty("image17", "height", Math.min(currentHeight + growStep, targetHeight));
  }
}, intervalTime);
onEvent("image17", "click", function( ) {
  showElement("image18");
    hideElement("image17");
  setText("label18", "Please take the cash");
   setProperty("image18", "width", 10);
setProperty("image18", "height", 10);
setProperty("image18", "x", 500); 
setProperty("image18", "y", 500); 
setProperty("image18", "hidden", false); // الفيزة تظهر

var targetWidth = 75;
var targetHeight = 100;
var growStep = 1;
var intervalTime = 20;

var animationInterval = setInterval(function() {
  var currentWidth = getProperty("image18", "width");
  var currentHeight = getProperty("image18", "height");
  if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
    clearInterval(animationInterval);
  } else {
    setProperty("image18", "width", Math.min(currentWidth + growStep, targetWidth));
    setProperty("image18", "height", Math.min(currentHeight + growStep, targetHeight));
  }
}, intervalTime);

});
});
onEvent("NO", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input5", ""); 
  showElement("imageVisa");
   setProperty("imageVisa", "width", 10);
setProperty("imageVisa", "height", 10);
setProperty("imageVisa", "x", 1000); 
setProperty("imageVisa", "y", 500); 
setProperty("imageVisa", "hidden", false); // الفيزة تظهر

var targetWidth = 75;
var targetHeight = 100;
var growStep = 1;
var intervalTime = 20;
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
var animationInterval = setInterval(function() {
  var currentWidth = getProperty("imageVisa", "width");
  var currentHeight = getProperty("imageVisa", "height");
  if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
    clearInterval(animationInterval);
  } else {
    setProperty("imageVisa", "width", Math.min(currentWidth + growStep, targetWidth));
    setProperty("imageVisa", "height", Math.min(currentHeight + growStep, targetHeight));
  }
}, intervalTime);
setScreen("EndScreen");

});
// تهيئة الشاشة عند الدخول
setText("text_input5", "");       // يمسح أي رقم موجود
setText("ttt", "");            // يرجع النص فاضي أو رسالة افتراضية
setProperty("ttt", "text-color", "black"); // يرجع اللون أسود

function checkAmount2() {
  var text = getText("text_input5").trim();

  // منع الكتابة لو طول الرقم أكبر من 5 خانات
  if (text.length > 5) {
    text = text.substring(0, 5); // نقطع أي حاجة زيادة
    setText("text_input5", text);
  }

  var amount2 = parseInt(text);
  if (isNaN(amount2)) return;

  // الحد الأدنى للمبلغ
  if (amount2 < 100) {
    setProperty("ttt", "text-color", "red");
    setText("ttt", "The minimum withdrawal limit is 100"); 
    return; 
  }

  // الحد الأعلى
  if (amount2 > 80000) {
    setProperty("ttt", "text-color", "red");
    setText("ttt", "The amount exceeds the allowed limit");
  } else {
    setProperty("ttt", "text-color", "black");
    
  }
}

// ربط كل الأزرار بالدالة
["button1*","button2*","button3*","button4*","button5*","button6*","button7*","button8*","button9*","button0*","button44*"].forEach(function(btn){
  onEvent(btn, "click", function() {
    playSound("assets/category_app/app_button_4.mp3", false);
    checkAmount2();
  });
});
//*****************************************************************************************
// تهيئة الشاشة عند الدخول
setText("text_input4", "");       // يمسح أي رقم موجود
setText("label9", "");            // يرجع النص فاضي أو رسالة افتراضية
setProperty("label9", "text-color", "black"); // يرجع اللون أسود

function checkAmount() {
  var text = getText("text_input4").trim();

  // منع الكتابة لو طول الرقم أكبر من 5 خانات
  if (text.length > 5) {
    text = text.substring(0, 5); // نقطع أي حاجة زيادة
    setText("text_input4", text);
  }
  var amount = parseInt(text);
  if (isNaN(amount)) return;

  // الحد الأدنى للمبلغ
  if (amount < 100) {
    setProperty("label9", "text-color", "red");
    setText("label9", "الحد الأدنى للسحب 100"); 
    return; 
  }

  // الحد الأعلى
  if (amount > 80000) {
    setProperty("label9", "text-color", "red");
    setText("label9", "المبلغ أكبر من الحد المسموح");
  } else {
    setProperty("label9", "text-color", "black");
    
  }
}

// ربط كل الأزرار بالدالة
["button1","button2","button3","button44","button55","button666","button7","button8","button9","button0","button4"].forEach(function(btn){
  onEvent(btn, "click", function() {
    playSound("assets/category_app/app_button_4.mp3", false);
    checkAmount();
  });
});
onEvent("image8", "click", function() {
  setText("label", "برجاء اختيار المبلغ");
  setProperty("label", "text-color", "black"); // يخليها باللون الأسود
  showElement("image9");
  setScreen("start1");
    showElement("image9");
   playSound("assets/category_app/app_button_4.mp3", false);
});
onEvent("image18", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("start1");
  showElement("image9");
});
//****************************chat bot
onEvent("شات-خدمات", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("شات");
});
onEvent("حسناااا", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("اختيار");
  stopSound("assets/خدمات شات صوت.mp3");
  playSound("assets/خدمات شات صوت.mp3", false);
  stopSound("assets/خدمات شات صوت.mp3"); 
});
onEvent("okay-E", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  stopSound("assets/---------__Fir......tton..mp3");
  setScreen("Bankingservices2");
});
onEvent("image6", "click", function( ) {
setScreen("خدمات-شات");
stopSound("assets/شات بوت.mp3");
stopSound("assets/برجاء اختيار المبلغ.mp3");
});
onEvent("image16", "click", function( ) {
setScreen("ChatServices");
});
onEvent("سوال1", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("كيف");
});
onEvent("حسنا", "click", function( ) {
      stopSound("assets/-------------ffffffff--.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
       stopSound("assets/-------------ffffffff--.mp3");

      
setScreen("Bankingservices");
});
onEvent("سوال2", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("شات-إيداع");
});
onEvent("حسنا1", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Bankingservices");
      stopSound("assets/1234.mp3");

});
onEvent("الغاء", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("EndScreen");
  setProperty("imageVisa", "width", 10);
setProperty("imageVisa", "height", 10);
setProperty("imageVisa", "x", 1000); 
setProperty("imageVisa", "y", 500); 
setProperty("imageVisa", "hidden", false); // الفيزة تظهر

var targetWidth = 75;
var targetHeight = 100;
var growStep = 1;
var intervalTime = 20;

var animationInterval = setInterval(function() {
  var currentWidth = getProperty("imageVisa", "width");
  var currentHeight = getProperty("imageVisa", "height");
  if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
    clearInterval(animationInterval);
  } else {
    setProperty("imageVisa", "width", Math.min(currentWidth + growStep, targetWidth));
    setProperty("imageVisa", "height", Math.min(currentHeight + growStep, targetHeight));
  }
}, intervalTime);

});
onEvent("سوال4", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("رصيد");
});
onEvent("حسنا3", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Bankingservices");
  stopSound("assets/--------------------------------.mp3");
});
onEvent("سوال3", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("من");
});
onEvent("حسنا-من", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
   stopSound("assets/المساعد الذكي.mp3");
    playSound("assets/المساعد الذكي.mp3", false);
    stopSound("assets/المساعد الذكي.mp3");
   setScreen("Bankingservices");
});
onEvent("buttonايداع", "click", function( ) {
  setScreen("ايداع");
  playSound("assets/category_app/app_button_4.mp3", false);
});
//chat
onEvent("chat-english", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("chat");
});
onEvent("withdraw", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("ChatServices");
});
onEvent("deposit", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
 setScreen("ChatServices1");
});
onEvent("know", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("who");
});
onEvent("okay-who", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
   stopSound("assets/whoooooooooooo.mp3");
  setScreen("Bankingservices2");
});
onEvent("OKay-Deposit", "click", function( ) {
 playSound("assets/category_app/app_button_4.mp3", false);
   stopSound("assets/----------Pres......ly.__.mp3");
 setScreen("Bankingservices2");
});
onEvent("okay-balance", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Bankingservices2");
    stopSound("assets/balllllaaaanc.mp3");

});
onEvent("my", "click", function( ) {
  setScreen("balance");
});

//ارقام الايداع
onEvent("1", "click", function() {
  setText("text_input3", getText("text_input3") + "1");
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
});
onEvent("2", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "2");
});
onEvent("3", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "3");
});
onEvent("4", "click", function() {
   stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "4");
});
onEvent("5", "click", function() {
   stopSound("assets/الايداع2.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "5");
});
onEvent("6", "click", function() {
   stopSound("assets/الايداع2.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "6");
});
onEvent("7", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "7");
});
onEvent("8", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "8");
});
onEvent("9", "click", function() {
   stopSound("assets/الايداع2.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "9");
});
onEvent("0", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input3", getText("text_input3") + "0");
});
//سحب
var الرصيد = 1000; 
onEvent("buttonاختيار", "click", function() {
  var المبلغ = getNumber("text_input4"); 
  if (المبلغ <= الرصيد) {
    الرصيد = الرصيد - المبلغ; 
    setScreen("تاكيد"); 
  } else {
    setText("label", "رصيدك غير كافي");
    setProperty("label", "text-color", "red");
  }
});
//ايداع
onEvent("نعم-ايداع", "click", function() {
  playSound("assets/category_app/app_button_4.mp3", false);
  var المبلغ = Number(getText("text_input3"));
  الرصيد = الرصيد + المبلغ;

  // افتح شاشة الإيداع
  setScreen("فلوس--ايداع");

  // خلي الفلوس تظهر ثابتة في الأول
  setProperty("فلوس-ايداع", "hidden", false);
  setProperty("فلوس-ايداع", "x", 850);
  setProperty("فلوس-ايداع", "y", 650);
  setProperty("فلوس-ايداع", "width", 300);
  setProperty("فلوس-ايداع", "height", 60);

  // خلي الكارت مخفي
  setProperty("كارت-الايداع", "hidden", true);
});

// لما تدوسي على الفلوس يبدأ الأنيميشن
onEvent("فلوس-ايداع", "click", function() {
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
  var interval = setInterval(function() {
    var x = getProperty("فلوس-ايداع", "x");
    var y = getProperty("فلوس-ايداع", "y");
    var width = getProperty("فلوس-ايداع", "width");
    var height = getProperty("فلوس-ايداع", "height");

    if (width > 0 && height > 0) {
      setProperty("فلوس-ايداع", "x", x + 1);
      setProperty("فلوس-ايداع", "y", y - 1);
      setProperty("فلوس-ايداع", "width", width - 2);
      setProperty("فلوس-ايداع", "height", height - 1.2);
    } else {
      clearInterval(interval);
      hideElement("فلوس-ايداع");

      // بعد ما الفلوس تختفي -> الكارت يبدأ يظهر
      playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
      setProperty("كارت-الايداع", "hidden", false);
      setProperty("كارت-الايداع", "width", 10);
      setProperty("كارت-الايداع", "height", 10);
      setProperty("كارت-الايداع", "x", 1000); 
      setProperty("كارت-الايداع", "y", 500); 
      var targetWidth = 75;
      var targetHeight = 100;
      var growStep = 2;
      var intervalTime = 20;

      var animationInterval = setInterval(function() {
        var currentWidth = getProperty("كارت-الايداع", "width");
        var currentHeight = getProperty("كارت-الايداع", "height");
        if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
          clearInterval(animationInterval);
          setText("labelMessage", "من فضلك خذ الكارت");
          showElement("labelMessage");
          setText("text_input3", "");
        } else {
          setProperty("كارت-الايداع", "width", Math.min(currentWidth + growStep, targetWidth));
          setProperty("كارت-الايداع", "height", Math.min(currentHeight + growStep, targetHeight));
        }
      }, intervalTime);
    }
  }, 30);
});

onEvent("كارت-الايداع", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("screen1");
    showElement("image21");

  
});

onEvent("الايداع-صوت", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/الايداع.mp3", false);
});
onEvent("شات-صوت", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/شات بوت.mp3", false);
});
onEvent("buttonايداع", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
playSound("assets/الايداع2.mp3", false);
});
onEvent("buttonرصيد", "click", function() {
playSound("assets/category_app/app_button_4.mp3", false);
setText("رصيدك", "رصيدك: " + الرصيد);
setScreen("معرفه-الرصيد");
});
onEvent("الرصيد-صوت", "click", function( ) {
  playSound("assets/--------------------------------------------1447-04-03------14.22.18_d829913a.mp3", false);
});

onEvent("حسنا-الرصيد", "click", function( ) {
playSound("assets/category_app/app_button_4.mp3", false);
setScreen("Bankingservices");
});
onEvent("ايداع-تحديد", "click", function( ) {
stopSound("assets/شات بوت.mp3");
stopSound("assets/شات بوت.mp3");
playSound("assets/الايداع2.mp3", false);
stopSound("assets/الايداع2.mp3");
playSound("assets/الايداع2.mp3", false);
});
onEvent("شات-ايداع", "click", function( ) {
stopSound("assets/الايداع2.mp3");
playSound("assets/شات بوت.mp3", false);
stopSound("assets/شات بوت.mp3");
playSound("assets/شات بوت.mp3", false);
});
onEvent("تصحيح", "click", function() {
   playSound("assets/category_app/app_button_4.mp3", false);
  var current = getText("text_input3");         // النص الحالي
  if (current.length > 0) {
    setText("text_input3", current.substring(0, current.length - 1));
  }
});
function image21() {
  var interval = setInterval(function() {
    var x = getProperty("image21", "x");
    var width = getProperty("image21", "width");
    var height = getProperty("image21", "height");
    if (width > 0 && height > 0) {
      setProperty("image21", "x", x + 1);
      setProperty("image21", "width", width - 2);
      setProperty("image21", "height", height - 1.2);
    } else {
      clearInterval(interval); 
      setScreen("NextScreen"); 
      setProperty("image21", "hidden", true); 
    }
  }, 20);
}
onEvent("image21", "click", image21);
onEvent("image21", "click", function( ) {
   playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
});
onEvent("Deposit-sound", "click", function( ) {
  playSound("assets/انجليزي ايداع.mp3", false);
});

var balance = 1000; 
onEvent("sahb-E", "click", function() {
  var amount = getNumber("text_input5"); 
  if (amount <= الرصيد) {
    الرصيد = الرصيد - balance; 
    setScreen("Confirm"); 
  } else {
    setText("label14", "Your balance is insufficient");
    setProperty("label14", "text-color", "red");
  }
});
onEvent("تعرف-علي", "click", function( ) {
  playSound("assets/تعرف علي.mp3", false);
  stopSound("assets/تعرف علي.mp3");
  playSound("assets/تعرف علي.mp3", false);
});
onEvent("شات-من", "click", function( ) {
    playSound("assets/المساعد الذكي.mp3", false);

  stopSound("assets/المساعد الذكي.mp3");
  playSound("assets/المساعد الذكي.mp3", false);
});
onEvent("Withdrawal-sound", "click", function( ) {
 playSound("assets/cash-withdrwal.mp3", false);
 stopSound("assets/cash-withdrwal.mp3");
 playSound("assets/cash-withdrwal.mp3", false);    
});
onEvent("chat-sound", "click", function( ) {
 playSound("assets/chat-E.mp3", false);
 stopSound("assets/chat-E.mp3");
 playSound("assets/chat-E.mp3", false);
});
onEvent("image24", "click", function( ) {
  playSound("assets/كيف اقوم بالايداع.mp3", false);
  stopSound("assets/كيف اقوم بالايداع.mp3");
  playSound("assets/كيف اقوم بالايداع.mp3", false);
});
onEvent("الصوت-الايداع", "click", function( ) {
 playSound("assets/شات ايداع صوت 2.mp3", false);
 stopSound("assets/شات ايداع صوت 2.mp3");
 playSound("assets/شات ايداع صوت 2.mp3", false);
});
onEvent("100", "click", function() {
  الرصيد = الرصيد - 100;
});
onEvent("200", "click", function() {
  الرصيد = الرصيد - 200;
});
onEvent("300", "click", function() {
  الرصيد = الرصيد - 100;
});
onEvent("500", "click", function() {
  الرصيد = الرصيد - 500;
});
onEvent("image20", "click", function( ) {
  playSound("assets/-----------------------------------------------------------------------------------------------------------------------.mp3", false);
  stopSound("assets/-----------------------------------------------------------------------------------------------------------------------.mp3");
  playSound("assets/-----------------------------------------------------------------------------------------------------------------------.mp3", false);
  
});
onEvent("image30", "click", function( ) {
  playSound("assets/--------------------------.mp3", false);
  
});
onEvent("image4", "click", function( ) {
  playSound("assets/-------------ffffffff--.mp3", false);
  
});
onEvent("image31", "click", function( ) {
  playSound("assets/ايداااااااااااااااااااااااعشسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسس.mp3", false);
  
});
onEvent("image32", "click", function( ) {
  playSound("assets/--------------------------------.mp3", false);
  
});
onEvent("image36", "click", function( ) {
  playSound("assets/شات بوت.mp3", false);
  stopSound("assets/برجاء اختيار المبلغ.mp3");
  
  
});
onEvent("image34", "click", function( ) {
  playSound("assets/برجاء اختيار المبلغ.mp3", false);
  stopSound("assets/شات بوت.mp3");
});
onEvent("image38", "click", function( ) {
  playSound("assets/خدمات شات صوت.mp3", false);
  stopSound("assets/خدمات شات صوت.mp3");
   playSound("assets/خدمات شات صوت.mp3", false);
});
onEvent("image13", "click", function( ) {
setScreen("شات-إيداع2");

  stopSound("assets/الايداع2.mp3");
  stopSound("assets/كيف اقوم بالايداع.mp3");

});
onEvent("button329", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("اختيار");
  stopSound("assets/شات ايداع صوت 2.mp3");
  playSound("assets/شات ايداع صوت 2.mp3", false);
  stopSound("assets/شات ايداع صوت 2.mp3"); 
});
onEvent("Balance-sound", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  stopSound("assets/--------Check-Balance.mp3");
  playSound("assets/--------Check-Balance.mp3", false);
  stopSound("assets/--------Check-Balance.mp3"); 
});

onEvent("image28", "click", function( ) {
   playSound("assets/Get-to-know-me.mp3", false);
  stopSound("assets/Get-to-know-me.mp3");
   playSound("assets/Get-to-know-me.mp3", false);
});
onEvent("button115", "click", function() {
playSound("assets/category_app/app_button_4.mp3", false);
setText("label19", "Your balance:" + الرصيد );
setScreen("Knowledge-Balance");
});
var الرصيد = 1000; 
onEvent("sahb-E", "click", function() {
  var المبلغ = getNumber("text_input5"); 
  if (المبلغ <= الرصيد) {
    الرصيد = الرصيد - المبلغ; 
    setScreen("Confirm"); 
  } else {
    setText("label", "Your balance is insufficient");
    setProperty("label", "text-color", "red");
  }
});
onEvent("okay", "click", function() {
  playSound("assets/category_app/app_button_4.mp3", false);
setScreen("Bankingservices2");
});
onEvent("1000", "click", function() {
  الرصيد = الرصيد - 100;
});
onEvent("2000", "click", function() {
  الرصيد = الرصيد - 200;
});
onEvent("3000", "click", function() {
  الرصيد = الرصيد - 100;
});
onEvent("5000", "click", function() {
  الرصيد = الرصيد - 500;
});

onEvent("11", "click", function() {
  setText("text_input6", getText("text_input6") + "1");
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
});
onEvent("22", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "2");
});
onEvent("33", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "3");
});
onEvent("44", "click", function() {
   stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "4");
});
onEvent("55", "click", function() {
   stopSound("assets/الايداع2.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "5");
});
onEvent("66", "click", function() {
   stopSound("assets/الايداع2.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "6");
});
onEvent("77", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "7");
});
onEvent("88", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "8");
});
onEvent("99", "click", function() {
   stopSound("assets/الايداع2.mp3");
   playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "9");
});
onEvent("00", "click", function() {
  stopSound("assets/الايداع2.mp3");
  playSound("assets/category_app/app_button_4.mp3", false);
  setText("text_input6", getText("text_input6") + "0");
});
onEvent("button114", "click", function() {
  setScreen("Deposit");
  
  playSound("assets/category_app/app_button_4.mp3", false);
});

onEvent("button411", "click", function() {
  playSound("assets/category_app/app_button_4.mp3", false);
  var المبلغ = Number(getText("text_input6"));
  الرصيد = الرصيد + المبلغ;

  // افتح شاشة الإيداع
  setScreen("Money--Deposit");

  // خلي الفلوس تظهر ثابتة في الأول
  setProperty("image43", "hidden", false);
  setProperty("image43", "x", 850);
  setProperty("image43", "y", 650);
  setProperty("image43", "width", 300);
  setProperty("image43", "height", 60);

  // خلي الكارت مخفي
  setProperty("image42", "hidden", true);
});

// لما تدوسي على الفلوس يبدأ الأنيميشن
onEvent("image43", "click", function() {
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_13_light.mp3", false);
  var interval = setInterval(function() {
    var x = getProperty("image43", "x");
    var y = getProperty("image43", "y");
    var width = getProperty("image43", "width");
    var height = getProperty("image43", "height");

    if (width > 0 && height > 0) {
      setProperty("image43", "x", x + 1);
      setProperty("image43", "y", y - 1);
      setProperty("image43", "width", width - 2);
      setProperty("image43", "height", height - 1.2);
    } else {
      clearInterval(interval);
      hideElement("image43");

      // بعد ما الفلوس تختفي -> الكارت يبدأ يظهر
      playSound("assets/category_whoosh/alien_ship_flyby_whoosh_11.mp3", false);
      setProperty("image42", "hidden", false);
      setProperty("image42", "width", 10);
      setProperty("image42", "height", 10);
      setProperty("image42", "x", 1000); 
      setProperty("image42", "y", 500); 
      var targetWidth = 75;
      var targetHeight = 100;
      var growStep = 2;
      var intervalTime = 20;

      var animationInterval1 = setInterval(function() {
        var currentWidth = getProperty("image42", "width");
        var currentHeight = getProperty("image42", "height");
        if (currentWidth >= targetWidth && currentHeight >= targetHeight) {
          clearInterval(animationInterval1);
          setText("labelMessage", "Please take the card");
          showElement("labelMessage");
          setText("text_input6", "");
        } else {
          setProperty("image42", "width", Math.min(currentWidth + growStep, targetWidth));
          setProperty("image42", "height", Math.min(currentHeight + growStep, targetHeight));
        }
      }, intervalTime);
    }
  }, 30);
});

onEvent("image42", "click", function( ) {
  playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("screen1");
      showElement("image21");

  
});
onEvent("image41", "click", function( ) {
 playSound("assets/chat-E.mp3", false);
 stopSound("assets/chat-E.mp3");
  playSound("assets/chat-E.mp3", false);
});
onEvent("image37", "click", function( ) {
 playSound("assets/---------__Fir......tton..mp3", false);
 stopSound("assets/---------__Fir......tton..mp3");
  playSound("assets/---------__Fir......tton..mp3", false);
});
onEvent("image26", "click", function( ) {
 playSound("assets/---------How-c......rawal.mp3", false);
 stopSound("assets/---------How-c......rawal.mp3");
  playSound("assets/---------How-c......rawal.mp3", false);
});
onEvent("image27", "click", function( ) {
  playSound("assets/---------How-d......osit_.mp3", false);
 stopSound("assets/---------How-d......osit_.mp3");
  playSound("assets/---------How-d......osit_.mp3", false);
});
onEvent("image29", "click", function( ) {
 playSound("assets/balanc.mp3", false);
 stopSound("assets/balanc.mp3");
  playSound("assets/balanc.mp3", false);
});
onEvent("image47", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("ماذا-أفعل-إذا-ضاعت-بطاقتي؟");
});
onEvent("image48", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  playSound("assets/openai-fm-ballad-audio-(3).mp3", false);
  stopSound("assests/openai-fm-ballad-audio-(3).mp3");
  playSound("assets/openai-fm-ballad-audio-(3).mp3", false);
});
onEvent("button436", "click", function() {
  setScreen("LanguageScreen");
  playSound("assets/category_app/app_button_4.mp3", false);
  stopSound("assets/openai-fm-ballad-audio-(3).mp3");
  playSound("assets/openai-fm-ballad-audio-(3).mp3", false);
  stopSound("assets/openai-fm-ballad-audio-(3).mp3");   
});
onEvent("image49", "click", function( ) {
  playSound("assets/balllllaaaanc.mp3", false);
  stopSound("assets/balllllaaaanc.mp3");
  playSound("assets/balllllaaaanc.mp3", false);
});
onEvent("image45", "click", function( ) {
  playSound("assets/----------Pres......ly.__.mp3", false);
  stopSound("assets/----------Pres......ly.__.mp3");
  playSound("assets/----------Pres......ly.__.mp3", false);
  
});
onEvent("image33", "click", function( ) {
  playSound("assets/whoooooooooooo.mp3", false);
  stopSound("assets/whoooooooooooo.mp3");
  playSound("assets/whoooooooooooo.mp3", false);
  
});
onEvent("image40", "click", function( ) {
  playSound("assets/---------Pleas......osit..mp3", false);
  stopSound("assets/---------Pleas......osit..mp3");
  playSound("assets/---------Pleas......osit..mp3", false);
});
onEvent("image50", "click", function( ) {
  playSound("assets/----------Ente......ly.__.mp3", false);
  stopSound("assets/----------Ente......ly.__.mp3");
  playSound("assets/----------Ente......ly.__.mp3", false);
  
});
onEvent("button450", "click", function() {
  setScreen("Deposit");
 playSound("assets/category_app/app_button_4.mp3", false);
  stopSound("assets/----------Ente......ly.__.mp3");
});
onEvent("image39", "click", function( ) {
   playSound("assets/category_app/app_button_4.mp3", false);
  setScreen("Chat-Deposit");
   stopSound("assets/---------Pleas......osit..mp3");
});
onEvent("image52", "click", function( ) {
  playSound("assets/---------Pleas......reen..mp3", false);
  stopSound("assets/---------Pleas......reen..mp3");
  playSound("assets/---------Pleas......reen..mp3", false);
});
onEvent("image51", "click", function( ) {
  playSound("assets/مرحبا.mp3", false);
  stopSound("assets/مرحبا.mp3");
  playSound("assets/مرحبا.mp3", false);
});

