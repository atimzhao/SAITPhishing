

if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){

var ffversion=new Number(RegExp.$1);

if (ffversion<=3.5){
var headID = document.getElementsByTagName("head")[0];
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'themes/default/ie.css';
cssNode.media = 'screen';
headID.appendChild(cssNode);
}
}
