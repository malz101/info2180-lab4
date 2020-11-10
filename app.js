"use strict";
window.onload=function() {
    const btn = document.getElementById('search-btn');
    btn.onclick=function(e) {
        console.log("button pressed");
        e.preventDefault();
        fetch("superheroes.php")
            .then(response => {
                if (response.ok){
                    return response.text();
                }else{
                    return Promise.reject('something went wrong!');
                }
            })
            .then(data=> {
                alert(data);
            })
            .catch(error => console.log('There was an error: '+error));
    }//end btn.onclick
}//end window.onload