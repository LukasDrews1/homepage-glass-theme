const profilePicture = document.getElementById("profile-pic");
const realFile = document.getElementById("real-file");
const customButton = document.getElementById("custom-button");
const pictureParent = document.getElementById("picture-parent");

customButton.addEventListener("click", function(){
    realFile.click();
    createImages()
});

function createImages() {
    const imageElement = document.createElement("div");
    pictureParent.append(imageElement);
    imageElement.classList.add("images");
}
