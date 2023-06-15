const wrappers = document.querySelector('.wrapper');
const button = document.querySelector('.button');
const close= document.querySelector('.icon-close');

const btn1 =document.getElementById('btn1');
const out1 =document.getElementById('output1');
const out2 =document.getElementById('output2');
const out3 =document.getElementById('output3');
const out4 =document.getElementById('output4');
const out5 =document.getElementById('output5');
const out6 =document.getElementById('output6');
const out7 =document.getElementById('output7');
const out8 =document.getElementById('output8');
const out9 =document.getElementById('output9');
const out10 =document.getElementById('output10');
const out11 =document.getElementById('output11');
const out12 =document.getElementById('output12');
const out13 =document.getElementById('output13');
const out14 =document.getElementById('output14');
const out15 =document.getElementById('output15');
const out16 =document.getElementById('output16');
const out17 =document.getElementById('output17');
const out18 =document.getElementById('output18');
const out19 =document.getElementById('output19');
const out20 =document.getElementById('output20'); 
const text1 =document.getElementById('INC');
const txt1 =document.getElementById('txt1');
const txt2 =document.getElementById('txt2');
const txt3 =document.getElementById('txt3');
const txt4 =document.getElementById('txt4');
const txt5 =document.getElementById('txt5');
const txt6 =document.getElementById('txt6');
const txt7 =document.getElementById('txt7');
const txt8 =document.getElementById('txt8');
const txt9 =document.getElementById('txt9');
const txt10 =document.getElementById('txt10');
const txt11 =document.getElementById('txt11');
const txt12 =document.getElementById('txt12');
const txt13 =document.getElementById('txt13');
const txt14 =document.getElementById('txt14');
const Select =document.getElementById('Select');
const opt =document.getElementById('opt');

const UserAgree =document.getElementById('UserAgree');

const textarea =document.getElementById('textarea');
const dmn =document.getElementById('dmn');
const cl =document.getElementById('cl');

function fun1()
{
    out1.innerHTML = "INCIDENT: " + text1.value;
    out2.innerHTML = "NAME: " + txt1.value;
    out3.innerHTML = "UserID: " + txt2.value;
    out4.innerHTML = "LTW/LW: " + dmn.value;
    out5.innerHTML = "Currect Location: " + cl.value;
    out6.innerHTML = "Office Location: " + txt3.value;
    out7.innerHTML = "Business Hours: " + txt4.value;
    out8.innerHTML = "Best Callback Number: " + txt5.value;
    out9.innerHTML = "Preferred Time of Callback: " + txt6.value;
    out10.innerHTML = "Availability time/date:" + txt7.value + " " + "/" + " " + txt8.value;
    out11.innerHTML = "Machine Name: " + txt9.value;
    out12.innerHTML = "Floor & Desk Number: " + txt10.value;
    out13.innerHTML = " Serial Number: " + txt11.value;
    out14.innerHTML = " Warranty: " + txt12.value;
    out15.innerHTML = " Problem:  " + txt13.value;
    out16.innerHTML = "Action Taken:"
    out17.innerHTML =  textarea.value;
    out18.innerHTML = "Resolution:  " + txt14.value;
    
  


  }

     

btn1.addEventListener('click',fun1);

button.addEventListener('click', ()=> {
        wrappers.classList.add('active-popup');
    });


    close.addEventListener('click', ()=> {
        wrappers.classList.remove('active-popup');
    });
  
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
        
      }
      



/****/

function myFunction() {
  var checkBox = document.getElementById("cb1");
  var output19 = document.getElementById("output19");
  if (checkBox.checked == true){
    output19.style.display = "block";
  } else {
    output19.style.display = "none";
  }
}
/*****/

function selOpt() {
  selEl = document.querySelector('#s1');
  op = selEl.value;
  document.querySelector('.op').textContent = op;

}
/****/

