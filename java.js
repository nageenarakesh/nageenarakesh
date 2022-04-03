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
