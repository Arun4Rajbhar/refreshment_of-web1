var rand=Math.random();
rand=Math.floor((rand*6)+1);
console.log(rand);
var rand_img="dice"+rand+".png";
var rand_img_src="./images/"+rand_img;
document.querySelectorAll("img")[0].setAttribute("src",rand_img_src);



var rand1=Math.random();
rand1=Math.floor((rand1*6)+1);
console.log(rand1);
var rand_img1="dice"+rand1+".png";
var rand_img_src1="./images/"+rand_img1;
document.querySelectorAll("img")[1].setAttribute("src",rand_img_src1);