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
	+ '<p class="time">Ԥ��ѧʱ��<span>'+ courseMessage[i].day+'</span>��</p>'
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
	{ClassName:"��ʦѧ��",courseMessage:[
	{
	courseBigTitle: "C# Winform",
	courseSmallTitle:"Csharp������Winform���",
	courseIntro:"���γ�ȫ����ϸ�Ľ�����C#�����﷨���γ����ݰ���C#���ţ����������������ת�������飬�����������õĴ��壬����ؼ���̵ȡ���ѧԱѸ�ٵ�ȫ������.NET�����﷨�������ر�����֪ʶ��",
	day:6
	},{
	courseBigTitle: "OOP",
	courseSmallTitle:"������󿪷�(OOP)",
	courseIntro:"����Զ����������(Object Oriented,OO)�ǵ�ǰ���������ĵ��ص㣬����90�����������������������������ĸ����Ӧ���ѳ�Խ�˳�����ƺ������������չ���ܿ�ķ�Χ�������ݿ�ϵͳ������ʽ���桢Ӧ�ýṹ��Ӧ��ƽ̨���ֲ�ʽϵͳ���������ṹ��CAD�������˹����ܵ��������ձ�̵������ķ���Ϊ��Ϊһλ�м�����Ա��׼����",
	day:9
	},{
	courseBigTitle: "SQL Server",
	courseSmallTitle:"SQL Server��������",
	courseIntro:"SQL Server ��һ����ϵ���ݿ����ϵͳ�����γ�ȫ����ϸ����ɾ�Ĳ鵽�洢����,�α�,������!�����߽����ݿ������!",
	day:5
	},{
	courseBigTitle: "������ ���� IO",
	courseSmallTitle:"��ͨC#�߼�����",
	courseIntro:"���γ���Ҫ������ʵ�õ�C#�߼����������������������ϣ����ͣ��ļ����������л��뷴���л�����Ԫ���ԣ����ԣ����򼯺ͷ��䡣ȫ������C#�ĸ߼����ԣ�Ϊ�߼�Ӧ�ô�û�����ͬʱ�����ҽ��ܺ��ڿ�����Ҫ�������ݿ⽻������ADO.NET��",
	day:5
	},{
	courseBigTitle: "html css",
	courseSmallTitle:"HTML+CSS",
	courseIntro:"��̬��ҳ�Ǳ�׼��HTML�ļ�������վ����Ļ��������齲����HTML�Ļ�����ǩ����񡢱�����ܡ�CSS��ʽ������ѧϰ�����ݡ�Ϊ����ѧ�����õذ��ս̲����ݣ�����ÿһ�µĿ�ʼ���н�ѧĿ�ꡢ���ѵ㼰ѧϰ���飬����֮����С�ᣬ�����˱��µ���Ҫ֪ʶ�㲢���Կ�����ҵ�Լ������İ���������ʹ���߸��õ�ʵ�����գ�������߿������ܣ��Ʊؽ���Щ����֪ʶѧ�����¡�",
	day:6
	},{
	courseBigTitle: "js",
	courseSmallTitle:"Javascript����",
	courseIntro:"��������JS�ʺ���ȫ����JavascriptĿ����Ⱥ������HTML��CSS�������δӵ�һ�仰���������﷨�ṹ����������������ʵ��JSЧ��Ϊֹ��ʹ��������·Ҫ��JS�����ѧ��HTML��CSS",
	day:15
	},{
	courseBigTitle: "JQ",
	courseSmallTitle:"jQuery",
	courseIntro:"Jquery ��ǰ�˿����ر����֮һ��ʹ��ѡ������������첽����ȳ��õĻ�������������������߿���Ч�� ��",
	day:5
	},{
	courseBigTitle: "ASP.NET MVC",
	courseSmallTitle:"ASP.NET MVC5��������밸������",
	courseIntro:"ASP.NET MVC��һ��������ASP.NETƽ̨�ϻ���MVCģʽ��Web������ܣ����ṩ��һ���봫ͳWeb Forms��ȫ��ͬ��WebӦ�ó��򿪷���ʽ��ASP.NET Web Forms���Windows Forms���ڿؼ����¼�ע��ı��ģʽ��ʹWebӦ�õĿ�����ü򵥶���ݣ�������ȴʹ������Ա��Web�ı��ʽ��н�Զ��ASP.NET MVC��һ�ֻع飬��ʹ������Ա��������������Web���б�̣�������ԵĲ�����������Webҳ��Ŀؼ�����������HTTP�������Ӧ�����̡�",
	day:7
	},{
	courseBigTitle: "HTML5",
	courseSmallTitle:"HTML5+CSS3",
	courseIntro:"HTML5�����Ŀ����Ϊ�����ƶ��豸��֧�ֶ�ý�塣Ϊ��ʹ���ѧԱ�ܹ�����˽�HTML5��CSS3�Ļ���֪ʶ�������ܽ����ؼ���������Ӧ��WEB��ҳ���ƶ�Ӧ�ã����γ���С��Ŀ������ʽ�����չʾ����ѧϰ�걾�׿γ�֮�����Ŵ��һ���ܹ��������ż����������Խ���ʵ����Ŀ�Ŀ�����",
	day:5
	},{
	courseBigTitle: "BootStrap",
	courseSmallTitle:"����н�ر����� - BootStrap��Ӧʽ��ҳ����",
	courseIntro:"������н�ر����ܣ����γ�ϵͳȫ��Ľ�����BootStrap��ҵ������Ӧ������ļ��ܡ�����ƪ��������BootStrap��� API ��⣬��Ҫ�����������ݣ�Bracketsǰ�˿���������⡢BootStrap����������-CSS��BootStrap����� �����-���������BootStrap����������-JavaScript�������-BootStrap����淶��ѧϰ�걾�γ̺�ʵ����Ӧʽ���ֽ��������Ρ�",
	day:9
	},{
	courseBigTitle: "Angular JS",
	courseSmallTitle:"ǰ�˿�ܼ��� - Angular JSʵս",
	courseIntro:"ǰ�˿�ܼ�����Angular JS����һ�������ǰ��JS��ܣ��Ѿ�������Google�Ķ���Ʒ���С�AngularJS����������ԣ���Ϊ���ĵ��ǣ�MVVM��ģ�黯���Զ���˫�����ݰ󶨡����廯��ǩ������ע��ȵȡ����γ�ͨ����ʶangularJS�����ݰ󶨺ͱ��ʽ����������ָ�������ͼ��·�ɡ�������֤�������������ͨ�ŵ�֪ʶ���������ɽ�����ѧϰangularJS���Ӷ����ո���Ŀ�ܼ��������������������",
	day:14
	},{
	courseBigTitle: "Node.JS",
	courseSmallTitle:"ASP.NET MVC5��������밸������",
	courseIntro:"ASP.NET MVC��һ��������ASP.NETƽ̨�ϻ���MVCģʽ��Web������ܣ����ṩ��һ���봫ͳWeb Forms��ȫ��ͬ��WebӦ�ó��򿪷���ʽ��ASP.NET Web Forms���Windows Forms���ڿؼ����¼�ע��ı��ģʽ��ʹWebӦ�õĿ�����ü򵥶���ݣ�������ȴʹ������Ա��Web�ı��ʽ��н�Զ��ASP.NET MVC��һ�ֻع飬��ʹ������Ա��������������Web���б�̣�������ԵĲ�����������Webҳ��Ŀؼ�����������HTTP�������Ӧ�����̡�",
	day:7
	},{
	courseBigTitle: "EasyUi",
	courseSmallTitle:"ǰ�˿�ܼ��� - EasyUI��������",
	courseIntro:"jQuery EasyUI��һ�����jQuery��UI��������壬��jQuery EasyUI��Ŀ����ǰ���web�����߸����ɵĴ�������ܷḻ�������۵�UI���档�����߲���Ҫ��д���ӵ�javascript��Ҳ����Ҫ��css��ʽ ��������˽⣬��������Ҫ�˽��ֻ��һЩ�򵥵�html��ǩ�����γ�ͨ������EasyUI����ʾ����һЩ���������������ҿ������ţ��ں��ڿ��������д������Ч�����ܷḻ���������۵���վ��",
	day:7
	},{
	courseBigTitle: "Python",
	courseSmallTitle:"Python",
	courseIntro:"���γ���ʵ������Ϊ���Ľ�����֯�ͱ�д���Կ�ͼΪ��������������Ľ�����裬������Python����д������ּ������ѧԱ��������˼������Ͱ������⣬����һ��ֱ�۵ķ�ʽ��������Ľ�����裬ѵ��ѧԱ�ü������ٵķ�ʽ��д���򡣱��γ�������ѧ���ı��˼��ͱ������ΪĿ�꣬��������˱�ϵ�пγ̸���ѧʱ�����ݡ��ڱ��γ��л���ܳ��������������������⣬��ʾ���Ե��ÿ�ͼ����˽��������㷨������Python���Խ���ʵ�֣�ּ���𲽵���ѵѧԱ�ı��˼��ͱ������������������Ϊ����ƪ��",
	day:2
	},{
	courseBigTitle: "Python Web",
	courseSmallTitle:"Python Web",
	courseIntro:"���γ�ΪPyramid Web�������ſγ̣���Ҫ������Pyramid������źͳ�������Ŀ�������������γ�����ĿΪ���򣬽�ϻ���֪ʶ�Ľ��⣬����û����ػ�����ѧԱѸ�����š�ͬʱ���м��ڱ��γ�����Ŀ��������Ϊ���򣬹ʿ�����ѧԱ����ʵ�ʿ��������У�������۾��顣",
	day:7
	}]
	}
	,{ClassName:"��ɽ�۽�",courseMessage:[
	{
	courseBigTitle: "ASP.NET MVC ΢�Ź���ƽ̨",
	courseSmallTitle:"����ASP.net MVC����΢�Ź���ƽ̨���� ",
	courseIntro:"�����ƶ�������ʱ���ĵ�����΢�ſ�����Ϊ�ǳ���Ҫ���ƶ��˿�����һ�飬���е�΢�Ź��ں��ǿ����߻��̼���΢�Ź���ƽ̨�������Ӧ���˺ţ����ʺ���QQ�˺Ż�ͨ��ͨ�����ںţ��̼ҿ���΢��ƽ̨��ʵ�ֺ��ض�Ⱥ������֡�ͼƬ����������Ƶ��ȫ��λ��ͨ������ ���γ���һ����������������΢�Ż���Ӫ����ʽ�����γ���ͨ�����������΢�Ź��ں����뵽����΢�Ź��ںŽ��й��ܽ��⿪������Ŀʵս�Ϳγ̣�ʹ�õĿ��������ǻ���.Net MVC4.0�ģ����ս��ô�����մ�������������˺ŵ���ɸ�����Ҫ��΢�Žӿڹ���ȫ��λ����΢�ſ����Ļ������ܡ�",
	day:3
	},{
	courseBigTitle: "����ܹ�",
	courseSmallTitle:"Ӧ�ö��ܹ���������.NET��ҵ������",
	courseIntro:"���γ̴����ģʽ�����󹤳�ģʽ+����+�����ļ�ʵ��ͨ������Դ��PetShop�߲�ܹ��ȽǶ�ȫ�潲����.net��ҵ����Ӧ��,�����2����Ŀ�������н���",
	day:7
	},{
	courseBigTitle: "Winform",
	courseSmallTitle:"Winform���ݿ���",
	courseIntro:"���γ̽��ADO.NET\Winform���ݿ��̲������Ŀ����,�̶��ʲ�����ϵͳ����ȫ�潲��Winform���ݿ���",
	day:7
	}]
	}
	,{ClassName:"Ц������",courseMessage:[
	{
	courseBigTitle: "EntityFramework5 EasyUI ͨȨ",
	courseSmallTitle:"����MVC4+E F5+EasyUI����ʵ��ͨ��Ȩ�޹���ϵͳ",
	courseIntro:" �Դ�΢����VS2012ƽ̨�������Ƴ�MVC4,EF5�Ⱦ��б�־�Եļ���֮��,����.NETWEB�����ĳ���Ա����ӭ����һ�����µĴ��죬�����MVC4����ؼ�������.NET��WEB��������ƫ����WEB�ı��ʣ����ܸ������Ż���ͬʱҲ���������ٲ���ֻ���Ͽؼ���.NET����Ա�ˡ��ٽ��easyUI��ligerUI��fineUI�� bootStrap��һϵ�г����ǰ�˿�ܣ���.NETMVC��������BSϵͳ�������Ǵӿ���Ч�ʡ��ɱ����ǽ���Ч�������鶼��������JAVA��PHPƽ̨������ǿ���razor��ͼ����,�������������ⶨ��������Ҫ���Ӿ�Ч��������MVC4,EF5�ȼ����𲽵õ������з���Ա���Ͽɼ��ռ��̶ȵ�����ߣ�΢��˳�ƽ��VS2013ƽ̨�Ƴ���MVC5��EF6�Ⱥ��ļ��������MVC4֮��MVCϵ�п����.NETƽ̨�����𽥳��죬�������θ��µĲ�𲢲���֮ǰ3�汾�����ô�����Ǻ����׽��ܡ���֮��Ҳ����������󱳾��£�Ϊ���������ѧԱ��.NET�¼�����ѧϰ����������ȫְ��ʦ������ʦ��ǰ����������֮�ã�����Լ��ḻ�Ĺ������飬֣���Ƴ���.NETMVC���ͨ��Ȩ�޹���ϵͳ��",
	day:8
	},{
	courseBigTitle: "ũ��Ʒ",
	courseSmallTitle:"����.NET�ܹ���ũ��Ʒ�����ݵ���ƽ̨ȫ��ʵ¼",
	courseIntro:"���û��ۺ�B2C�̳ǣ��̼ҿ������̳�ͳһ��ƽ̨�Ͽ����Լ��ĵ��沢չʾ�Լ��Ĳ�Ʒ���������ϳ��еĸ������ͨ��ͳһ��ƽ̨չʾ��Ʒ��ͳһ���й���ʵ����������ͼ��Ź�˾ͳһͳ��滮�£��������ɢ���������㣬��������㣬���ͷ��㣬���۱������ر��Ǳ��̳Ƕ��е�������Դϵͳ��������ÿ�ʶ��������Ը�����Դ����������������ʵ�ɿ����Ӹ�Դ�϶ž������ʡ��к����߽�����������������Ŀ��Ҫ����ҹ�ũҵ��չ����״�������������Ƶĵ�������Ϊũ��Ʒ��������������Ϣ������Ҫ���3�����⣺1.�ҹ�ũ��Ʒҵ��Ϣ������ʩ������绯�̶Ƚϵ͡���Ϣ�Ľ����빲��ͨ��������ũ��Ʒ��Ʒ�������ѵ����⣻2.ũ��Ʒ���۰����м����̰����г���Ϣ��ͨ�������⣻3.ũ��ƷʳƷ��ȫ���⡣��ũ��Ʒ��Դƽ̨���������ִ������͡�����Ϊһ�壬�����������ڡ��ִ����ڡ����ͻ��ھ��������ҹ������Ա��γ̴Ӽ����ܲ����Ϳ�ʼ����Ҫ���������̺Ϳͻ�O2O��Լ�B2C������������¼���飺",
	day:25
	},{
	courseBigTitle: "C/S ͨȨ FastReport RDLC ����ͳ��",
	courseSmallTitle:"�������CS��������ͨ��Ȩ�޹���ϵͳȫ��ʵ¼",
	courseIntro:"������ʦ��.NETWinform(v1.0)���ͨ��Ȩ�޹���ϵͳ��72����Ŀǰ��ȫ��¼����ϡ���һ���汾�����Ĺ���ģ����Ȩ�޿���Ϊ�������Ҿ�ȷ�������ϵ�ÿ����Ŧ������Ȩ�޿��ƣ�������չ�����ͻ�ȽϷ��㣬ͬʱȨ�޵����̿��ƱȽ�ͨ�ã�����������ǺܷѾ���ѧϰ�����͸����װ�ע�������е����ܵ��ϡ����ǵ�һ���汾�Ĺ���ģ����Ҫ�У��û�������ɫ�����˵�����Ȩ�޹�����֯����������Ȩ�����û���ɫ������ɫȨ�޹�����־��������ͳ�ơ����ܿͻ��ˡ�����������Ͱ�ŦȨ���顣������ADO.NET���ֲ㡢������ͼ��ί�С����䡢WebService��FastReport.NET��Dev��RDLC��EpPlus����EXCEL��֪ʶ��ȫ���ᴩ����Ƶ�н��⣬�����ʵ�ʲ����ķ�ʽ����չʾ����֪ʶ���������",
	day:3
	},{
	courseBigTitle: "WPF ASP.NET MVC4",
	courseSmallTitle:"����.NET WPF+ASP.NET MVC4��������ҹè���������Ӫ����ƽ̨һ�廯�������",
	courseIntro:"�人ҹè��ó���޹�˾�����¼�ơ�ҹè��ó�������С����š����ʡ�ֵ���������ľ�Ӫ���������һϵ�еķ���淶��רע�����Ź��۸���ͻ�ֱ�ӹ�Ӧ���ڽ������޳��̷ۡ�������˹�ظɺ졢�����·�˿�ɿ������������ڿ��ȶ�������Һ�� ę́�����ϴ����ž���ӭ�ݡ����Ǻ�ɫׯ԰�ɺ������Ʒ����Ʒ.ҹè��óΪ�˸��õ�Ϊ�ͻ��������ƶ������ƵĻ�Ա�ƶȣ��ÿͻ�����Ӧ�õ����������ͻ����������ܹ����Ա�ۡ����ֽ��������ֶһ���Ʒ������Ʒ�����ڽ��˵�λ���������Żݴ������ͻ��������뱾��˾��ר��ȥ�ǽ��˵�λ�����Ź����ˣ��ͻ���������Ա֮��Ҳ�ɻ��������߶�����Ʒ��ҹè��óӵ���Լ��Ķ�����վ����������̳���ÿͻ���Ʒ�ƹ�����ӵ��һ������ƽ̨���ͻ���ͨ����������ķ�ʽ�ڹ�˾��վ�Ϲ�����Ʒ���ɲ�ѯ����˾�ͽ��˵�λ��Ʒ����Ʒ��������ϸ��Ϣ���ͻ�Ҳ������վ��ѯ�ͻ��Ļ�Ա�������ϼ����ֵ���Ϣ�� ҹè��ó�����ҵ�λ�����˻��ݺ�����չ���ˣ��ÿͻ�ӵ�����ܶ�ҽ��˵�λ���Żݴ�����Ȩ������Ŭ���ؿ���˵�λ�ĸ����棬���ǵ��ͻ�����ĸ������棬���������ÿͻ�����ʡʱ��ʡ����ʡǮ���ÿͻ�����ʡ�ġ����ġ����ġ� ҹè��ó��ʱ�����ͻ�ƴ�ͳ����ģʽ���Կͻ�������Ϊ������Ӯ�ÿͻ���Ʒ�ƹ����̵�����ΪĿ�꣬Ŭ����Ϊһ��ֵ�ÿͻ���������Ա�����ĸ�Ʒ�ʵķ���˾��",
	day:34
	},{
	courseBigTitle: "HIS .NET",
	courseSmallTitle:"����.netƽ̨�´��ͷֲ�ʽHISϵͳ",
	courseIntro:"���γ������ʦʯ���������������������ͷֲ�ʽHISϵͳ�ܹ���Ƽ�ҵ��ģ�鿪�����󲿷֣�ҵ��ģ�����ְ�����ϵͳ����סԺ����ҩ��ҩ������ȶ��ģ�顣��HIS��������Ȥ���й��������ѧԱ��ѡ�޴˿γ̡�",
	day:22
	}]
	}
	,{ClassName:"��������",courseMessage:[
	{
	courseBigTitle: "Unity2D3D",
	courseSmallTitle:"Unity2D3D����ר��",
	courseIntro:"Unity����Unity Technologies������һ����������ɴ���������ά��Ƶ��Ϸ���������ӻ���ʵʱ��ά���������ͻ������ݵĶ�ƽ̨���ۺ�����Ϸ�������ߣ���һ��ȫ�����ϵ�רҵ��Ϸ���档Unity���ý�����ͼ�ͻ���������Ϊ��Ҫ��ʽ�������༭��������Windows ��Mac OS X�£��ɷ�����Ϸ��Windows��Mac��Wii��iPhone��Windows phone 8��Androidƽ̨��Ҳ��������Unity web player���������ҳ��Ϸ��֧��Mac ��Windows����ҳ�����������ҳ������Ҳ��Mac widgets��֧�֡���Unity3D 4.3�汾��ʼ����Ĭ��֧��2D��Ϸ�Ŀ����ˡ�ʡȥ��֮ǰ����Unity3D������2D��Ϸ�����ߵ�ѡ����ֲ���ķ����ˡ���Unity3D����2D��Ϸ���������ô�����ף����Ҳ���Ҫ���Ǹ��ֲ����Unity3D 4.3����֮��һ�������Ը���󿪷��ߴ��������޵ı��������������Ծ���Unity3D��ʼ֧��ԭ��2D��Ϸ������2D��Ϸ��Ԫ���ˡ���ô�����Ǿ�����4.3�İ汾��ѧϰ��2D��Ϸ�����Ĳ���������Լ�ע��㡣���γ�����������һ���ĺ����Ϸ����������ͨ�����ʵս����Ϸ����������Ϥ2D����ҪԪ��SpriteRender��2D�������ײ���Լ�4.0֮����µĶ���ϵͳ�ȡ�",
	day:8
	},{
	courseBigTitle: "Unity 2D/3D",
	courseSmallTitle:"Unity 2D/3Dʵս��Ϸ����- ��������",
	courseIntro:"���γ�����������һ���ĺ����Ϸ����������ͨ�����ʵս����Ϸ����������Ϥ2D����ҪԪ��SpriteRender��2D�������ײ���Լ�4.0֮����µĶ���ϵͳ�ȡ�",
	day:7
	},{
	courseBigTitle: "WebApp",
	courseSmallTitle:"����.net�����µ��ֻ�WebApp������Ʒ����ϵͳ",
	courseIntro:"���γ̽��ADO.NET\Winform���ݿ��̲������Ŀ����,�̶��ʲ�����ϵͳ����ȫ�潲��Winform���ݿ���",
	day:7
	},{
	courseBigTitle: "JS OOP",
	courseSmallTitle:"JavaScript���� - JavaScriptOOP��������̵��Լ���",
	courseIntro:"JavaScript���룬���γ���ר��Ϊ��Щ���һ������Լ�JSˮƽ��ѧԱ׼���ġ��γ̴���򵥵�JavaScript�����������˵��һֱ�����ĵ�����JS���Դ������JS�߼����Լ��ɣ�JS���ܵ��ż�JS���ģʽ���Լ���װJS��ܵȣ���νJS OOP���������̳�����ȫ�桢ϵͳ�����벢��ͨ���׶��Ľ̡̳�",
	day:7
	},{
	courseBigTitle: "webform",
	courseSmallTitle:"ʹ��ASP.net����������ҵվ��������ţ�WebFormƪ��",
	courseIntro:"���γ��ǱȽϾ����ASP.NET����WebForm",
	day:7
	},{
	courseBigTitle: "redis",
	courseSmallTitle:"redis�������������",
	courseIntro:" Redis ��һ�������ܵ�key-value���ݿ⡣ redis�ĳ��֣��ܴ�̶Ȳ�����memcached����key/value�洢�Ĳ��㣬�ڲ� �ֳ��Ͽ��ԶԹ�ϵ���ݿ��𵽺ܺõĲ������á�������Java��C/C+��C#��PHP��JavaScript��Perl��Object-C��Python��Ruby��Erlang�ȿͻ��ˣ�ʹ�úܷ��㡣���̳���ʵս�ķ�ʽ����������ҵ������redis�İ�װ�������������ü������÷�����ؼ��ɣ�����Ľ�����ѧԱѧϰ���ż�����ѧԱ�������֣�",
	day:7
	},{
	courseBigTitle: "MySQL  MSSQL  Oracle",
	courseSmallTitle:"MSSQL��MySQL��Oracle ����������ͳ���ݿ��������",
	courseIntro:"���̴̳ӻ�����MySQL��ʼ���ܣ���SQLServer��Ȼ��Oracle����ѧԱ�ܹ����׵��ѣ���Java��PHP���Ե�.Net���ٵ�Java�����ݿ�����ʹ�á����зֿ�����ˣ��������ݿ�Ļ�������ʹ�ã��Լ����Եİ�װ�����á��γ�����Ҫ����SQL�ű�Ϊ����������ѧԱ�����ι̵�����֪ʶ�㡣ѧԱ��ѧϰ�Ĺ������ܹ����鵽����ͨ���ݿⲻ֮ͬ����һЩ�ǳ�ʵ���ԵĽű�ʹ�á����磺��λ���ѯ��������ʽ�Լ������Ժ����ȵȡ�",
	day:19
	},{
	courseBigTitle: "Excel�칫",
	courseSmallTitle:"Excel�ر����ù���ʹ����߼�����",
	courseIntro:"������������Ҫ�����������ھ򡢷���ʦ�����ݲ�Ʒ����ر��ĳ��ù��ߵģ���Ҫ�� Excel��Visio��Xmind��PPT���漰ͼ�����ݷ�������ĸ߼����ɣ������������ڣ�����͸�ӱ�������Vision��ְ������ͼ������Xmind��Ŀ�ƻ���ͼ������PPT�߼��������ɵȣ�",
	day:7
	},{
	courseBigTitle: "nginx",
	courseSmallTitle:"nginx�����ܷ������",
	courseIntro:"Nginx��һ����������Web ������/�������������������ʼ���IMAP/POP3�����������������һ��BSD-like Э���·��С��ɶ���˹�ĳ������ʦIgor Sysoev����������������͵������վ����������Ramblerʹ�á����ص���ռ���ڴ��٣���������ǿ����ʵ��nginx�Ĳ�������ȷʵ��ͬ���͵���ҳ�������б��ֽϺã��й���½ʹ��nginx��վ�û��У��ٶȡ����������ˡ����ס���Ѷ���Ա��ȡ������̳���ʵս�ķ�ʽ����������ҵ������nginx�İ�װ�������������ü������÷�����ؼ��ɣ�����Ľ�����ѧԱѧϰ���ż�����ѧԱ�������֣�",
	day:1
	},{
	courseBigTitle: "Linux",
	courseSmallTitle:"Linux ����& Shell���",
	courseIntro:"Ϊ��Ӧ��ҵ�Ը߶˿�������ʦ������������Linuxϵͳ�ĳ���ʹ�ã������ļ�������Ȩ�޲���������shell���Ϊ��̷��������Ż��������ܷ���������¼�ʵ�Ļ���",
	day:7
	},{
	courseBigTitle: "ʱ�����",
	courseSmallTitle:"��Ч�ʵ�ʱ�����",
	courseIntro:"���γ���Ҫ��ѧԱ��������������ø�Ч�ʵ�ʱ�����",
	day:1
	},{
	courseBigTitle: "�����",
	courseSmallTitle:"������Ĳ���",
	courseIntro:"���¿γ̽���ѧ��������İ�װ��ʹ��",
	day:1
	},{
	courseBigTitle: "C# ���ݿ� ��վ",
	courseSmallTitle:"C#����+���ݿ�+��վ����+�ֻ�����һ�ſ�ȫ�㶨",
	courseIntro:"���ογ̽�������ѧϰmono for Android���ô��ѧ��ʹ��.NET����Android����",
	day:6
	},{
	courseBigTitle: "΢��",
	courseSmallTitle:"����ǳ��΢�Ź���ƽ̨ʵս����",
	courseIntro:"����ǳ��΢�Ź���ƽ̨ʵս����",
	day:1
	}
	]},{ClassName:"��ʦ��",courseMessage:[
            {
                testTitle1:"C#�������_����"
            },{
                testTitle1:"C#�������_����"
            },{
                testTitle1:"���������_����"
            },{
                testTitle1:"���������_����"
            },{
                testTitle2:"SQL Server���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:".NET�߼����Գ��_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"HTML + CSS���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"HTML + CSS���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"JavaScript���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"JavaScript���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"JQuery���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"JQuery���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:".NET MVC���_����",
                textDescribtion:".NET��������ʦ����"
            },{
                testTitle2:"BootStrap���_����",
                textDescribtion:".NETȫջ����ʦ����"
            },{
                testTitle2:"BootStrap���_����",
                textDescribtion:".NETȫջ����ʦ����"
            },{
                testTitle2:"Python�������_����",
                textDescribtion:".NETȫջ����ʦ����"
            },{
                testTitle2:"Python�������_����",
                textDescribtion:".NETȫջ����ʦ����"
            },{
                testTitle2:"Python Web���_����",
                textDescribtion:".NETȫջ����ʦ����"
            },{
                testTitle2:"Python Web���_����",
                textDescribtion:".NETȫջ����ʦ����"
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
