let tell = document.getElementById('Tellmeajoke');
let jokecontaiener = document.getElementById('jokecontainer');
// function calljoke(){
//     // tell.textContent= "Loading..."
//     console.log("updating...")

//     setTimeout(()=>{
async function getdata() {
    try{
    jokecontaiener.innerText = "Updating..."
    tell.diaabled=true;
    tell.innerText="Loading..."


    let res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=", {
        method: 'GET',
        headers: { 'X-Api-Key': 'W6JUsiZ+oO92iv6NMDplgg==J4DLSl4RBvlZnGvv' },
        contentType: 'application/json',
    });
    let data = await res.json();
    
    jokecontaiener.innerText = data[0].joke;
    tell.disabled = false;
    tell.innerText = "Tell me a joke";
}
catch(error){
    jokecontaiener.innerText=`Error! ${error}`;
    tell.innerText="Tell me a joke";

}



}
tell.addEventListener('click', getdata);
// getdata();
// },1000)
// }
// ajay();

