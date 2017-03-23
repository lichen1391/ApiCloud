function friends(){
   var main = $api.byId('main');	
   var mainPos = $api.offset(main);	
   var footer = $api.byId('footer');	
   var footerPos = $api.offset(footer);	
    apiready = function(){	
        api.setStatusBarStyle({	
        style: 'dark'	
        });	
        var main = $api.byId('main');	
        var mainPos = $api.offset(main);	
        var footer = $api.byId('footer');	
        var footerPos = $api.offset(footer);	
        api.openFrame ({	
            name: 'friends_frame1',	
            url: './friends_frame1.html',	
            rect:{	
            x:0,	
            y:20,	
            w:'auto',	
            h:api.frameHeight-footerPos.h-20
            },	
            bounces: true,	
            opaque: false,	
            vScrollBarEnabled:false,	
            hScrollBarEnabled:false	
        });	
    };	
    
} 
   
   
    //第二栏
    function frieds_window(){
    	api.openWin({
		    name: 'frieds',
		    url: './friends_window.html',
		    animation : {
		    	type: 'none',
		    },
		    pageParam: {
		        name: 'test',
		        
		    }
		});
    }
    

	//frame的js
	window.onload = function() {	
		var li = $api.domAll('.title-box-ul li');	
		var mySwiper = Swipe($api.byId('swipe'),{	
			auto:3000,	
			continuous: true,	
			callback: function(index,elem) {	
                var i = li.length;	
                while (i--) {	
                    li[i].className = '';	
                }	
                li[index].className = 'active';	
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