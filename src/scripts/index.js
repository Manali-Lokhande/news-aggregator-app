
onst url ='https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb4577d6d7e64e1698b3e5dab53e4ce3';



$(document).ready(async function news(){
	let response = await fetch(url);
	let data = await response.json();
	//debugger;
	let news = ''
	data.articles.forEach(article=> {
	// put your loop code over here 
	news+= `
 <li class="article">
 <img class="article-img" src="${article.urlToImage}"/>
 <h2 class="article-title">${article.title}</h2>
 <p class="article-description">${article.description}</p>
 <span class="article-author">${article.author}</span>
 <a class="article-link" href="${article.url}" target="_blank"></a>
 </li>
 `;
	});//iteration
 /* let response = await fetch(url);
	let data = await response.json();
 //x.then(res => res.json())
	data.forEach((x) => {});
 .then((articles) => {
 let output="";
 news.articles.forEach(article=>{
 
	console.log("hii ".output);
 });*/
	
 document.getElementById("news-articles").innerHTML=news;
 })
 
 

$(document).ready(function(){ 
 $('#search').keypress(()=>{
 let searchField = $("#search").val();
 const url1 = `https://newsapi.org/v2/everything?q=${searchField}&apiKey=fb4577d6d7e64e1698b3e5dab53e4ce3`;
 
 if(searchField !== ""){
 $.ajax({
 url: url1,
 method: "GET",
 dataType: "json",
 
 success: function(news){
 let output1 = "";
 let articles = news.articles;
 
 for(var art in articles){
 output1 +=`
 <li class="article">
 <img class="article-img" src="${art.urlToImage}"/>
 <h2 class="article-title">${art.title}</h2>
 <p class="article-description">${art.description}</p>
 <span class="article-author">${art.author}</span>
 <a class="article-link" href="${art.url}" target="_blank"></a>
 </li>`;
 }
	console.log(output2);
 if(output2 !== ""){
 document.getElementById("news-articles").innerHTML=output2; 
 }
 else{
	news_articles.innerHTML='<li class="not-found">No article was found based on the search.</li>';

	} 
 } 
 }); 
 }
	
 });
});
