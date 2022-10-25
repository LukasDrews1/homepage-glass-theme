const profilePicture = document.getElementById("profile-pic");
const realFile = document.getElementById("real-file");
const customButton = document.getElementById("custom-button");
const imageElement = document.createElement("div");

customButton.addEventListener("click", function(){
    realFile.click();
});

