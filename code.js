
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nextspine()
{
    console.log("inside function nextspine");
    console.log(state.i);
    var spine=document.getElementById("spine");
    if(state.i===0){
    spine.setAttribute("class","spine1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    spine.setAttribute("class","spine2");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    spine.setAttribute("class","spine3");
         state.i++;
    }
    else
     if(state.i===3){
    spine.setAttribute("class","spine4");
         state.i++;
    }
    else
    if(state.i===4){
   spine.setAttribute("class","spine5");
        state.i++;
   }
   else
     if(state.i===5){
    spine.setAttribute("class","spine6");
         state.i++;
    }
    else
     if(state.i===6){
    spine.setAttribute("class","spine7");
         state.i++;
    }
    else
     if(state.i===7){
    spine.setAttribute("class","spine8");
         state.i=0;
    }


}

function nextbody()
{
    console.log("inside function nextbody");
    console.log(state.j);
    var body=document.getElementById("body");
    if(state.j===0){
    body.setAttribute("class","body1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    body.setAttribute("class","body2");
         state.j++;
         console.log(state.j);
    }

    else
     if(state.j===2){
    body.setAttribute("class","body3");
         state.j++;
    }
    else
     if(state.j===3){
    body.setAttribute("class","body4");
         state.j++;
    }
    else
     if(state.j===4){
    body.setAttribute("class","body5");
         state.j++;
    }
    else
    if(state.j===5){
   body.setAttribute("class","body6");
        state.j++;
   }
   else
     if(state.j===6){
    body.setAttribute("class","body7");
         state.j++;
    }
    else
     if(state.j===7){
    body.setAttribute("class","body8");
         state.j++;
    }
    else
     if(state.j===8){
    body.setAttribute("class","body9");
         state.j++;
    }
    else
     if(state.j===9){
    body.setAttribute("class","body10");
         state.j++;
    }
    else
     if(state.j===10){
    body.setAttribute("class","body11");
         state.j++;
    }
    else
    if(state.j===11){
   body.setAttribute("class","body12");
        state.j=0;
   }
}

function nextelasticband()
{
    console.log("inside function nextelasticband");
    console.log(state.k);
    var elasticband = document.getElementById("elasticband");
    if(state.k === 0) {
        elasticband.setAttribute("class", "elasticband1");
        state.k++;
        console.log(state.k);
    }
    else if(state.k === 1) {
        elasticband.setAttribute("class", "elasticband2");
        state.k++;
        console.log(state.k);
    }
    else if(state.k === 2) {
        elasticband.setAttribute("class", "elasticband3");
        state.k++;
    }
    else if(state.k === 3) {
        elasticband.setAttribute("class", "elasticband4");
        state.k++;
    }
    else if(state.k === 4) {
        elasticband.setAttribute("class", "elasticband5");
        state.k++;
    }
    else if(state.k === 5) {
        elasticband.setAttribute("class", "elasticband6");
        state.k++;
    }
  
    else if(state.k === 6) {
        elasticband.setAttribute("class", "elasticband7");
        state.k = 0;
    }
}
