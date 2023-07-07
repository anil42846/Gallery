var img=document.images;
console.log(img)
for(i=0;i<20;i++)
{
    img[i].src=`${i}.jpg`
}
function bigImageWindow(urlOfImg)
{
    document.getElementById("bigImage").style.display="flex"
    
    document.getElementById("Image").style.backgroundImage=`url(${urlOfImg})`
}
function closeWindow()
{
    document.getElementById("bigImage").style.display="none"
}
