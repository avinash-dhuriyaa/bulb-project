 let img = document.querySelector("#demo"); 
 let flag = 0
 function changeSrcAttribute(){
 if( flag == 0){ img.setAttribute("src","bulb_on.png");
 flag = 1
}
  else{
   
    img.setAttribute("src","bulb_off.png");
    flag = 0
  }   

    } 
    


                                    
 
