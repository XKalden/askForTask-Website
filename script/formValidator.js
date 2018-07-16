$(document).ready(function(){
    
    // form submit action
    $('form').submit(function(e){
        e.preventDefault();

        // varables 
        const firstName = $('input[name=firstName]').val();
        const lastName = $('input[name=lastName]').val();
        const mobile = $('input[name=mobile]').val();
        const email = $('input[name=email]').val();
        const select = $('select[name=city]').val();

        console.log(firstName, lastName, mobile, email, select);

        let error = false;

        // Test FirstName
        if(firstName === undefined || firstName === ''){
            error = true;
            $('input[name=firstName]').addClass("error");
        } 
        
        // Test LastName
        if(lastName === undefined || firstName === ''){
            error = true;
            $('input[name=lastName]').addClass("error");
        } 

        // Test Mobile #
        if(mobile.length <= 9 || mobile === ''){
            error = true;
            $('input[name=mobile]').addClass("error");
        }

        // Email validation function that return boolean 
        function emailChecker(email){
            const regualExpress = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regualExpress.test(email);
        }

        // Test Email 
        if(!emailChecker(email)){
            error = true;
            $('input[name=email]').addClass("error");
        }

        // Test Select 
        if(select == 'select'){
            error = true;
            $('select[name=city]').addClass("error");
        } 
        
        // If Select Change Remove Error Class
        $('select[name=city]').change(function(){
            error = false;
            $('select[name=city]').removeClass('error');
        });

        // Input On Focus Remore Error Class
        $('input').focus(function() {
            error = false;
            $(this).removeClass('error');
        })

        // Fake Load POST request 
        if(!error){
            $('.btn__form').replaceWith('<button class="btn btn__submit__light"><i class="fas fa-sync-alt fa-spin"></i></button>');
            setTimeout(() => {
                window.location.assign('./tasker.html');  
            }, 2000);
        }
     
    });
    
});   

