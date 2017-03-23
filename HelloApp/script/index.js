function index(){
   var firstHeader = $api.byId('firstHeader');	
   var firstHeaderOffset;	
   	
   var main = $api.byId('main');	
   var mainPos = $api.offset(main);	

   var footer = $api.byId('footer');	
   var footerPos = $api.offset(footer);	
	
    // 完成首页初始化	
    apiready = function(){	
        // 设置ios7的标题栏字体变亮，全局用一个就行了	
        api.setStatusBarStyle({	
        style: 'dark'	
        });	
        firstHeader = $api.byId('firstHeader');	
        $api.fixIos7Bar(firstHeader);	
        firstHeaderOffset = $api.offset(firstHeader);	
        var main = $api.byId('main');	
        var mainPos = $api.offset(main);	
        var footer = $api.byId('footer');	
        var footerPos = $api.offset(footer);	
	
        api.openFrame ({	
            name: 'main',	
            url: './index_frame1.html',	
            rect:{	
            x:0,	
            y:firstHeaderOffset.h,	
            w:'auto',	
            h:api.frameHeight-firstHeaderOffset.h -footerPos.h	
            },	
            bounces: true,	
            opaque: false,	
            vScrollBarEnabled:false,	
            hScrollBarEnabled:false	
        });	
    };	
    
}


	//首页
    function index_window(){
    	api.openWin({
		    name: 'index',
		    url: './index_window.html',
		    animation : {
		    	type: 'none',
		    },
		    pageParam: {
		        name: 'test',
		        
		    }
		});
    }
    
    
   apiready = function (){	
		api.setRefreshHeaderInfo({	
			visible: true,	
			bgColor: 'rgba(0,0,0,0)',	
			textColor: '#666',	
			textDown: '下拉刷新',	
			textUp: '释放刷新'		
		}, function(ret, err){	
		    api.refreshHeaderLoadDone();	
		});	
	};

function bmap(){
	var map = api.require('bMap');


}