let counter=document.getElementById("counter")
let search=document.getElementById("search")
let id=document.getElementById("id")
let btn=document.getElementById("bn")
let name=document.getElementById("name")
let email=document.getElementById("email")
let datepro
let min="add"
let tmp;
let di=document.getElementById("im")
function re()
{id.value=''
    name.value=''
    email.value=''
    counter.value=''
}

if(localStorage.pro!=null)
{datepro=JSON.parse(localStorage.pro)

}
else{datepro=[]}
function show()
    {let uug=''
        for(let i=0;i<datepro.length;i++)
        {
uug+=`

<td>${datepro[i].id}</td>
<td>${datepro[i].name}</td>
<td>${datepro[i].email}</td>
            <td id="remove" onclick="del(${i})"><i class="fa fa-remove" aria-hidden="true"></i></td>
            <td id="edit" onclick="update(${i})"><i class="fa fa-edit" aria-hidden="true"></i></td>
            <td id="check" onclick="check(${i})" >  <i class="fa fa-check" aria-hidden="true"></i></td>

</tr>
`  
 }

        document.getElementById("tbo").innerHTML+=uug
    }
btn.onclick=function()
    {
        let opp={
            counter:counter.value,
            search:search.value,
            id:id.value,
            name:name.value,
            email:email.value
        }

if(min==="add"){
    btn.value='add'
    if(opp.counter>1)
        {
            for(let i=0;i<opp.counter;i++)
            {datepro.push(opp)}
        }
else {datepro.push(opp)}
}
else{
   
    counter.style.display=''
    datepro[tmp]=opp;

}

setTimeout(function(){location.reload()},100)

localStorage.setItem("pro",JSON.stringify(datepro))



re()
show()
    
    }

function del(i)
    {
        datepro.splice(i,1)
        localStorage.pro=JSON.stringify(datepro)
        location.reload()
    }
function update(i)
    {
        btn.value='edit'
        name.value=datepro[i].name
    id.value=datepro[i].id
       email.value=datepro[i].email
       min="edit"
       tmp=i
       counter.style.display='none'
       console.log(tmp)
}
    

show()




let rr=document.querySelector("p")




let log=document.querySelector("img")
setInterval(()=>{log.style.opacity+=1

},60)
function check(i)
    {let uu=''
        let pll=document.getElementById("myParagraph")
               let date=["Id:"+datepro[i].id,"Name:"+datepro[i].name,"Email:"+datepro[i].email]

        for(let i=0;i<datepro.length;i++){
pll+=`


<td>Id:${datepro[i].id}</td>
<td>Name${datepro[i].name}</td>
<td>Email${datepro[i].email}</td>

`


}
document.getElementById("im").style.cssText=`filter: invert(1)`
console.log(date)

rr.innerHTML=pll

    }
/*
   function sre(value)
   {
    let uug=''
    for(let i=0;i<datepro.length;i++){
    if(datepro[i].id.includes(value))
{
    uug+=`

    <td>${datepro[i].id}</td>
    <td>${datepro[i].name}</td>
    <td>${datepro[i].email}</td>
                <td id="remove" onclick="del(${i})"><i class="fa fa-remove" aria-hidden="true"></i></td>
                <td id="edit" onclick="update(${i})"><i class="fa fa-edit" aria-hidden="true"></i></td>
                <td id="check" onclick="check(${i})" >  <i class="fa fa-check" aria-hidden="true"></i></td>
    
    </tr>
    `  

}}
document.getElementById("tbo").innerHTML=uug


   }*/
  




    function sre(value)
    
    {let g=''
        for(let i=0;i<datepro.length;i++){
        if(datepro[i].id.includes(value))
        {

            g+=`

            <td>${datepro[i].id}</td>
            <td>${datepro[i].name}</td>
            <td>${datepro[i].email}</td>
                        <td id="remove" onclick="del(${i})"><i class="fa fa-remove" aria-hidden="true"></i></td>
                        <td id="edit" onclick="update(${i})"><i class="fa fa-edit" aria-hidden="true"></i></td>
                        <td id="check" onclick="check(${i})" >  <i class="fa fa-check" aria-hidden="true"></i></td>
            
            </tr>
            `  

        }}
        document.getElementById("tbo").innerHTML=g
    }
/*
    function saveTextAsFile() {
        let content = document.getElementById("myParagraph").innerText; // استخراج النص من <p>
        const blob = new Blob([content], { type: "text/plain" }); // إنشاء Blob من النص
        const link = document.createElement("a"); // إنشاء رابط لتنزيل الملف
        link.href = URL.createObjectURL(blob); // تحويل Blob إلى رابط يمكن تحميله
        link.download = "content.txt"; // تحديد اسم الملف
        link.click(); // تنفيذ النقر لتحميل الملف


    }
*/
function saveTextAsFile()
    {
let con=document.getElementById("myParagraph").innerText
let blob=new Blob([con],{tupe:"text/plain"})
const link = document.createElement("a"); // إنشاء رابط لتنزيل الملف

link.href=URL.createObjectURL(blob)
link.download="content.txt";
link.click()
    }

    let fille=document.getElementById("fille")
let ss=document.getElementById("s")
fille.addEventListener("change",function()
{
  let url=URL.createObjectURL(fille.files[0])  
  document.body.style.backgroundImage = `url(${url})`
})