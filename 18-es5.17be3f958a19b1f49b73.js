(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Co1K:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),c=function(){return function(){}}(),o=u("1OEa"),s=u("l4vA"),a=u("pMnS"),t=u("IKgy"),i=u("LuDt"),b=u("leug"),d=u("AytR"),r='<svg xmlns="http://www.w3.org/2000/svg">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>\n</svg>',m='<svg>\n  <defs>\n  <svg id="account-balance">\n    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>\n  </svg>\n  <svg id="account-balance-wallet">\n    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"\n    />\n  </svg>\n  <svg id="account-box">\n    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>\n  </svg>\n  </defs>\n</svg>',g=function(){function l(){}return l.prototype.ngOnInit=function(){this._componentViewer.componentView=new b.a("Icons","Material icons use geometric shapes to visually represent core ideas, capabilities, or topics.","import { MdcIconModule } from '@angular-mdc/web';",[{label:"Api",route:"./api"},{label:"Examples",route:"./examples"}]),this._componentViewer.componentView.references=[{name:"Material Design guidelines: Icons",url:"https://material.io/guidelines/style/icons.html"}]},l}(),p=function(){return function(){}}(),h=function(){function l(l,n){this.customHeader="import { DomSanitizer } from '@angular/platform-browser';\nimport { MdcIconRegistry } from '@angular-mdc/web';\n\nconstructor(iconRegistry: MdcIconRegistry, sanitizer: DomSanitizer) {\n  iconRegistry",this.customSass=".demo-icon-custom-colors {\n  $color: $material-color-orange-500;\n\n  @include mdc-theme-prop(color, $color);\n}",this.exampleMaterial={html:"<mdc-icon>home</mdc-icon>"},this.exampleTheme={html:'<mdc-icon class="demo-icon-custom-colors">home</mdc-icon>',sass:this.customSass},this.exampleFa={html:'<mdc-icon fontSet="fa" fontIcon="fa-camera"></mdc-icon>\n\n<mdc-icon fontSet="fa" fontIcon="fa-camera" class="demo-icon-custom-colors"></mdc-icon>',ts:this.customHeader+"\n    .registerFontClassAlias('fontawesome', 'fa');",sass:this.customSass},this.exampleSvg={html:'<mdc-icon>\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>\n  </svg>\n</mdc-icon>'},this.exampleInline={html:"<p>\n  My <span>dog</span>\n  <mdc-icon inline>pets</mdc-icon> is my\n  <span>favorite</span>\n  <mdc-icon inline>favorite</mdc-icon>,\n  he loves to go on <span>walks</span>\n  <mdc-icon inline>directions_walk</mdc-icon>\n</p>"},this.exampleAddSvgIcon={html:'<mdc-icon svgIcon="thumbs-up"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIcon('thumbs-up',\n      sanitizer.bypassSecurityTrustResourceUrl('/assets/thumbup-icon.svg'));"},this.exampleSvgIconLiteral={html:'<mdc-icon svgIcon="bike"></mdc-icon>\n<mdc-icon svgIcon="bike" class="demo-svg-custom-color"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIconLiteral('bike',\n      sanitizer.bypassSecurityTrustHtml(BIKE_ICON));",svg:"const BIKE_ICON =\n`"+r+"`;",sass:".demo-svg-custom-color {\n  $color: $material-color-orange-500;\n\n  @include mdc-theme-prop(fill, $color);\n}"},this.exampleSvgIconSetInNamespace={html:'<mdc-icon svgIcon="core:alarm"></mdc-icon>\n\n<mdc-icon svgIcon="core:accessibility"></mdc-icon>\n\n<mdc-icon svgIcon="core:alarm"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIconSetInNamespace('core',\n      sanitizer.bypassSecurityTrustResourceUrl('/assets/core-icon-set.svg'));"},this.exampleSvgIconSetLiteralInNamespace={html:'<mdc-icon svgIcon="core-inline:account-balance"></mdc-icon>\n\n<mdc-icon svgIcon="core-inline:account-balance-wallet"></mdc-icon>\n\n<mdc-icon svgIcon="core-inline:account-box"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIconSetLiteralInNamespace('core-inline',\n      sanitizer.bypassSecurityTrustHtml(INLINE_ICON_SET));",svg:"const INLINE_ICON_SET =\n`"+m+"`;"},l.addSvgIcon("thumbs-up",n.bypassSecurityTrustResourceUrl(d.a.production?"https://trimox.github.io/angular-mdc-web/assets/thumbup-icon.svg":"/assets/thumbup-icon.svg")).addSvgIconLiteral("bike",n.bypassSecurityTrustHtml(r)).addSvgIconSetInNamespace("core",n.bypassSecurityTrustResourceUrl(d.a.production?"https://trimox.github.io/angular-mdc-web/assets/core-icon-set.svg":"/assets/core-icon-set.svg")).addSvgIconSetLiteralInNamespace("core-inline",n.bypassSecurityTrustHtml(m)).registerFontClassAlias("fontawesome","fa"),console.log(l)}return l.prototype.alternateColors=function(l){var n="demo-icon-custom-colors";l.elementRef.nativeElement.classList.contains(n)?l.elementRef.nativeElement.classList.remove(n):l.elementRef.nativeElement.classList.add(n)},l}(),v=u("Sl5x"),f=u("C40I"),I=u("nWas"),x=u("XbMX"),S=u("dkiD"),J=u("sks2"),y=u("ZYjt"),C=e.qb({encapsulation:2,styles:[],data:{}});function w(l){return e.Lb(0,[e.Hb(402653184,1,{_componentViewer:0}),(l()(),e.sb(1,0,null,null,1,"component-viewer",[],null,null,null,t.b,t.a)),e.rb(2,49152,[[1,4]],0,i.b,[],null,null)],null,null)}function k(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,w,C)),e.rb(1,114688,null,0,g,[],null,null)],function(l,n){l(n,1,0)},null)}var A=e.ob("ng-component",g,k,{},{},[]),L=e.qb({encapsulation:2,styles:[],data:{}});function R(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,109,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,2,"h2",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.rb(2,16384,null,0,v.i,[],null,null),(l()(),e.Jb(-1,null,["Service"])),(l()(),e.sb(4,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.rb(5,16384,null,0,v.i,[],null,null),(l()(),e.Jb(-1,null,["MdcIconRegistry"])),(l()(),e.Jb(-1,null,[" Service to register and display icons used by the "])),(l()(),e.sb(8,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<mdc-icon>"])),(l()(),e.Jb(-1,null,[" component. "])),(l()(),e.sb(11,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers icon URLs by namespace and name."])),(l()(),e.sb(14,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers icon set URLs by namespace."])),(l()(),e.sb(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers aliases for CSS classes, for use with icon fonts."])),(l()(),e.sb(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Loads icons from URLs and extracts individual icons from icon sets."])),(l()(),e.sb(20,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.rb(21,16384,null,0,v.l,[],null,null),(l()(),e.Jb(-1,null,["Methods"])),(l()(),e.sb(23,0,null,null,86,"table",[],null,null,null,null,null)),(l()(),e.sb(24,0,null,null,85,"tbody",[],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIcon()"])),(l()(),e.sb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon by URL in the default namespace."])),(l()(),e.sb(30,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(31,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconInNamespace()"])),(l()(),e.sb(33,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon by URL in the specified namespace."])),(l()(),e.sb(35,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(36,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconLiteral()"])),(l()(),e.sb(38,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon using an HTML string in the default namespace."])),(l()(),e.sb(40,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(41,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconLiteralInNamespace()"])),(l()(),e.sb(43,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon using an HTML string in the specified namespace."])),(l()(),e.sb(45,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(46,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconSet()"])),(l()(),e.sb(48,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon set by URL in the default namespace."])),(l()(),e.sb(50,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(51,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconSetInNamespace()"])),(l()(),e.sb(53,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon set by URL in the specified namespace."])),(l()(),e.sb(55,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(56,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconSetLiteral()"])),(l()(),e.sb(58,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon set using an HTML string in the default namespace."])),(l()(),e.sb(60,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(61,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["addSvgIconSetLiteralInNamespace()"])),(l()(),e.sb(63,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Registers an icon set using an HTML string in the specified namespace."])),(l()(),e.sb(65,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(66,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["classNameForFontAlias()"])),(l()(),e.sb(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Returns the CSS class name associated with the alias by a previous call to registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified."])),(l()(),e.sb(70,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.sb(71,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["getDefaultFontSetClass()"])),(l()(),e.sb(73,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Returns the CSS class name to be used for icon fonts when an "])),(l()(),e.sb(75,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<mdc-icon>"])),(l()(),e.Jb(-1,null,[" component does not have a fontSet input value, and is not loading an icon by name or URL."])),(l()(),e.sb(78,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.sb(79,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["getNamedSvgIcon()"])),(l()(),e.sb(81,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Returns an Observable that produces the icon (as an "])),(l()(),e.sb(83,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<svg>"])),(l()(),e.Jb(-1,null,[" DOM element) with the given name and namespace. The icon must have been previously registered with addIcon or addIconSet; if not, the Observable will throw an error."])),(l()(),e.sb(86,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.sb(87,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["getSvgIconFromUrl()"])),(l()(),e.sb(89,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Returns an Observable that produces the icon (as an "])),(l()(),e.sb(91,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<svg>"])),(l()(),e.Jb(-1,null,[" DOM element) from the given URL. The response from the URL may be cached so this will not always cause an HTTP request, but the produced element will always be a new copy of the originally fetched icon. (That is, it will not contain any modifications made to elements previously returned)."])),(l()(),e.sb(94,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.sb(95,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["registerFontClassAlias()"])),(l()(),e.sb(97,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Defines an alias for a CSS class name to be used for icon fonts. Creating an mdcIcon component with the alias as the fontSet input will cause the class name to be applied to the "])),(l()(),e.sb(99,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<mdc-icon>"])),(l()(),e.Jb(-1,null,[" element."])),(l()(),e.sb(102,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.sb(103,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["setDefaultFontSetClass()"])),(l()(),e.sb(105,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets the CSS class name to be used for icon fonts when an "])),(l()(),e.sb(107,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<mdc-icon>"])),(l()(),e.Jb(-1,null,[" component does not have a fontSet input value, and is not loading an icon by name or URL."])),(l()(),e.sb(110,0,null,null,79,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.sb(111,0,null,null,2,"h2",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.rb(112,16384,null,0,v.i,[],null,null),(l()(),e.Jb(-1,null,["Directives"])),(l()(),e.sb(114,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.rb(115,16384,null,0,v.i,[],null,null),(l()(),e.Jb(-1,null,["MdcIcon"])),(l()(),e.Jb(-1,null,[" Component to display an icon. It can be used in the following ways: "])),(l()(),e.sb(118,0,null,null,24,"ul",[],null,null,null,null,null)),(l()(),e.sb(119,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.sb(120,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,['Specify the svgIcon input to load an SVG icon from a URL previously registered with the addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of MdcIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format "[namespace]:[name]", if not the value will be the name of an icon in the default namespace. Examples: '])),(l()(),e.sb(122,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,['<mdc-icon svgIcon="left-arrow"></mdc-icon> <mdc-icon svgIcon="animals:cat"></mdc-icon>'])),(l()(),e.sb(124,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),e.sb(125,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Use a font ligature as an icon by putting the ligature text in the content of the "])),(l()(),e.sb(127,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["<mdc-icon>"])),(l()(),e.Jb(-1,null,[" component. By default the Material icons font is used as described at "])),(l()(),e.sb(130,0,null,null,1,"a",[["href","http://google.github.io/material-design-icons/#icon-font-for-the-web"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["http://google.github.io/material-design-icons/#icon-font-for-the-web"])),(l()(),e.Jb(-1,null,[". You can specify an alternate font by setting the fontSet input to either the CSS class to apply to use the desired font, or to an alias previously registered with MdcIconRegistry.registerFontClassAlias. Examples: "])),(l()(),e.sb(133,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,['<mdc-icon>home</mdc-icon> <mdc-icon fontSet="myfont">sun</mdc-icon>'])),(l()(),e.sb(135,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),e.sb(136,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a CSS class which causes the glyph to be displayed via a :before selector, as in "])),(l()(),e.sb(138,0,null,null,1,"a",[["href","https://fortawesome.github.io/Font-Awesome/examples/"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["https://fortawesome.github.io/Font-Awesome/examples/"])),(l()(),e.Jb(-1,null,[" Example: "])),(l()(),e.sb(141,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,['<mdc-icon fontSet="fa" fontIcon="alarm"></mdc-icon>'])),(l()(),e.sb(143,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Selector: "])),(l()(),e.sb(145,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-icon"])),(l()(),e.sb(147,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdcIcon"])),(l()(),e.sb(149,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["a[mdc-icon]"])),(l()(),e.Jb(-1,null,[" Exported as: "])),(l()(),e.sb(152,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdcIcon"])),(l()(),e.sb(154,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.rb(155,16384,null,0,v.l,[],null,null),(l()(),e.Jb(-1,null,["Properties"])),(l()(),e.sb(157,0,null,null,32,"table",[],null,null,null,null,null)),(l()(),e.sb(158,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.sb(159,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(160,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Name"])),(l()(),e.sb(162,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Description"])),(l()(),e.sb(164,0,null,null,25,"tbody",[],null,null,null,null,null)),(l()(),e.sb(165,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["fontSet: string"])),(l()(),e.sb(168,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Font set that the icon is a part of."])),(l()(),e.sb(170,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(171,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["fontIcon: string"])),(l()(),e.sb(173,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Name of an icon within a font set."])),(l()(),e.sb(175,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(176,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["svgIcon: string"])),(l()(),e.sb(178,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Name of the icon in the SVG icon set."])),(l()(),e.sb(180,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["clickable: boolean"])),(l()(),e.sb(183,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Whether or not icon can be interacted with."])),(l()(),e.sb(185,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["inline: boolean"])),(l()(),e.sb(188,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Whether the icon should be inlined, automatically sizing the icon to match the font size of the element the icon is contained in."]))],null,null)}function M(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,R,L)),e.rb(1,49152,null,0,p,[],null,null)],null,null)}var z=e.ob("ng-component",p,M,{},{},[]),_=e.qb({encapsulation:2,styles:[],data:{}});function H(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,7,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Material Icons"])),(l()(),e.sb(3,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(4,9158656,[["demoicon",4]],0,I.b,[e.k,I.d,[8,null],I.a],null,null),(l()(),e.Jb(-1,0,["home"])),(l()(),e.sb(6,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(7,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(8,0,null,null,7,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Material Icons - Theme"])),(l()(),e.sb(11,0,null,null,2,"mdc-icon",[["class","demo-icon-custom-colors ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(12,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],null,null),(l()(),e.Jb(-1,0,["home"])),(l()(),e.sb(14,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(15,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(16,0,null,null,11,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(17,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Using Font Awesome"])),(l()(),e.sb(19,0,null,null,6,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.sb(20,0,null,null,2,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(21,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["fontIcon","fa-camera"],["fontSet","fa"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(22,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(l()(),e.sb(23,0,null,null,2,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(24,0,null,null,1,"mdc-icon",[["class","demo-icon-custom-colors ngx-mdc-icon"],["fontIcon","fa-camera"],["fontSet","fa"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(25,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(l()(),e.sb(26,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(27,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(28,0,null,null,9,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(29,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["SVG Icon"])),(l()(),e.sb(31,0,null,null,4,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(32,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],null,null),(l()(),e.sb(33,0,null,0,2,":svg:svg",[["height","24"],["viewBox","0 0 24 24"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),e.sb(34,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),e.sb(35,0,null,null,0,":svg:path",[["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"]],null,null,null,null,null)),(l()(),e.sb(36,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(37,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(38,0,null,null,23,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(39,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Inline"])),(l()(),e.sb(41,0,null,null,18,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" My "])),(l()(),e.sb(43,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["dog"])),(l()(),e.sb(45,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"],["inline",""]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(46,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{inline:[0,"inline"]},null),(l()(),e.Jb(-1,0,["pets"])),(l()(),e.Jb(-1,null,[" is my "])),(l()(),e.sb(49,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["favorite"])),(l()(),e.sb(51,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"],["inline",""]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(52,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{inline:[0,"inline"]},null),(l()(),e.Jb(-1,0,["favorite"])),(l()(),e.Jb(-1,null,[", he loves to go on "])),(l()(),e.sb(55,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["walks"])),(l()(),e.sb(57,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"],["inline",""]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(58,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{inline:[0,"inline"]},null),(l()(),e.Jb(-1,0,["directions_walk"])),(l()(),e.sb(60,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(61,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(62,0,null,null,6,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(63,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["MdcIconRegistry - addSvgIcon"])),(l()(),e.sb(65,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","thumbs-up"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(66,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(67,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(68,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(69,0,null,null,8,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(70,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["MdcIconRegistry - addSvgIconLiteral"])),(l()(),e.sb(72,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","bike"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(73,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(74,0,null,null,1,"mdc-icon",[["class","demo-svg-custom-color ngx-mdc-icon"],["svgIcon","bike"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(75,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(76,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(77,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(78,0,null,null,11,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(79,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["MdcIconRegistry - addSvgIconSetInNamespace"])),(l()(),e.sb(81,0,null,null,6,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.sb(82,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core:alarm"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(83,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(84,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core:accessibility"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(85,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(86,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core:alarm"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(87,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(88,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(89,114688,null,0,S.a,[J.b],{example:[0,"example"]},null),(l()(),e.sb(90,0,null,null,11,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(91,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["MdcIconRegistry - addSvgIconSetLiteralInNamespace"])),(l()(),e.sb(93,0,null,null,6,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.sb(94,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core-inline:account-balance"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(95,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(96,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core-inline:account-balance-wallet"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(97,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(98,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core-inline:account-box"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.rb(99,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.sb(100,0,null,null,1,"example-viewer",[],null,null,null,x.b,x.a)),e.rb(101,114688,null,0,S.a,[J.b],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,4,0),l(n,7,0,u.exampleMaterial),l(n,12,0),l(n,15,0,u.exampleTheme),l(n,22,0,"fa","fa-camera"),l(n,25,0,"fa","fa-camera"),l(n,27,0,u.exampleFa),l(n,32,0),l(n,37,0,u.exampleSvg),l(n,46,0,""),l(n,52,0,""),l(n,58,0,""),l(n,61,0,u.exampleInline),l(n,66,0,"thumbs-up"),l(n,68,0,u.exampleAddSvgIcon),l(n,73,0,"bike"),l(n,75,0,"bike"),l(n,77,0,u.exampleSvgIconLiteral),l(n,83,0,"core:alarm"),l(n,85,0,"core:accessibility"),l(n,87,0,"core:alarm"),l(n,89,0,u.exampleSvgIconSetInNamespace),l(n,95,0,"core-inline:account-balance"),l(n,97,0,"core-inline:account-balance-wallet"),l(n,99,0,"core-inline:account-box"),l(n,101,0,u.exampleSvgIconSetLiteralInNamespace)},function(l,n){l(n,3,0,e.Cb(n,4).role,e.Cb(n,4).tabIndex,e.Cb(n,4).clickable,e.Cb(n,4).inline),l(n,11,0,e.Cb(n,12).role,e.Cb(n,12).tabIndex,e.Cb(n,12).clickable,e.Cb(n,12).inline),l(n,21,0,e.Cb(n,22).role,e.Cb(n,22).tabIndex,e.Cb(n,22).clickable,e.Cb(n,22).inline),l(n,24,0,e.Cb(n,25).role,e.Cb(n,25).tabIndex,e.Cb(n,25).clickable,e.Cb(n,25).inline),l(n,31,0,e.Cb(n,32).role,e.Cb(n,32).tabIndex,e.Cb(n,32).clickable,e.Cb(n,32).inline),l(n,45,0,e.Cb(n,46).role,e.Cb(n,46).tabIndex,e.Cb(n,46).clickable,e.Cb(n,46).inline),l(n,51,0,e.Cb(n,52).role,e.Cb(n,52).tabIndex,e.Cb(n,52).clickable,e.Cb(n,52).inline),l(n,57,0,e.Cb(n,58).role,e.Cb(n,58).tabIndex,e.Cb(n,58).clickable,e.Cb(n,58).inline),l(n,65,0,e.Cb(n,66).role,e.Cb(n,66).tabIndex,e.Cb(n,66).clickable,e.Cb(n,66).inline),l(n,72,0,e.Cb(n,73).role,e.Cb(n,73).tabIndex,e.Cb(n,73).clickable,e.Cb(n,73).inline),l(n,74,0,e.Cb(n,75).role,e.Cb(n,75).tabIndex,e.Cb(n,75).clickable,e.Cb(n,75).inline),l(n,82,0,e.Cb(n,83).role,e.Cb(n,83).tabIndex,e.Cb(n,83).clickable,e.Cb(n,83).inline),l(n,84,0,e.Cb(n,85).role,e.Cb(n,85).tabIndex,e.Cb(n,85).clickable,e.Cb(n,85).inline),l(n,86,0,e.Cb(n,87).role,e.Cb(n,87).tabIndex,e.Cb(n,87).clickable,e.Cb(n,87).inline),l(n,94,0,e.Cb(n,95).role,e.Cb(n,95).tabIndex,e.Cb(n,95).clickable,e.Cb(n,95).inline),l(n,96,0,e.Cb(n,97).role,e.Cb(n,97).tabIndex,e.Cb(n,97).clickable,e.Cb(n,97).inline),l(n,98,0,e.Cb(n,99).role,e.Cb(n,99).tabIndex,e.Cb(n,99).clickable,e.Cb(n,99).inline)})}function N(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,H,_)),e.rb(1,49152,null,0,h,[I.d,y.b],null,null)],null,null)}var T=e.ob("ng-component",h,N,{},{},[]),U=u("Ip0R"),E=u("gIcY"),F=u("UbVM"),V=u("xgI4"),D=u("AGHz"),O=u("XHh6"),j=u("6MSC"),K=u("hMXP"),B=u("3h+E"),X=u("RvxL"),Y=u("Y5c5"),Z=u("IEKO"),$=u("fsoo"),q=u("e35x"),G=u("84sf"),P=u("diqM"),W=u("rDbZ"),Q=u("eKpT"),ll=u("Q2wE"),nl=u("6wbl"),ul=u("Y6EJ"),el=u("P18B"),cl=u("oSez"),ol=u("nlZK"),sl=u("jlzV"),al=u("EpaD"),tl=u("8JU9"),il=u("ppXW"),bl=u("x3pU"),dl=u("eLLS"),rl=u("a3kT"),ml=u("FZZA"),gl=u("HolX"),pl=u("vvyD"),hl=u("ZYCi"),vl=u("Lkda"),fl=u("OQP5"),Il=u("d2mR"),xl=function(){return function(){}}();u.d(n,"IconModuleNgFactory",function(){return Sl});var Sl=e.pb(c,[],function(l){return e.zb([e.Ab(512,e.j,e.cb,[[8,[o.b,o.a,s.b,s.a,a.a,A,z,T]],[3,e.j],e.y]),e.Ab(4608,U.l,U.k,[e.v,[2,U.v]]),e.Ab(4608,E.v,E.v,[]),e.Ab(4608,F.a,F.a,[F.b,e.j,e.r,e.A,U.c,[2,U.g]]),e.Ab(135680,V.c,V.c,[F.a,e.r,[2,V.b],[3,V.c]]),e.Ab(4608,E.b,E.b,[]),e.Ab(1073742336,U.b,U.b,[]),e.Ab(1073742336,E.u,E.u,[]),e.Ab(1073742336,E.h,E.h,[]),e.Ab(1073742336,D.c,D.c,[]),e.Ab(1073742336,O.h,O.h,[]),e.Ab(1073742336,j.e,j.e,[]),e.Ab(1073742336,K.b,K.b,[]),e.Ab(1073742336,I.c,I.c,[]),e.Ab(1073742336,B.g,B.g,[]),e.Ab(1073742336,X.f,X.f,[]),e.Ab(1073742336,F.c,F.c,[]),e.Ab(1073742336,V.k,V.k,[]),e.Ab(1073742336,Y.e,Y.e,[]),e.Ab(1073742336,Z.b,Z.b,[]),e.Ab(1073742336,$.c,$.c,[]),e.Ab(1073742336,q.b,q.b,[]),e.Ab(1073742336,G.f,G.f,[]),e.Ab(1073742336,P.b,P.b,[]),e.Ab(1073742336,W.j,W.j,[]),e.Ab(1073742336,Q.d,Q.d,[]),e.Ab(1073742336,ll.b,ll.b,[]),e.Ab(1073742336,nl.c,nl.c,[]),e.Ab(1073742336,ul.c,ul.c,[]),e.Ab(1073742336,el.b,el.b,[]),e.Ab(1073742336,cl.b,cl.b,[]),e.Ab(1073742336,ol.b,ol.b,[]),e.Ab(1073742336,sl.d,sl.d,[]),e.Ab(1073742336,al.b,al.b,[]),e.Ab(1073742336,J.f,J.f,[]),e.Ab(1073742336,tl.b,tl.b,[]),e.Ab(1073742336,il.b,il.b,[]),e.Ab(1073742336,bl.e,bl.e,[]),e.Ab(1073742336,dl.b,dl.b,[]),e.Ab(1073742336,rl.b,rl.b,[]),e.Ab(1073742336,ml.d,ml.d,[]),e.Ab(1073742336,gl.d,gl.d,[]),e.Ab(1073742336,v.n,v.n,[]),e.Ab(1073742336,pl.a,pl.a,[]),e.Ab(1073742336,E.r,E.r,[]),e.Ab(1073742336,hl.p,hl.p,[[2,hl.u],[2,hl.l]]),e.Ab(1073742336,vl.b,vl.b,[]),e.Ab(1073742336,fl.d,fl.d,[]),e.Ab(1073742336,Il.a,Il.a,[]),e.Ab(1073742336,xl,xl,[]),e.Ab(1073742336,c,c,[]),e.Ab(1024,hl.j,function(){return[[{path:"",component:g,children:[{path:"",redirectTo:"api"},{path:"api",component:p},{path:"examples",component:h}]}]]},[])])})}}]);