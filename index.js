let accordian = document.getElementsByClassName("FAQ__title");//since we have more than one element with the same name it will be return array of elements

for(let i = 0 ; i < accordian.length ; i++)//we might have more than one accordian hence everytime an accordian is chose it should react 
{
    accordian[i].addEventListener("click", function(){ //arrow function does not work
        if(this.childNodes[1].classList.contains("fa-plus")){//the icon is + hence closed
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        }
        else{
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content=this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;//removing the maxHeight 
        }else{
            content.style.maxHeight=content.scrollHeight + "px";//This function will give us a number as value according to the mobile heights and we are adding "px" as a unit for that number        
        }
    });
}

