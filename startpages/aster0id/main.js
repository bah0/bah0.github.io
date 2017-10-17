function swvids(){
  document.getElementById("links").className = "hidden";
  document.getElementById("yt").className = "";
}

function swlinks(){
  document.getElementById("links").className = "";
  document.getElementById("yt").className = "hidden";
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
  query = escape(query);
  var win = window.open('https://duckduckgo.com/?q='+query, '_blank');
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function openReddit(query){
  query = escape(query);
  var win = window.open('https://www.reddit.com/r/'+query, '_blank');
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function openYoutube(query){
  query = escape(query);
  var win = window.open('https://www.youtube.com/results?search_query='+query.replace(/\s/g, "+"), '_blank');
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function openDefault(query){
  query = escape(query);
  var win = window.open('https://www.google.com/search?q='+query.replace(/\s/g, "+"), '_blank');
  if (win) {
  win.focus();
  } else {
  alert('Please allow popups for this website');
  }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.toLocaleDateString();
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById('time').innerHTML =
    d + " | " + h + ":" + m;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function freader(){
  document.getElementById("col3").innerHTML = Cookies.get("startpage");
}
