webpackJsonp([18],{1080:function(e,t,n){"use strict";function o(e){var t,n=e.rounded,o=void 0===n||n,a=e.shadowed,u=void 0===a||a,c=e.fullscreen,l=void 0!==c&&c,d=e.className,p=void 0===d?"":d,h=s(r.dialog,(t={},t[p]=!!p,t[r.rounded]=o,t[r.shadowed]=u,t[r.fullscreen]=l,t[r.animated]=r.animated,t)),f={bottom:e.bottom,left:e.left,maxWidth:e.width,right:e.right,top:e.top,zIndex:e.zIndex};return i.createElement("div",{className:h,ref:e.reference,style:f,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onClick:e.onClick,onKeyDown:e.onKeyDown,tabIndex:-1},e.children)}var i,r,s;t.a=o,i=n(21),n.n(i),r=n(1081),n.n(r),s=n(116),n.n(s)},1081:function(e,t){e.exports={dialog:"dialog-37P3XYj--",rounded:"rounded-2hsCfk1q-",shadowed:"shadowed-1iGQR9Xl-",fullscreen:"fullscreen-1I0OIOcc-"}},1082:function(e,t,n){"use strict";function o(){u=document.createElement("div"),document.body.appendChild(u),i()}function i(e){g.render(f.createElement(m.TransitionGroup,{component:"div"},Array.from(w.values())),u,e)}function r(e){var t;return t=function(t){function n(e){var n=t.call(this,e)||this;return n._registerWillEnterCb=function(e){n._willEnter.push(e)},n._registerDidEnterCb=function(e){n._didEnter.push(e)},n._registerWillLeaveCb=function(e){n._willLeave.push(e)},n._registerDidLeaveCb=function(e){n._didLeave.push(e)},n._willEnter=[],n._didEnter=[],n._willLeave=[],n._didLeave=[],n}return h.c(n,t),n.prototype.getChildContext=function(){return{lifecycleProvider:{registerWillEnterCb:this._registerWillEnterCb,registerDidEnterCb:this._registerDidEnterCb,registerWillLeaveCb:this._registerWillLeaveCb,registerDidLeaveCb:this._registerDidLeaveCb}}},n.prototype.componentWillEnter=function(e){var t=this._willEnter.map(function(e){return new Promise(function(t){e(t)})});Promise.all(t).then(e)},n.prototype.componentDidEnter=function(){this._didEnter.forEach(function(e){e()})},n.prototype.componentWillLeave=function(e){var t=this._willLeave.map(function(e){return new Promise(function(t){e(t)})});Promise.all(t).then(e)},n.prototype.componentDidLeave=function(){this._didLeave.forEach(function(e){e()})},n.prototype.render=function(){return f.createElement(e,h.a({},this.props),this.props.children)},n}(f.PureComponent),t.displayName="Lifecycle Provider",t.childContextTypes={lifecycleProvider:l.object},t}function s(e){var t;return t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return h.c(n,t),n.prototype.componentWillEnter=function(e){this.props.beforeOpen?this.props.beforeOpen(e):e()},n.prototype.componentDidEnter=function(){this.props.afterOpen&&this.props.afterOpen()},n.prototype.componentWillLeave=function(e){this.props.beforeClose?this.props.beforeClose(e):e()},n.prototype.componentDidLeave=function(){this.props.afterClose&&this.props.afterClose()},n.prototype.render=function(){return f.createElement(e,h.a({},this.props))},n}(f.PureComponent),t.displayName="OverlapLifecycle("+(e.displayName||"Component")+")",t}function a(e){var t,n=r(Object(d.a)(s(e)));return t=function(e){function t(t){var n=e.call(this,t)||this
;return n._onZIndexUpdate=function(){n.props.isOpened&&("parent"===n.props.root?n.forceUpdate():n._renderWindow(n.props))},n._uuid=Object(p.guid)(),n._zIndexUpdateEvent=E.ZindexUpdate+":"+n._uuid,n}return h.c(t,e),t.prototype.componentDidMount=function(){this._subscribe()},t.prototype.componentDidUpdate=function(e){e.isOpened!==this.props.isOpened&&this.props.isOpened&&c.notifyWindows(E.ZindexUpdate,this._uuid)},t.prototype.componentWillUnmount=function(){this._unsubscribe(),c.removeWindow(this._uuid)},t.prototype.componentWillReceiveProps=function(e){"parent"!==this.props.root&&this._renderWindow(e)},t.prototype.render=function(){return"parent"===this.props.root?f.createElement(m.TransitionGroup,{component:"div"},this._createContent(this.props)):null},t.prototype._renderWindow=function(e){c.renderWindow(this._uuid,this._createContent(e))},t.prototype._createContent=function(e){return e.isOpened?(c.registerWindow(this._uuid),f.createElement(n,h.a({},e,{key:this._uuid,zIndex:c.getZindex(this._uuid)}),e.children)):(c.unregisterWindow(this._uuid),null)},t.prototype._subscribe=function(){c.getStream().on(this._zIndexUpdateEvent,this._onZIndexUpdate)},t.prototype._unsubscribe=function(){c.getStream().off(this._zIndexUpdateEvent,this._onZIndexUpdate)},t}(f.PureComponent),t.displayName="Overlapable("+(e.displayName||"Component")+")",t}var u,c,l,d,p,h=n(0),f=n(21),m=n(360),g=n(67),_=n(153),v=n.n(_),y=function(){function e(){this._storage=[]}return e.prototype.add=function(e){this._storage.push(e)},e.prototype.remove=function(e){this._storage=this._storage.filter(function(t){return e!==t})},e.prototype.getIndex=function(e){return this._storage.findIndex(function(t){return e===t})},e.prototype.toTop=function(e){this.remove(e),this.add(e)},e.prototype.has=function(e){return this._storage.includes(e)},e.prototype.getItems=function(){return this._storage},e}(),E={ZindexUpdate:"ZindexUpdate"},b=new y,D=new v.a,w=new Map;!function(e){function t(e){b.has(e)||b.add(e)}function n(e){b.remove(e),w.delete(e)}function o(e){return b.getIndex(e)+150}function r(e,t,n){w.set(e,t),i(n)}function s(e,t){n(e),i(t)}function a(){return D}function u(e,t){b.getItems().forEach(function(n){n!==t&&D.emitEvent(e+":"+n)})}e.registerWindow=t,e.unregisterWindow=n,e.getZindex=o,e.renderWindow=r,e.removeWindow=s,e.getStream=a,e.notifyWindows=u}(c||(c={})),o(),l=n(118),d=n(975),p=n(26),t.a=a},1083:function(e,t,n){"use strict";function o(e){var t=e.hideIcon?null:a.createElement(l.a,{className:u.close,icon:c,onClick:e.onClose});return a.createElement("div",{className:u.header,"data-dragg-area":!0,ref:e.reference},e.children,t)}function i(e){return a.createElement("div",{className:d.footer,ref:e.reference},e.children)}function r(e){return a.createElement("div",{className:p.body,ref:e.reference},e.children)}function s(e){var t,n;return e.text?t=a.createElement("span",null,e.text):e.html&&(t=a.createElement("span",{dangerouslySetInnerHTML:{__html:e.html}})),n=h.message,e.isError&&(n+=" "+h.error),a.createElement(f.CSSTransitionGroup,{transitionName:"message",
transitionEnterTimeout:g.dur,transitionLeaveTimeout:g.dur},t?a.createElement("div",{className:n,key:"0"},a.createElement(m.a,{mouseDown:!0,touchStart:!0,handler:e.onClickOutside},t)):null)}var a=n(21),u=n(1084),c=n(227),l=n(359),d=n(1085),p=n(1086),h=n(1087),f=n(360),m=n(363),g=n(77);n.d(t,"b",function(){return o}),n.d(t,!1,function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s})},1084:function(e,t){e.exports={header:"header-dpl-vtN_-",close:"close-3kPn4OTV-"}},1085:function(e,t){e.exports={footer:"footer-2Zoji8zg-"}},1086:function(e,t){e.exports={body:"body-2N-vuwQW-"}},1087:function(e,t){e.exports={message:"message-2o-rtQm0-",error:"error-2EW0C6z--"}},1154:function(e,t,n){"use strict";function o(e,t,n){return e+t>n&&(e=n-t),e<0&&(e=0),e}function i(e){return{x:e.pageX,y:e.pageY}}function r(e){return{x:e.touches[0].pageX,y:e.touches[0].pageY}}function s(e,t,n){return e+t>n&&(e=n-t),e<0&&(e=0),e}var a,u,c=n(0),l=n(21),d=n(1080),p=n(1082),h=n(975),f=n(363),m=n(1155),g=function(){function e(e,t){var n=this;this._drag=null,this._onMouseDragStart=function(e){e.preventDefault(),document.addEventListener("mousemove",n._onMouseDragMove),n._dragStart(i(e))},this._onTouchDragStart=function(e){document.addEventListener("touchmove",n._onTouchDragMove),n._dragStart(r(e))},this._onMouseDragEnd=function(e){e.preventDefault(),document.removeEventListener("mousemove",n._onMouseDragMove),n._onDragStop()},this._onTouchDragEnd=function(e){document.removeEventListener("touchmove",n._onTouchDragMove),n._onDragStop()},this._onMouseDragMove=function(e){n._dragMove(i(e))},this._onTouchDragMove=function(e){e.preventDefault(),n._dragMove(r(e))},this._onDragStop=function(){n._drag=null,n._header.classList.remove("dragging")},this._dialog=e,this._header=t,this._header.addEventListener("mousedown",this._onMouseDragStart),document.addEventListener("mouseup",this._onMouseDragEnd),this._header.addEventListener("touchstart",this._onTouchDragStart),this._header.addEventListener("touchend",this._onTouchDragEnd),document.addEventListener("mouseleave",this._onMouseDragEnd)}return e.prototype.destroy=function(){this._header.removeEventListener("mousedown",this._onMouseDragStart),document.removeEventListener("mouseup",this._onMouseDragEnd),this._header.removeEventListener("touchstart",this._onTouchDragStart),this._header.removeEventListener("touchend",this._onTouchDragEnd),document.removeEventListener("mouseleave",this._onMouseDragEnd)},e.prototype._dragStart=function(e){var t=this._dialog.getBoundingClientRect();this._drag={startX:e.x,startY:e.y,dialogX:t.left,dialogY:t.top},this._dialog.style.left=t.left+"px",this._dialog.style.top=t.top+"px",this._header.classList.add("dragging")},e.prototype._dragMove=function(e){var t,n;this._drag&&(t=e.x-this._drag.startX,n=e.y-this._drag.startY,this._moveDialog(this._drag.dialogX+t,this._drag.dialogY+n))},e.prototype._moveDialog=function(e,t){var n=this._dialog.getBoundingClientRect();this._dialog.style.left=o(e,n.width,window.innerWidth)+"px",
this._dialog.style.top=o(t,n.height,window.innerHeight)+"px"},e}(),_=function(){function e(e){this._onResizeThrottled=requestAnimationFrame.bind(null,this._onResize.bind(this)),this._dialog=e,this._initialHeight=e.style.height,window.addEventListener("resize",this._onResizeThrottled)}return e.prototype.centerAndFit=function(){var e,t,n=document.documentElement,o=n.clientHeight,i=n.clientWidth,r=this._dialog.getBoundingClientRect(),s=r.height;o<s&&(s=o,this._dialog.style.height=s+"px"),e=i/2-r.width/2,this._dialog.style.left=e+"px",t=o/2-s/2,this._dialog.style.top=t+"px"},e.prototype.destroy=function(){window.removeEventListener("resize",this._onResizeThrottled)},e.prototype._onResize=function(){var e,t=document.documentElement,n=t.clientHeight,o=t.clientWidth,i=this._dialog.getBoundingClientRect(),r=s(i.left,i.width,o);r!==i.left&&(this._dialog.style.left=r+"px"),e=s(i.top,i.height,n),e!==i.top&&(this._dialog.style.top=e+"px"),this._dialog.style.height=n<i.height?n+"px":this._initialHeight},e}(),v=n(116);n.d(t,"a",function(){return u}),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._setDialog=function(e){e&&(t._dialog=e)},t}return c.c(t,e),t.prototype.render=function(){return l.createElement(f.a,{mouseDown:!0,touchStart:!0,handler:this.props.onClickOutside},l.createElement(d.a,c.a({},this.props,{reference:this._setDialog,className:v(m.dialog,this.props.className)}),this.props.children))},t.prototype.componentDidMount=function(){if(this._dialog){var e=this._dialog.querySelector("[data-dragg-area]");e&&(this._drag=new g(this._dialog,e)),this._resize=new _(this._dialog)}},t.prototype.componentWillEnter=function(e){this._resize&&this._resize.centerAndFit(),e()},t.prototype.componentWillUnmount=function(){this._drag&&this._drag.destroy(),this._resize&&this._resize.destroy()},t}(l.PureComponent),u=Object(p.a)(Object(h.a)(a))},1155:function(e,t){e.exports={dialog:"dialog-aQQq411q-",dragging:"dragging-3fV74VcN-"}},1378:function(e,t,n){"use strict";function o(e){var t=e.value||e.defValue||"-";return e.setHtml?r.createElement("span",{dangerouslySetInnerHTML:{__html:t}}):t}var i,r,s,a,u,c,l,d;Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SymbolInfoDialog",function(){return d}),i=n(0),n(9),r=n(21),n.n(r),s=n(1154),a=n(1083),u=n(1379),n.n(u),c=n(116),n.n(c),l=n(969),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.c(t,e),t.prototype.render=function(){return r.createElement(s.a,{className:u.popupDialog,isOpened:this.props.isOpened,onClickOutside:this.props.onClose},r.createElement(a.b,{onClose:this.props.onClose},window.t("Symbol Info")),r.createElement(a.a,null,r.createElement(l.a,{keyCode:27,handler:this.props.onClose}),r.createElement("div",{className:u.content},this._renderFields())))},t.prototype._renderFields=function(){return this.props.fields?this.props.fields.map(function(e){return r.createElement("div",{key:e.propName,className:u.row},r.createElement("div",{className:c(u.column,u.columnTitle)},r.createElement("span",{className:u.title
},e.title)),r.createElement("div",{className:c(u.column,u.columnValue)},r.createElement("span",{className:u.value},o(e))))}):[]},t}(r.PureComponent)},1379:function(e,t){e.exports={popupDialog:"popupDialog-2VK9ttEi-",content:"content-BtJ6qB4V-",row:"row-3iYHykfo-",column:"column-2FlX4ngi-",title:"title-22tx3Djt-",value:"value-2xvVEs1a-",columnTitle:"columnTitle-3ypCTDKd-",columnValue:"columnValue-Xr4j0qyI-"}},429:function(e,t,n){"use strict";(function(e,o){function i(e){return!s(e)&&!r(e,["QUANDL","BSE_EOD","NSE_EOD","LSE_EOD"])}function r(e,t){return e&&e.listed_exchange&&t.indexOf(e.listed_exchange)>=0}function s(e){return e&&e.type&&"economic"===e.type}function a(e){return e&&e.type&&"futures"===e.type&&e.front_contract}function u(e,t){var n,r,s,u,p,f;c({isOpened:!1}),null==e&&(e=x.symbol.value()),null!=e&&(e+="",n=t&&t.symbolInfo,r=[{title:$.t("Symbol Name"),propName:o.enabled("charting_library_base")?"name":"pro_name"},{title:$.t("Symbol Description"),propName:"description"},{title:$.t("Symbol Type"),propName:"type",formatter:function(e){return"bitcoin"===e?"crypto":e}},{title:$.t("Current Contract"),propName:"front_contract",visibility:a},{title:$.t("Point Value"),propName:"pointvalue"},{title:$.t("Exchange"),propName:"exchange"},{title:$.t("Listed Exchange"),propName:"listed_exchange"},{title:$.t("Currency"),propName:"currency_code",formatter:function(e){return e||"USD"},defValue:"USD"},{title:$.t("Price Scale"),propName:"pricescale"},{title:$.t("Min Move"),propName:"minmov"},{title:$.t("Min Move 2"),propName:"minmove2"},{title:$.t("Sector"),propName:"sector"},{title:$.t("Industry"),propName:"industry"},{title:$.t("Timezone"),propName:"timezone",formatter:l,visibility:i},{title:$.t("Session"),propName:"session",formatter:d,visibility:i,setHtml:!0}],s=0,n&&(s=h(n,r)),s<r.length&&(u="symbolinfodialog."+W.guid(),p=z("full"),p.subscribe(u,e,function(t,n){h(n.values,r),p.unsubscribe(u,e),c(f)})),f={isOpened:!0,onClose:function(){c({isOpened:!1}),C=null},fields:r},c(f))}function c(e){C||(C=document.createElement("div"),document.body.appendChild(C)),M.render(S.createElement(O,e),C)}function l(e){var t,n=L;for(t=0;t<n.length;t++)if(n[t].id===e)return n[t].title;return e}function d(e){return w(new T(e).entries()).join("<br>")}function p(e){return e||"-"}function h(e,t){var n,o,i,r=0;for(n=0;n<t.length;n++)(o=t[n].propName)in e&&(i=e[o],"minmove2"===o&&e.minmove2>0&&!e.fractional&&e.pricescale?(t[n].value=new N(e.pricescale/i).format(i/e.pricescale),t[n].title=$.t("Pip Size")):t[n].value=(t[n].formatter||p)(i),r++);return f(e,t),r}function f(e,t){var n,o;for(n=0;n<t.length;n++)o=t[n],void 0===o.visibility||o.visibility(e)||(t.splice(n,1),n--)}function m(e){var t,n;return e>P.minutesPerDay&&(e-=P.minutesPerDay),t=e%60,n=(e-t)/60,I(n,2)+":"+I(t,2)}function g(e){return e.reduce(function(e,t){var n=m(t.alignedStart())+"-"+m(t.alignedStart()+t.length()),o=t.dayOfWeek();return e.hasOwnProperty(n)?e[n].push(o):e[n]=[o],e},{})}function _(e){return e.match(j)[0]}function v(e,t){var n=_(e),o=_(t);return R[n]>R[o]}
function y(t,n,o){return k.IS_RTL&&(t=k.startWithLTR(t)),void 0===o?e.weekdaysMin(n-1)+" "+t:e.weekdaysMin(n-1)+"-"+e.weekdaysMin(o-1)+" "+t}function E(e){return 1===e?7:e-1}function b(e,t,n){return n?y(e,E(t),t):y(e,t)}function D(e,t){if(t){var n=e[0];e.unshift(E(n))}}function w(e){var t=g(e);return Object.keys(t).reduce(function(e,n){var o,i=t[n].sort(),r=n.split("-"),s=P.get_minutes_from_hhmm(r[0]),a=P.get_minutes_from_hhmm(r[1]),u=s>=a;return 1===i.length?(D(i,u),e.push(y(n,i[0]))):(o=[],i.forEach(function(t,r){var s=i[r+1];s&&t===s-1?o.push(t):t!==o[o.length-1]+1?e.push(b(n,t,u)):(o.push(t),D(o,u),e.push(y(n,o[0],o[o.length-1])),o.splice(0,o.length))})),e},[]).sort(v)}var C,x=n(57).linking,L=n(239).availableTimezones,N=n(13).PriceFormatter,W=n(26),S=n(21),M=n(67),O=n(1378).SymbolInfoDialog,T=n(426).ExchangeSession,P=n(34),I=n(13).numberToStringWithLeadingZero,k=n(29),z=n(46).getQuoteSessionInstance,U=[2,3,4,5,6,7,1].map(function(t){return e.weekdaysMin(t-1)}),j=RegExp(U.join("|")),R=U.reduce(function(e,t,n){return e[t]=n+1,e},{});t.showSymbolInfoDialog=u}).call(t,n(224),n(4))},969:function(e,t,n){"use strict";var o,i,r;n.d(t,"a",function(){return r}),o=n(0),i=n(21),n.n(i),r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handleKeyDown=function(e){e.keyCode===t.props.keyCode&&t.props.handler(e)},t}return o.c(t,e),t.prototype.componentDidMount=function(){document.addEventListener("keydown",this._handleKeyDown,!1)},t.prototype.componentWillUnmount=function(){document.removeEventListener("keydown",this._handleKeyDown,!1)},t.prototype.render=function(){return null},t}(i.PureComponent)},975:function(e,t,n){"use strict";function o(e){var t;return t=function(t){function n(e,n){var o=t.call(this,e,n)||this;return o._getWrappedComponent=function(e){o._instance=e},o}return i.c(n,t),n.prototype.componentDidMount=function(){this._instance.componentWillEnter&&this.context.lifecycleProvider.registerWillEnterCb(this._instance.componentWillEnter.bind(this._instance)),this._instance.componentDidEnter&&this.context.lifecycleProvider.registerDidEnterCb(this._instance.componentDidEnter.bind(this._instance)),this._instance.componentWillLeave&&this.context.lifecycleProvider.registerWillLeaveCb(this._instance.componentWillLeave.bind(this._instance)),this._instance.componentDidLeave&&this.context.lifecycleProvider.registerDidLeaveCb(this._instance.componentDidLeave.bind(this._instance))},n.prototype.render=function(){return r.createElement(e,i.a({},this.props,{ref:this._getWrappedComponent}),this.props.children)},n}(r.PureComponent),t.displayName="Lifecycle Consumer",t.contextTypes={lifecycleProvider:s.object},t}var i,r,s;t.a=o,i=n(0),r=n(21),n.n(r),s=n(118),n.n(s),r.PureComponent}});