const prevbtn = document.querySelector('.container .left');
const nextbtn = document.querySelector('.container .right');
const img = document.querySelector('.img-box img');
const imgList = ['1','2','3','4','5'];
let index=0;
prevbtn.addEventListener('click',function(){
    index--;
    if(index<0)
    {
        index = imgList.length-1;
    }
    img.setAttribute('src',`images/${imgList[index]}.jpg`);
});

nextbtn.addEventListener('click',function(){
    index++;
    if(index>imgList.length-1)
    {
        index = 0;
    }
    img.setAttribute('src',`images/${imgList[index]}.jpg`);
});
function changeImg()
{
    index++;
    if(index>imgList.length-1)
    {
        index = 0;
    }
    img.setAttribute('src',`images/${imgList[index]}.jpg`);
}
setInterval(changeImg,10000);