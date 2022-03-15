$(window).load(function(){
    //banner
   var bannerSeniorAI = document.getElementById("banneSeniorAI");
   var tit = bannerSeniorAI.children[0].children[0];
   var leading = bannerSeniorAI.children[1];
   var pic2018 = bannerSeniorAI.children[2];
   var science = bannerSeniorAI.children[3];
   var font = bannerSeniorAI.children[4];
   tit.style.transform = "translateY(0)";
   leading.style.transform = "translateZ(0)";
   pic2018.style.transform = "translateY(40px)";
//    ufo.addEventListener("webkitTransitionEnd", transitionOver);
//    ufo.addEventListener("transitionend", transitionOver);
   function transitionOver(){
       this.style.animation = "rotate 6s infinite linear";
   }
   science.style.transform = "translateY(38px) rotateY(360deg) scale(1,1)";
   font.style.opacity = "1";

   //人工智能时代来临
//    var biling = document.getElementById("biling");
//    var topCity = biling.children[0] ;
//    var bottomCity = biling.children[1];
//    var bilingH1 = biling.children[2];
//    var bilingUl = biling.children[3].children[0];
   

   //人工智能工程师2017年就业薪酬
//    var directive = document.getElementById("directive");
//    var directiveH1 = directive.children[0];
//    var directiveH2 = directive.children[1];
//    var directiveSelect = directive.children[2];
//    var directiveBox = directive.children[3];

   //顶级大咖 倾力讲授
//    var pythonCharacterH1 = document.getElementById("pythonCharacter");
//    var pythonCharacterDiv = pythonCharacterH1.nextElementSibling || pythonCharacterH1.nextSibling;

   //完美学习计划成就精英人工智能工程师
//    var studyPlan = document.getElementById("studyPlan");
//    var studyPlanH1= studyPlan.children[0];
//    var studyPlanSection =  studyPlan.children[1];
//     window.onscroll = function(){
//         if(scroll().top>740){
//             topCity.style.transform = "translateY(0)";
//             bottomCity.style.transform = "translateY(0)";
//             bilingH1.style.transform = "translateZ(0)";
//             bilingUl.style.opacity = "1";
//             topCity.style.opacity = "1";
//             bottomCity.style.opacity = "1";
//         }
//         if(scroll().top>1040){
//             directiveH1.style.transform = "translateZ(0)";
//             directiveH2.style.transform = "translateZ(0)";
//             directiveSelect.style.transform = "translateZ(0)";
//             directiveBox.style.transform = "translateY(0)";
//         }
//         if(scroll().top>2500){
//             pythonCharacterH1.style.transform = "translateY(0)";
//             pythonCharacterDiv.style.transform = "translateY(0)";
//         }
//         if(scroll().top>3100){
//             studyPlanH1.style.transform = "translateZ(0)";
//             studyPlanH1.style.opacity = 1;
//             studyPlanSection.style.transform = "translateZ(0)";
//             studyPlanSection.style.opacity = 1;
//         }
//     }
//     function scroll() {  // 开始封装自己的scrollTop
//         if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
//             // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
//             return {
//                 left: window.pageXOffset,
//                 top: window.pageYOffset
//             }
//         }
//         else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
//             return {
//                 left: document.documentElement.scrollLeft,
//                 top: document.documentElement.scrollTop
//             }
//         }
//         return {   // 未声明 DTD
//             left: document.body.scrollLeft,
//             top: document.body.scrollTop
//         }
//     }







})