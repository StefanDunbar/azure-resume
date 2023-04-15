window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter-sd.azurewebsites.net/api/GetResumeCounter?code=nBGZOlBewQuWfay1gZCxfA8_RVdlcZLIS4PR_e1bz5rgAzFudlyo5Q==';

const getVisitCount = () => {
    let count = 0;
    fetch(functionApiUrl, {method: 'POST', mode: 'same-origin', credentials: 'include', headers: {'Content-Type': 'application/json'}})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(response => {
            console.log("Website called function API.")
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
    return count;
}