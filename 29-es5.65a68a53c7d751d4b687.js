(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{xhMi:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),b=u("1OEa"),c=u("l4vA"),s=u("pMnS"),d=u("IKgy"),o=u("LuDt"),i=u("leug"),a=function(){function l(){}return l.prototype.ngOnInit=function(){this._componentViewer.componentView=new i.a("Switches","Switches toggle the state of a single setting on or off.","import { MdcSwitchModule } from '@angular-mdc/web';"),this._componentViewer.componentView.references=[{name:"Material Design guidelines: Switches",url:"https://material.io/design/components/selection-controls.html#switches"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-switch/README.md"}]},l}(),m=function(){return function(){}}(),r=function(){return function(){}}(),h=function(){function l(){this.isSwitchOn=!1,this.exampleBasic={html:"<mdc-switch></mdc-switch>\n\n<mdc-form-field>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch disabled></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<mdc-form-field alignEnd>\n  <mdc-switch></mdc-switch>\n  <label>RTL</label>\n</mdc-form-field>"},this.exampleChangeEvent={html:'<mdc-form-field>\n  <mdc-switch (change)="onChange($event)"></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>',ts:"import { MdcSwitchChange } from '@angular-mdc/web';\n\nonChange(evt: MdcSwitchChange): void {\n  console.log(evt.checked);\n}"},this.exampleCustom={html:'<mdc-form-field class="custom-switch__label-left-margin">\n  <mdc-switch></mdc-switch>\n  <label>Label margin</label>\n</mdc-form-field>',sass:".custom-switch__label-left-margin {\n  .mdc-switch + label {\n    margin-left: 10px;\n  }\n}"},this.exampleNgModel={html:'<mdc-form-field>\n  <mdc-switch [(ngModel)]="isSwitchOn"></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<p>NgModel value: {{isSwitchOn}}</p>',ts:"isSwitchOn: boolean = false;"},this.exampleNgModelForm={html:'<form #demoForm="ngForm" id="demoForm">\n  <mdc-form-field>\n    <mdc-switch #demoSwitch ngModel name="demoSwitch" #demoSwitchModel="ngModel"></mdc-switch>\n    <label>off/on</label>\n  </mdc-form-field>\n</form>\n\n<p>Dirty: {{ demoSwitchModel.dirty }}</p>\n<p>Touched: {{ demoSwitchModel.touched }}</p>\n<p>Value: {{ demoSwitchModel.value }}</p>'},this.exampleTheme={html:'<mdc-form-field>\n  <mdc-switch class="demo-switch--custom"></mdc-switch>\n  <label>Custom Theme</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch class="custom-switch--thumb-color"></mdc-switch>\n  <label>Thumb Color</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch class="custom-switch--track-color"></mdc-switch>\n  <label>Track Color</label>\n</mdc-form-field>',sass:"$custom-switch-color: $material-color-red-500;\n\n.demo-switch--custom {\n  @include mdc-switch-toggled-on-color($custom-switch-color);\n}\n\n.custom-switch--thumb-color {\n  @include mdc-switch-toggled-on-thumb-color($custom-switch-color);\n  @include mdc-switch-toggled-off-thumb-color($custom-switch-color);\n}\n\n.custom-switch--track-color {\n  @include mdc-switch-toggled-on-track-color($custom-switch-color);\n  @include mdc-switch-toggled-off-track-color($custom-switch-color);\n}"}}return l.prototype.onChange=function(l){this.changeEvent=l.checked},l}(),f=u("Sl5x"),g=u("R3aU"),w=u("gIcY"),p=u("8JU9"),C=u("6MSC"),v=u("Y6EJ"),k=u("6/Kq"),A=u("CCZW"),J=u("XbMX"),x=u("dkiD"),E=u("sks2"),y=u("x6Kz"),S=u("AGHz"),_=e.qb({encapsulation:2,styles:[],data:{}});function G(l){return e.Lb(0,[e.Hb(402653184,1,{_componentViewer:0}),(l()(),e.sb(1,0,null,null,1,"component-viewer",[],null,null,null,d.b,d.a)),e.rb(2,49152,[[1,4]],0,o.b,[],null,null)],null,null)}function M(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,G,_)),e.rb(1,114688,null,0,a,[],null,null)],function(l,n){l(n,1,0)},null)}var H=e.ob("ng-component",a,M,{},{},[]),T=e.qb({encapsulation:2,styles:[],data:{}});function D(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,86,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.rb(2,16384,null,0,f.i,[],null,null),(l()(),e.Jb(-1,null,["MdcSwitch"])),(l()(),e.sb(4,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Selector: "])),(l()(),e.sb(6,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch"])),(l()(),e.Jb(-1,null,[" Exported as: "])),(l()(),e.sb(9,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdcSwitch"])),(l()(),e.sb(11,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.rb(12,16384,null,0,f.l,[],null,null),(l()(),e.Jb(-1,null,["Properties"])),(l()(),e.sb(14,0,null,null,47,"table",[],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.sb(16,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Name"])),(l()(),e.sb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Description"])),(l()(),e.sb(21,0,null,null,40,"tbody",[],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(23,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["id: string"])),(l()(),e.sb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Unique Id of the switch (auto generated if not supplied)."])),(l()(),e.sb(27,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["name: string"])),(l()(),e.sb(30,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Name of the switch."])),(l()(),e.sb(32,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(33,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["ariaLabel: string"])),(l()(),e.sb(35,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Used to set the 'aria-label' attribute on the underlying input element."])),(l()(),e.sb(37,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(38,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["ariaLabelledby: string"])),(l()(),e.sb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["The 'aria-labelledby' attribute takes precedence as the element's text alternative."])),(l()(),e.sb(42,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(43,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["tabIndex: number"])),(l()(),e.sb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Set the underlying tab index of the switch. (Default: 0)"])),(l()(),e.sb(47,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(48,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["checked: boolean"])),(l()(),e.sb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Use to set the checked value."])),(l()(),e.sb(52,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(53,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["disabled: boolean"])),(l()(),e.sb(55,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Disables the switch."])),(l()(),e.sb(57,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(58,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["required: boolean"])),(l()(),e.sb(60,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Whether the switch is required."])),(l()(),e.sb(62,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.rb(63,16384,null,0,f.l,[],null,null),(l()(),e.Jb(-1,null,["Methods"])),(l()(),e.sb(65,0,null,null,11,"table",[],null,null,null,null,null)),(l()(),e.sb(66,0,null,null,10,"tbody",[],null,null,null,null,null)),(l()(),e.sb(67,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["toggle()"])),(l()(),e.sb(70,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Toggle the checked state of the switch."])),(l()(),e.sb(72,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(73,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["focus()"])),(l()(),e.sb(75,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Set focus to the switch."])),(l()(),e.sb(77,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.rb(78,16384,null,0,f.l,[],null,null),(l()(),e.Jb(-1,null,["Events"])),(l()(),e.sb(80,0,null,null,6,"table",[],null,null,null,null,null)),(l()(),e.sb(81,0,null,null,5,"tbody",[],null,null,null,null,null)),(l()(),e.sb(82,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(83,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["change(source: MdcSwitch, checked: boolean)"])),(l()(),e.sb(85,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Event dispatched on value change."]))],null,null)}function L(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,D,T)),e.rb(1,49152,null,0,m,[],null,null)],null,null)}var $=e.ob("ng-component",m,L,{},{},[]),I=e.qb({encapsulation:2,styles:[],data:{}});function O(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,59,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.rb(2,16384,null,0,f.l,[],null,null),(l()(),e.Jb(-1,null,["Sass Mixins"])),(l()(),e.sb(4,0,null,null,55,"table",[],null,null,null,null,null)),(l()(),e.sb(5,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.sb(6,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.sb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Mixin"])),(l()(),e.sb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Description"])),(l()(),e.sb(11,0,null,null,48,"tbody",[],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-on-color($color)"])),(l()(),e.sb(16,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets the base color of the track, thumb, and ripple when the switch is toggled on."])),(l()(),e.sb(18,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(20,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-off-color($color)"])),(l()(),e.sb(22,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets the base color of the track, thumb, and ripple when the switch is toggled off."])),(l()(),e.sb(24,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-on-track-color($color)"])),(l()(),e.sb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets color of the track when the switch is toggled on."])),(l()(),e.sb(30,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(31,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-off-track-color($color)"])),(l()(),e.sb(34,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets color of the track when the switch is toggled off."])),(l()(),e.sb(36,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(37,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-on-thumb-color($color)"])),(l()(),e.sb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets color of the thumb when the switch is toggled on."])),(l()(),e.sb(42,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(43,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-off-thumb-color($color)"])),(l()(),e.sb(46,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets color of the thumb when the switch is toggled off."])),(l()(),e.sb(48,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(49,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(50,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-on-ripple-color($color)"])),(l()(),e.sb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets the color of the ripple surrounding the thumb when the switch is toggled on."])),(l()(),e.sb(54,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.sb(55,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.sb(56,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["mdc-switch-toggled-off-ripple-color($color)"])),(l()(),e.sb(58,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sets the color of the ripple surrounding the thumb when the switch is toggled off."]))],null,null)}function V(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,O,I)),e.rb(1,49152,null,0,r,[],null,null)],null,null)}var F=e.ob("ng-component",r,V,{},{},[]),N=e.qb({encapsulation:2,styles:[],data:{}});function P(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,45,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,42,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,5,"div",[["class","demo-container"],["style","align-items: center; padding: 6px;"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,7)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(6144,null,C.d,null,[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(7,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),(l()(),e.sb(8,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(10,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,1,{_control:0}),e.Hb(603979776,2,{assistiveElements:1}),(l()(),e.sb(13,0,null,0,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,16)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(16,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),e.Gb(2048,[[1,4]],C.d,null,[p.a]),(l()(),e.sb(18,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["off/on"])),(l()(),e.sb(20,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(21,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(22,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,3,{_control:0}),e.Hb(603979776,4,{assistiveElements:1}),(l()(),e.sb(25,0,null,0,4,"mdc-switch",[["class","mdc-switch"],["disabled",""]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,28)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(28,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],{disabled:[0,"disabled"]},null),e.Gb(2048,[[3,4]],C.d,null,[p.a]),(l()(),e.sb(30,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Disabled"])),(l()(),e.sb(32,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(33,0,null,null,10,"mdc-form-field",[["alignEnd",""]],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(34,1228800,null,2,C.c,[e.h,e.A,e.k],{alignEnd:[0,"alignEnd"]},null),e.Hb(603979776,5,{_control:0}),e.Hb(603979776,6,{assistiveElements:1}),(l()(),e.sb(37,0,null,0,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,40)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(40,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),e.Gb(2048,[[5,4]],C.d,null,[p.a]),(l()(),e.sb(42,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["RTL"])),(l()(),e.sb(44,0,null,null,1,"example-viewer",[],null,null,null,J.b,J.a)),e.rb(45,114688,null,0,x.a,[E.b],{example:[0,"example"]},null),(l()(),e.sb(46,0,null,null,17,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(47,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Change event"])),(l()(),e.sb(49,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(50,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,7,{_control:0}),e.Hb(603979776,8,{assistiveElements:1}),(l()(),e.sb(53,0,null,0,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"change"],[null,"focus"]],function(l,n,u){var t=!0,b=l.component;return"focus"===n&&(t=!1!==e.Cb(l,56)._inputElement.nativeElement.focus()&&t),"change"===n&&(t=!1!==b.onChange(u)&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(56,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,{change:"change"}),e.Gb(2048,[[7,4]],C.d,null,[p.a]),(l()(),e.sb(58,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["off/on"])),(l()(),e.sb(60,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(61,null,["Change value: ",""])),(l()(),e.sb(62,0,null,null,1,"example-viewer",[],null,null,null,J.b,J.a)),e.rb(63,114688,null,0,x.a,[E.b],{example:[0,"example"]},null),(l()(),e.sb(64,0,null,null,31,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(65,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["ngModel"])),(l()(),e.sb(67,0,null,null,10,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.sb(68,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,70).onClick(u)&&t),"click"===n&&(t=!1!==e.Cb(l,84).toggle()&&t),t},y.b,y.a)),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(70,245760,null,1,S.a,[e.k,v.a],null,null),e.Hb(335544320,9,{_icon:0}),(l()(),e.Jb(-1,0,["Toggle"])),(l()(),e.sb(73,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,75).onClick(u)&&t),"click"===n&&(t=0!=(e.Cb(l,84).disabled=!e.Cb(l,84).disabled)&&t),t},y.b,y.a)),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(75,245760,null,1,S.a,[e.k,v.a],null,null),e.Hb(335544320,10,{_icon:0}),(l()(),e.Jb(77,0,["Disabled: ",""])),(l()(),e.sb(78,0,null,null,13,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(79,1228800,[["demoformfield",4]],2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,11,{_control:0}),e.Hb(603979776,12,{assistiveElements:1}),(l()(),e.sb(82,0,null,0,7,"mdc-switch",[["class","mdc-switch"],["name","demoswitch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"]],function(l,n,u){var t=!0,b=l.component;return"focus"===n&&(t=!1!==e.Cb(l,84)._inputElement.nativeElement.focus()&&t),"ngModelChange"===n&&(t=!1!==(b.isSwitchOn=u)&&t),t},g.b,g.a)),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(84,4374528,[["demoswitch",4]],0,p.a,[e.h,v.a,e.k,[2,C.c]],{name:[0,"name"]},null),e.Gb(1024,null,w.k,function(l){return[l]},[p.a]),e.rb(86,671744,null,0,w.p,[[8,null],[8,null],[8,null],[6,w.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,w.l,null,[w.p]),e.rb(88,16384,null,0,w.m,[[4,w.l]],null,null),e.Gb(2048,[[11,4]],C.d,null,[p.a]),(l()(),e.sb(90,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["off/on"])),(l()(),e.sb(92,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(93,null,["NgModel value: ",""])),(l()(),e.sb(94,0,null,null,1,"example-viewer",[],null,null,null,J.b,J.a)),e.rb(95,114688,null,0,x.a,[E.b],{example:[0,"example"]},null),(l()(),e.sb(96,0,null,null,29,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(97,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["NgModel Form Directive"])),(l()(),e.sb(99,0,null,null,18,"form",[["id","demoForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Cb(l,101).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Cb(l,101).onReset()&&t),t},null,null)),e.rb(100,16384,null,0,w.y,[],null,null),e.rb(101,4210688,[["demoForm",4]],0,w.o,[[8,null],[8,null]],null,null),e.Gb(2048,null,w.a,null,[w.o]),e.rb(103,16384,null,0,w.n,[[4,w.a]],null,null),(l()(),e.sb(104,0,null,null,13,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(105,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,13,{_control:0}),e.Hb(603979776,14,{assistiveElements:1}),(l()(),e.sb(108,0,null,0,7,"mdc-switch",[["class","mdc-switch"],["name","demoSwitch"],["ngModel",""]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,110)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(110,4374528,[["demoSwitch",4]],0,p.a,[e.h,v.a,e.k,[2,C.c]],{name:[0,"name"]},null),e.Gb(1024,null,w.k,function(l){return[l]},[p.a]),e.rb(112,671744,[["demoSwitchModel",4]],0,w.p,[[2,w.a],[8,null],[8,null],[6,w.k]],{name:[0,"name"],model:[1,"model"]},null),e.Gb(2048,null,w.l,null,[w.p]),e.rb(114,16384,null,0,w.m,[[4,w.l]],null,null),e.Gb(2048,[[13,4]],C.d,null,[p.a]),(l()(),e.sb(116,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["off/on"])),(l()(),e.sb(118,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(119,null,["Dirty: ",""])),(l()(),e.sb(120,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(121,null,["Touched: ",""])),(l()(),e.sb(122,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(123,null,["Value: ",""])),(l()(),e.sb(124,0,null,null,1,"example-viewer",[],null,null,null,J.b,J.a)),e.rb(125,114688,null,0,x.a,[E.b],{example:[0,"example"]},null),(l()(),e.sb(126,0,null,null,15,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(127,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Custom"])),(l()(),e.sb(129,0,null,null,10,"mdc-form-field",[["class","custom-switch__label-left-margin"]],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(130,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,15,{_control:0}),e.Hb(603979776,16,{assistiveElements:1}),(l()(),e.sb(133,0,null,0,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,136)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(136,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),e.Gb(2048,[[15,4]],C.d,null,[p.a]),(l()(),e.sb(138,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Label margin"])),(l()(),e.sb(140,0,null,null,1,"example-viewer",[],null,null,null,J.b,J.a)),e.rb(141,114688,null,0,x.a,[E.b],{example:[0,"example"]},null),(l()(),e.sb(142,0,null,null,40,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.sb(143,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Theme"])),(l()(),e.sb(145,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(146,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(147,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,17,{_control:0}),e.Hb(603979776,18,{assistiveElements:1}),(l()(),e.sb(150,0,null,0,4,"mdc-switch",[["class","demo-switch--custom mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,153)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(153,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),e.Gb(2048,[[17,4]],C.d,null,[p.a]),(l()(),e.sb(155,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Custom Theme"])),(l()(),e.sb(157,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(158,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(159,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,19,{_control:0}),e.Hb(603979776,20,{assistiveElements:1}),(l()(),e.sb(162,0,null,0,4,"mdc-switch",[["class","custom-switch--thumb-color mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,165)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(165,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),e.Gb(2048,[[19,4]],C.d,null,[p.a]),(l()(),e.sb(167,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Thumb Color"])),(l()(),e.sb(169,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.sb(170,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,A.e,A.b)),e.rb(171,1228800,null,2,C.c,[e.h,e.A,e.k],null,null),e.Hb(603979776,21,{_control:0}),e.Hb(603979776,22,{assistiveElements:1}),(l()(),e.sb(174,0,null,0,4,"mdc-switch",[["class","custom-switch--track-color mdc-switch"]],[[8,"id",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Cb(l,177)._inputElement.nativeElement.focus()&&t),t},g.b,g.a)),e.Gb(5120,null,w.k,function(l){return[l]},[p.a]),e.Gb(131584,null,v.a,v.a,[e.A,k.b]),e.rb(177,4374528,null,0,p.a,[e.h,v.a,e.k,[2,C.c]],null,null),e.Gb(2048,[[21,4]],C.d,null,[p.a]),(l()(),e.sb(179,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Track Color"])),(l()(),e.sb(181,0,null,null,1,"example-viewer",[],null,null,null,J.b,J.a)),e.rb(182,114688,null,0,x.a,[E.b],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,28,0,""),l(n,34,0,""),l(n,45,0,u.exampleBasic),l(n,63,0,u.exampleChangeEvent),l(n,70,0),l(n,75,0),l(n,84,0,"demoswitch"),l(n,86,0,"demoswitch",u.isSwitchOn),l(n,95,0,u.exampleNgModel),l(n,110,0,"demoSwitch"),l(n,112,0,"demoSwitch",""),l(n,125,0,u.exampleNgModelForm),l(n,141,0,u.exampleCustom),l(n,182,0,u.exampleTheme)},function(l,n){var u=n.component;l(n,3,0,e.Cb(n,7).id,e.Cb(n,7).checked,e.Cb(n,7).disabled),l(n,9,0,e.Cb(n,10).fluid,e.Cb(n,10).alignEnd),l(n,13,0,e.Cb(n,16).id,e.Cb(n,16).checked,e.Cb(n,16).disabled),l(n,21,0,e.Cb(n,22).fluid,e.Cb(n,22).alignEnd),l(n,25,0,e.Cb(n,28).id,e.Cb(n,28).checked,e.Cb(n,28).disabled),l(n,33,0,e.Cb(n,34).fluid,e.Cb(n,34).alignEnd),l(n,37,0,e.Cb(n,40).id,e.Cb(n,40).checked,e.Cb(n,40).disabled),l(n,49,0,e.Cb(n,50).fluid,e.Cb(n,50).alignEnd),l(n,53,0,e.Cb(n,56).id,e.Cb(n,56).checked,e.Cb(n,56).disabled),l(n,61,0,u.changeEvent),l(n,68,0,e.Cb(n,70).disabled?-1:0,e.Cb(n,70).primary,e.Cb(n,70).secondary,e.Cb(n,70).raised,e.Cb(n,70).dense,e.Cb(n,70).unelevated,e.Cb(n,70).outlined),l(n,73,0,e.Cb(n,75).disabled?-1:0,e.Cb(n,75).primary,e.Cb(n,75).secondary,e.Cb(n,75).raised,e.Cb(n,75).dense,e.Cb(n,75).unelevated,e.Cb(n,75).outlined),l(n,77,0,e.Cb(n,84).disabled?"On":"Off"),l(n,78,0,e.Cb(n,79).fluid,e.Cb(n,79).alignEnd),l(n,82,0,e.Cb(n,84).id,e.Cb(n,84).checked,e.Cb(n,84).disabled,e.Cb(n,88).ngClassUntouched,e.Cb(n,88).ngClassTouched,e.Cb(n,88).ngClassPristine,e.Cb(n,88).ngClassDirty,e.Cb(n,88).ngClassValid,e.Cb(n,88).ngClassInvalid,e.Cb(n,88).ngClassPending),l(n,93,0,u.isSwitchOn),l(n,99,0,e.Cb(n,103).ngClassUntouched,e.Cb(n,103).ngClassTouched,e.Cb(n,103).ngClassPristine,e.Cb(n,103).ngClassDirty,e.Cb(n,103).ngClassValid,e.Cb(n,103).ngClassInvalid,e.Cb(n,103).ngClassPending),l(n,104,0,e.Cb(n,105).fluid,e.Cb(n,105).alignEnd),l(n,108,0,e.Cb(n,110).id,e.Cb(n,110).checked,e.Cb(n,110).disabled,e.Cb(n,114).ngClassUntouched,e.Cb(n,114).ngClassTouched,e.Cb(n,114).ngClassPristine,e.Cb(n,114).ngClassDirty,e.Cb(n,114).ngClassValid,e.Cb(n,114).ngClassInvalid,e.Cb(n,114).ngClassPending),l(n,119,0,e.Cb(n,112).dirty),l(n,121,0,e.Cb(n,112).touched),l(n,123,0,e.Cb(n,112).value),l(n,129,0,e.Cb(n,130).fluid,e.Cb(n,130).alignEnd),l(n,133,0,e.Cb(n,136).id,e.Cb(n,136).checked,e.Cb(n,136).disabled),l(n,146,0,e.Cb(n,147).fluid,e.Cb(n,147).alignEnd),l(n,150,0,e.Cb(n,153).id,e.Cb(n,153).checked,e.Cb(n,153).disabled),l(n,158,0,e.Cb(n,159).fluid,e.Cb(n,159).alignEnd),l(n,162,0,e.Cb(n,165).id,e.Cb(n,165).checked,e.Cb(n,165).disabled),l(n,170,0,e.Cb(n,171).fluid,e.Cb(n,171).alignEnd),l(n,174,0,e.Cb(n,177).id,e.Cb(n,177).checked,e.Cb(n,177).disabled)})}function U(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,P,N)),e.rb(1,49152,null,0,h,[],null,null)],null,null)}var q=e.ob("ng-component",h,U,{},{},[]),R=u("Ip0R"),j=u("UbVM"),K=u("xgI4"),X=u("XHh6"),Z=u("hMXP"),z=u("nWas"),W=u("3h+E"),Y=u("RvxL"),B=u("Y5c5"),Q=u("IEKO"),ll=u("fsoo"),nl=u("e35x"),ul=u("84sf"),el=u("diqM"),tl=u("rDbZ"),bl=u("eKpT"),cl=u("Q2wE"),sl=u("6wbl"),dl=u("P18B"),ol=u("oSez"),il=u("nlZK"),al=u("jlzV"),ml=u("EpaD"),rl=u("ppXW"),hl=u("x3pU"),fl=u("eLLS"),gl=u("a3kT"),wl=u("FZZA"),pl=u("HolX"),Cl=u("vvyD"),vl=u("ZYCi"),kl=u("Lkda"),Al=u("OQP5"),Jl=u("d2mR"),xl=function(){return function(){}}();u.d(n,"SwitchModuleNgFactory",function(){return El});var El=e.pb(t,[],function(l){return e.zb([e.Ab(512,e.j,e.cb,[[8,[b.b,b.a,c.b,c.a,s.a,H,$,F,q]],[3,e.j],e.y]),e.Ab(4608,R.l,R.k,[e.v,[2,R.v]]),e.Ab(4608,w.v,w.v,[]),e.Ab(4608,j.a,j.a,[j.b,e.j,e.r,e.A,R.c,[2,R.g]]),e.Ab(135680,K.c,K.c,[j.a,e.r,[2,K.b],[3,K.c]]),e.Ab(4608,w.b,w.b,[]),e.Ab(1073742336,R.b,R.b,[]),e.Ab(1073742336,w.u,w.u,[]),e.Ab(1073742336,w.h,w.h,[]),e.Ab(1073742336,S.c,S.c,[]),e.Ab(1073742336,X.h,X.h,[]),e.Ab(1073742336,C.e,C.e,[]),e.Ab(1073742336,Z.b,Z.b,[]),e.Ab(1073742336,z.c,z.c,[]),e.Ab(1073742336,W.g,W.g,[]),e.Ab(1073742336,Y.f,Y.f,[]),e.Ab(1073742336,j.c,j.c,[]),e.Ab(1073742336,K.k,K.k,[]),e.Ab(1073742336,B.e,B.e,[]),e.Ab(1073742336,Q.b,Q.b,[]),e.Ab(1073742336,ll.c,ll.c,[]),e.Ab(1073742336,nl.b,nl.b,[]),e.Ab(1073742336,ul.f,ul.f,[]),e.Ab(1073742336,el.b,el.b,[]),e.Ab(1073742336,tl.j,tl.j,[]),e.Ab(1073742336,bl.d,bl.d,[]),e.Ab(1073742336,cl.b,cl.b,[]),e.Ab(1073742336,sl.c,sl.c,[]),e.Ab(1073742336,v.c,v.c,[]),e.Ab(1073742336,dl.b,dl.b,[]),e.Ab(1073742336,ol.b,ol.b,[]),e.Ab(1073742336,il.b,il.b,[]),e.Ab(1073742336,al.d,al.d,[]),e.Ab(1073742336,ml.b,ml.b,[]),e.Ab(1073742336,E.f,E.f,[]),e.Ab(1073742336,p.b,p.b,[]),e.Ab(1073742336,rl.b,rl.b,[]),e.Ab(1073742336,hl.e,hl.e,[]),e.Ab(1073742336,fl.b,fl.b,[]),e.Ab(1073742336,gl.b,gl.b,[]),e.Ab(1073742336,wl.d,wl.d,[]),e.Ab(1073742336,pl.d,pl.d,[]),e.Ab(1073742336,f.n,f.n,[]),e.Ab(1073742336,Cl.a,Cl.a,[]),e.Ab(1073742336,w.r,w.r,[]),e.Ab(1073742336,vl.p,vl.p,[[2,vl.u],[2,vl.l]]),e.Ab(1073742336,kl.b,kl.b,[]),e.Ab(1073742336,Al.d,Al.d,[]),e.Ab(1073742336,Jl.a,Jl.a,[]),e.Ab(1073742336,xl,xl,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,vl.j,function(){return[[{path:"",component:a,children:[{path:"",redirectTo:"api"},{path:"api",component:m},{path:"sass",component:r},{path:"examples",component:h}]}]]},[])])})}}]);