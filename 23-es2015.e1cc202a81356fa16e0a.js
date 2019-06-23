(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{PC55:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var b=u("1OEa"),a=u("l4vA"),c=u("pMnS"),i=u("IKgy"),o=u("LuDt"),d=u("leug");class r{ngOnInit(){this._componentViewer.componentView=new d.a("Menu Surface","The MDC Menu Surface component is a reusable surface that appears above the content of the page and can be positioned adjacent to an element.","import { MdcMenuSurfaceModule } from '@angular-mdc/web';"),this._componentViewer.componentView.references=[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/README.md"}]}}class m{}class s{}class p{constructor(){this.images=Array.from(Array(2),(l,n)=>n),this.corners=["topStart","topEnd","bottomStart","bottomEnd"],this.example1={html:'<div mdcMenuSurfaceAnchor #demoAnchor>\n  <button mdc-button raised (click)="demoSurface.open = !demoSurface.open">\n    Show Menu Surface\n  </button>\n  <mdc-menu-surface #demoSurface class="demo-menu-surface--shaped" [anchorElement]="demoAnchor">\n    <mdc-image-list class="menu-surface-image-list">\n      <mdc-image-list-item *ngFor="let i of images">\n        <mdc-image-list-image-aspect>\n          <img mdcImageListImage src="https://material-components-web.appspot.com/images/photos/3x2/{{i+1}}.jpg" />\n        </mdc-image-list-image-aspect>\n        <mdc-image-list-supporting>\n          <span mdcImageListLabel>Text label</span>\n        </mdc-image-list-supporting>\n      </mdc-image-list-item>\n    </mdc-image-list>\n  </mdc-menu-surface>\n</div>',sass:".demo-menu-surface--shaped {\n  @include mdc-menu-surface-shape-radius(4px);\n}\n\n.menu-surface-image-list {\n  @include mdc-image-list-aspect(1.5); // Images are 3:2\n  @include mdc-image-list-standard-columns(1);\n\n  width: 220px;\n}"}}}var f=u("O8lK"),h=u("CCZW"),g=u("hPsH"),y=u("nmC+"),q=u("s9ay"),A=u("U7aT"),x=u("5gEu"),k=u("TlFb"),v=u("7W8+"),w=u("s7LF"),H=u("SVse"),S=u("VlzB"),E=u("VLO1"),F=u("UDDW"),_=u("/iz6"),M=u("dOw2"),I=u("x6Kz"),T=u("HK30"),J=e.ob({encapsulation:2,styles:[],data:{}});function O(l){return e.Jb(2,[e.zb(null,0)],null,null)}var D=u("XbMX"),L=u("dkiD"),C=u("9akv"),V=e.ob({encapsulation:2,styles:[],data:{}});function B(l){return e.Jb(0,[e.Fb(402653184,1,{_componentViewer:0}),(l()(),e.qb(1,0,null,null,1,"component-viewer",[],null,null,null,i.b,i.a)),e.pb(2,49152,[[1,4]],0,o.b,[],null,null)],null,null)}function j(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,B,V)),e.pb(1,114688,null,0,r,[],null,null)],function(l,n){l(n,1,0)},null)}var R=e.mb("ng-component",r,j,{},{},[]),P=e.ob({encapsulation:2,styles:[],data:{}});function $(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,63,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(2,16384,null,0,f.i,[],null,null),(l()(),e.Hb(-1,null,["MdcMenuSurface"])),(l()(),e.qb(4,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Selector: "])),(l()(),e.qb(6,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface"])),(l()(),e.Hb(-1,null,[" Exported as: "])),(l()(),e.qb(9,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdcMenuSurface"])),(l()(),e.qb(11,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(12,16384,null,0,f.l,[],null,null),(l()(),e.Hb(-1,null,["Properties"])),(l()(),e.qb(14,0,null,null,49,"table",[],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name"])),(l()(),e.qb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(21,0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["open: boolean"])),(l()(),e.qb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Opens or closes the menu."])),(l()(),e.qb(27,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["anchorCorner: string"])),(l()(),e.qb(30,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Override the opening point of the menu. (Default: topStart) "])),(l()(),e.qb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Values: 'bottomEnd' | 'bottomStart' | 'topEnd' | 'topStart'"])),(l()(),e.qb(34,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(36,null,["anchorMargin: ","top: number, bottom: number, left: number, right : number",""])),(l()(),e.qb(37,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the distance from the anchor point that the menu surface should be shown."])),(l()(),e.qb(39,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(41,null,["coordinates: ","x: number, y: number",""])),(l()(),e.qb(42,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the absolute x/y position of the menu. Should only be used when the menu is hoisted or using fixed positioning."])),(l()(),e.qb(44,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["quickOpen: boolean"])),(l()(),e.qb(47,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets whether the menu should open and close without animation when the open/close methods are called."])),(l()(),e.qb(49,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["anchorElement: Element | mdcMenuSurfaceAnchor"])),(l()(),e.qb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Set to indicate an element the menu should be anchored to."])),(l()(),e.qb(54,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(55,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["fixed: boolean"])),(l()(),e.qb(57,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Used to indicate that the menu is using fixed positioning."])),(l()(),e.qb(59,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(60,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["hoistToBody: boolean"])),(l()(),e.qb(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome overflow: hidden issues."])),(l()(),e.qb(64,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(65,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(66,16384,null,0,f.i,[],null,null),(l()(),e.Hb(-1,null,["MdcMenuSurfaceAnchor"])),(l()(),e.Hb(-1,null,[" Sets the anchor element used as an anchor for menu-surface positioning logic. "])),(l()(),e.qb(69,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Selector: "])),(l()(),e.qb(71,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdcMenuSurfaceAnchor"])),(l()(),e.qb(73,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface-anchor"])),(l()(),e.Hb(-1,null,[" Exported as: "])),(l()(),e.qb(76,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdcMenuSurfaceAnchor"]))],null,function(l,n){l(n,36,0,"{","}"),l(n,41,0,"{","}")})}function K(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,$,P)),e.pb(1,49152,null,0,m,[],null,null)],null,null)}var z=e.mb("ng-component",m,K,{},{},[]),U=e.ob({encapsulation:2,styles:[],data:{}});function N(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,44,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(2,16384,null,0,f.l,[],null,null),(l()(),e.Hb(-1,null,["Sass Mixins"])),(l()(),e.qb(4,0,null,null,40,"table",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Mixin"])),(l()(),e.qb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(11,0,null,null,33,"tbody",[],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface-ink-color($color)"])),(l()(),e.qb(16,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the "])),(l()(),e.qb(18,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["color"])),(l()(),e.Hb(-1,null,[" property of the "])),(l()(),e.qb(21,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface"])),(l()(),e.Hb(-1,null,["."])),(l()(),e.qb(24,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface-fill-color($color)"])),(l()(),e.qb(28,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the "])),(l()(),e.qb(30,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["background-color"])),(l()(),e.Hb(-1,null,[" property of the "])),(l()(),e.qb(33,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface"])),(l()(),e.Hb(-1,null,["."])),(l()(),e.qb(36,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-menu-surface-shape-radius($radius, $rtl-reflexive)"])),(l()(),e.qb(40,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the rounded shape to menu surface with given radius size. Set "])),(l()(),e.qb(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["$rtl-reflexive"])),(l()(),e.Hb(-1,null,[" to true to flip radius values in RTL context, defaults to false."]))],null,null)}function W(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,N,U)),e.pb(1,49152,null,0,s,[],null,null)],null,null)}var Y=e.mb("ng-component",s,W,{},{},[]),X=e.ob({encapsulation:2,styles:[],data:{}});function G(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,9,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,h.e,h.b)),e.pb(1,1228800,null,2,g.c,[e.h,e.y,e.k],null,null),e.Fb(603979776,2,{_control:0}),e.Fb(603979776,3,{assistiveElements:1}),(l()(),e.qb(4,0,null,0,3,"mdc-radio",[["class","mdc-radio"]],[[8,"id",0],[1,"tabindex",0],[1,"name",0]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Ab(l,6).input.nativeElement.focus()&&t),t},y.d,y.a)),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(6,4374528,[[1,4]],0,x.a,[e.h,e.k,q.a,A.d,[2,x.b],[2,g.c]],{value:[0,"value"]},null),e.Eb(2048,[[2,4]],g.d,null,[x.a]),(l()(),e.qb(8,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(9,null,["",""]))],function(l,n){l(n,6,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Ab(n,1).fluid,e.Ab(n,1).alignEnd),l(n,4,0,e.Ab(n,6).id,-1,null),l(n,9,0,n.context.$implicit)})}function Z(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,10,"mdc-image-list-item",[["class","mdc-image-list__item"]],null,null,null,null,null)),e.pb(1,16384,null,0,k.d,[e.k],null,null),(l()(),e.qb(2,0,null,null,3,"mdc-image-list-image-aspect",[],null,null,null,v.c,v.b)),e.pb(3,49152,null,0,k.c,[e.k],null,null),(l()(),e.qb(4,0,null,0,1,"img",[["class","mdc-image-list__image"],["mdcImageListImage",""]],[[8,"src",4]],null,null,null,null)),e.pb(5,16384,null,0,k.b,[e.k],null,null),(l()(),e.qb(6,0,null,null,4,"mdc-image-list-supporting",[["class","mdc-image-list__supporting"]],null,null,null,null,null)),e.pb(7,16384,null,0,k.g,[e.k],null,null),(l()(),e.qb(8,0,null,null,2,"span",[["class","mdc-image-list__label"],["mdcImageListLabel",""]],null,null,null,null,null)),e.pb(9,16384,null,0,k.e,[e.k],null,null),(l()(),e.Hb(-1,null,["Text label"]))],null,function(l,n){l(n,4,0,e.sb(1,"https://material-components-web.appspot.com/images/photos/3x2/",n.context.$implicit+1,".jpg"))})}function Q(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,87,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,69,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,9,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Anchor Corner"])),(l()(),e.qb(5,0,null,null,6,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,5,"mdc-radio-group",[["class","demo-layout__column"],["role","radiogroup"]],[[1,"name",0]],null,null,y.c,y.b)),e.Eb(5120,null,w.k,function(l){return[l]},[x.b]),e.pb(8,1097728,[["menuSurfaceAnchorCorner",4]],1,x.b,[e.h,e.k],null,null),e.Fb(603979776,1,{_radios:1}),(l()(),e.fb(16777216,null,0,1,null,G)),e.pb(11,278528,null,0,H.i,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(12,0,null,null,23,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Anchor Margin"])),(l()(),e.qb(15,0,null,null,20,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Top margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,19).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Ab(l,19).onTextFieldInteraction()&&t),t},S.c,S.a)),e.Eb(6144,null,g.d,null,[E.b]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(19,1490944,[["marginTop",4]],1,E.b,[A.b,e.h,e.k,g.a,[2,g.c],[2,q.a],[8,null],[2,w.o],[2,w.g],[2,E.a]],{label:[0,"label"],type:[1,"type"]},null),e.Fb(603979776,4,{_icons:1}),(l()(),e.qb(21,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Bottom margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,24).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Ab(l,24).onTextFieldInteraction()&&t),t},S.c,S.a)),e.Eb(6144,null,g.d,null,[E.b]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(24,1490944,[["marginBottom",4]],1,E.b,[A.b,e.h,e.k,g.a,[2,g.c],[2,q.a],[8,null],[2,w.o],[2,w.g],[2,E.a]],{label:[0,"label"],type:[1,"type"]},null),e.Fb(603979776,5,{_icons:1}),(l()(),e.qb(26,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Left margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,29).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Ab(l,29).onTextFieldInteraction()&&t),t},S.c,S.a)),e.Eb(6144,null,g.d,null,[E.b]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(29,1490944,[["marginLeft",4]],1,E.b,[A.b,e.h,e.k,g.a,[2,g.c],[2,q.a],[8,null],[2,w.o],[2,w.g],[2,E.a]],{label:[0,"label"],type:[1,"type"]},null),e.Fb(603979776,6,{_icons:1}),(l()(),e.qb(31,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Right margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,34).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Ab(l,34).onTextFieldInteraction()&&t),t},S.c,S.a)),e.Eb(6144,null,g.d,null,[E.b]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(34,1490944,[["marginRight",4]],1,E.b,[A.b,e.h,e.k,g.a,[2,g.c],[2,q.a],[8,null],[2,w.o],[2,w.g],[2,E.a]],{label:[0,"label"],type:[1,"type"]},null),e.Fb(603979776,7,{_icons:1}),(l()(),e.qb(36,0,null,null,34,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,33,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,h.e,h.b)),e.pb(39,1228800,null,2,g.c,[e.h,e.y,e.k],null,null),e.Fb(603979776,8,{_control:0}),e.Fb(603979776,9,{assistiveElements:1}),(l()(),e.qb(42,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0]],null,null,F.b,F.a)),e.Eb(5120,null,w.k,function(l){return[l]},[_.a]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(45,4374528,[["quickOpen",4]],0,_.a,[A.b,e.y,e.h,e.k,q.a,[2,g.c]],null,null),e.Eb(2048,[[8,4]],g.d,null,[_.a]),(l()(),e.qb(47,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(48,null,["Disable open animation: ",""])),(l()(),e.qb(49,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,h.e,h.b)),e.pb(50,1228800,null,2,g.c,[e.h,e.y,e.k],null,null),e.Fb(603979776,10,{_control:0}),e.Fb(603979776,11,{assistiveElements:1}),(l()(),e.qb(53,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0]],null,null,F.b,F.a)),e.Eb(5120,null,w.k,function(l){return[l]},[_.a]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(56,4374528,[["fixed",4]],0,_.a,[A.b,e.y,e.h,e.k,q.a,[2,g.c]],null,null),e.Eb(2048,[[10,4]],g.d,null,[_.a]),(l()(),e.qb(58,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Fixed position (scrolls with page)"])),(l()(),e.qb(60,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,h.e,h.b)),e.pb(61,1228800,null,2,g.c,[e.h,e.y,e.k],null,null),e.Fb(603979776,12,{_control:0}),e.Fb(603979776,13,{assistiveElements:1}),(l()(),e.qb(64,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0]],null,null,F.b,F.a)),e.Eb(5120,null,w.k,function(l){return[l]},[_.a]),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(67,4374528,[["hoistToBody",4]],0,_.a,[A.b,e.y,e.h,e.k,q.a,[2,g.c]],null,null),e.Eb(2048,[[12,4]],g.d,null,[_.a]),(l()(),e.qb(69,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Hoist to Body"])),(l()(),e.qb(71,0,null,null,14,"div",[["class","demo-layout--center"]],null,null,null,null,null)),(l()(),e.qb(72,0,[["demoAnchor",1]],null,13,"div",[["class","mdc-menu-surface--anchor"],["mdcMenuSurfaceAnchor",""]],null,null,null,null,null)),e.pb(73,16384,null,0,M.b,[e.k],null,null),(l()(),e.qb(74,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""],["raised",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,76).onClick(u)&&t),"click"===n&&(t=0!=(e.Ab(l,80).open=!e.Ab(l,80).open)&&t),t},I.b,I.a)),e.Eb(131584,null,q.a,q.a,[e.y,A.b]),e.pb(76,245760,null,1,T.a,[e.k,q.a],{raised:[0,"raised"]},null),e.Fb(335544320,14,{_icon:0}),(l()(),e.Hb(-1,0,[" Show Menu Surface "])),(l()(),e.qb(79,0,null,null,6,"mdc-menu-surface",[["class","demo-menu-surface--one mdc-menu-surface"]],null,null,null,O,J)),e.pb(80,245760,[["demoSurface",4]],0,M.a,[e.h,A.b,[2,e.y],e.k],{anchorElement:[0,"anchorElement"],anchorCorner:[1,"anchorCorner"],quickOpen:[2,"quickOpen"],fixed:[3,"fixed"],anchorMargin:[4,"anchorMargin"],hoistToBody:[5,"hoistToBody"]},null),e.Db(81,{top:0,bottom:1,left:2,right:3}),(l()(),e.qb(82,0,null,0,3,"mdc-image-list",[["class","menu-surface-image-list mdc-image-list"]],[[2,"mdc-image-list--masonry",null],[2,"mdc-image-list--with-text-protection",null]],null,null,v.d,v.a)),e.pb(83,49152,null,0,k.a,[e.k],null,null),(l()(),e.fb(16777216,null,0,1,null,Z)),e.pb(85,278528,null,0,H.i,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(86,0,null,null,1,"example-viewer",[],null,null,null,D.b,D.a)),e.pb(87,114688,null,0,L.a,[C.b],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,11,0,u.corners),l(n,19,0,"Top margin","number"),l(n,24,0,"Bottom margin","number"),l(n,29,0,"Left margin","number"),l(n,34,0,"Right margin","number"),l(n,76,0,"");var t=e.Ab(n,72),b=e.Ab(n,8).value,a=e.Ab(n,45).checked,c=e.Ab(n,56).checked,i=l(n,81,0,e.Ab(n,19).value,e.Ab(n,24).value,e.Ab(n,29).value,e.Ab(n,34).value);l(n,80,0,t,b,a,c,i,e.Ab(n,67).checked),l(n,85,0,u.images),l(n,87,0,u.example1)},function(l,n){l(n,6,0,null),l(n,16,0,e.Ab(n,19).disabled,e.Ab(n,19).outlined,e.Ab(n,19).dense,e.Ab(n,19).fullwidth,e.Ab(n,19).leadingIcon,e.Ab(n,19).trailingIcon,!e.Ab(n,19).label||e.Ab(n,19).label&&e.Ab(n,19).fullwidth,e.Ab(n,19).errorState),l(n,21,0,e.Ab(n,24).disabled,e.Ab(n,24).outlined,e.Ab(n,24).dense,e.Ab(n,24).fullwidth,e.Ab(n,24).leadingIcon,e.Ab(n,24).trailingIcon,!e.Ab(n,24).label||e.Ab(n,24).label&&e.Ab(n,24).fullwidth,e.Ab(n,24).errorState),l(n,26,0,e.Ab(n,29).disabled,e.Ab(n,29).outlined,e.Ab(n,29).dense,e.Ab(n,29).fullwidth,e.Ab(n,29).leadingIcon,e.Ab(n,29).trailingIcon,!e.Ab(n,29).label||e.Ab(n,29).label&&e.Ab(n,29).fullwidth,e.Ab(n,29).errorState),l(n,31,0,e.Ab(n,34).disabled,e.Ab(n,34).outlined,e.Ab(n,34).dense,e.Ab(n,34).fullwidth,e.Ab(n,34).leadingIcon,e.Ab(n,34).trailingIcon,!e.Ab(n,34).label||e.Ab(n,34).label&&e.Ab(n,34).fullwidth,e.Ab(n,34).errorState),l(n,38,0,e.Ab(n,39).fluid,e.Ab(n,39).alignEnd),l(n,42,0,e.Ab(n,45).id),l(n,48,0,e.Ab(n,45).checked),l(n,49,0,e.Ab(n,50).fluid,e.Ab(n,50).alignEnd),l(n,53,0,e.Ab(n,56).id),l(n,60,0,e.Ab(n,61).fluid,e.Ab(n,61).alignEnd),l(n,64,0,e.Ab(n,67).id),l(n,74,0,e.Ab(n,76).disabled?-1:0,e.Ab(n,76).primary,e.Ab(n,76).secondary,e.Ab(n,76).raised,e.Ab(n,76).dense,e.Ab(n,76).unelevated,e.Ab(n,76).outlined),l(n,82,0,e.Ab(n,83).masonry,e.Ab(n,83).textProtection)})}function ll(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,Q,X)),e.pb(1,49152,null,0,p,[],null,null)],null,null)}var nl=e.mb("ng-component",p,ll,{},{},[]),ul=u("UpVN"),el=u("gubB"),tl=u("JeXP"),bl=u("9zrE"),al=u("DgpY"),cl=u("Hf7q"),il=u("7VrK"),ol=u("XYaG"),dl=u("38Ti"),rl=u("g+ul"),ml=u("/RZH"),sl=u("Cfax"),pl=u("UFYv"),fl=u("0+O8"),hl=u("dPYb"),gl=u("/AgF"),yl=u("PRLD"),ql=u("Uhho"),Al=u("w+Ph"),xl=u("hSmy"),kl=u("e5pJ"),vl=u("GFbH"),wl=u("DW46"),Hl=u("/EL+"),Sl=u("vvyD"),El=u("iInd"),Fl=u("Lkda"),_l=u("dJsq"),Ml=u("d2mR");class Il{}u.d(n,"MenuSurfaceModuleNgFactory",function(){return Tl});var Tl=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[b.b,b.a,a.b,a.a,c.a,R,z,Y,nl]],[3,e.j],e.w]),e.yb(4608,H.l,H.k,[e.t,[2,H.v]]),e.yb(4608,w.v,w.v,[]),e.yb(4608,ul.a,ul.a,[ul.b,e.j,e.q,e.y,H.c,[2,H.g]]),e.yb(135680,el.c,el.c,[ul.a,e.q,[2,el.b],[3,el.c]]),e.yb(4608,w.b,w.b,[]),e.yb(1073742336,H.b,H.b,[]),e.yb(1073742336,w.u,w.u,[]),e.yb(1073742336,w.h,w.h,[]),e.yb(1073742336,T.c,T.c,[]),e.yb(1073742336,tl.h,tl.h,[]),e.yb(1073742336,g.e,g.e,[]),e.yb(1073742336,_.b,_.b,[]),e.yb(1073742336,bl.c,bl.c,[]),e.yb(1073742336,al.g,al.g,[]),e.yb(1073742336,cl.f,cl.f,[]),e.yb(1073742336,ul.c,ul.c,[]),e.yb(1073742336,el.k,el.k,[]),e.yb(1073742336,il.e,il.e,[]),e.yb(1073742336,ol.b,ol.b,[]),e.yb(1073742336,dl.c,dl.c,[]),e.yb(1073742336,rl.b,rl.b,[]),e.yb(1073742336,k.f,k.f,[]),e.yb(1073742336,ml.b,ml.b,[]),e.yb(1073742336,sl.j,sl.j,[]),e.yb(1073742336,M.d,M.d,[]),e.yb(1073742336,pl.b,pl.b,[]),e.yb(1073742336,x.c,x.c,[]),e.yb(1073742336,q.c,q.c,[]),e.yb(1073742336,fl.b,fl.b,[]),e.yb(1073742336,hl.b,hl.b,[]),e.yb(1073742336,gl.b,gl.b,[]),e.yb(1073742336,yl.d,yl.d,[]),e.yb(1073742336,ql.b,ql.b,[]),e.yb(1073742336,C.f,C.f,[]),e.yb(1073742336,Al.b,Al.b,[]),e.yb(1073742336,xl.b,xl.b,[]),e.yb(1073742336,kl.e,kl.e,[]),e.yb(1073742336,vl.b,vl.b,[]),e.yb(1073742336,wl.b,wl.b,[]),e.yb(1073742336,E.d,E.d,[]),e.yb(1073742336,Hl.d,Hl.d,[]),e.yb(1073742336,f.n,f.n,[]),e.yb(1073742336,Sl.a,Sl.a,[]),e.yb(1073742336,w.r,w.r,[]),e.yb(1073742336,El.p,El.p,[[2,El.u],[2,El.l]]),e.yb(1073742336,Fl.b,Fl.b,[]),e.yb(1073742336,_l.d,_l.d,[]),e.yb(1073742336,Ml.a,Ml.a,[]),e.yb(1073742336,Il,Il,[]),e.yb(1073742336,t,t,[]),e.yb(1024,El.j,function(){return[[{path:"",component:r,children:[{path:"",redirectTo:"api"},{path:"api",component:m},{path:"sass",component:s},{path:"examples",component:p}]}]]},[])])})}}]);