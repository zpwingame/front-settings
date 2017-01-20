import './index.scss';

$(function(){
  var slide = $(".main .slide");
  var tap = document.getElementsByClassName('tap')
  var i=0;
  var leftArray = [-300,-200,-100,0,100,200,300];
  tap[0].onclick=function(){
    $(slide[0]).animate(
      {left:leftArray[i]},
      {complete:function(){
        if(i===6){
          i=0;
        }else{
          i++;
        }
      },duration:500});
  }
})
