

let profileP= document.getElementById('profile-image');
let inputPic= document.getElementById('profilePic');

inputPic.onchange= function(){
    profileP.src= URL.createObjectURL(this.files[0]);
}