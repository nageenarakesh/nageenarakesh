!function(i){i.fn.theiaStickySidebarIfy=function(t){function e(t,e){var a=o(t,e);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}function o(t,e){return t.initialized===!0||!(i("body").width()<t.minWidth)&&(a(t,e),!0)}function a(t,e){t.initialized=!0;e.each(function(){function e(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function o(t){var e=t.height();return t.children().each(function(){e=Math.max(e,i(this).height())}),e}var a={};if(a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parent().css("-webkit-transform","none"),a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebarIfy"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(s)}).remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebarIfy").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,e(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void e();if(a.options.disableOnResponsiveLayouts){var s=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(s+50>a.container.width())return void e()}var r=i(document).scrollTop(),d="static";if(r>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var c,p=a.paddingTop+t.additionalMarginTop,b=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,l=a.sidebar.offset().top,f=a.sidebar.offset().top+o(a.container),h=0+t.additionalMarginTop,g=a.stickySidebar.outerHeight()+p+b<i(window).height();c=g?h+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var u=l-r+a.paddingTop,S=f-r-a.paddingBottom-a.marginBottom,y=a.stickySidebar.offset().top-r,m=a.previousScrollTop-r;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(y+=m),"stick-to-top"==a.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(y=c-a.stickySidebar.outerHeight()),y=m>0?Math.min(y,h):Math.max(y,c-a.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,S-a.stickySidebar.outerHeight());var k=a.container.height()==a.stickySidebar.outerHeight();d=(k||y!=h)&&(k||y!=c-a.stickySidebar.outerHeight())?r+y-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d){var v=i(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:n(a.stickySidebar)+"px",transform:"none",top:y+"px"})}else if("absolute"==d){var x={};"absolute"!=a.stickySidebar.css("position")&&(x.position="absolute",x.transform="none",x.top=(r+y-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px"),x.width=n(a.stickySidebar)+"px",a.stickySidebar.css(x)}else"static"==d&&e();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=r}},a.onScroll(a),i(document).on("scroll."+a.options.namespace,function(i){return function(){i.onScroll(i)}}(a)),i(window).on("resize."+a.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(a))})}function n(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return"undefined"==typeof t&&(t=i.width()),t}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return t=i.extend(s,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,e(t,this),this}}(jQuery);


/*! MenuIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! Tabify by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.tabify=function(b){b=jQuery.extend({onHover:false,animated:true,transition:'fadeInUp'},b);return this.each(function(){var e=a(this),c=e.children('[tab-ify]'),d=0,n='tab-animated',k='tab-active';if(b.onHover==true){var event='mouseenter'}else{var event='click'}e.prepend('<ul class="select-tab"></ul>');c.each(function(){if(b.animated==true){a(this).addClass(n)}e.find('.select-tab').append('<li><a href="javascript:;">'+a(this).attr('tab-ify')+'</a></li>')}).eq(d).addClass(k).addClass('tab-'+b.transition);e.find('.select-tab a').on(event,function(){var f=a(this).parent().index();a(this).closest('.select-tab').find('.active').removeClass('active');a(this).parent().addClass('active');c.removeClass(k).removeClass('tab-'+b.transition).eq(f).addClass(k).addClass('tab-'+b.transition);return false}).eq(d).parent().addClass('active')})}}(jQuery);

/*! ResizeIfy - LazyIfy on Scroll by Templateify | v1.2.0 - https://www.templateify.com */
!function(a){a.fn.lazyify=function(){return this.each(function(){var t=a(this),dImg=t.attr('data-image'),iWid=Math.round(t.width()),iHei=Math.round(t.height()),iSiz='w'+iWid+'-h'+iHei+'-p-k-no-nu',img='';if(dImg.match('/s72-c')){img=dImg.replace('/s72-c','/'+iSiz);}else if(dImg.match('/w72-h')){img=dImg.replace('/w72-h72-p-k-no-nu','/'+iSiz);}else if(dImg.match('=w72-h')){img=dImg.replace('=w72-h72-p-k-no-nu','='+iSiz);}else{img=dImg;}
a(window).on('load resize scroll',lazyOnScroll);function lazyOnScroll(){var wHeight=a(window).height(),scrTop=a(window).scrollTop(),offTop=t.offset().top;if(scrTop+wHeight>offTop){var n=new Image();n.onload=function(){t.attr('style','background-image:url('+this.src+')').addClass('lazy-ify');},n.src=img;}}
lazyOnScroll();});}}(jQuery);

/*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);   







function shortCodeIfy(e, t, a) {
        for (var r = e.split("$"), i = /[^{\}]+(?=})/g, s = 0; s < r.length; s++) {
            var o = r[s].split("=");
            if (o[0].trim() == t) return null != (a = o[1]).match(i) && String(a.match(i)).trim()
        }
        return !1
    }

    function msgError() {
        return '<span class="error-msg"><b>Error:</b> No Results Found</span>'
    }

    function beforeLoader() {
        return '<div class="loader"/>'
    }

    function getFeedUrl(e, t, a) {
        var r = "";
        switch (a) {
            case "recent":
                r = "/feeds/posts/default?alt=json&max-results=" + t;
                break;
            case "comments":
                r = "list1" == e ? "/feeds/comments/default?alt=json&max-results=" + t : "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t;
                break;
            default:
                r = "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t
        }
        return r
    }

    function getPostLink(e, t) {
        for (var a = 0; a < e[t].link.length; a++)
            if ("alternate" == e[t].link[a].rel) {
                var r = e[t].link[a].href;
                break
            } return r
    }

    function getPostTitle(e, t) {
        if (e[t].title.$t) var a = e[t].title.$t;
        else a = messages.noTitle;
        return a
    }

    function getFirstImage(e, t) {
        var a = $("<div>").html(e).find("img:first").attr("src"),
            r = a.lastIndexOf("/") || 0,
            i = a.lastIndexOf("/", r - 1) || 0,
            s = a.substring(0, i),
            o = a.substring(i, r),
            n = a.substring(r);
        return (o.match(/\/s[0-9]+/g) || o.match(/\/w[0-9]+/g) || "/d" == o) && (o = "/w72-h72-p-k-no-nu"), s + o + n
    }

    function getPostImage(e, t, a) {
        var r = e[t].content.$t;
        if (e[t].media$thumbnail) var i = e[t].media$thumbnail.url;
        else i = "https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png";
        return r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? r.indexOf("<img") > -1 ? r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < r.indexOf("<img") ? i.replace("/default.", "/maxresdefault.") : getFirstImage(r) : i.replace("/default.", "/maxresdefault.") : r.indexOf("<img") > -1 ? getFirstImage(r) : "https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png"
    }

    function getPostLabel(e, t) {
        if (e[t].category) var a = '<span class="entry-category">' + e[t].category[0].term + "</span>";
        else a = "";
        return a
    }

    function getVideoClass(e, t) {
        return e.match("img.youtube.com") ? "is-video" : "is-image"
    }

    function getAjax(e, t, a, r) {
        switch (t) {
            case "related":
                0 == r && (r = "geterror404");
                var i = getFeedUrl(t, a, r);
                $.ajax({
                    url: i,
                    type: "GET",
                    dataType: "json",
                    cache: !0,
                    beforeSend: function(a) {
                        switch (t) {
                            case "related":
                                e.html(beforeLoader()).parent().addClass("show-ify")
                        }
                    },
                    success: function(a) {
                        var r = "";
                        switch (t) {
                            case "related":
                                r = '<div class="related-posts">'
                        }
                        var i = a.feed.entry;
                        if (null != i)
                            for (var s = 0, o = i; s < o.length; s++) {
                                var n = getPostLink(o, s),
                                    l = getPostTitle(o, s, n),
                                    c = getPostImage(o, s, n),
                                    d = (getPostLabel(o, s), getVideoClass(c)),
                                    f = "";
                                switch (t) {
                                    case "related":
                                        f += '<article class="related-item post item-' + s + '"><a class="entry-image-wrap ' + d + '" href="' + n + '"><span class="entry-thumb" data-image="' + c + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + n + '">' + l + "</a></h2></div></article>"
                                }
                                r += f
                            } else r = msgError();
                        r += "</div>", e.html(r), e.find("span.entry-thumb").lazyify()
                    },
                    error: function() {
                        e.html(msgError())
                    }
                })
        }
    }

    function ajaxRelated(e, t, a, r, i) {
        if (i.match("getrelated")) return getAjax(e, t, a, r)
    }

    function beautiAvatar(e) {
        $(e).attr("src", function(e, t) {
            return t = (t = t.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")
        })
    }
    $("#freebify-free-main-menu").menuify(), $("#freebify-free-main-menu .widget").addClass("show-menu"), $(".search-toggle.show").on("click", function() {
        $("body").addClass("search-active"), $("#nav-search-wrap").fadeIn(170).find("input").focus()
    }), $(".search-toggle.hide").on("click", function() {
        $("body").removeClass("search-active"), $("#nav-search-wrap").fadeOut(170).find("input").blur()
    }), $(".sidebar .social-icons li a").each(function(e) {
        var t = $(this),
            a = t.attr("href").split("$");
        e = a[0].trim(), null != a[1] && t.find("span.text").text(a[1].trim()), t.attr("href", e)
    }), $(".follow-by-email-text").each(function() {
        var e = $(this),
            t = followByEmailText;
        "" != t && e.text(t)
    }), $(".post-body a").each(function() {
        var e = $(this),
            t = e.text().trim(),
            a = t.toLowerCase(),
            r = shortCodeIfy(t, "text"),
            i = shortCodeIfy(t, "size");
        a.match("getdownload") && 0 != r && (e.wrap('<div class="file-btn"/>'), e.addClass("button download").text(r), 0 != i && e.parent(".file-btn").append('<span class="file-size">' + i + "</span>"))
    }), $(".post-body a").each(function() {
        var e = $(this),
            t = e.text().trim(),
            a = t.split("/"),
            r = a[0],
            i = a[1],
            s = a.pop();
        t.match("button") && (e.addClass("button").text(r), "button" != i && e.addClass(i), "button" != s && e.addClass("colored-button").css({
            "background-color": s
        }))
    }), $(".post-body strike").each(function() {
        var e = $(this),
            t = e.text().trim(),
            a = e.html();
        t.match("contact-form") && (e.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1"))), t.match("alert-success") && e.replaceWith('<div class="alert-message alert-success short-b">' + a + "</div>"), t.match("alert-info") && e.replaceWith('<div class="alert-message alert-info short-b">' + a + "</div>"), t.match("alert-warning") && e.replaceWith('<div class="alert-message alert-warning short-b">' + a + "</div>"), t.match("alert-error") && e.replaceWith('<div class="alert-message alert-error short-b">' + a + "</div>"), t.match("left-sidebar") && e.replaceWith("<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>"), t.match("right-sidebar") && e.replaceWith("<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>"), t.match("full-width") && e.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>"), t.match("code-box") && e.replaceWith('<pre class="code-box short-b">' + a + "</pre>"), $(".post-body .short-b").find("b").each(function() {
            var e = $(this),
                t = e.text().trim();
            (t.match("alert-success") || t.match("alert-info") || t.match("alert-warning") || t.match("alert-error") || t.match("code-box")) && e.replaceWith("")
        })
    }), $(".freebify-free-share-links .window-ify").on("click", function() {
        var e = $(this),
            t = e.data("url"),
            a = e.data("width"),
            r = e.data("height"),
            i = window.screen.width,
            s = window.screen.height,
            o = Math.round(i / 2 - a / 2),
            n = Math.round(s / 2 - r / 2);
        window.open(t, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + a + ",height=" + r + ",left=" + o + ",top=" + n).focus()
    }), $(".freebify-free-share-links").each(function() {
        var e = $(this);
        e.find(".show-hid a").on("click", function() {
            e.toggleClass("show-hidden")
        })
    }), $(".about-author .author-description span a").each(function() {
        var e = $(this),
            t = e.text().trim(),
            a = e.attr("href");
        e.replaceWith('<li class="' + t + '"><a href="' + a + '" title="' + t + '" target="_blank"/></li>'), $(".description-links").append($(".author-description span li")), $(".description-links").addClass("show")
    }), $(".freebify-free-related-content").each(function() {
        var e = $(this),
            t = e.find(".related-tag").attr("data-label");
        ajaxRelated(e, "related", relatedPostsNum, t, "getrelated")
    }), $(".freebify-free-blog-post-comments").each(function() {
        var e = $(this);
        switch (commentsSystem) {
            case "blogger":
            case "disqus":
            case "facebook":
                e.addClass("comments-system-blogger").show(), $(".entry-meta .entry-comments-link").addClass("show"), beautiAvatar(".avatar-image-container img");
                break;
            case "hide":
                e.hide();
                break;
            default:
                e.addClass("comments-system-blogger").show(), $(".entry-meta .entry-comments-link").addClass("show"), beautiAvatar(".avatar-image-container img")
        }
        var t = e.find(".comments .comment-reply"),
            a = e.find(".comments #top-continue"),
            r = e.find("#show-comment-form");
        t.on("click", function() {
            a.show(), e.addClass("comment-form-visible"), r.remove()
        }), a.on("click", function() {
            a.hide()
        }), r.on("click", function() {
            e.addClass("comment-form-visible"), r.remove()
        })
    }), $(function() {
        $(".index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.about-author .author-avatar").lazyify(), $("#freebify-free-mobile-menu").each(function() {
            var e = $(this),
                t = $("#freebify-free-main-menu-nav").clone();
            t.attr("id", "main-mobile-nav"), t.appendTo(e), $(".mobile-menu-toggle, .hide-freebify-free-mobile-menu, .overlay").on("click", function() {
                $("body").toggleClass("nav-active")
            }), $(".freebify-free-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".freebify-free-mobile-menu ul li .submenu-toggle").on("click", function(e) {
                $(this).parent().hasClass("has-sub") && (e.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
            })
        }), $(".mobile-navbar-menu").each(function() {
            var e = $(this);
            $("#footer-menu ul.link-list").clone().appendTo(e)
        }), $(".mobile-navbar-social").each(function() {
            var e = $(this),
                t = $("#footer-wrapper ul.social").first().clone();
            t.removeClass("social-bg-hover"), t.appendTo(e)
        }), $(".headerify-wrap .headerify").each(function() {
            var e = $(this);
            if (1 == fixedMenu && e.length > 0) {
                var t = $(document).scrollTop(),
                    a = e.offset().top,
                    r = e.height(),
                    i = a + r;
                $(window).scroll(function() {
                    var a = $(document).scrollTop();
                    a < $("#footer-wrapper").offset().top - r && (a > i ? e.addClass("is-fixed") : a <= 0 && e.removeClass("is-fixed"), a > t ? e.removeClass("show") : e.addClass("show"), t = $(document).scrollTop())
                })
            }
        }), $(".is-single #main-wrapper, .is-single #sidebar-wrapper").each(function() {
            1 == fixedSidebar && $(this).theiaStickySidebarIfy({
                containerSelector: "#content-wrapper > .container",
                additionalMarginTop: 35,
                additionalMarginBottom: 35
            })
        }), $("#post-body iframe").each(function() {
            var e = $(this);
            e.attr("src").match("www.youtube.com") && e.wrap('<div class="responsive-video-wrap"/>')
        }), $("p.comment-content").each(function() {
            var e = $(this);
            e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
        }), $("#freebify-free-load-more-link").each(function() {
            var e = $(this).data("load");
            e && $("#freebify-free-load-more-link").show(), $("#freebify-free-load-more-link").on("click", function(t) {
                $("#freebify-free-load-more-link").hide(), $.ajax({
                    url: e,
                    success: function(t) {
                        var a = $(t).find(".blog-posts");
                        a.find(".index-post").addClass("post-animated post-fadeInUp"), $(".blog-posts").append(a.html()), (e = $(t).find("#freebify-free-load-more-link").data("load")) ? $("#freebify-free-load-more-link").show() : ($("#freebify-free-load-more-link").hide(), $("#blog-pager .no-more").addClass("show")), $(".index-post .entry-image-wrap .entry-thumb").lazyify()
                    },
                    beforeSend: function() {
                        $("#blog-pager .loading").show()
                    },
                    complete: function() {
                        $("#blog-pager .loading").hide()
                    }
                }), t.preventDefault()
            })
        }), $("#back-top").each(function() {
            var e = $(this);
            $(window).on("scroll", function() {
                $(this).scrollTop() >= 100 ? e.fadeIn(250) : e.fadeOut(250), e.offset().top >= $("#footer-wrapper").offset().top - 36 ? e.addClass("on-footer") : e.removeClass("on-footer")
            }), e.on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 500)
            })
        })
    });
