"use strict";(self.webpackChunkpets_safety=self.webpackChunkpets_safety||[]).push([[800],{9800:(C,c,i)=>{i.r(c),i.d(c,{RequestTrainingModule:()=>U});var d=i(6895),e=i(4650),g=i(3238),s=i(3546),m=i(9602),u=i(284),l=i(9549),Z=i(4385);function _(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",69)(1,"button",70),e.NdJ("click",function(r){const A=e.CHM(n).index,q=e.oxw();return e.KtG(q.selectTime(A,r))}),e._uU(2),e.qZA()()}if(2&t){const n=a.$implicit,o=a.index,r=e.oxw();e.xp6(1),e.ekj("active",r.isActive==o),e.xp6(1),e.Oqu(n.time)}}function f(t,a){if(1&t&&(e.TgZ(0,"mat-option",71),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.viewValue," ")}}let v=(()=>{class t{constructor(){this.selected=new Date,this.minDate=new Date,this.availableTimes=[{time:" 1:00 AM "},{time:" 2:00 AM "},{time:" 3:00 AM "},{time:" 6:00 AM "},{time:" 7:00 AM "},{time:" 8:00 AM "}],this.foods=[{value:"Yelp-0",viewValue:"Yelp"},{value:"Facebook-1",viewValue:"Facebook"},{value:"Twitter-2",viewValue:"Twitter"},{value:"Instagram-3",viewValue:"Instagram"},{value:"YouTube-4",viewValue:"YouTube"},{value:"Online-Ads-5",viewValue:"Online Ads"},{value:"Google-Search-6",viewValue:"Google Search"},{value:"Referred-friend-7",viewValue:"Referred by a friend"},{value:"TV-commercial-8",viewValue:"TV commercial"}];const n=(new Date).getFullYear();this.minDate=new Date(this.selected),this.maxDate=new Date(n+9,11,31)}selectTime(n,o){this.isActive=n,this.isTime=o?.target?.innerText,document.querySelector(".requestSelectedTime")?.classList?.remove("visiblity-none"),console.log("correct",o)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-request-training"]],decls:309,vars:14,consts:[[1,"request-training","w-100","py-1"],[1,"bg-white","mx-auto","pb-1"],[1,"mx-auto","py-5","border-bottom","border-gray","d-flex","text-center","w-100"],[1,"header-title","fw-medium","text-white","ps-3","m-auto"],[1,"scheduler","pt-5"],[1,"clients"],[1,"fw-medium","px-4","mb-0"],[1,"gender","d-block","ms-3","mb-3","pb-0"],["type","radio","name","gender",1,"d-none"],[1,"checkmark","rounded-circle"],[1,"dateTime"],[1,"row","mx-1","p-2"],[1,"col-sm-6","pt-1"],[1,"demo-inline-calendar-card"],[3,"selected","minDate","maxDate","selectedChange"],[1,"row"],[1,"col-12"],[1,"text-nowrap","overflow-hidden","text-truncate"],["class","col-6",4,"ngFor","ngForOf"],[1,"col-12","mt-3"],[1,"bg-color","text-white","rounded-2","px-3","py-1","visiblity-none","requestSelectedTime"],[1,"ownerInfo"],[1,"row","my-2"],[1,"col-12","ownerInfo-Title","py-3","my-2"],[1,"text-white","mb-0"],[1,"fullName"],["appearance","outline",1,"w-100"],["matInput","","type","text"],[1,"phone"],["matInput","","type","number"],[1,"email"],["matInput","","type","email"],[1,"address"],[1,"col-12","pt-1"],[1,"dogInfo"],[1,"col-12","dogInfo-Title","py-3","my-2"],[1,"breed"],[1,"dogName"],[1,"dogGenger"],[1,"dogWeight"],[1,"dogSpayed"],[1,"gender","d-block","ms-3","pb-0"],["type","radio","name","spayed",1,"d-none"],[1,"dogHealthy"],["type","radio","name","healthy",1,"d-none"],[1,"dogServices"],[1,"service","d-block","ms-3","mb-3","pb-0"],["type","checkbox",1,"d-none"],[1,"checkmark"],[1,"service","others","d-block","ms-3","pb-0","mb-3"],[1,"row","mx-1","d-none"],[1,"col-12","p-0"],[1,"fw-medium"],["appearance","outline",1,"textarea","w-100"],["matInput","","placeholder","Type here...",1,"pt-2"],[1,"dogAggressive"],["type","radio","name","aggressive",1,"d-none"],[1,"dogBlood"],["type","radio","name","blood",1,"d-none"],[1,"dogVaccinations"],["type","radio","name","vaccinations",1,"d-none"],[1,"dogE-collars"],["type","radio","name","e-collars",1,"d-none"],[3,"value",4,"ngFor","ngForOf"],[1,"border-top","border-gray"],[1,"row","my-4","text-center"],[1,"col-sm-12","mx-auto"],["type","button",1,"btn","btn-outline-success","px-4","py-2","m-2"],["type","button",1,"btn","btn-danger","px-5","py-2","m-2"],[1,"col-6"],["type","button",1,"btn","btn-outline-primary","timeButtons","w-100","my-1",3,"click"],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"header",2)(3,"p",3),e._uU(4,"Dog Training Request Form"),e.qZA()(),e.TgZ(5,"main")(6,"div",4)(7,"div",5)(8,"p",6),e._uU(9,"New client or existing client?"),e.qZA(),e.TgZ(10,"label",7),e._UZ(11,"input",8)(12,"span",9),e.TgZ(13,"span"),e._uU(14,"New client"),e.qZA()(),e.TgZ(15,"label",7),e._UZ(16,"input",8)(17,"span",9),e.TgZ(18,"span"),e._uU(19,"Existing client"),e.qZA()()(),e.TgZ(20,"div",10)(21,"p",6),e._uU(22,"Requested appointment date and time"),e.qZA(),e.TgZ(23,"div",11)(24,"div",12)(25,"mat-card",13)(26,"mat-calendar",14),e.NdJ("selectedChange",function(p){return o.selected=p}),e.qZA()()(),e.TgZ(27,"div",12)(28,"div",15)(29,"div",16)(30,"p",17),e._uU(31),e.ALo(32,"date"),e.qZA()()(),e.TgZ(33,"div",15),e.YNc(34,_,3,3,"div",18),e.qZA()(),e.TgZ(35,"div",15)(36,"div",19)(37,"p",20),e._uU(38),e.ALo(39,"date"),e.qZA()()()()()(),e.TgZ(40,"div",21)(41,"div",22)(42,"div",23)(43,"h4",24),e._uU(44,"Owner Information"),e.qZA()()(),e.TgZ(45,"div",25)(46,"p",6),e._uU(47,"Name"),e.qZA(),e.TgZ(48,"div",11)(49,"div",12)(50,"mat-form-field",26)(51,"mat-label"),e._uU(52,"Enter First Name"),e.qZA(),e._UZ(53,"input",27),e.qZA()(),e.TgZ(54,"div",12)(55,"mat-form-field",26)(56,"mat-label"),e._uU(57,"Enter Last Name"),e.qZA(),e._UZ(58,"input",27),e.qZA()()()(),e.TgZ(59,"div",28)(60,"p",6),e._uU(61,"Phone Number"),e.qZA(),e.TgZ(62,"div",11)(63,"div",12)(64,"mat-form-field",26)(65,"mat-label"),e._uU(66,"Enter Phone Number"),e.qZA(),e._UZ(67,"input",29),e.qZA()()()(),e.TgZ(68,"div",30)(69,"p",6),e._uU(70,"Email"),e.qZA(),e.TgZ(71,"div",11)(72,"div",12)(73,"mat-form-field",26)(74,"mat-label"),e._uU(75,"Enter Email Address"),e.qZA(),e._UZ(76,"input",31),e.qZA()()()(),e.TgZ(77,"div",32)(78,"p",6),e._uU(79,"Address"),e.qZA(),e.TgZ(80,"div",11)(81,"div",33)(82,"mat-form-field",26)(83,"mat-label"),e._uU(84,"Enter Street Address"),e.qZA(),e._UZ(85,"input",27),e.qZA()()(),e.TgZ(86,"div",11)(87,"div",33)(88,"mat-form-field",26)(89,"mat-label"),e._uU(90,"Enter Street Address Line 2"),e.qZA(),e._UZ(91,"input",27),e.qZA()()(),e.TgZ(92,"div",11)(93,"div",12)(94,"mat-form-field",26)(95,"mat-label"),e._uU(96,"Enter City"),e.qZA(),e._UZ(97,"input",27),e.qZA()(),e.TgZ(98,"div",12)(99,"mat-form-field",26)(100,"mat-label"),e._uU(101,"Enter State/Province"),e.qZA(),e._UZ(102,"input",27),e.qZA()()()(),e.TgZ(103,"div",11)(104,"div",33)(105,"mat-form-field",26)(106,"mat-label"),e._uU(107,"Enter Postal/Zip Code"),e.qZA(),e._UZ(108,"input",27),e.qZA()()()(),e.TgZ(109,"div",34)(110,"div",22)(111,"div",35)(112,"h4",24),e._uU(113,"Dog Information"),e.qZA()()(),e.TgZ(114,"div",36)(115,"p",6),e._uU(116,"Breed"),e.qZA(),e.TgZ(117,"div",11)(118,"div",12)(119,"mat-form-field",26)(120,"mat-label"),e._uU(121,"Enter Breed"),e.qZA(),e._UZ(122,"input",27),e.qZA()()()(),e.TgZ(123,"div",37)(124,"p",6),e._uU(125,"Name of the dog"),e.qZA(),e.TgZ(126,"div",11)(127,"div",12)(128,"mat-form-field",26)(129,"mat-label"),e._uU(130,"Enter Name of the dog"),e.qZA(),e._UZ(131,"input",27),e.qZA()()()(),e.TgZ(132,"div",38)(133,"p",6),e._uU(134,"Gender of the dog"),e.qZA(),e.TgZ(135,"label",7),e._UZ(136,"input",8)(137,"span",9),e.TgZ(138,"span"),e._uU(139,"Male"),e.qZA()(),e.TgZ(140,"label",7),e._UZ(141,"input",8)(142,"span",9),e.TgZ(143,"span"),e._uU(144,"Female"),e.qZA()()(),e.TgZ(145,"div",39)(146,"p",6),e._uU(147,"Weight of dog"),e.qZA(),e.TgZ(148,"div",11)(149,"div",12)(150,"mat-form-field",26)(151,"mat-label"),e._uU(152,"Enter Weight of dog"),e.qZA(),e._UZ(153,"input",27),e.qZA()()()(),e.TgZ(154,"div",40)(155,"p",6),e._uU(156,"Is the dog spayed /neutered? "),e.qZA(),e.TgZ(157,"label",41),e._UZ(158,"input",42)(159,"span",9),e.TgZ(160,"span"),e._uU(161,"Yes"),e.qZA()(),e.TgZ(162,"label",7),e._UZ(163,"input",42)(164,"span",9),e.TgZ(165,"span"),e._uU(166,"No"),e.qZA()()(),e.TgZ(167,"div",43)(168,"p",6),e._uU(169,"Is the dog in good and healthy condition?"),e.qZA(),e.TgZ(170,"label",41),e._UZ(171,"input",44)(172,"span",9),e.TgZ(173,"span"),e._uU(174,"Yes"),e.qZA()(),e.TgZ(175,"label",7),e._UZ(176,"input",44)(177,"span",9),e.TgZ(178,"span"),e._uU(179,"No"),e.qZA()()(),e.TgZ(180,"div",45)(181,"p",6),e._uU(182,"Is the dog in good and healthy condition?"),e.qZA(),e.TgZ(183,"label",46),e._UZ(184,"input",47)(185,"span",48),e.TgZ(186,"span"),e._uU(187,"Basic class"),e.qZA()(),e.TgZ(188,"label",46),e._UZ(189,"input",47)(190,"span",48),e.TgZ(191,"span"),e._uU(192,"Intermediate class"),e.qZA()(),e.TgZ(193,"label",46),e._UZ(194,"input",47)(195,"span",48),e.TgZ(196,"span"),e._uU(197,"Advanced class"),e.qZA()(),e.TgZ(198,"label",46),e._UZ(199,"input",47)(200,"span",48),e.TgZ(201,"span"),e._uU(202,"Jumping and retrieving class"),e.qZA()(),e.TgZ(203,"label",46),e._UZ(204,"input",47)(205,"span",48),e.TgZ(206,"span"),e._uU(207,"Behavior modification"),e.qZA()(),e.TgZ(208,"label",46),e._UZ(209,"input",47)(210,"span",48),e.TgZ(211,"span"),e._uU(212,"Obedience class"),e.qZA()(),e.TgZ(213,"label",46),e._UZ(214,"input",47)(215,"span",48),e.TgZ(216,"span"),e._uU(217,"Consulting or assessment"),e.qZA()(),e.TgZ(218,"label",49),e._UZ(219,"input",47)(220,"span",48),e.TgZ(221,"span"),e._uU(222,"Other"),e.qZA(),e.TgZ(223,"div",50)(224,"div",51)(225,"mat-form-field",26)(226,"mat-label"),e._uU(227,"Enter Postal/Zip Code"),e.qZA(),e._UZ(228,"input",27),e.qZA()()()()(),e.TgZ(229,"div",11)(230,"div",33)(231,"p",52),e._uU(232,"What is your primary concern about your dog?"),e.qZA(),e.TgZ(233,"mat-form-field",53),e._UZ(234,"textarea",54),e.qZA()()(),e.TgZ(235,"div",55)(236,"p",6),e._uU(237,"Is your dog aggressive?"),e.qZA(),e.TgZ(238,"label",7),e._UZ(239,"input",56)(240,"span",9),e.TgZ(241,"span"),e._uU(242,"Yes"),e.qZA()(),e.TgZ(243,"label",7),e._UZ(244,"input",56)(245,"span",9),e.TgZ(246,"span"),e._uU(247,"No"),e.qZA()()(),e.TgZ(248,"div",57)(249,"p",6),e._uU(250,"Did you dog bitten anyone and drawn blood?"),e.qZA(),e.TgZ(251,"label",7),e._UZ(252,"input",58)(253,"span",9),e.TgZ(254,"span"),e._uU(255,"Yes"),e.qZA()(),e.TgZ(256,"label",7),e._UZ(257,"input",58)(258,"span",9),e.TgZ(259,"span"),e._uU(260,"No"),e.qZA()()(),e.TgZ(261,"div",59)(262,"p",6),e._uU(263,"Is the dog updated on his/her vaccinations?"),e.qZA(),e.TgZ(264,"label",7),e._UZ(265,"input",60)(266,"span",9),e.TgZ(267,"span"),e._uU(268,"Yes"),e.qZA()(),e.TgZ(269,"label",7),e._UZ(270,"input",60)(271,"span",9),e.TgZ(272,"span"),e._uU(273,"No"),e.qZA()()(),e.TgZ(274,"div",61)(275,"p",6),e._uU(276,"Do you approve the use of e-collars on your dog?"),e.qZA(),e.TgZ(277,"label",7),e._UZ(278,"input",62)(279,"span",9),e.TgZ(280,"span"),e._uU(281,"Yes"),e.qZA()(),e.TgZ(282,"label",7),e._UZ(283,"input",62)(284,"span",9),e.TgZ(285,"span"),e._uU(286,"No"),e.qZA()()(),e.TgZ(287,"div",11)(288,"div",33)(289,"p",52),e._uU(290,"Any special instructions?"),e.qZA(),e.TgZ(291,"mat-form-field",53),e._UZ(292,"textarea",54),e.qZA()()(),e.TgZ(293,"div",11)(294,"div",12)(295,"p",52),e._uU(296,"How did you hear about us?"),e.qZA(),e.TgZ(297,"mat-form-field",26)(298,"mat-label"),e._uU(299,"Please Select"),e.qZA(),e.TgZ(300,"mat-select"),e.YNc(301,f,2,2,"mat-option",63),e.qZA()()()()()(),e.TgZ(302,"footer",64)(303,"div",65)(304,"div",66)(305,"button",67),e._uU(306,"Save"),e.qZA(),e.TgZ(307,"button",68),e._uU(308,"Submit"),e.qZA()()()()()()),2&n&&(e.xp6(26),e.Q6J("selected",o.selected)("minDate",o.minDate)("maxDate",o.maxDate),e.xp6(5),e.Oqu(e.xi3(32,8,o.selected,"EEE, MMM d")),e.xp6(3),e.Q6J("ngForOf",o.availableTimes),e.xp6(4),e.AsE("You\u2019ve selected ",o.isTime," on ",e.xi3(39,11,o.selected,"EEEE, MMMM dd"),""),e.xp6(263),e.Q6J("ngForOf",o.foods))},dependencies:[d.sg,g.ey,s.a8,m._H,u.Nt,l.KE,l.hX,Z.gD,d.uU],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0%;padding:0%;width:100%!important;height:100%!important}.row[_ngcontent-%COMP%]{margin:0%;padding:0%;width:100%}body[_ngcontent-%COMP%]{background-color:#ffcd9880;margin:0;font-family:Roboto,Helvetica Neue,sans-serif;-webkit-user-select:none;user-select:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#a86d4d;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#573F32}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.visiblity-none[_ngcontent-%COMP%]{visibility:hidden}.pe-auto[_ngcontent-%COMP%]{cursor:pointer!important}.text-colorOne[_ngcontent-%COMP%]{color:#ffcd98}.text-colorTwo[_ngcontent-%COMP%]{color:#573f32}.bg-colorOne[_ngcontent-%COMP%]{background-color:#ffcd98}.bg-colorTwo[_ngcontent-%COMP%]{background-color:#573f32}.bg-colorOne-h[_ngcontent-%COMP%]:hover{background-color:#fae0c5;color:#fff}.bg-colorTwo-h[_ngcontent-%COMP%]:hover{background-color:#a86d4d;color:#fff}form[_ngcontent-%COMP%]{margin:144px auto 100px;width:752px;box-shadow:0 4px 4px #57647e36}header[_ngcontent-%COMP%]{background-color:#a86d4d}.header-title[_ngcontent-%COMP%]{font-size:35px}main[_ngcontent-%COMP%]{padding:0 38px}.bg-color[_ngcontent-%COMP%], .ownerInfo-Title[_ngcontent-%COMP%], .dogInfo-Title[_ngcontent-%COMP%]{background-color:#a86d4d}.gender[_ngcontent-%COMP%], .service[_ngcontent-%COMP%]{position:relative;padding-left:35px;cursor:pointer}.gender[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], .service[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{position:absolute;top:3px;left:12px;height:18px;width:18px;border:1px solid #c3cad8}.gender[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%], .service[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{box-shadow:0 0 0 2px #2e69ff40}.gender[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%], .service[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#a86d4d}.gender[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after, .service[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.gender[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after, .service[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{content:"";display:none;position:absolute;top:6px;left:6px;width:5px;height:5px;background:white}.gender[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]:after, .service[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]:after{border-radius:50%}.gender.others[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .row[_ngcontent-%COMP%], .service.others[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .row[_ngcontent-%COMP%]{display:block!important}.timeButtons.btn-outline-primary[_ngcontent-%COMP%]:hover:not(.active){background-color:#0d6efd33!important;color:#0d6efd!important}.btn-outline-primary.active[_ngcontent-%COMP%]{background-color:#3f51b5!important;color:#fff!important}.changeDates-btn[_ngcontent-%COMP%]{height:33px!important;width:33px!important}  .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{min-height:40px!important;padding:0!important}  label{padding-bottom:15px!important}  .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding:0!important;display:flex;align-items:center}  .mat-mdc-form-field-infix,   .mat-mdc-form-field-icon-prefix, .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{min-height:35px!important}  mat-datepicker-toggle .mat-mdc-icon-button.mat-mdc-button-base{height:35px!important;padding:0 12px!important}  .textarea .mdc-text-field{padding:0 0 0 16px!important}textarea[_ngcontent-%COMP%]{min-height:150px}@media screen and (max-width: 768px){form[_ngcontent-%COMP%]{width:565px!important}}@media screen and (max-width: 565px){header[_ngcontent-%COMP%]{padding:40px 0!important}main[_ngcontent-%COMP%]{padding:5px!important}form[_ngcontent-%COMP%]{width:95%!important;margin-left:auto!important;margin-right:auto!important}.header-title[_ngcontent-%COMP%]{font-size:25px!important}}']}),t})();var b=i(9299),T=i(8139);const h=[{path:"",component:v}];let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,b.Bz.forChild(h),T.b]}),t})()}}]);