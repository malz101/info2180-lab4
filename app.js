"use strict";
window.onload=function() {
    const  form= document.querySelector('.search form');
    const  btn=document.querySelector('.search button')

    form.addEventListener("submit",formSubmit);
    btn.addEventListener("click",formSubmit);
    
    function formSubmit(e) {
        e.preventDefault();
        console.log("form submitted");
        let message = document.querySelector(".search div.message");
        let valid_string=/[^( \w)]+/g;
        let input=document.querySelector(".search-group input").value;
        
        input=input.trim();
        if(!(valid_string.test(input))){
            let url = `superheroes.php?query=${input}`;
            message.textContent="";
            fetch(url)
            .then(response => {
                if (response.ok){
                    return response.text();
                }else{
                    return Promise.reject('something went wrong!');
                }
            })
            .then(data=> {
                let result=document.querySelector('#result');
                if(data!==""){
                    result.innerHTML=data;
                }
                else{
                    result.innerHTML="<h4 id='not-found'> SUPERHERO NOT FOUND</h4>";
                }
            })
            .catch(error => console.log('There was an error: '+error));
        }
        else{
            message.textContent = "Please enter a valid name. Name should not contain any special characters.";
            message.style.color="red";
        }//end if valid string
    }//end btn.onclick
}//end window.onload