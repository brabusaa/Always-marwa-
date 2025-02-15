let noClicks = 0;
const noMessages = [
    "Are you sure?",
    "You know that you are my always",
    "Just think about it!",
    "If you say no, I will be sad",
    "Really sure?"
];

document.getElementById("no").addEventListener("click", function() {
    if (noClicks < noMessages.length) {
        document.getElementById("no").innerText = noMessages[noClicks]; // تغيير نص زر "No"
        noClicks++;
    }
    
    if (noClicks >= noMessages.length) {
        let yesBtn = document.getElementById("yes");
        yesBtn.innerHTML = "Yes<br><span style='font-size: 14px;'>I knew you would choose yes from the beginning</span>";
        yesBtn.style.position = "absolute";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = "translate(-50%, -50%) scale(2)";
    }
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("mainContainer").style.display = "none"; // إخفاء كل شيء
    document.getElementById("loveContainer").style.display = "block"; // إظهار شاشة الحب
});

document.getElementById("restart").addEventListener("click", function() {
    location.reload(); // إعادة تحميل الصفحة
});