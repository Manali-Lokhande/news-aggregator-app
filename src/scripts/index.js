
//lite mode and Dark mode toggle function
document.querySelector("toggle_action").addEventListener('change',toggle_func)

function toggle_func(e){
    if(e.target.checked)
    {
        document.documentElement.setAttribute('@include data-theme','lite');
        document.querySelector(".toggletxt").innerHTML="Toggle to Dark Mode";
    }
    else{
        document.documentElement.setAttribute('@include data-theme','dark');
        document.querySelector(".toggletxt").innerHTML="Toggle to Lite Mode";
    }
}
//api key
const apiKey="fb4577d6d7e64e1698b3e5dab53e4ce3";
var article_area=document.getElementById("news-articles");
//function to have foramted news
function getNews(news){
    let output="";
    if(news.totalResults>0){
        news.articles.forEach(index => {
            output+=
            <section class="container">
                <li class="article">
                    <a class="article-link" href="${index.url}" targrt="_blank">
                         <div class="img-area">
                             <img src="${index.urlToImage}" class="article-img" alt="${index.title}"></img>
                        </div>     
                        <h2 class="article-title">${index.title}</h2>
                        <p class="article-description">${index.description}||"description not availabel</p><br></br>
                        <span class="article-author">-${index.author?index.author: "Anon"}</span><br></br>
                    </a>
                </li>
            </section>
            ;
        });
        article_area.innerHTML=output;
    }
    else{
        article_area.innerHTML='<li class="not-found">NO artical was found based on search.</li>'
    }
}

//retreive function
async function retreive(searchvalueText=""){

    article_area.innerHTML='<p class="load">News are loading....</p>';
    if(searchvalueText!=""){
        url='https://newsapi.org/v2/everything?q=${searchvalueText}&apiKey=fb4577d6d7e64e1698b3e5dab53e4ce3';
    }
    else{ 
        url='https://newsapi.org/v2/top-headlines?country=in&apiKey=fb4577d6d7e64e1698b3e5dab53e4ce3';
    }
    //api call to fetch
    const response=await fetch(url);
    const result=await response.json();
    getNews(result);
}
//get text value for searchbar
async function searchvalue(event){
    if(event.which===13||event.keycode===13||event.key==="Enter"){
        console.log(event);
        console.log(event.which);
        console.log(event.keycode);
        console.log(event.key);

        retreive(event.target.value);
        console.log(event.target.value);
    }
};
//event listener to load searchbar 
function start(){
    console.log("start function called in onload")
    document.getElementById("search").addEventListener('keypress',searchvalue);
    retreive();
}

(function(){
    start();
})();
