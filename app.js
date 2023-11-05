
let API=' http://www.omdbapi.com/?i=tt3896198&apikey=944fa852&t=';
let img=document.getElementById("img")
let title=document.getElementById("title");
let desc=document.getElementById("desc");
let ratings=document.getElementById("ratings");
let genre=document.getElementById("genre");
let awards=document.getElementById("awards");
let director=document.getElementById("director");
let collections=document.getElementById("collections");
let year=document.getElementById("year");
let actors=document.getElementById("actors");
let movieContainer=document.getElementById('movie-container');
let error=document.getElementById("error");
movieContainer.classList.add("d-none");
error.classList.add("d-none");


loadingStatus=false;


function checkLoaderStatus(){
    let intro = document.getElementById('intro');
    let loader=document.getElementById('loader');


    let movie=document.getElementById('movie-container');
    if(loadingStatus==true){
    intro.style.display='none';
    loader.classList.add('loader');
    
    }else{
        movieContainer.classList.add("d-none");
        loader.classList.remove('loader');
      
    }

}


function FetchMovieDetails(){
    movieContainer.classList.add("d-none");
    error.classList.add("d-none");
    loadingStatus=true;
    checkLoaderStatus();
let movieName = document.getElementById("movieName");
let apiQuery = API + movieName.value; 
fetch(apiQuery).then(function(response){
    return response.json();
}).then(function(data){
    loadingStatus=false;
    checkLoaderStatus();
    console.log(data);
    if(data.Error!="Movie not found!"){
    img.src=data.Poster;
    desc.innerHTML=data.Plot;
    title.innerHTML=data.Title;
   genre.innerHTML=data.Genre;
   ratings.innerHTML=data.imdbRating ;
   actors.innerHTML=data.Actors   ;   
   director.innerHTML=data.Director;
   collections.innerHTML=data.BoxOffice   ;
   year.innerHTML=data.Year   ;
   awards.innerHTML=data.Awards;
   movieContainer.classList.remove("d-none");


    }else{
          
        loadingStatus=false;
        checkLoaderStatus();
        // alert("Movie not found!");
        // movieContainer.classList.add("d-none");
        error.classList.remove("d-none");
       
       
    }
})




}

