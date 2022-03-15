$(document).ready(function(){
	function show(){
		var a = Math.random();
		var b = Math.random();
		var c = Math.random();
		var d = Math.random();
		var e = Math.random();
		var f = Math.random();
		a = a*9;
		b = b*9;
		c = c*9;
		d = d*9;
		e = e*9;
		f = f*9;
		a = Math.ceil(a)-1;
		b = Math.ceil(b)-1;
		c = Math.ceil(c)-1;
		d = Math.ceil(d)-1;
		e = Math.ceil(e)-1;
		f = Math.ceil(f)-1;
		var arrDiv = $("#Skip").children();
		$(arrDiv).css({"display":"block"});
		$(arrDiv).eq(a).css({"display":"none"});
		$(arrDiv).eq(b).css({"display":"none"});
		$(arrDiv).eq(c).css({"display":"none"});
		$(arrDiv).eq(c).css({"display":"none"});
		$(arrDiv).eq(e).css({"display":"none"});
		$(arrDiv).eq(f).css({"display":"none"});
	}
	setInterval(show,2000);
});

function liFunc(courseMessage){
	var li = '';
	for( var i=0;i<courseMessage.length;i++){
		li += 		'<li class="course-box">'
	+ '<div class="course">'
	+ '<div class="content">'
	+ '<h2 class="bg-pic'+(i%4+1)+'">'+ courseMessage[i].courseBigTitle+'</h2>'
	+ '<div class="detail-descri">'
	+ '<h3>'+ courseMessage[i].courseSmallTitle+'</h3>'
	+ '<p title='+courseMessage[i].courseIntro+'>'+ courseMessage[i].courseIntro+'</p>'	
	+ '</div>'		
	+ '<p class="time">预计学时：<span>'+ courseMessage[i].day+'</span>天</p>'
	+ '</div>'										
	+ '<i></i>'										
	+ '</div>'								
	+ '</li>';		
	}
	return li;
}
function apprenticeship(arg){
	var li = " ";
	for( var i=0;i<arg.length;i++ ){
		if( i<4 ){
		li +=  '<li class="course-box">'
			+'<div class="course">'
			+'<div class="content content-bg content-bg-'+(i%4+1)+'">'
			+'<span title="'+arg[i].testTitle1+'" class="color-'+(i%4+1)+' descri-text">'
			+			arg[i].testTitle1
			+		'</span>'
			+	'</div>'
			+	'<i></i>'
			+'</div>'
		    +'</li>'
		}else{
		li += '<li class="course-box">'
			+'<div class="course">'
			+	'<div class="content test-bg test-bg-'+(i%4+1)+'">'
			+      '<span title="'+ arg[i].testTitle2 +'" class="color-test descri-text">'
			+			arg[i].testTitle2
			+		'</span>'
			+		'<span title="'+ arg[i].textDescribtion+'" class="descri-test">'+ arg[i].textDescribtion +'</span>'
			+	'</div>'
			+	'<i></i>'
			+'</div>'
		    +'</li>'
		}
	}
	return li;
}

window.onload = function(){	
	var obj=[
	{ClassName:"拜师学艺",courseMessage:[
	{
	courseBigTitle: "C# Winform",
	courseSmallTitle:"Csharp基础与Winform编程",
	courseIntro:"本课程全面详细的讲解了C#基础语法，课程内容包括C#入门，运算符与数据类型转换，数组，构建布局良好的窗体，窗体控件编程等。让学员迅速的全面掌握.NET基础语法及开法必备基础知识！",
	day:6
	},{
	courseBigTitle: "OOP",
	courseSmallTitle:"面向对象开发(OOP)",
	courseIntro:"万物皆对象。面向对象(Object Oriented,OO)是当前计算机界关心的重点，它是90年代软件开发方法的主流。面向对象的概念和应用已超越了程序设计和软件开发，扩展到很宽的范围。如数据库系统、交互式界面、应用结构、应用平台、分布式系统、网络管理结构、CAD技术、人工智能等领域。掌握编程的无上心法，为成为一位中级程序员做准备！",
	day:9
	},{
	courseBigTitle: "SQL Server",
	courseSmallTitle:"SQL Server快速上手",
	courseIntro:"SQL Server 是一个关系数据库管理系统。本课程全面详细从增删改查到存储过程,游标,触发器!带你走进数据库的世界!",
	day:5
	},{
	courseBigTitle: "索引器 集合 IO",
	courseSmallTitle:"精通C#高级特性",
	courseIntro:"本课程主要讲解最实用的C#高级技术，包括索引器，集合，泛型，文件操作，序列化与反序列化，单元测试，特性，程序集和反射。全面掌握C#的高级特性，为高级应用打好基础！同时会给大家介绍后期开发需要的与数据库交互技术ADO.NET。",
	day:5
	},{
	courseBigTitle: "html css",
	courseSmallTitle:"HTML+CSS",
	courseIntro:"静态网页是标准的HTML文件，是网站建设的基础，本书讲解了HTML的基本标签、表格、表单及框架、CSS样式的深入学习等内容。为了让学生更好地把握教材内容，本书每一章的开始都有教学目标、重难点及学习建议，正文之后是小结，涵盖了本章的主要知识点并附以课堂作业以及大量的案例解析，使读者更好的实践掌握，快速提高开发技能，势必将这些核心知识学到极致。",
	day:6
	},{
	courseBigTitle: "js",
	courseSmallTitle:"Javascript基础",
	courseIntro:"从零入手JS适合完全不会Javascript目标人群，但有HTML和CSS基础本课从第一句话到基础的语法结构，带领大家做出几个实用JS效果为止，使你真正上路要求：JS零基础学过HTML和CSS",
	day:15
	},{
	courseBigTitle: "JQ",
	courseSmallTitle:"jQuery",
	courseIntro:"Jquery 是前端开发必备框架之一，使用选择器、并解决异步传输等常用的基本开发，可以显著提高开发效率 。",
	day:5
	},{
	courseBigTitle: "ASP.NET MVC",
	courseSmallTitle:"ASP.NET MVC5框架剖析与案例解析",
	courseIntro:"ASP.NET MVC是一个建立在ASP.NET平台上基于MVC模式的Web开发框架，它提供了一个与传统Web Forms完全不同的Web应用程序开发方式。ASP.NET Web Forms借鉴Windows Forms基于控件和事件注册的编程模式，使Web应用的开发变得简单而快捷，但是它却使开发人员与Web的本质渐行渐远。ASP.NET MVC是一种回归，它使开发人员可以真正地面向Web进行编程，我们面对的不再是拖拉到Web页面的控件，而是整个HTTP请求和响应的流程。",
	day:7
	},{
	courseBigTitle: "HTML5",
	courseSmallTitle:"HTML5+CSS3",
	courseIntro:"HTML5的设计目的是为了在移动设备上支持多媒体。为了使广大学员能够充分了解HTML5和CSS3的基础知识，并且能结合相关技术开发相应的WEB网页和移动应用，本课程以小项目案例形式给大家展示，在学习完本套课程之后，相信大家一定能够掌握这门技术，并可以进行实际项目的开发。",
	day:5
	},{
	courseBigTitle: "BootStrap",
	courseSmallTitle:"升加薪必备技能 - BootStrap响应式网页开发",
	courseIntro:"晋升加薪必备技能，本课程系统全面的介绍了BootStrap企业级开发应用所需的技能。基础篇，侧重于BootStrap相关 API 详解，主要包含以下内容：Brackets前端开发工具详解、BootStrap框架三大核心-CSS、BootStrap框架三 大核心-布局组件、BootStrap框架三大核心-JavaScript插件、附-BootStrap编码规范。学习完本课程后，实现响应式布局将不再是梦。",
	day:9
	},{
	courseBigTitle: "Angular JS",
	courseSmallTitle:"前端框架技术 - Angular JS实战",
	courseIntro:"前端框架技术，Angular JS，是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVVM、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。本课程通过初识angularJS、数据绑定和表达式、过滤器与指令、多重视图与路由、表单与验证、服务与服务器通信等知识，带领大家由渐入深学习angularJS，从而掌握更多的框架技术，提高自身技术能力。",
	day:14
	},{
	courseBigTitle: "Node.JS",
	courseSmallTitle:"ASP.NET MVC5框架剖析与案例解析",
	courseIntro:"ASP.NET MVC是一个建立在ASP.NET平台上基于MVC模式的Web开发框架，它提供了一个与传统Web Forms完全不同的Web应用程序开发方式。ASP.NET Web Forms借鉴Windows Forms基于控件和事件注册的编程模式，使Web应用的开发变得简单而快捷，但是它却使开发人员与Web的本质渐行渐远。ASP.NET MVC是一种回归，它使开发人员可以真正地面向Web进行编程，我们面对的不再是拖拉到Web页面的控件，而是整个HTTP请求和响应的流程。",
	day:7
	},{
	courseBigTitle: "EasyUi",
	courseSmallTitle:"前端框架技术 - EasyUI快速上手",
	courseIntro:"jQuery EasyUI是一组基于jQuery的UI插件集合体，而jQuery EasyUI的目标就是帮助web开发者更轻松的打造出功能丰富并且美观的UI界面。开发者不需要编写复杂的javascript，也不需要对css样式 有深入的了解，开发者需要了解的只有一些简单的html标签。本课程通过讲解EasyUI入门示例及一些基本操作，带领大家快速入门，在后期开发过程中打造更高效、功能丰富、界面美观的网站。",
	day:7
	},{
	courseBigTitle: "Python",
	courseSmallTitle:"Python",
	courseIntro:"本课程以实际问题为核心进行组织和编写，以框图为工具来描述问题的解决步骤，最终用Python语言写出程序，旨在培养学员从整体上思考问题和把握问题，并以一种直观的方式描述问题的解决步骤，训练学员用简洁而快速的方式编写程序。本课程以培养学生的编程思想和编程能力为目标，精心设计了本系列课程各个学时的内容。在本课程中会介绍程序设计领域的许多基本问题，并示范性地用框图表达了解决问题的算法，并用Python语言进行实现，旨在逐步的培训学员的编程思想和编程能力。本部分内容为入门篇！",
	day:2
	},{
	courseBigTitle: "Python Web",
	courseSmallTitle:"Python Web",
	courseIntro:"本课程为Pyramid Web开发入门课程，主要讲解了Pyramid框架入门和常见的项目开发方法。本课程以项目为导向，结合基础知识的讲解，允许没有相关基础的学员迅速入门。同时，有鉴于本课程以项目案例开发为导向，故可以让学员融入实际开发过程中，尽快积累经验。",
	day:7
	}]
	}
	,{ClassName:"华山论剑",courseMessage:[
	{
	courseBigTitle: "ASP.NET MVC 微信公众平台",
	courseSmallTitle:"基于ASP.net MVC开发微信公众平台开发 ",
	courseIntro:"随着移动互联网时代的到来，微信开发成为非常重要的移动端开发的一块，其中的微信公众号是开发者或商家在微信公众平台上申请的应用账号，该帐号与QQ账号互通，通过公众号，商家可在微信平台上实现和特定群体的文字、图片、语音、视频的全方位沟通、互动 。形成了一种主流的线上线下微信互动营销方式。本课程是通过从最基础的微信公众号申请到基于微信公众号进行功能讲解开发的项目实战型课程，使用的开发环境是基于.Net MVC4.0的，最终将让大家掌握从最基础的申请账号到完成各个重要的微信接口功能全方位掌握微信开发的基本技能。",
	day:3
	},{
	courseBigTitle: "三层架构",
	courseSmallTitle:"应用多层架构技术构建.NET企业级开发",
	courseIntro:"本课程从设计模式、抽象工厂模式+反射+配置文件实现通用数据源、PetShop七层架构等角度全面讲述了.net企业级别应用,并配合2个项目案例进行讲解",
	day:7
	},{
	courseBigTitle: "Winform",
	courseSmallTitle:"Winform数据库编程",
	courseIntro:"本课程结合ADO.NET\Winform数据库编程并配合项目案例,固定资产管理系统进行全面讲述Winform数据库编程",
	day:7
	}]
	}
	,{ClassName:"笑傲江湖",courseMessage:[
	{
	courseBigTitle: "EntityFramework5 EasyUI 通权",
	courseSmallTitle:"基于MVC4+E F5+EasyUI技术实现通用权限管理系统",
	courseIntro:" 自从微软在VS2012平台，完美推出MVC4,EF5等具有标志性的技术之后,从事.NETWEB开发的程序员算是迎来了一个暂新的春天，成熟的MVC4等相关技术，让.NET的WEB开发更加偏向于WEB的本质，性能更容易优化，同时也宣告我们再不是只会拖控件的.NET程序员了。再结合easyUI、ligerUI、fineUI和 bootStrap等一系列成熟的前端框架，用.NETMVC做出来的BS系统，无论是从开发效率、成本还是界面效果、体验都可以媲美JAVA和PHP平台，还有强大的razor视图引擎,可以让我们随意定制我们想要的视觉效果。随着MVC4,EF5等技术逐步得到行内研发人员的认可及普及程度的逐步提高，微软顺势结合VS2013平台推出了MVC5和EF6等核心技术，因从MVC4之后MVC系列框架在.NET平台下已逐渐成熟，所以两次更新的差别并不像之前3版本差别那么大，我们很容易接受。总之，也就是在这个大背景下，为了提升广大学员对.NET新技术的学习质量，北风全职讲师闲筝老师，前后历经半年之久，结合自己丰富的工作经验，郑重推出了.NETMVC版的通用权限管理系统。",
	day:8
	},{
	courseBigTitle: "农产品",
	courseSmallTitle:"基于.NET架构的农产品大数据电商平台全程实录",
	courseIntro:"多用户综合B2C商城，商家可以在商城统一的平台上开启自己的店面并展示自己的产品，类似网上超市的概念。这样通过统一的平台展示产品，统一进行管理，实体店在政府和集团公司统一统筹规划下，将服务分散到各个网点，服务面积广，配送方便，销售便利。特别是本商城独有的条码溯源系统可以做到每笔订单都可以跟踪溯源，做到果蔬质量真实可靠，从根源上杜绝了劣质、有害果蔬进入销售渠道。本项目主要针对我国农业发展的现状，运用日趋完善的电子商务，为农产品买卖建立网络信息服务，主要解决3大问题：1.我国农产品业信息基础设施落后、网络化程度较低、信息的交流与共享不通畅而导致农产品产品交易困难的问题；2.农产品销售摆脱中间商盘剥与市场信息不通畅的问题；3.农产品食品安全问题。本农产品溯源平台集生产、仓储、配送、销售为一体，其中生产环节、仓储环节、配送环节均与政府挂钩，所以本课程从集团总部配送开始，主要描述经销商和客户O2O活动以及B2C活动。包含了以下几大块：",
	day:25
	},{
	courseBigTitle: "C/S 通权 FastReport RDLC 报表统计",
	courseSmallTitle:"零基础到CS开发高手通用权限管理系统全程实录",
	courseIntro:"闲筝老师的.NETWinform(v1.0)版的通用权限管理系统共72讲，目前已全部录制完毕。第一个版本包括的功能模块以权限控制为主，并且精确到窗体上的每个按纽，有了权限控制，后期扩展起来就会比较方便，同时权限的流程控制比较通用，理解起来不是很费劲，学习起来就更容易把注意力集中到技能点上。我们第一个版本的功能模块主要有：用户管理、角色管理、菜单管理、权限管理、组织机构管理、特权管理、用户角色管理、角色权限管理、日志管理、报表统计、智能客户端、报表设计器和按纽权限组。另外像ADO.NET、分层、事务、视图、委托、反射、WebService、FastReport.NET、Dev、RDLC、EpPlus操作EXCEL等知识点全部贯穿在视频中讲解，大多以实际操作的方式向大家展示各个知识点的魅力。",
	day:3
	},{
	courseBigTitle: "WPF ASP.NET MVC4",
	courseSmallTitle:"基于.NET WPF+ASP.NET MVC4技术构建夜猫商务会所运营管理平台一体化解决方案",
	courseIntro:"武汉夜猫商贸有限公司（以下简称“夜猫商贸”）奉行“诚信、优质、值得信赖”的经营理念，建立了一系列的服务规范，专注于以团购价格向客户直接供应正宗进口美赞臣奶粉、法国卡斯特干红、法国德菲丝巧克力、巴西进口咖啡豆、五粮液、 茅台、剑南春、古井、迎驾、长城红色庄园干红等优质品牌商品.夜猫商贸为了更好地为客户服务，特制定了完善的会员制度，让客户享受应得的尊贵待遇。客户不仅可享受购物会员价、积分奖励、积分兑换礼品（或商品）、在结盟单位消费享受优惠待遇；客户还可提请本公司派专人去非结盟单位商议团购事宜；客户和其他会员之间也可互助代购高端消费品。夜猫商贸拥有自己的独立网站，并设立论坛，让客户与品牌供货商拥有一个交流平台。客户可通过电子商务的方式在公司网站上购买商品，可查询本公司和结盟单位的品牌商品的最新详细信息。客户也可在网站查询客户的会员基本资料及积分等信息。 夜猫商贸已与多家单位建立了互惠合作发展联盟，让客户拥有享受多家结盟单位的优惠待遇的权利，并努力拓宽结盟单位的覆盖面，覆盖到客户生活的各个方面，真正做到让客户购物省时、省力、省钱，让客户生活省心、放心、舒心。 夜猫商贸与时俱进，突破传统购物模式。以客户的需求为导向，以赢得客户与品牌供货商的赞誉为目标，努力成为一个值得客户和其他会员信赖的高品质的服务公司。",
	day:34
	},{
	courseBigTitle: "HIS .NET",
	courseSmallTitle:"基于.net平台下大型分布式HIS系统",
	courseIntro:"本课程由资深讲师石曼迪主讲，包含整个大型分布式HIS系统架构设计及业务模块开发两大部分，业务模块中又包含了系统管理、住院管理及药库药房管理等多个模块。对HIS开发感兴趣或有工作需求的学员可选修此课程。",
	day:22
	}]
	}
	,{ClassName:"葵花宝典",courseMessage:[
	{
	courseBigTitle: "Unity2D3D",
	courseSmallTitle:"Unity2D3D开发专题",
	courseIntro:"Unity是由Unity Technologies开发的一个让玩家轻松创建诸如三维视频游戏、建筑可视化、实时三维动画等类型互动内容的多平台的综合型游戏开发工具，是一个全面整合的专业游戏引擎。Unity利用交互的图型化开发环境为首要方式的软件其编辑器运行在Windows 和Mac OS X下，可发布游戏至Windows、Mac、Wii、iPhone、Windows phone 8和Android平台。也可以利用Unity web player插件发布网页游戏，支持Mac 和Windows的网页浏览。它的网页播放器也被Mac widgets所支持。从Unity3D 4.3版本开始，就默认支持2D游戏的开发了。省去了之前想用Unity3D来开发2D游戏开发者的选择各种插件的烦恼了。用Unity3D开发2D游戏将变得是这么的容易，而且不需要考虑各种插件。Unity3D 4.3发布之后，一项新特性给广大开发者带来了无限的便利。这项新特性就是Unity3D开始支持原生2D游戏开发和2D游戏的元素了。那么，我们就利用4.3的版本来学习下2D游戏开发的步骤和流程以及注意点。本课程我们来制作一款经典的横版游戏—特种任务。通过这个实战的游戏，我们来熟悉2D的重要元素SpriteRender，2D刚体和碰撞，以及4.0之后的新的动画系统等。",
	day:8
	},{
	courseBigTitle: "Unity 2D/3D",
	courseSmallTitle:"Unity 2D/3D实战游戏开发- 特种任务",
	courseIntro:"本课程我们来制作一款经典的横版游戏—特种任务。通过这个实战的游戏，我们来熟悉2D的重要元素SpriteRender，2D刚体和碰撞，以及4.0之后的新的动画系统等。",
	day:7
	},{
	courseBigTitle: "WebApp",
	courseSmallTitle:"基于.net技术下的手机WebApp开发商品配送系统",
	courseIntro:"本课程结合ADO.NET\Winform数据库编程并配合项目案例,固定资产管理系统进行全面讲述Winform数据库编程",
	day:7
	},{
	courseBigTitle: "JS OOP",
	courseSmallTitle:"JavaScript深入 - JavaScriptOOP面向对象编程调试技巧",
	courseIntro:"JavaScript深入，本课程是专门为那些想进一步提高自己JS水平的学员准备的。课程从最简单的JavaScript面向对象特性说起，一直到最后的第三方JS框架源码解读，JS高级调试技巧，JS性能调优及JS设计模式和自己封装JS框架等，可谓JS OOP方向的网络教程中最全面、系统、深入并最通俗易懂的教程。",
	day:7
	},{
	courseBigTitle: "webform",
	courseSmallTitle:"使用ASP.net技术开发商业站点快速入门（WebForm篇）",
	courseIntro:"本课程是比较经典的ASP.NET开发WebForm",
	day:7
	},{
	courseBigTitle: "redis",
	courseSmallTitle:"redis缓存服务器开发",
	courseIntro:" Redis 是一个高性能的key-value数据库。 redis的出现，很大程度补偿了memcached这类key/value存储的不足，在部 分场合可以对关系数据库起到很好的补充作用。它提了Java，C/C+，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。本教程以实战的方式讲解了在企业开发中redis的安装及开发环境配置及常见用法和相关技巧，极大的降低了学员学习的门槛，让学员快速上手！",
	day:7
	},{
	courseBigTitle: "MySQL  MSSQL  Oracle",
	courseSmallTitle:"MSSQL、MySQL、Oracle 三大主流传统数据库快速上手",
	courseIntro:"本教程从基础的MySQL开始介绍，到SQLServer，然后Oracle，让学员能够从易到难，从Java或PHP语言到.Net，再到Java的数据库的灵活使用。其中分库介绍了，各个数据库的基本独立使用，以及各自的安装和配置。课程中主要是以SQL脚本为基础，带领学员更加牢固的掌握知识点。学员在学习的过程中能够体验到与普通数据库不同之处和一些非常实用性的脚本使用。例如：层次化查询，正则表达式以及技巧性函数等等。",
	day:19
	},{
	courseBigTitle: "Excel办公",
	courseSmallTitle:"Excel必备常用工具使用与高级技巧",
	courseIntro:"本部分内容主要介绍了数据挖掘、分析师、数据产品经理必备的常用工具的，主要有 Excel，Visio，Xmind，PPT的涉及图表数据分析方面的高级技巧，包括但不限于：数据透视表演练、Vision跨职能流程图演练、Xmind项目计划导图演练、PPT高级动画技巧等！",
	day:7
	},{
	courseBigTitle: "nginx",
	courseSmallTitle:"nginx高性能服务器搭建",
	courseIntro:"Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，并在一个BSD-like 协议下发行。由俄罗斯的程序设计师Igor Sysoev所开发，供俄国大型的入口网站及搜索引擎Rambler使用。其特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。。本教程以实战的方式讲解了在企业开发中nginx的安装及开发环境配置及常见用法和相关技巧，极大的降低了学员学习的门槛，让学员快速上手！",
	day:1
	},{
	courseBigTitle: "Linux",
	courseSmallTitle:"Linux 基础& Shell编程",
	courseIntro:"为适应企业对高端开发工程师的需求，整合了Linux系统的常见使用，包括文件操作、权限操作、常用shell命令，为后继服务器的优化及高性能服务器搭建打下坚实的基础",
	day:7
	},{
	courseBigTitle: "时间管理",
	courseSmallTitle:"高效率的时间管理",
	courseIntro:"本课程主要让学员熟练掌握如何做好高效率的时间管理。",
	day:1
	},{
	courseBigTitle: "虚拟机",
	courseSmallTitle:"虚拟机的操作",
	courseIntro:"本章课程教你学会虚拟机的安装和使用",
	day:1
	},{
	courseBigTitle: "C# 数据库 网站",
	courseSmallTitle:"C#基础+数据库+网站开发+手机开发一门课全搞定",
	courseIntro:"本次课程将带领大家学习mono for Android，让大家学会使用.NET开发Android程序。",
	day:6
	},{
	courseBigTitle: "微信",
	courseSmallTitle:"深入浅出微信公众平台实战开发",
	courseIntro:"深入浅出微信公众平台实战开发",
	day:1
	}
	]},{ClassName:"出师表",courseMessage:[
            {
                testTitle1:"C#基础冲关_笔试"
            },{
                testTitle1:"C#基础冲关_机试"
            },{
                testTitle1:"面向对象冲关_笔试"
            },{
                testTitle1:"面向对象冲关_机试"
            },{
                testTitle2:"SQL Server冲关_笔试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:".NET高级特性冲关_笔试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"HTML + CSS冲关_笔试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"HTML + CSS冲关_机试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"JavaScript冲关_笔试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"JavaScript冲关_机试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"JQuery冲关_笔试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"JQuery冲关_机试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:".NET MVC冲关_笔试",
                textDescribtion:".NET开发工程师测试"
            },{
                testTitle2:"BootStrap冲关_笔试",
                textDescribtion:".NET全栈工程师测试"
            },{
                testTitle2:"BootStrap冲关_机试",
                textDescribtion:".NET全栈工程师测试"
            },{
                testTitle2:"Python基础冲关_笔试",
                textDescribtion:".NET全栈工程师测试"
            },{
                testTitle2:"Python基础冲关_机试",
                textDescribtion:".NET全栈工程师测试"
            },{
                testTitle2:"Python Web冲关_笔试",
                textDescribtion:".NET全栈工程师测试"
            },{
                testTitle2:"Python Web冲关_机试",
                textDescribtion:".NET全栈工程师测试"
            }]
        }
	];
for(var j=0;j<obj.length;j++){
		if( j <4 ){
			var partBox = '<div class="partBox">'+
						'<section id="div" class="part">'+
							"<h1 class='part-title'>"+obj[j].ClassName+"</h1>"+
							'<ul id="ul">'+
								 liFunc(obj[j].courseMessage)
							+'</ul>'+
					'</div>';
		}else{
			var partBox = '<div class="partBox">'+
						'<section id="div" class="part">'+
							"<h1 class='part-title'>"+obj[j].ClassName+"</h1>"+
							'<ul id="ul">'+
								 apprenticeship(obj[j].courseMessage)
							+'</ul>'+
					'</div>';
		}
		
		document.getElementById('div').innerHTML += partBox;
	}

}
