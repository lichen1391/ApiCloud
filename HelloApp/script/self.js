function self(){
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
        var header = $api.byId('header');	
        var headerPos = $api.offset(header);
        var footer = $api.byId('footer');	
        var footerPos = $api.offset(footer);	
        api.openFrame ({	
            name: 'self',	
            url: './self_frame1.html',	
            rect:{	
            x:0,	
            y:0,	
            w:'auto',	
            h:api.frameHeight-footerPos.h
            },	
            bounces: true,	
            opaque: false,	
            vScrollBarEnabled:false,	
            hScrollBarEnabled:false	
        });	
    };	
    
}


    //第四栏
    function self_window(){
    	api.openWin({
		    name: 'self',
		    url: './self_window.html',
		    animation : {
		    	type: 'none',
		    },
		    pageParam: {
		        name: 'test',
		        
		    }
		});

    }

	function my_info(){
    	api.openWin({
		    name: 'my_info',
		    url: './my_info_window.html',
		    animation : {
		    	type: 'none',
		    },
		    pageParam: {
		        name: 'test',
		        
		    }
		});

    }
    
    //登录
    function login(){
    	api.openWin({
		    name: 'login',
		    url: './login_window.html',
		    animation : {
		    	type: 'none',
		    },
		    pageParam: {
		        name: 'test',
		        
		    }
		});

    }
    
