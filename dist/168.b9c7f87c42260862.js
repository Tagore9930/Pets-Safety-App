"use strict";(self.webpackChunkpets_safety=self.webpackChunkpets_safety||[]).push([[168],{9168:(k,g,r)=>{r.r(g),r.d(g,{LoginModule:()=>M});var s=r(6895),e=r(4006),p=r(4206),o=r(4650),m=r(9299),u=r(7009),d=r(4859),f=r(3336),h=r(284),l=r(9549);function b(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Please Enter Email Id"),o.qZA())}function C(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Please Enter Valid Email Id "),o.qZA())}function P(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Please Enter Password"),o.qZA())}function v(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Please Enter Valid Password"),o.qZA())}let O=(()=>{class t{constructor(i,n,c){this.router=i,this.fb=n,this.snackBar=c,this.hide=!0,this.remember=!1,this.horizontalPosition="end",this.verticalPosition="top",this.loginForm=this.fb.group({email:[null,e.kI.compose([e.kI.required,e.kI.email])],password:[null,e.kI.compose([e.kI.required,e.kI.minLength(8)])]})}onSubmit(i){this.remember=i,this.loginForm.valid?(this.router.navigateByUrl("/home"),this.openSnackBar("Successfully logged","success")):this.openSnackBar("Something is wrong","error")}openSnackBar(i,n){this.snackBar.openFromComponent(p.E,{duration:3e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,data:{message:i,messageType:n}})}}return t.\u0275fac=function(i){return new(i||t)(o.Y36(m.F0),o.Y36(e.qu),o.Y36(u.ux))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:63,vars:9,consts:[[1,"login"],[1,"container-lg","py-3","main-container","row","align-items-center","mx-auto"],[1,"d-flex","justify-content-center","h-100"],[1,"col-md-6","bg-white","p-4","shadow","form-container"],[1,"row","justify-content-center","align-items-center","h-100"],[1,"row"],["src","/assets/header-images/App-Icon.jpg","alt","",1,"appIcon","rounded-circle","mx-auto"],[1,"text-center","text-color"],[1,"px-5",3,"formGroup","ngSubmit"],[1,"col-12"],["appearance","outline",1,"w-100","py-1"],["matPrefix","",1,"my-icon"],["matInput","","type","email",1,"pt-2",3,"formControl"],[4,"ngIf"],["matInput","",1,"pt-2",3,"type","formControl"],["type","button","mat-icon-button","","matSuffix","",3,"click"],[1,"col-6","remainder-me"],[1,"pe-auto"],["type","checkbox",1,"pe-auto"],["remember",""],[1,"col-6","forgot"],[1,"float-end"],["href","#"],["mat-stroked-button","","type","submit",1,"btn","btn-primary","bg-color","text-white","w-100"],["data-content","OR",1,"hr-text","text-center","border-0"],[1,"d-flex","justify-content-center"],[1,"icons"],["href","https://www.facebook.com/"],["src","/assets/login-images/facebook.jpg","alt","",1,"facebook","mx-1"],["href","https://www.google.com/"],["src","/assets/login-images/google.jpg","alt","",1,"google","mx-1"],[1,"text-center","py-2"],["routerLink","/register",1,"text-primary","text-decoration-none","pe-auto"],[1,"col-6","wallpaper-container","bg-color","p-4","ps-0","shadow","d-none","d-md-block"],["src","/assets/login-images/login-pic.jpg","alt","",1,"wallpaper-img","w-100"]],template:function(i,n){if(1&i){const c=o.EpF();o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div")(6,"div",5),o._UZ(7,"img",6),o.TgZ(8,"h4",7),o._uU(9,"Login"),o.qZA()(),o.TgZ(10,"form",8),o.NdJ("ngSubmit",function(){o.CHM(c);const x=o.MAs(38);return o.KtG(n.onSubmit(x))}),o.TgZ(11,"div",5)(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),o._uU(15,"Enter Email ID"),o.qZA(),o.TgZ(16,"mat-icon",11),o._uU(17,"mail_outline"),o.qZA(),o._UZ(18,"input",12),o.YNc(19,b,2,0,"mat-error",13),o.YNc(20,C,2,0,"mat-error",13),o.qZA()()(),o.TgZ(21,"div",5)(22,"div",9)(23,"mat-form-field",10)(24,"mat-label"),o._uU(25,"Enter password"),o.qZA(),o.TgZ(26,"mat-icon",11),o._uU(27,"lock_open"),o.qZA(),o._UZ(28,"input",14),o.TgZ(29,"button",15),o.NdJ("click",function(){return n.hide=!n.hide}),o.TgZ(30,"mat-icon"),o._uU(31),o.qZA()(),o.YNc(32,P,2,0,"mat-error",13),o.YNc(33,v,2,0,"mat-error",13),o.qZA()()(),o.TgZ(34,"div",5)(35,"div",16)(36,"label",17),o._UZ(37,"input",18,19),o._uU(39," Remember me "),o.qZA()(),o.TgZ(40,"div",20)(41,"p",21)(42,"a",22),o._uU(43,"Forgot Password"),o.qZA()()()(),o.TgZ(44,"div",5)(45,"div",9)(46,"button",23),o._uU(47,"Submit"),o.qZA()()(),o._UZ(48,"hr",24),o.TgZ(49,"div",25)(50,"div",26)(51,"a",27),o._UZ(52,"img",28),o.qZA()(),o.TgZ(53,"div",26)(54,"a",29),o._UZ(55,"img",30),o.qZA()()(),o.TgZ(56,"p",31)(57,"span"),o._uU(58,"Don\u2019t have an account?"),o.qZA(),o.TgZ(59,"a",32),o._uU(60," Sign up "),o.qZA()()()()()(),o.TgZ(61,"div",33),o._UZ(62,"img",34),o.qZA()()()()}2&i&&(o.xp6(10),o.Q6J("formGroup",n.loginForm),o.xp6(8),o.Q6J("formControl",n.loginForm.controls.email),o.xp6(1),o.Q6J("ngIf",null==n.loginForm||null==n.loginForm.controls.email||null==n.loginForm.controls.email.errors?null:n.loginForm.controls.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==n.loginForm||null==n.loginForm.controls.email||null==n.loginForm.controls.email.errors?null:n.loginForm.controls.email.errors.email),o.xp6(8),o.Q6J("type",n.hide?"password":"text")("formControl",null==n.loginForm?null:n.loginForm.controls.password),o.xp6(3),o.Oqu(n.hide?"visibility_off":"visibility"),o.xp6(1),o.Q6J("ngIf",null==n.loginForm||null==n.loginForm.controls.password||null==n.loginForm.controls.password.errors?null:n.loginForm.controls.password.errors.required),o.xp6(1),o.Q6J("ngIf",null==n.loginForm||null==n.loginForm.controls.password?null:n.loginForm.controls.password.hasError("minlength")))},dependencies:[s.O5,m.rH,d.lW,d.RK,f.Hw,h.Nt,l.KE,l.hX,l.TO,l.qo,l.R9,e._Y,e.Fj,e.JJ,e.JL,e.oH,e.sg],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0%;padding:0%;width:100%!important;height:100%!important}.row[_ngcontent-%COMP%]{margin:0%;padding:0%;width:100%}body[_ngcontent-%COMP%]{background-color:#ffcd9880;margin:0;font-family:Roboto,Helvetica Neue,sans-serif;-webkit-user-select:none;user-select:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#a86d4d;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#573F32}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.visiblity-none[_ngcontent-%COMP%]{visibility:hidden}.pe-auto[_ngcontent-%COMP%]{cursor:pointer!important}.text-colorOne[_ngcontent-%COMP%]{color:#ffcd98}.text-colorTwo[_ngcontent-%COMP%]{color:#573f32}.bg-colorOne[_ngcontent-%COMP%]{background-color:#ffcd98}.bg-colorTwo[_ngcontent-%COMP%]{background-color:#573f32}.bg-colorOne-h[_ngcontent-%COMP%]:hover{background-color:#fae0c5;color:#fff}.bg-colorTwo-h[_ngcontent-%COMP%]:hover{background-color:#a86d4d;color:#fff}.login[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]{height:100%!important}.text-color[_ngcontent-%COMP%]{color:#a86d4d}.bg-color[_ngcontent-%COMP%]{background:#a86d4d}.appIcon[_ngcontent-%COMP%]{width:100px}.remainder-me[_ngcontent-%COMP%]{position:relative}.remainder-me[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:15px;vertical-align:middle}.forgot[_ngcontent-%COMP%]{font-size:15px}.btn-primary[_ngcontent-%COMP%]{border:#a86d4d}.btn-primary[_ngcontent-%COMP%]:active{background:#573F32;color:#dcdcdc!important}.hr-text[_ngcontent-%COMP%]{position:relative;height:1.5em;font-size:13px}.hr-text[_ngcontent-%COMP%]:before{content:"";background:linear-gradient(to right,transparent,#818078,transparent);position:absolute;left:0;top:50%;width:100%;height:1px}.hr-text[_ngcontent-%COMP%]:after{content:attr(data-content);position:relative;color:#000;padding:0 .5em;line-height:1.5em;background-color:#fcfcfa}.icons[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%], .icons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]{width:30px!important;height:30px!important}.wallpaper-img[_ngcontent-%COMP%]{height:-webkit-fill-available}  .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{min-height:40px!important;padding:0!important}  label{padding-bottom:15px!important}  .mat-mdc-icon-button.mat-mdc-button-base{height:35px!important;padding:4px 12px!important}  .mat-mdc-form-field-icon-prefix>.mat-icon, .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{padding:5px!important}@media screen and (max-width: 991px){form[_ngcontent-%COMP%]{padding:0!important}}@media screen and (max-width: 768px){.h-100[_ngcontent-%COMP%]{height:auto!important}.form-container[_ngcontent-%COMP%]{display:flex!important;align-items:center!important}}']}),t})();var Z=r(8139);const w=[{path:"",component:O}];let M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,m.Bz?.forChild(w),Z.b,e.u5,e.UX]}),t})()}}]);