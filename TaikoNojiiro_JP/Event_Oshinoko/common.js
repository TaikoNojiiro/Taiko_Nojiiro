$(document).ready(function(){(navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/Trident\/7\./)||navigator.userAgent.match(/Edge\/12\./))&&$("body").on("mousewheel",function(){event.preventDefault();var t=event.wheelDelta,e=window.pageYOffset;window.scrollTo(0,e-t)})}),window.onload=function(){function t(){$(".effect-fade").each(function(){var t=$(this).offset().top,e=$(window).scrollTop();t-$(window).height()+100<e&&$(this).addClass("effect-scroll")})}t(),$(window).scroll(function(){t()})},$(function(){$('[href^="#"]').click(function(){var t=$(this).attr("href"),t=$("#"==t||""==t?"html":t).offset().top+0;return $("body,html").animate({scrollTop:t},400,"swing"),!1})}),$(function(){$(".menuBtn").click(function(){$(this).toggleClass("active"),$("#gnaviCol").toggleClass("panelactive"),$("#cover").toggleClass("active"),$("body").toggleClass("overflow")}),$("#gnaviCol a").click(function(){$(".menuBtn").removeClass("active"),$("#gnaviCol").removeClass("panelactive"),$("#cover").toggleClass("active")}),$("#langnaviColInner").on("click",function(){$(this).next().stop().slideToggle()})}),$(function(){$(".navSpecial .specialTop").click(function(){var t=$(".navSpecialList");$(this).hasClass("open")?(t.slideUp(),$(this).removeClass("open"),t.removeClass("open")):(t.slideDown(),$(this).addClass("open"))})}),0<navigator.userAgent.indexOf("iPhone")&&-1==navigator.userAgent.indexOf("iPad")||0<navigator.userAgent.indexOf("iPod")||0<navigator.userAgent.indexOf("Android")||$(function(){var t=$("a > img");$("body").attr("id");t.each(function(){this.src.match("_off")&&(this.rollOverImg=new Image,this.rollOverImg.src=this.getAttribute("src").replace("_off","_on"),$(this.rollOverImg).css({position:"absolute",opacity:0}).addClass("overEff"),$(this).before(this.rollOverImg),$(this.rollOverImg).mousedown(function(){$(this).stop().animate({opacity:0},{duration:0,queue:!1})}),$(this.rollOverImg).hover(function(){$(this).animate({opacity:1},{duration:100,queue:!1})},function(){$(this).animate({opacity:0},{duration:100,queue:!1})}))})});var changeWtab=1199,changeWsp=750;function imgChangeTab(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<changeWtab?$("img.icTab").each(function(){var t=$(this).attr("src").replace("_pc.","_sp.");$(this).attr("src",t)}):$("img.icTab").each(function(){var t=$(this).attr("src").replace("_sp.","_pc.");$(this).attr("src",t)})}function imgChangeSp(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<changeWsp?$("img.icSp").each(function(){var t=$(this).attr("src").replace("_pc.","_sp.");$(this).attr("src",t)}):$("img.icSp").each(function(){var t=$(this).attr("src").replace("_sp.","_pc.");$(this).attr("src",t)})}imgChangeTab(),imgChangeSp(),$(window).on("resize load",function(t){t.preventDefault(),imgChangeTab(),imgChangeSp()});