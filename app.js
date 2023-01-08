function allImage()
{
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='block';
   })

   document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('color');
   })
   
   document.getElementById("first").classList.add('color');
}


function nature()
{

    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.nature').forEach((x)=>
   {
    x.style.display='block';
   })

   document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('color');
   })

   document.getElementById("second").classList.add('color');
}

function food()
{
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.food').forEach((x)=>
   {
    x.style.display='block';
   })

   document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('color');
   })

   document.getElementById("third").classList.add('color')

}


function animal()
{
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.animal').forEach((x)=>
   {
    x.style.display='block';
   })

   document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('color');
   })

   document.getElementById("fourth").classList.add('color')

}
