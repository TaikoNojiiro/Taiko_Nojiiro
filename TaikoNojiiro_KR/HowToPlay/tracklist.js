var domain = location.hostname;
var trackList = new Array();




if(domain in trackList){
	var gaJsHost = (("https:" == document.location.protocol) ? "https://" : "http://");
	var bngJsHost = (("https:" == document.location.protocol) ? "https://" : "http://");
	document.write(unescape("%3Cscript src='" + gaJsHost + "stats.g.doubleclick.net/dc.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='" + bngJsHost + "bandainamco-am.co.jp/am/js/track.js' type='text/javascript'%3E%3C/script%3E"));
}
