function splitLinks(s, i) {
	if (i.match(/\[.*\]/)) {
		console.log(i)
		fin = new RegExp("(.+\\n?){1," + i.slice(1, -1) + "}", "g");
		temp1 = s.match(fin);
		return "[\n" + JSON.stringify(temp1.map(function (j, i) {
				return j.trim().split("\n");
			}), null, "\t") + "\n]";

	} else {
		fin = new RegExp("(.+\\n?){1," + i + "}", "g");
		temp1 = s.match(fin);
		return JSON.stringify(temp1.map(function (j, i) {
				return j.trim().split("\n");
			}), null, "\t");
	}
}
var bloc = (function () {

	var str = window.location.search;
	var objURL = {};

	str.replace(
		new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		function ($0, $1, $2, $3) {
		objURL[$1] = $3;
	});
	return objURL;
})()["bloc"];
$(document).ready(function () {
	$("textarea").width($("#pieces").width());
	linkBlocs = (function (links) {
		TRH52 = [];
		if (links.length % 100)
			TRH52.push(links.splice((links.length % 100) * -1));
		while (links.length)
			TRH52.push(links.splice(-100));
		TRH52.reverse();
		return TRH52;
	})($.extend(true, [], links));
	len = (parseInt(Math.sqrt(linkBlocs.length), 10));
	len = len > 2 ? len : 3;
	if (!bloc) {
		for (i in linkBlocs)
			$("<input />", {
				type : "button",
				value : i
			}).appendTo("form ul").wrap("<li><a>").css("font-size", innerWidth / len / 2 - 10).click(function () {
				$("#bloc").val(this.id).parent().submit();
				return false;
			}).parents("li").width(innerWidth / len - 30).css("clear", "none")
			$("ul li:nth-child(" + len + "n+1)").css("clear", "left")
	}
	if (bloc)
		$("<input>", {
			type : "image",
			src : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiIgICBpZD0ic3ZnMzAxMyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiICAgd2lkdGg9IjEwMCUiICAgaGVpZ2h0PSIxMDAlIiAgIHNvZGlwb2RpOmRvY25hbWU9ImhvbWVfZm9udF9hd2Vzb21lLnN2ZyI+ICA8bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTMwMjMiPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgPC9jYzpXb3JrPiAgICA8L3JkZjpSREY+ICA8L21ldGFkYXRhPiAgPGRlZnMgICAgIGlkPSJkZWZzMzAyMSIgLz4gIDxzb2RpcG9kaTpuYW1lZHZpZXcgICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiAgICAgYm9yZGVyb3BhY2l0eT0iMSIgICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiICAgICBncmlkdG9sZXJhbmNlPSIxMCIgICAgIGd1aWRldG9sZXJhbmNlPSIxMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNjQwIiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNDgwIiAgICAgaWQ9Im5hbWVkdmlldzMwMTkiICAgICBzaG93Z3JpZD0iZmFsc2UiICAgICBpbmtzY2FwZTp6b29tPSIwLjEzMTY5NjQzIiAgICAgaW5rc2NhcGU6Y3g9Ijg5NiIgICAgIGlua3NjYXBlOmN5PSI4OTYiICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIgICAgIGlua3NjYXBlOndpbmRvdy15PSIyNSIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmczMDEzIiAvPiAgPGcgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDY4LjMzODk4MywxMjg1LjQyMzcpIiAgICAgaWQ9ImczMDE1Ij4gICAgPHBhdGggICAgICAgZD0iTSAxNDA4LDU0NCBWIDY0IFEgMTQwOCwzOCAxMzg5LDE5IDEzNzAsMCAxMzQ0LDAgSCA5NjAgViAzODQgSCA3MDQgViAwIEggMzIwIHEgLTI2LDAgLTQ1LDE5IC0xOSwxOSAtMTksNDUgdiA0ODAgcSAwLDEgMC41LDMgMC41LDIgMC41LDMgbCA1NzUsNDc0IDU3NSwtNDc0IHEgMSwtMiAxLC02IHogbSAyMjMsNjkgLTYyLC03NCBxIC04LC05IC0yMSwtMTEgaCAtMyBxIC0xMywwIC0yMSw3IEwgODMyLDExMTIgMTQwLDUzNSBxIC0xMiwtOCAtMjQsLTcgLTEzLDIgLTIxLDExIGwgLTYyLDc0IHEgLTgsMTAgLTcsMjMuNSAxLDEzLjUgMTEsMjEuNSBsIDcxOSw1OTkgcSAzMiwyNiA3NiwyNiA0NCwwIDc2LC0yNiBsIDI0NCwtMjA0IHYgMTk1IHEgMCwxNCA5LDIzIDksOSAyMyw5IGggMTkyIHEgMTQsMCAyMywtOSA5LC05IDksLTIzIFYgODQwIGwgMjE5LC0xODIgcSAxMCwtOCAxMSwtMjEuNSAxLC0xMy41IC03LC0yMy41IHoiICAgICAgIGlkPSJwYXRoMzAxNyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPiAgPC9nPjwvc3ZnPg==",
			click : function () {
				$("#bloc").val("").parent().submit();
			}
		}).appendTo("form ul").wrap("<center><li><a>").css({
			"font-size" : innerWidth / 10 / 2 - 10,
			padding : 0
		}).parents("li").width(innerWidth / 10 - 10).css("float", "none")
		for (i in linkBlocs[bloc]) {
			$("form ul").append($("<li><a><input type='button' value='" + parseInt(++i + (bloc * 100)) + "'/>"))
		}
	$("form a input").map(function (i, j) {
		j.id = j.value;
		return;
	});
	if (navigator.appVersion.match(/Chrome/)) {
		$("asdf").css("display", "");
		$("textarea").width($("#pieces").width())
		if (bloc)
			$(window).resize(function () { 
				$("ul li").css('width', innerWidth / 10 - 10);
			})
	}
	if (bloc)
		$("ul li").css('width', innerWidth / 10 - 10);
	if (bloc)
		$("form a input[id]").click(function (event) {
			$("#num").text(this.value);
			$("title").text(this.value);
			for (i of links[this.value - 1])
				window.open(i);
			// $(this).parents("li").remove();
			window.localStorage.setItem('num', this.value)
			return;
		});
	$("form a").map(function (i, j) {
		j.href = "#" + j.childNodes[0].value;
		return;
	});
	$("#destroy").click(function () {
		$("form input").filter(function () {
			return parseInt($(this).val(), 10) < $("#num").text();
		}).parents("li").remove();
		return;
	});
	$("#prevClick").click(function () {
		$("#num").text(window.localStorage.getItem('num'));
	});
	$("#split").click(function () {
		temp2 = splitLinks($("#text")[0].value, $("#pieces")[0].value);
		temp3 = temp2.replace(/(^\[\n|\n\]$)/g, "");
		var obj = $("<textarea />").text(temp3);
		$("textarea:last()").after(obj);
		obj.select().focus();
	});
	$("#next").click(function () {
		$("#bloc").val() ? $("#bloc")[0].value++ : $("#bloc").val(0)
	});
	$("#prev").click(function () {
		parseInt($("#bloc").val()) ? $("#bloc")[0].value-- : $("#bloc").val("")
	});
	$("#bloc").val(bloc).prop("max", linkBlocs.length - 1);

});
