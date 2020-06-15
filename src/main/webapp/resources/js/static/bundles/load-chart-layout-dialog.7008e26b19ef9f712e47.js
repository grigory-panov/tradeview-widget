webpackJsonp([22,1],{1134:function(t,e,i){"use strict";function o(t,e,i){e.toggleClass("i-hidden",""===t.val()),i.fire(t.val())}function s(t){var e,i,s,a=$(h);return t.addClass&&a.addClass(t.addClass),t.withoutControls&&a.addClass("tv-search-row--without-controls"),e=a.find(".js-input-control"),i=a.find(".js-reset-button"),t.placeholder&&e.attr("placeholder",t.placeholder),i[0].addEventListener("click",function(){e.val("").trigger("input").focus()}),s=new n.a,e.on("input propertychange",o.bind(null,e,i,s)),o(e,i,s),{$control:a,$input:e,inputChangedDelegate:s}}var a,n,r,l,c,h;Object.defineProperty(e,"__esModule",{value:!0}),e.createSearchControl=s,a=i(8),n=i.n(a),r=i(382),i.n(r),l=i(1135),i.n(l),c=i(1136),i.n(c),h='<div class="tv-search-row"><input class="tv-search-row__input js-input-control" type="text" name="q" value="" autocomplete="off"><span class="tv-search-row__input-reset i-hidden js-reset-button">'+r+'</span><span class="tv-search-row__search-icon">'+l+"</span></div>"},1135:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18px" height="18px"><path fill-rule="evenodd" d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"/></svg>'},1136:function(t,e){},1260:function(t,e,i){"use strict";function o(t,e){this.fieldsExtractor=t,this.callback=e,this.regExps=[]}var s=i(378).regExpEscape;o.prototype.onInput=function(t){this.query=t,this.createRegexps(t),this.search()},o.prototype.createRegexps=function(t){this.regExps=[],t&&this.regExps.push(RegExp("("+t.split("").map(function(t){return s(t)}).join(")(.*?)(")+")","i"))},o.prototype.match=function(t){var e,i,o,s;for(e=0;e<this.regExps.length;e++)for(i=this.regExps[e],i.lastIndex=0,o=this.fieldsExtractor(t),s=0;s<o.length;s++)if(i.test(o[s]))return!0;return 0===this.regExps.length},o.prototype.search=function(){var t,e,i=[];for(t=0;t<this.items.length;t++)e=this.items[t],this.match(e)&&i.push(e);this.callback(i,this.regExps)},o.prototype.setItems=function(t){this.items=t},t.exports.QuickSearch=o},1261:function(t,e,i){"use strict";function o(t){this.isAscending=!1,this.sortingFunc=t}o.prototype.getPredicate=function(){return function(t,e){var i=this.sortingFunc(t,e);return this.isAscending&&(i*=-1),i}.bind(this)},o.prototype.inverse=function(){this.isAscending=!this.isAscending},o.prototype.setIsAscending=function(t){return"boolean"==typeof t&&(this.isAscending=t),this.isAscending},o.prototype.reset=function(){this.isAscending=!1},t.exports.SortObject=o},1262:function(t,e,i){"use strict";function o(t,e){var i,o,s,a,n,r;if(t=$("<div>").text(t).html(),0===e.length)return t;for(i=0;i<e.length;i++){if(o=e[i],o.lastIndex=0,s="",a="",(n=o.exec(t))&&n.length)for(r=1;r<n.length;r++)s+=r%2?'<span class="i-match">$'+r+"</span>":"$"+r;if((a=t.replace(o,s))&&a!==t)return a}}t.exports.highlightText=o},1263:function(t,e){},1460:function(t,e,i){"use strict";(function(e,o,s){function a(){
this.title=$.t("Load Chart Layout"),this._removeDialogShown=!1,this.options={},this.matchedItems=[],this.itemsData=[],this.qs=new p(this.fieldsExtractor,this.searchResult.bind(this)),this.sortObj=new f(this.modifiedCompare),this.nameSort=new f(this.nameCompare),this.symbolSort=new f(this.symbolCompare),this.toolsSort=new f(this.toolsCompare),this.offset=0,h.on("chart_loaded",a.onChartLoaded,this)}function n(t){return t.getAttribute("data-id")}var r,l,c,h=i(38),d=i(78).createDialog,u=i(1134).createSearchControl,p=i(1260).QuickSearch,f=i(1261).SortObject,v=i(1262).highlightText;r='<div class="js-table-row tv-load-chart-dialog-table__row tv-load-chart-dialog-table__row--item {{^withFavs}}tv-load-chart-dialog-table__row--item-without-favs{{/withFavs}} {{#isActive}}i-active{{/isActive}}" data-id="{{id}}">{{#withFavs}}<div class="tv-load-chart-dialog-table__favorite-icon-container {{#starred}}i-starred{{/starred}}" ><span data-id="{{id}}" class="js-empty-star tv-load-chart-dialog-table__star-icon tv-load-chart-dialog-table__star-icon--empty" title="'+$.t("Add to favorites")+'">'+i(977)+'</span><span data-id="{{id}}" class="js-filled-star tv-load-chart-dialog-table__star-icon tv-load-chart-dialog-table__star-icon--filled" title="'+$.t("Remove from favorites")+'">'+i(976)+'</span></div>{{/withFavs}}<div class="js-column-name tv-load-chart-dialog-table__column tv-load-chart-dialog-table__column--item tv-load-chart-dialog-table__column-name">{{title}}</div><div class="js-column-modified tv-load-chart-dialog-table__column tv-load-chart-dialog-table__column--item tv-load-chart-dialog-table__column-modified">{{modifiedDate}}</div><div class="js-column-symbol tv-load-chart-dialog-table__column tv-load-chart-dialog-table__column--item tv-load-chart-dialog-table__column-symbol">{{chartSymbol}}</div><div data-id="{{id}}" class="js-remove-button tv-load-chart-dialog-table__column-name-action tv-load-chart-dialog-table__remove-icon" title="'+$.t("Delete chart layout")+'">'+i(227)+"</div></div>",l='<div class="tv-load-chart-dialog-table__row tv-load-chart-dialog-table__row--header"><div class="js-column-name tv-load-chart-dialog-table__column tv-load-chart-dialog-table__column--header tv-load-chart-dialog-table__column-name">'+$.t("Chart Layout Name")+'<span class="tv-caret tv-load-chart-dialog-table__caret"></span></div><div class="js-column-modified tv-load-chart-dialog-table__column tv-load-chart-dialog-table__column--header tv-load-chart-dialog-table__column-modified">'+$.t("Last Modified")+'<span class="tv-caret tv-load-chart-dialog-table__caret"></span></div><div class="js-column-symbol tv-load-chart-dialog-table__column tv-load-chart-dialog-table__column--header tv-load-chart-dialog-table__column-symbol">'+$.t("Active Symbol")+'<span class="tv-caret tv-load-chart-dialog-table__caret"></span></div></div>',c=50,a.onChartLoaded=function(){this.itemsData&&this.itemsData.length>0&&this._refreshChartsList()},a.prototype.fieldsExtractor=function(t){var e=a.symbolWrap(t);return[t.title,e]},a.prototype.saveFavorite=function(t,e){
e?this.favorites[t]=e:delete this.favorites[t]},a.prototype.filterFavorites=function(){var t={};this.itemsData.map(function(e){this.favorites.hasOwnProperty(e.id)&&(t[e.id]=!0)}.bind(this)),this.favorites=t},a.prototype.getFavorite=function(t){return this.favorites.hasOwnProperty(t)},a.prototype._onFavoriteClicked=function(t,e,i){this.saveFavorite(t.id,e),this.filterFavorites(),this.fillList(),t.favoriteAction(this.favorites),i.preventDefault()},a.prototype._onItemClicked=function(t,e){e.defaultPrevented||(e.preventDefault(),t.openAction())},a.prototype._onRemoveButtonClicked=function(t,e){var i=this,o=$.Deferred();this._removeDialogShown=!0,o.done(function(){i.removeItem(t)}).always(function(){setTimeout(function(){i._removeDialogShown=!1})}),t.deleteAction(o,t.title),e.preventDefault()},a.prototype._createListItem=function(t){return e.render(r,{id:t.id,isActive:t.active(),title:t.title,url:t.url,withFavs:o.enabled("items_favoriting"),starred:this.getFavorite(t.id),modifiedDate:s.unix(t.modified).format("L LT"),chartSymbol:""===t.symbol?"multiple charts":t.symbol+", "+t.interval})},a.prototype.removeItem=function(t){var e=this.itemsData.indexOf(t);e>-1&&this.itemsData.splice(e,1),this.setChartsData(this.itemsData)},a.prototype.modifiedCompare=function(t,e){var i=t.modified,o=e.modified;return s(o).diff(s(i))},a.prototype.nameCompare=function(t,e){return t.title.localeCompare(e.title)},a.symbolWrap=function(t){return""===t.symbol?"multiple charts":t.symbol+" "+t.interval},a.prototype.symbolCompare=function(t,e){return a.symbolWrap(t).localeCompare(a.symbolWrap(e))},a.prototype.toolsCompare=function(t,e){var i=t.toolsCount,o=e.toolsCount;return i<o?-1:i===o?0:1},a.prototype.sortClick=function(t){this.setSort($(t.target).data("sort"),!0),this.fillList()},a.prototype.setSort=function(t,e){var i,o,s={field:TVSettings.getValue("loadChartDialog.sort.field")||"modified",isAscending:TVSettings.getValue("loadChartDialog.sort.asc")||"0"},a=t||s.field,n=e?"0"===s.isAscending?"1":"0":s.isAscending;this.currentSortObj&&!(i=a!==s.field)||(this.currentSortObj="name"===a?this.nameSort:"symbol"===a?this.symbolSort:"tools"===a?this.toolsSort:this.sortObj,i&&TVSettings.setValue("loadChartDialog.sort.field",a)),this.currentSortObj.setIsAscending("1"===n),n!==s.isAscending&&TVSettings.setValue("loadChartDialog.sort.asc",n),o=this,$.each(this.header.children(".tv-load-chart-dialog-table__column--header"),function(){var t=$(this),e=t.data("sort")===a;t.removeClass("i-active i-dropped"),e&&t.addClass("i-active "+(o.currentSortObj.isAscending?"":"i-dropped"))})},a.prototype.sortList=function(){var t,e=[],i=[];this.matchedItems.map(function(t){this.favorites.hasOwnProperty(t.id)?e.push(t):i.push(t)}.bind(this)),void 0!==this.currentSortObj&&(t=this.currentSortObj.getPredicate(),i.sort(t),e.sort(t)),this.matchedItems=e.concat(i)},a.prototype.showMoreData=function(){var t,e,i;if(!(this.offset>=this.matchedItems.length)){for(t=Math.min(this.offset+c,this.matchedItems.length),e="",
i=this.offset;i<t;++i)e+=this._createListItem(this.matchedItems[i]);this.itemsList[0].insertAdjacentHTML("beforeend",e),this.offset+=c}},a.prototype.fillList=function(){this.sortList(),this.offset=0,this.itemsList[0].innerHTML="",this.showMoreData(),this.itemsListContainer.toggleClass("i-empty",0===this.itemsData.length),this.highlightOccurrences(this.qs.regExps),this._dialog&&(this.itemsListContainer[0].scrollTop=0)},a.prototype.searchResult=function(t,e){this.matchedItems=t,this.fillList()},a.prototype.updateChartsData=function(t){this.setChartsData(t)},a.prototype.updateFavoritesData=function(t){this.favorites=t,this.itemsList&&this.qs.search()},a.prototype.updateChartsAndFavoritesData=function(t,e){this.favorites=e,this.itemsList&&(this.itemsData=t,this.qs.setItems(t),this.qs.search())},a.prototype._refreshChartsList=function(){this.qs.setItems(this.itemsData),this.qs.search()},a.prototype.setChartsData=function(t){this.itemsList&&(this.itemsData=t,this.qs.setItems(t),this.qs.search())},a.prototype.layoutHeader=function(){var t=$(l);return t.find(".js-column-name").data("sort","name"),t.find(".js-column-modified").data("sort","modified"),t.find(".js-column-symbol").data("sort","symbol"),t.appendTo(this.content),t},a.prototype.resetSort=function(){this.sortObj.reset(),this.nameSort.reset(),this.symbolSort.reset(),this.toolsSort.reset(),this.currentSortObj=this.sortObj},a.prototype._findItemById=function(t){var e=+t;return this.itemsData.find(function(i){return i.id===e||i.id===t})},a.prototype.show=function(t,e){var i=this,s=u({placeholder:$.t("Search")}),a=$("<div>");a.append(s.$control),a.append('<div class="tv-load-chart-dialog-table">'),this.content=$("<div>").appendTo(a.find(".tv-load-chart-dialog-table")),this.header=this.layoutHeader(),this.setSort(),this.itemsListContainer=$('<div class="tv-load-chart-dialog-table__items-list-container">').data({localScroll:!0}).appendTo(this.content),this.itemsList=$('<div class="tv-load-chart-dialog-table__items-list">').appendTo(this.itemsListContainer),$('<div class="tv-load-chart-dialog-table__empty-list-placeholder">').text($.t("There are no saved charts")).appendTo(this.itemsListContainer),this.itemsListContainer.on("click",".js-remove-button",function(t){var e=i._findItemById(n(t.currentTarget));i._onRemoveButtonClicked(e,t),t.stopPropagation()}).on("click",".js-table-row",function(t){var e=i._findItemById(n(t.currentTarget));i._onItemClicked(e,t),t.preventDefault()}).on("scrolltoend",function(){i.showMoreData()}),o.enabled("items_favoriting")&&this.itemsListContainer.on("click",".js-empty-star",function(t){var e=i._findItemById(n(t.currentTarget));i._onFavoriteClicked(e,!0,t),t.stopPropagation()}).on("click",".js-filled-star",function(t){var e=i._findItemById(n(t.currentTarget));i._onFavoriteClicked(e,!1,t),t.stopPropagation()}),this.header.children(".tv-load-chart-dialog-table__column--header").click($.proxy(this,"sortClick")),s.inputChangedDelegate.subscribe(this.qs,this.qs.onInput),this.favorites=e,this.setChartsData(t),this.qs.onInput(""),
this._dialog&&this._dialog.close(),this._dialog=d({title:this.title,width:600,height:550,content:a,contentWrapTemplate:"<div>",destroyOnClose:!0,withScroll:!1,isClickOutFn:function(){return!this._removeDialogShown&&void 0}.bind(this)}),this._dialog.open()},a.prototype.highlightOccurrences=function(t){0!==t.length&&this.itemsList.children(".js-table-row").each(function(){var e,i=$(this).find(".js-column-name"),o=i.text();o=v(o,t),i.html(o),e=$(this).find(".js-column-symbol"),o=e.text(),o=v(o,t),e.html(o)})},t.exports.LoadChartDialog=a}).call(e,i(94),i(4),i(224))},78:function(t,e,i){"use strict";function o(t){var e=t.type||"popup";return delete t.type,"modal"===e?new s.TVModal(t):new a.TVPopup(t)}var s,a;Object.defineProperty(e,"__esModule",{value:!0}),e.createDialog=o,s=i(368),a=i(959)},959:function(t,e,i){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),o=i(960),i.n(o),i.o(o,"TVPopup")&&i.d(e,"TVPopup",function(){return o.TVPopup})},960:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t){var e,i;if(t&&t.__esModule)return t;if(e={},null!=t)for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l,c,h,d,u,p,f,v,g,m,_,b,y;Object.defineProperty(e,"__esModule",{value:!0}),e.TVPopup=void 0,l=Object.assign||function(t){var e,i,o;for(e=1;e<arguments.length;e++){i=arguments[e];for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},c=function(){function t(t,e){var i,o;for(i=0;i<e.length;i++)o=e[i],o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),h=i(77),d=s(h),u=i(221),p=o(u),f=i(222),v=i(148),g=i(220),m=$("body"),_=$(window),b={closeOnClickAtOtherDialogs:!0,draggable:!0,scrollWrap:'<div class="tv-dialog__scroll-wrap">',scrollWrapInner:'<div class="tv-dialog__scroll-wrap-inner">',withScroll:!0},y="js-dialog__scroll-wrap",e.TVPopup=function(t){function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(this,e),t=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,l({},b,i))),t.$scrollWrap=t.$content.hasClass(y)?t.$content:t.$content.find("."+y),t.$scrollWrap.length?t.$scrollWrapInner=t.$scrollWrap.children().first():(t.$scrollWrap=t.$content.wrap($(t.options.scrollWrap)).parent(),t.$scrollWrapInner=t.$content.wrap($(t.options.scrollWrapInner)).parent()),
t.$actions&&t.$scrollWrap.addClass("i-with-actions"),t.options.withScroll&&(t.scroll=new v.SidebarCustomScroll(t.$scrollWrap,t.$scrollWrapInner),t.scroll.scrolled.subscribe(null,function(){return t.trigger("scroll")})),t.$scrollWrap.css("overflow",""),t.$el.addClass("tv-dialog--popup i-closed i-hidden"),t.options.width&&t.$el.css({width:"calc(100% - 20px)","max-width":t.options.width}),t.$el.on("mousedown touchstart",t.toTop.bind(t)),t.options.closeOnOutsideClick&&(t.on("beforeOpen",function(){setTimeout(function(){t.opened&&$(document).on("click.tv-popup-"+t.id,function(e){var i=$(e.target).closest(".js-dialog");(t.options.closeOnClickAtOtherDialogs||0===i.length)&&t.isEventOut(e)&&t.close()})},0)}),t.on("beforeClose",function(){return $(document).off("click.tv-popup-"+t.id)})),t.on("change:zIndex",function(){t.$el.css("z-index",t.zIndex)}),t.on("destroy",function(){var e=function(){t.$el.remove()};t.opened?(t.close(),setTimeout(e,d.dur/2)):e()}),t}return r(e,t),c(e,[{key:"open",value:function(){var t=this;return this.opened?this:(this.opened=!0,this.trigger("beforeOpen",[this]),this.$el.appendTo(this.options.$wrap).removeClass("i-hidden").css(function(){var e,i,o,s,a;return t.calcHeight(),e=_.height(),i=_.width(),o=t.$el.height(),s=t.$el.width(),a=t.options.position,a||(a={top:e/2-o/2,left:i/2-s/2}),a.top>e-o&&(a.top=e-o),a.left>i-s&&(a.left=i-s),a}()),this.focus(),this.toTop(),this._doOpenAnimation().then(function(){t.opened&&(t.$el.removeClass("i-closed"),t.options.draggable&&((0,g.lazyJqueryUI)(t.$el).draggable({handle:".js-dialog__drag",cancel:"input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close",containment:"window",cursor:"-webkit-grabbing"}),t.$el.find(".js-dialog__drag").addClass("tv-dialog__grab")),t.trigger("afterOpen",[t]))}),_.on("resize.tv-popup-"+this.id,function(){t.calcHeight(),t.fixPos()}),this)}},{key:"close",value:function(){var t=this;if(this.opened)return this.trigger("beforeClose",[this]),this.$el.addClass("i-closed"),this.opened=!1,this._doCloseAnimation().then(function(){t.opened||((0,g.lazyJqueryUI)(t.$el).draggable("instance").then(function(t){t&&t.destroy()}),t.$el.addClass("i-hidden").detach(),m.css("cursor","auto"),t.trigger("afterClose",[t]),t.options.destroyOnClose&&t.destroy())}),_.off("resize.tv-popup-"+this.id),this}},{key:"hide",value:function(){this.$el.addClass("i-hidden")}},{key:"show",value:function(){this.$el.removeClass("i-hidden")}},{key:"fixPos",value:function(){var t=this.$el[0].getBoundingClientRect(),e={};t.bottom>p.default.height-10&&(e.top=p.default.height-10-t.height,e.top<10&&(e.top=10)),t.right>p.default.width-10&&(e.left=p.default.width-10-t.width,e.left<10&&(e.left=10)),(e.top||e.left)&&this.$el.css(e)}},{key:"calcHeight",value:function(){var t,e,i=this.$el[0].getBoundingClientRect(),o=this.$scrollWrapInner[0].getBoundingClientRect(),s=this.$scrollWrap[0].getBoundingClientRect(),a=this.options.height&&this.options.height<p.default.height-20?this.options.height:p.default.height-20;this.$scrollWrap.css({height:""
}).removeClass("i-scrollable"),t=this.$el[0].getBoundingClientRect(),(this.options.height||t.height>a)&&(a-=i.height-s.height,a<60&&(a=60),this.$scrollWrap.css({height:a})),this.options.withScroll&&this.scroll.resize(),e=a<o.height,e||this.$scrollWrapInner.css("top",0),this.$scrollWrap.toggleClass("i-scrollable",e),this.$actions&&this.$actions.toggleClass("tv-dialog__section--actions_with-border",e)}},{key:"updateScroll",value:function(){this.scroll&&(this.scroll.updateScroll(),this.scroll.updateScrollBar())}},{key:"scrollToStart",value:function(){this.scroll&&this.scroll.scrollToStart()}},{key:"_doOpenAnimation",value:function(){return Promise.resolve()}},{key:"_doCloseAnimation",value:function(){return Promise.resolve()}}]),e}(f.TVDialogAbstract)},976:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill-rule="evenodd" d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'},977:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'}});