// selection DOM here
var bill=document.querySelector("#bill");
var tips=document.querySelector("#tips");
var total=document.querySelector("#total");
var tipsPersent=document.querySelector("#tipsPersent");
var tipsRange=document.querySelector("#tipRange");
var peapleNo=document.querySelector("#peapleNo");
var peapleRange=document.querySelector("#personeNO");
var totalTipsPersone=document.querySelector("#totalTipsPersone");
var totalperPersone=document.querySelector("#totalperPersone");




//  validation of bill value
function inputBillValidation(){
    bill.addEventListener("keyup",()=>{
        var billValue=bill.value=bill.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g,'$1');
        let min=parseInt(bill.getAttribute("min"));
        
        if(billValue < min ||isNaN(billValue) ){
            console.log("please Enter valied something.");
        }else{
            // call the calculated function
            calculated(billValue);
        }
    
    });

    
}

// grab the  tips range value
tipsRange.addEventListener('input',(e)=>{

    //value assign and display
    var rangeVle=tipsRange.value;
    tipsPersent.innerHTML=rangeVle+"%";

    //calculate the all value
     calculated=(vl)=>{
        var mainVl=parseFloat(vl);
        var mainRangeVl=rangeVle;
        var mainTips=(mainVl*mainRangeVl)/100;
        tips.textContent="$ "+mainTips;
        var totalVl=mainVl+mainTips;
        total.textContent="$ "+totalVl;
    
        //call the totalCalculation here
        totalCalculation(totalVl,mainTips);

    }

});

//grab the peaple tange value
peapleRange.addEventListener('input',(e)=>{
    
    //value assign and display
    var peopleno=peapleRange.value;
    peapleNo.textContent=peopleno;
   
    // calculate the total value
    totalCalculation=(frist,sec)=>{
        var i =parseFloat(frist) ;
        var ii=parseFloat(sec);
        var pNumber=parseFloat(peopleno);
        // var outputi=pNumber/ii;
        // totalTipsPersone.textContent="$ "+outputi;
        // var outputii=pNumber/i;
        // totalperPersone.textContent="$ "+outputii;

        // total tips per persone
        if(pNumber === 1 ){
            totalTipsPersone.textContent="$"+ ii;
        }else{
            var outputi = ii / pNumber;
            totalTipsPersone.textContent="$ "+outputi;
        }

        // total per persone
        if( pNumber === 0 ){
            totalperPersone.textContent="$"+i;
        }else if( pNumber === 1){
            totalperPersone.textContent="$"+i;
        }else{
            var outputii=i/pNumber;
            totalperPersone.textContent="$"+outputii;
        }
       
    }
    
}); 


//call the function
inputBillValidation();
