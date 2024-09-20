(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o)};(()=>{"use strict";const o=flarum.core.compat["common/Model"];var e=t.n(o);const r=flarum.core.compat["common/models/User"];var s=t.n(r);const n=flarum.core.compat["common/models/Forum"];var a=t.n(n);const i=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var u=t.n(i);function c(t,o){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},c(t,o)}const p=flarum.core.compat["common/app"];var d=t.n(p);const l=flarum.core.compat["common/components/LoadingIndicator"];var f=t.n(l);const h=flarum.core.compat["common/helpers/avatar"];var g=t.n(h);const v=flarum.core.compat["common/helpers/icon"];var y=t.n(v);const x=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var P=t.n(x);const b=flarum.core.compat["common/components/Link"];var w=t.n(b),W=function(t){function o(){for(var o,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(o=t.call.apply(t,[this].concat(r))||this).monthlyCounts=void 0,o}var e,r;r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,c(e,r);var s=o.prototype;return s.oninit=function(o){var e,r,s;t.prototype.oninit.call(this,o),this.monthlyCounts=d().forum.attribute("afrux-top-posters-widget.topPosterCounts"),this.loadWithInitialResponse=d().forum.attribute("afrux-forum-widgets-core.preferDataWithInitialLoad"),null!=(e=this.attrs.state).users||(e.users=[]),null!=(r=this.attrs.state).isLoading||(r.isLoading=!0),null!=(s=this.attrs.state).hasLoaded||(s.hasLoaded=!1)},s.oncreate=function(o){t.prototype.oncreate.call(this,o),this.attrs.state.hasLoaded||setTimeout(this.load.bind(this),this.loadWithInitialResponse?0:800)},s.className=function(){return"Afrux-TopPostersWidget"},s.icon=function(){return"fas fa-sort-numeric-down"},s.title=function(){return d().translator.trans("afrux-top-posters-widget.forum.widget.title")},s.description=function(){return""},s.content=function(){var t=this;if(this.attrs.state.isLoading)return m(f(),null);var o=this.attrs.state.users.sort((function(o,e){return t.monthlyCounts[e.id()]-t.monthlyCounts[o.id()]}));return m("div",{className:"Afrux-TopPostersWidget-users"},o.map((function(o){return m(w(),{href:d().route("user",{username:o.slug()}),className:"Afrux-TopPostersWidget-users-item"},m("div",{className:"Afrux-TopPostersWidget-users-item-avatar"},g()(o)),m("div",{className:"Afrux-TopPostersWidget-users-item-content"},m("div",{className:"Afrux-TopPostersWidget-users-item-name"},o.displayName()),m("div",{className:"Afrux-TopPostersWidget-users-item-value"},y()("fas fa-comment-dots")," ",t.monthlyCounts[o.id()])))})))},s.load=function(){var t=this;this.loadWithInitialResponse?this.setResults(d().forum.topPosters()):(this.attrs.state.isLoading=!0,d().store.find("users",{filter:{top_poster:!0}}).then((function(o){t.setResults(o)})))},s.setResults=function(t){this.attrs.state.users=t,this.attrs.state.isLoading=!1,this.attrs.state.hasLoaded=!0,m.redraw()},o}(P());app.initializers.add("ianm/top-posters-widget",(function(){s().prototype.prettyCommentCount=e().attribute("afrux-top-posters-widget.prettyCommentCount"),a().prototype.topPosters=e().hasMany("topPosters",s()),function(t){(new(u())).add({key:"topPosters",component:W,isDisabled:function(){var o=t.forum.attribute("afrux-forum-widgets-core.preferDataWithInitialLoad"),e=t.forum.attribute("afrux-top-posters-widget.topPosterCounts");return!o&&!t.forum.attribute("canSearchUsers")||!e||!Object.keys(e).length},isUnique:!0,placement:"end",position:3}).extend(t,"afrux-top-posters-widget")}(app)}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map