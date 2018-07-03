

var liveObj;

function importJSON(obj){
		liveObj = JSON.parse(obj);
		// column div tags
		for(var i = 0; i < liveObj.cols.length; i++){
			document.getElementById("divFavs").innerHTML += '<div id="col'+i+'" class="col"><div id="name'+i+'" class="row name">/main</div><div class="row output"><ul id="links'+i+'" class="menu margin-fix"></ul></div></div>';
			document.getElementById("name"+i).innerHTML = "~> tree "+liveObj.cols[i].title;
			for(var j=0; j < liveObj.cols[i].links.length;j++){
				document.getElementById("links"+i).innerHTML += '<li><a  href="'+liveObj.cols[i].links[j].uri+'">'+liveObj.cols[i].links[j].name+'</a>';
			}
			
		}
		
		
		
}

function buildFavorites(){
	
}

function saveJSON(){
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("favorites",JSON.stringify(liveObj));
	} else {
		alert("No LocalStorage Support! Use Firefox/Chrome/Edge");
	}
}

function checkLocalStorage(){
	if (typeof(Storage) !== "undefined") {
		importJSON(localStorage.getItem("favorites"));
	} else {
		alert("No LocalStorage Support! Use Firefox/Chrome/Edge");
	}
}

////////////////////////

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.toLocaleDateString();
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById('time').innerHTML = h + ":" + m;
	document.getElementById('date').innerHTML = d;
	
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var hide = 1;
function search(searchForm) {
  var searchQuery = document.getElementById("search").value;
  if(searchQuery.startsWith("!")){ // Command Mode
    if(searchQuery.startsWith("!?")) {
      document.getElementById("help").className = (hide==1 ? "" : "hidden");
      hide=(hide==1 ? 0 : 1);
    }
    else if (searchQuery.startsWith("!y")){ // youtube
      openYoutube(searchQuery.substring(3));
    }
    else if (searchQuery.startsWith("!g")){ // google
      openDefault(searchQuery.substring(3));
    }
    else if (searchQuery.startsWith("!r")){ // reddit
      openReddit(searchQuery.substring(3));
    }
	else if (searchQuery.startsWith("!ddg")){ // duckduckgo
	  openDuckDuckGo(searchQuery.substring(5));
	}
  }
  else {
    openDefault(searchQuery); //google
  }
}

function openDuckDuckGo(query){
  query = encodeURIComponent(query);
  var win = window.open('https://duckduckgo.com/?q='+query, "_self");
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function openReddit(query){
  query = encodeURIComponent(query);
  var win = window.open('https://www.reddit.com/r/'+query, "_self");
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function openYoutube(query){
  query = encodeURIComponent(query);
  var win = window.open('https://www.youtube.com/results?search_query='+query.replace(/\s/g, "+"),"_self");
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function openDefault(query){
  query = encodeURIComponent(query);
  var win = window.open('https://www.google.com/search?q='+query.replace(/\s/g, "+"),"_self");
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}
