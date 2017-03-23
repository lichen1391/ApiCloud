function activity(){
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
            name: 'activity_frame1',	
            url: './activity_frame1.html',	
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
  
  
    //第三栏
    function activity_window(){
    	api.openWin({
		    name: 'activity',
		    url: './activity.html',
		    animation : {
		    	type: 'none',
		    },
		    pageParam: {
		        name: 'test',
		        
		    }
		});
    }