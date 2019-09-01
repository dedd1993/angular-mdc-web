function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+9rJ":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},a=u("+ZNK"),i=u("KCvt"),s=u("knxA"),o=u("alYm"),c=u("pMnS"),b=u("IKgy"),m=u("LuDt"),d=u("leug"),r=function(){function l(){}return l.prototype.ngOnInit=function(){this._componentViewer.componentView=new d.a("Image List","Image lists display a collection of images in an organized grid.","import { MdcImageListModule } from '@angular-mdc/web';"),this._componentViewer.componentView.references=[{name:"Material Design guidelines: Image Lists",url:"https://material.io/design/components/image-lists.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-image-list/README.md"}]},l}(),p=function(){},g=function(){},h=function(){this.images=Array.from(Array(15),function(l,n){return n}),this.masonryImages=[{image:"https://material-components-web.appspot.com/images/photos/3x2/16.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/1.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/1.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/2.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/3.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/2.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/4.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/3.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/5.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/4.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/6.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/5.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/7.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/6.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/7.jpg"}],this.example1={html:'<mdc-image-list class="standard-image-list image-list--rounded-corners">\n  <mdc-image-list-item *ngFor="let i of images">\n    <mdc-image-list-image-aspect>\n      <img mdcImageListImage src="https://material-components-web.appspot.com/images/photos/3x2/{{i+1}}.jpg" />\n    </mdc-image-list-image-aspect>\n    <mdc-image-list-supporting>\n      <span mdcImageListLabel>Text label</span>\n    </mdc-image-list-supporting>\n  </mdc-image-list-item>\n</mdc-image-list>',sass:".standard-image-list {\n  @include mdc-image-list-aspect(1.5); // Images are 3:2\n  @include mdc-image-list-standard-columns(5);\n}\n\n@media (max-width: 599px) {\n  .standard-image-list {\n    @include mdc-image-list-standard-columns(3);\n  }\n}\n\n.image-list--rounded-corners {\n  @include mdc-image-list-shape-radius(8px);\n}"},this.example2={html:'<mdc-image-list masonry class="masonry-image-list">\n  <mdc-image-list-item *ngFor="let item of masonryImages">\n    <img mdcImageListImage src="{{item.image}}" />\n    <mdc-image-list-supporting>\n      <span mdcImageListLabel>Text label</span>\n    </mdc-image-list-supporting>\n  </mdc-image-list-item>\n</mdc-image-list>',sass:".masonry-image-list {\n  @include mdc-image-list-masonry-columns(5);\n}\n\n@media (max-width: 599px) {\n  .masonry-image-list {\n    @include mdc-image-list-masonry-columns(3);\n  }\n}"}},f=u("5l+6"),x=u("dEKC"),y=u("nmYj"),v=u("dJsq"),k=u("//9D"),M=u("+O8G"),w=u("Kfqh"),I=u("9UYg"),_=u("SVse"),F=u("XbMX"),D=u("dkiD"),L=u("aXvW"),O=t.rb({encapsulation:2,styles:[],data:{}});function S(l){return t.Ob(0,[t.Kb(402653184,1,{_componentViewer:0}),(l()(),t.tb(1,0,null,null,1,"component-viewer",[],null,null,null,b.b,b.a)),t.sb(2,49152,[[1,4]],0,m.b,[],null,null)],null,null)}var j=t.pb("ng-component",r,function(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"ng-component",[],null,null,null,S,O)),t.sb(1,114688,null,0,r,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=t.rb({encapsulation:2,styles:[],data:{}});function R(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,31,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),t.sb(2,16384,null,0,f.i,[],null,null),(l()(),t.Mb(-1,null,["MdcImageList"])),(l()(),t.tb(4,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Selector: "])),(l()(),t.tb(6,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list"])),(l()(),t.Mb(-1,null,[" Exported as: "])),(l()(),t.tb(9,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageList"])),(l()(),t.tb(11,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),t.sb(12,16384,null,0,f.l,[],null,null),(l()(),t.Mb(-1,null,["Properties"])),(l()(),t.tb(14,0,null,null,17,"table",[],null,null,null,null,null)),(l()(),t.tb(15,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Name"])),(l()(),t.tb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Description"])),(l()(),t.tb(21,0,null,null,10,"tbody",[],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["masonry: boolean"])),(l()(),t.tb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Indicates that this Image List should use the Masonry variant."])),(l()(),t.tb(27,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["textProtection: boolean"])),(l()(),t.tb(30,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Indicates that supporting content should be positioned in a scrim overlaying each image (instead of positioned separately under each image)."])),(l()(),t.tb(32,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),t.sb(34,16384,null,0,f.i,[],null,null),(l()(),t.Mb(-1,null,["MdcImageListItem"])),(l()(),t.Mb(-1,null,[" Mandatory. Indicates each item in an Image List. "])),(l()(),t.tb(37,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Selector: "])),(l()(),t.tb(39,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-item"])),(l()(),t.tb(41,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListItem"])),(l()(),t.Mb(-1,null,[" Exported as: "])),(l()(),t.tb(44,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListItem"])),(l()(),t.tb(46,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(47,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),t.sb(48,16384,null,0,f.i,[],null,null),(l()(),t.Mb(-1,null,["MdcImageListImageAspect"])),(l()(),t.Mb(-1,null,[" Optional. Parent of each item's image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. "])),(l()(),t.tb(51,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Selector: "])),(l()(),t.tb(53,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-image-aspect"])),(l()(),t.tb(55,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListImageAspect"])),(l()(),t.Mb(-1,null,[" Exported as: "])),(l()(),t.tb(58,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListImageAspect"])),(l()(),t.tb(60,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(61,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),t.sb(62,16384,null,0,f.i,[],null,null),(l()(),t.Mb(-1,null,["MdcImageListImage"])),(l()(),t.Mb(-1,null,[" Mandatory. Indicates the image element in each item. "])),(l()(),t.tb(65,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Selector: "])),(l()(),t.tb(67,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-image"])),(l()(),t.tb(69,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListImage"])),(l()(),t.Mb(-1,null,[" Exported as: "])),(l()(),t.tb(72,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListImage"])),(l()(),t.tb(74,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(75,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),t.sb(76,16384,null,0,f.i,[],null,null),(l()(),t.Mb(-1,null,["MdcImageListSupporting"])),(l()(),t.Mb(-1,null,[" Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. "])),(l()(),t.tb(79,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Selector: "])),(l()(),t.tb(81,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-supporting"])),(l()(),t.tb(83,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["MdcImageListSupporting"])),(l()(),t.Mb(-1,null,[" Exported as: "])),(l()(),t.tb(86,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListSupporting"])),(l()(),t.tb(88,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(89,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),t.sb(90,16384,null,0,f.i,[],null,null),(l()(),t.Mb(-1,null,["MdcImageListLabel"])),(l()(),t.Mb(-1,null,[" Optional. Indicates the text label in each item, if the Image List contains text labels. "])),(l()(),t.tb(93,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Selector: "])),(l()(),t.tb(95,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-label"])),(l()(),t.tb(97,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListLabel"])),(l()(),t.Mb(-1,null,[" Exported as: "])),(l()(),t.tb(100,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdcImageListLabel"]))],null,null)}var K=t.pb("ng-component",p,function(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"ng-component",[],null,null,null,R,C)),t.sb(1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),T=t.rb({encapsulation:2,styles:[],data:{}});function A(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,44,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),t.sb(2,16384,null,0,f.l,[],null,null),(l()(),t.Mb(-1,null,["Sass Mixins"])),(l()(),t.tb(4,0,null,null,40,"table",[],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Mixin"])),(l()(),t.tb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Description"])),(l()(),t.tb(11,0,null,null,33,"tbody",[],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-aspect($width-height-ratio)"])),(l()(),t.tb(16,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Styles the aspect container elements within an Image List to conform to the given ratio, where 1 is 1:1, greater than 1 is wider, and less than 1 is taller."])),(l()(),t.tb(18,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-shape-radius($radius, $rtl-reflexive)"])),(l()(),t.tb(22,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Sets the rounded shape to image list item with given radius size. Set "])),(l()(),t.tb(24,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["$rtl-reflexive"])),(l()(),t.Mb(-1,null,[" to true to flip radius values in RTL context, defaults to false."])),(l()(),t.tb(27,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-standard-columns($column-count, $gutter-size)"])),(l()(),t.tb(31,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Styles a Standard Image List to display the given number of columns. "])),(l()(),t.tb(33,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["$gutter-size"])),(l()(),t.Mb(-1,null,[" is optional and overrides the default amount of space between items."])),(l()(),t.tb(36,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(37,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["mdc-image-list-masonry-columns($column-count, $gutter-size)"])),(l()(),t.tb(40,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Styles a Masonry Image List to display the given number of columns. "])),(l()(),t.tb(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["$gutter-size"])),(l()(),t.Mb(-1,null,[" is optional and overrides the default amount of space between items."]))],null,null)}var J=t.pb("ng-component",g,function(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"ng-component",[],null,null,null,A,T)),t.sb(1,49152,null,0,g,[],null,null)],null,null)},{},{},[]),P=t.rb({encapsulation:2,styles:[],data:{}});function q(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,10,"mdc-image-list-item",[["class","mdc-image-list__item"]],null,null,null,null,null)),t.sb(1,16384,null,0,x.d,[t.k],null,null),(l()(),t.tb(2,0,null,null,3,"mdc-image-list-image-aspect",[],null,null,null,y.c,y.b)),t.sb(3,49152,null,0,x.c,[t.k],null,null),(l()(),t.tb(4,0,null,0,1,"img",[["class","mdc-image-list__image"],["mdcImageListImage",""]],[[8,"src",4]],null,null,null,null)),t.sb(5,16384,null,0,x.b,[t.k],null,null),(l()(),t.tb(6,0,null,null,4,"mdc-image-list-supporting",[["class","mdc-image-list__supporting"]],null,null,null,null,null)),t.sb(7,16384,null,0,x.f,[t.k],null,null),(l()(),t.tb(8,0,null,null,2,"span",[["class","mdc-image-list__label"],["mdcImageListLabel",""]],null,null,null,null,null)),t.sb(9,16384,null,0,x.e,[t.k],null,null),(l()(),t.Mb(-1,null,["Text label"]))],null,function(l,n){l(n,4,0,t.xb(1,"https://material-components-web.appspot.com/images/photos/3x2/",n.context.$implicit+1,".jpg"))})}function E(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,8,"mdc-image-list-item",[["class","mdc-image-list__item"]],null,null,null,null,null)),t.sb(1,16384,null,0,x.d,[t.k],null,null),(l()(),t.tb(2,0,null,null,1,"img",[["class","mdc-image-list__image"],["mdcImageListImage",""]],[[8,"src",4]],null,null,null,null)),t.sb(3,16384,null,0,x.b,[t.k],null,null),(l()(),t.tb(4,0,null,null,4,"mdc-image-list-supporting",[["class","mdc-image-list__supporting"]],null,null,null,null,null)),t.sb(5,16384,null,0,x.f,[t.k],null,null),(l()(),t.tb(6,0,null,null,2,"span",[["class","mdc-image-list__label"],["mdcImageListLabel",""]],null,null,null,null,null)),t.sb(7,16384,null,0,x.e,[t.k],null,null),(l()(),t.Mb(-1,null,["Text label"]))],null,function(l,n){l(n,2,0,t.xb(1,"",n.context.$implicit.image,""))})}function $(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,18,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Standard Image List"])),(l()(),t.Mb(-1,null,[" Images in a Standard Image list are constrained to 1:1 aspect ratio by default this can be overridden using the mdc-image-list-aspect mixin documented below. "])),(l()(),t.tb(4,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,1,"code",[["highlight",".image-list {\n  @include mdc-image-list-standard-columns(5);\n}\n\n@media (max-width: 599px) {\n  .image-list {\n    @include mdc-image-list-standard-columns(3);\n  }\n}"]],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),t.sb(6,540672,null,0,v.b,[v.c,t.y],{code:[0,"code"]},null),(l()(),t.tb(7,0,null,null,5,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,10).onClick(u)&&e),"click"===n&&(e=0!=(t.Fb(l,14).textProtection=!t.Fb(l,14).textProtection)&&e),e},k.b,k.a)),t.Jb(131584,null,M.a,M.a,[t.y,w.a]),t.sb(10,245760,null,1,I.a,[t.k,M.a],null,null),t.Kb(335544320,1,{_icon:0}),(l()(),t.Mb(12,0,["Text Protection: ",""])),(l()(),t.tb(13,0,null,null,3,"mdc-image-list",[["class","standard-image-list image-list--rounded-corners mdc-image-list"]],[[2,"mdc-image-list--masonry",null],[2,"mdc-image-list--with-text-protection",null]],null,null,y.d,y.a)),t.sb(14,49152,[["demolist",4]],0,x.a,[t.k],null,null),(l()(),t.ib(16777216,null,0,1,null,q)),t.sb(16,278528,null,0,_.i,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(17,0,null,null,1,"example-viewer",[],null,null,null,F.b,F.a)),t.sb(18,114688,null,0,D.a,[L.a],{example:[0,"example"]},null),(l()(),t.tb(19,0,null,null,14,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Masonry Image List"])),(l()(),t.tb(22,0,null,null,5,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,25).onClick(u)&&e),"click"===n&&(e=0!=(t.Fb(l,29).textProtection=!t.Fb(l,29).textProtection)&&e),e},k.b,k.a)),t.Jb(131584,null,M.a,M.a,[t.y,w.a]),t.sb(25,245760,null,1,I.a,[t.k,M.a],null,null),t.Kb(335544320,2,{_icon:0}),(l()(),t.Mb(27,0,["Text Protection: ",""])),(l()(),t.tb(28,0,null,null,3,"mdc-image-list",[["class","masonry-image-list mdc-image-list"],["masonry",""]],[[2,"mdc-image-list--masonry",null],[2,"mdc-image-list--with-text-protection",null]],null,null,y.d,y.a)),t.sb(29,49152,[["demomasonry",4]],0,x.a,[t.k],{masonry:[0,"masonry"]},null),(l()(),t.ib(16777216,null,0,1,null,E)),t.sb(31,278528,null,0,_.i,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(32,0,null,null,1,"example-viewer",[],null,null,null,F.b,F.a)),t.sb(33,114688,null,0,D.a,[L.a],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,6,0,".image-list {\n  @include mdc-image-list-standard-columns(5);\n}\n\n@media (max-width: 599px) {\n  .image-list {\n    @include mdc-image-list-standard-columns(3);\n  }\n}"),l(n,10,0),l(n,16,0,u.images),l(n,18,0,u.example1),l(n,25,0),l(n,29,0,""),l(n,31,0,u.masonryImages),l(n,33,0,u.example2)},function(l,n){l(n,5,0,!0,t.Fb(n,6).highlightedCode),l(n,8,0,t.Fb(n,10).disabled?-1:0,t.Fb(n,10).primary,t.Fb(n,10).secondary,t.Fb(n,10).raised,t.Fb(n,10).dense,t.Fb(n,10).unelevated,t.Fb(n,10).outlined),l(n,12,0,t.Fb(n,14).textProtection?"On":"Off"),l(n,13,0,t.Fb(n,14).masonry,t.Fb(n,14).textProtection),l(n,23,0,t.Fb(n,25).disabled?-1:0,t.Fb(n,25).primary,t.Fb(n,25).secondary,t.Fb(n,25).raised,t.Fb(n,25).dense,t.Fb(n,25).unelevated,t.Fb(n,25).outlined),l(n,27,0,t.Fb(n,29).textProtection?"On":"Off"),l(n,28,0,t.Fb(n,29).masonry,t.Fb(n,29).textProtection)})}var B=t.pb("ng-component",h,function(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"ng-component",[],null,null,null,$,P)),t.sb(1,49152,null,0,h,[],null,null)],null,null)},{},{},[]),V=u("s7LF"),X=u("9b0e"),Y=u("6YJn"),H=u("d9jQ"),N=u("RYA5"),z=u("J5MV"),G=u("GfKK"),U=u("a4Uj"),W=u("v12X"),Z=u("Nae1"),Q=u("fXvI"),ll=u("KuLc"),nl=u("Z7++"),ul=u("B/xB"),tl=u("A7cX"),el=u("CFZN"),al=u("VANb"),il=u("s0Uv"),sl=u("GQpF"),ol=u("xzsS"),cl=u("sWtu"),bl=u("O1Eo"),ml=u("6PPE"),dl=u("2bgE"),rl=u("w3hH"),pl=u("trKi"),gl=u("K8gV"),hl=u("ngW1"),fl=u("qGSp"),xl=u("ngrd"),yl=u("qaMf"),vl=u("wHtX"),kl=u("nwcb"),Ml=u("4pld"),wl=u("I+pr"),Il=u("CbuK"),_l=u("gbIf"),Fl=u("ZCFl"),Dl=u("U8q+"),Ll=u("vvyD"),Ol=u("iInd"),Sl=u("Lkda"),jl=u("d2mR"),Cl=function(){};u.d(n,"ImageListModuleNgFactory",function(){return Rl});var Rl=t.qb(e,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[a.a,i.a,s.a,o.a,c.a,j,K,J,B]],[3,t.j],t.w]),t.Db(4608,_.l,_.k,[t.t,[2,_.v]]),t.Db(4608,V.v,V.v,[]),t.Db(4608,X.a,X.a,[X.f,X.b,t.j,X.e,X.c,t.q,t.y,_.c,Y.b,[2,_.g]]),t.Db(5120,X.g,X.h,[X.a]),t.Db(135680,H.c,H.c,[X.a,t.q,[2,H.b],[3,H.c]]),t.Db(4608,V.b,V.b,[]),t.Db(1073742336,_.b,_.b,[]),t.Db(1073742336,V.u,V.u,[]),t.Db(1073742336,V.h,V.h,[]),t.Db(1073742336,N.a,N.a,[]),t.Db(1073742336,z.a,z.a,[]),t.Db(1073742336,G.a,G.a,[]),t.Db(1073742336,U.a,U.a,[]),t.Db(1073742336,W.a,W.a,[]),t.Db(1073742336,Z.a,Z.a,[]),t.Db(1073742336,Q.a,Q.a,[]),t.Db(1073742336,Y.a,Y.a,[]),t.Db(1073742336,ll.f,ll.f,[]),t.Db(1073742336,w.b,w.b,[]),t.Db(1073742336,nl.b,nl.b,[]),t.Db(1073742336,X.d,X.d,[]),t.Db(1073742336,ul.a,ul.a,[]),t.Db(1073742336,tl.a,tl.a,[]),t.Db(1073742336,el.a,el.a,[]),t.Db(1073742336,al.a,al.a,[]),t.Db(1073742336,il.a,il.a,[]),t.Db(1073742336,sl.a,sl.a,[]),t.Db(1073742336,ol.a,ol.a,[]),t.Db(1073742336,cl.a,cl.a,[]),t.Db(1073742336,bl.a,bl.a,[]),t.Db(1073742336,ml.a,ml.a,[]),t.Db(1073742336,dl.a,dl.a,[]),t.Db(1073742336,rl.a,rl.a,[]),t.Db(1073742336,pl.a,pl.a,[]),t.Db(1073742336,gl.a,gl.a,[]),t.Db(1073742336,hl.a,hl.a,[]),t.Db(1073742336,fl.a,fl.a,[]),t.Db(1073742336,xl.a,xl.a,[]),t.Db(1073742336,yl.a,yl.a,[]),t.Db(1073742336,vl.a,vl.a,[]),t.Db(1073742336,kl.a,kl.a,[]),t.Db(1073742336,Ml.a,Ml.a,[]),t.Db(1073742336,wl.a,wl.a,[]),t.Db(1073742336,Il.a,Il.a,[]),t.Db(1073742336,_l.a,_l.a,[]),t.Db(1073742336,Fl.a,Fl.a,[]),t.Db(1073742336,Dl.a,Dl.a,[]),t.Db(1073742336,Ll.a,Ll.a,[]),t.Db(1073742336,V.r,V.r,[]),t.Db(1073742336,Ol.p,Ol.p,[[2,Ol.u],[2,Ol.l]]),t.Db(1073742336,Sl.b,Sl.b,[]),t.Db(1073742336,v.d,v.d,[]),t.Db(1073742336,jl.a,jl.a,[]),t.Db(1073742336,Cl,Cl,[]),t.Db(1073742336,e,e,[]),t.Db(1024,Ol.j,function(){return[[{path:"",component:r,children:[{path:"",redirectTo:"api"},{path:"api",component:p},{path:"sass",component:g},{path:"examples",component:h}]}]]},[])])})},"K4w+":function(l,n,u){"use strict";u.d(n,"a",function(){return o}),u.d(n,"b",function(){return b});var t=u("8Y7J"),e=u("9qfl"),a=u("o085"),i=u("U/DG"),s=u("SVse"),o=(u("s7LF"),u("o/N6"),u("+O8G"),u("Kfqh"),t.rb({encapsulation:2,styles:[],data:{}}));function c(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,e.b,e.a)),t.sb(1,9158656,null,0,a.b,[t.k,i.a,[8,null],a.a],null,null),(l()(),t.Mb(2,0,["",""]))],function(l,n){l(n,1,0)},function(l,n){var u=n.component;l(n,0,0,t.Fb(n,1).role,t.Fb(n,1).tabIndex,t.Fb(n,1).clickable,t.Fb(n,1).inline),l(n,2,0,u.icon)})}function b(l){return t.Ob(2,[(l()(),t.ib(16777216,null,null,1,null,c)),t.sb(1,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),t.Eb(null,0)],function(l,n){l(n,1,0,n.component.icon)},null)}},XbMX:function(l,n,u){"use strict";var t=u("8Y7J"),e=u("//9D"),a=u("+O8G"),i=u("Kfqh"),s=u("9UYg"),o=u("9qfl"),c=u("o085"),b=u("U/DG"),m=u("7pLE"),d=u("+lgO"),r=u("jvbJ"),p=u("vaAN"),g=u("7F7i"),h=u("NmUe"),f=u("SVse"),x=u("K4w+"),y=u("s7LF"),v=u("o/N6"),k=u("dJsq"),M=u("hSJX"),w=u("RkLD");u("dkiD"),u("aXvW"),u.d(n,"a",function(){return I}),u.d(n,"b",function(){return O});var I=t.rb({encapsulation:2,styles:[[".example-divider{margin-top:5px}.example-opener{display:-ms-flexbox;display:flex;margin-top:20px;background-color:#344955!important}.example-container{position:relative}.example-copy-button{position:absolute;right:0;top:0;color:#fff}"]],data:{}});function _(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,7,"button",[["class","example-opener mdc-button"],["mdc-button",""],["raised",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;return"click"===n&&(e=!1!==t.Fb(l,2).onClick(u)&&e),"click"===n&&(e=0!=(a.open=!a.open)&&e),e},e.b,e.a)),t.Jb(131584,null,a.a,a.a,[t.y,i.a]),t.sb(2,245760,null,1,s.a,[t.k,a.a],{raised:[0,"raised"]},null),t.Kb(335544320,1,{_icon:0}),(l()(),t.tb(4,0,null,0,2,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,o.b,o.a)),t.sb(5,9158656,[[1,4]],0,c.b,[t.k,b.a,[8,null],c.a],null,null),(l()(),t.Mb(-1,0,["code"])),(l()(),t.Mb(-1,0,["View Source\n"]))],function(l,n){l(n,2,0,""),l(n,5,0)},function(l,n){l(n,0,0,t.Fb(n,2).disabled?-1:0,t.Fb(n,2).primary,t.Fb(n,2).secondary,t.Fb(n,2).raised,t.Fb(n,2).dense,t.Fb(n,2).unelevated,t.Fb(n,2).outlined),l(n,4,0,t.Fb(n,5).role,t.Fb(n,5).tabIndex,t.Fb(n,5).clickable,t.Fb(n,5).inline)})}function F(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"mdc-tab",[["class","mdc-tab"],["role","tab"]],[[8,"id",0],[2,"mdc-tab--stacked",null],[2,"mdc-tab--min-width",null],[2,"ngx-mdc-tab--disabled",null]],null,null,m.b,m.a)),t.Jb(131584,null,a.a,a.a,[t.y,i.a]),t.sb(2,245760,[[3,4]],0,d.b,[t.y,t.h,a.a,t.k,[2,d.a]],{label:[0,"label"]},null)],function(l,n){l(n,2,0,n.context.$implicit.label)},function(l,n){l(n,0,0,t.Fb(n,2).id,t.Fb(n,2).stacked,t.Fb(n,2).fixed,t.Fb(n,2).disabled)})}function D(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,8,"mdc-tab-bar",[["class","mdc-tab-bar"],["fixed",""],["role","tablist"]],null,[[null,"activated"],[null,"keydown"]],function(l,n,u){var e=!0,a=l.component;return"keydown"===n&&(e=!1!==t.Fb(l,2)._onKeydown(u)&&e),"activated"===n&&(e=!1!==a.onActivatedTab(u)&&e),e},r.b,r.a)),t.Jb(6144,null,d.a,null,[p.a]),t.sb(2,1228800,null,2,p.a,[i.a,t.h,t.k],{fixed:[0,"fixed"],focusOnActivate:[1,"focusOnActivate"]},{activated:"activated"}),t.Kb(335544320,2,{tabScroller:0}),t.Kb(603979776,3,{tabs:1}),(l()(),t.tb(5,0,null,0,3,"mdc-tab-scroller",[["class","mdc-tab-scroller"]],null,null,null,g.b,g.a)),t.sb(6,4374528,[[2,4]],0,h.a,[t.y,i.a,t.k],null,null),(l()(),t.ib(16777216,null,0,1,null,F)),t.sb(8,278528,null,0,f.i,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,2,0,"",!1),l(n,8,0,u.tabs)},null)}function L(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,11,"div",[["class","example-container"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,7,"button",[["attr.aria-pressed","false"],["class","example-copy-button mdc-icon-button"],["mdcIconButton",""]],[[8,"id",0],[2,"mdc-icon-button--on",null]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;return"click"===n&&(e=!1!==t.Fb(l,4).handleClick()&&e),"click"===n&&(e=!1!==a.copyCode()&&e),e},x.b,x.a)),t.Jb(5120,null,y.k,function(l){return[l]},[v.a]),t.Jb(131584,null,a.a,a.a,[t.y,i.a]),t.sb(4,1228800,null,1,v.a,[t.h,t.k,a.a],null,null),t.Kb(603979776,4,{icons:1}),(l()(),t.tb(6,0,null,0,2,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,o.b,o.a)),t.sb(7,9158656,[[4,4]],0,c.b,[t.k,b.a,[8,null],c.a],null,null),(l()(),t.Mb(-1,0,["file_copy"])),(l()(),t.tb(9,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),t.sb(11,540672,null,0,k.b,[k.c,t.y],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,7,0),l(n,11,0,u.currentExample)},function(l,n){l(n,1,0,t.Fb(n,4).id,t.Fb(n,4).on),l(n,6,0,t.Fb(n,7).role,t.Fb(n,7).tabIndex,t.Fb(n,7).clickable,t.Fb(n,7).inline),l(n,10,0,!0,t.Fb(n,11).highlightedCode)})}function O(l){return t.Ob(2,[(l()(),t.tb(0,0,null,null,1,"mdc-list-divider",[["class","example-divider mdc-list-divider"],["role","separator"]],[[2,"mdc-list-divider--inset",null],[2,"mdc-list-divider--padded",null]],null,null,M.b,M.a)),t.sb(1,49152,null,0,w.a,[t.k],null,null),(l()(),t.ib(16777216,null,null,1,null,_)),t.sb(3,16384,null,0,f.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,D)),t.sb(5,16384,null,0,f.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,L)),t.sb(7,16384,null,0,f.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,!u.open),l(n,5,0,u.open),l(n,7,0,u.open)},function(l,n){l(n,0,0,t.Fb(n,1).inset,t.Fb(n,1).padded)})}},aXvW:function(l,n,u){"use strict";u.d(n,"a",function(){return d});var t=u("8Y7J"),e=u("KuLc"),a=u("Dpui"),i=u("I7Yq"),s=u("8mAZ"),o=u("htsC"),c=u("9b0e"),b=u("qaMf"),m=new t.p("mdc-snackbar-default-options",{providedIn:"root",factory:function(){return new s.b}}),d=function(){var l=function(){function l(l,n,u,t){this._overlay=l,this._injector=n,this._parentSnackBar=u,this._defaultConfig=t,this._snackBarRefAtThisLevel=null}var n=l.prototype;return n.openFromComponent=function(l,n){return this._attach(l,n)},n.open=function(l,n,u){void 0===n&&(n="");var t=Object.assign({},this._defaultConfig,u);return t.data={message:l,action:n},this.openFromComponent(i.a,t)},n.dismiss=function(){this._openedSnackbarRef&&(this._openedSnackbarRef.instance instanceof i.a&&this._openedSnackbarRef.instance.close(),this._openedSnackbarRef.dismiss())},n.ngOnDestroy=function(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()},n._attachSnackbarContainer=function(l,n){var u=new e.e(n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,new WeakMap([[s.b,n]])),t=new e.c(o.a,n.viewContainerRef,u),a=l.attach(t);return a.instance.snackbarConfig=n,a.instance},n._attach=function(l,n){var u=Object.assign({},new s.b,this._defaultConfig,n),t=this._createOverlay(),o=this._attachSnackbarContainer(t,u),c=new a.a(o,t),b=this._createInjector(u,c),m=new e.c(l,void 0,b),d=o.attachComponentPortal(m);return c.instance=d.instance,this._loadListeners(c),this._openedSnackbarRef=c,c.instance instanceof i.a&&c.instance.open(),this._openedSnackbarRef},n._loadListeners=function(l){var n=this;l.afterDismiss().subscribe(function(){n._openedSnackbarRef===l&&(n._openedSnackbarRef=null)}),this._openedSnackbarRef&&this._openedSnackbarRef.dismiss()},n._createOverlay=function(){return this._overlay.create()},n._createInjector=function(l,n){return new e.e(l&&l.viewContainerRef&&l.viewContainerRef.injector||this._injector,new WeakMap([[a.a,n],[s.a,l.data]]))},_createClass(l,[{key:"_openedSnackbarRef",get:function(){var l=this._parentSnackBar;return l?l._openedSnackbarRef:this._snackBarRefAtThisLevel},set:function(l){this._parentSnackBar?this._parentSnackBar._openedSnackbarRef=l:this._snackBarRefAtThisLevel=l}}]),l}();return l.ngInjectableDef=t.Sb({factory:function(){return new l(t.Tb(c.a),t.Tb(t.n),t.Tb(l,12),t.Tb(m))},token:l,providedIn:b.a}),l}()}}]);