// Hit counter 
function sc_hit(id, style, min) {
    var d = document;
    var info="";
    if (encodeURIComponent) {
        info = '&ua=' + encodeURIComponent(navigator.userAgent);
        info = info + '&ref=' + encodeURIComponent(document.referrer);
        info = info + '&url=' + encodeURIComponent(window.location);
    } else {
        info = '&ua=' + escape(navigator.userAgent);
        info = info + '&ref=' + escape(document.referrer);
        info = info + '&url=' + escape(window.location);
    }
    info = info + '&sw=' + screen.width;
    info = info + '&sh=' + screen.height;
    info = info + '&rand=' + Math.round(100 * Math.random());
    info = info + '&style=' + style;
    info = info + '&m=' + min;
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = "https://www.supercounters.com/fc.php?id=" + id + "&v=1&w=0" + info; (d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(ga);
}

function sc_show_hit(id, count, style, min) {
    var r = 0;
    var num = count.toString();
    if (min - num.length > 0) r = min - num.length;
    var url = "https://widget.supercounters.com/images/" + style + ".gif";
    var c = document.createElement("img");
    c.onload = function() {
        var charw = c.width / 10;
        var imgw = min * charw;
        var cd = document.createElement("div");
        cd.style.position = "relative";
        cd.style.display = "inline-block";
        cd.style.width = imgw + "px";
        cd.style.height = c.height + "px";
        cd.style.overflow = "hidden";
        cd.style.cursor = "pointer";
        cd.title = "Free Hit Counter";
        var x = 0;
        for (i = 0; i < min; i++) {
            p = i - r;
            if (p > -1) n = num.charAt(p);
            else n = 0;
            var ca = document.createElement("div");
            ca.style.backgroundImage = "url(" + url + ")";
            ca.style.backgroundRepeat = "no-repeat";
            ca.style.backgroundPosition = (n * -(charw)) + "px " + 0 + "px";
            ca.style.position = "absolute";
            ca.style.backgroundAttachment = "scroll";
            ca.style.width = charw + "px";
            ca.style.height = c.height + "px";
            ca.style.top = "0px";
            ca.style.left = x + "px";
            ca.style.overflow = "hidden";
            ca.style.padding = "0px";
            ca.style.margin = "0px";
            cd.appendChild(ca);
            x += charw;
        }
        cd.onclick = function() {
            window.top.location = "https://www.supercounters.com/stats/" + id;
        };
        ct_insert(cd, "assets/js/hit.js");
    };
    c.src = url;
}
function ct_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
    }
}
function errorMsg(msg) {
    var w = msg.length * 7;
    var cd = document.createElement("div");
    cd.style.position = "relative";
    cd.style.display = "inline-block";
    cd.style.width = w + "px";
    cd.style.height = "15px";
    cd.style.overflow = "hidden";
    cd.style.cursor = "pointer";
    cd.style.fontFamily = "Arial";
    cd.style.fontSize = "12px";
    cd.style.color = "#ff0000";
    cd.style.borderColor = "#ffffff";
    cd.style.borderWidth = "1px";
    cd.style.borderStyle = "solid";
    cd.style.backgroundColor = "#ffffff";
    cd.title = "Supercounters";
    cd.innerHTML = msg;
	 cd.onclick = function() {
            window.location = "https://www.supercounters.com/";
        };
    ct_insert(cd, "assets/js/hit.js");
}
