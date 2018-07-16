$(document).ready(function(){

    $('input:radio[name="mskillgroup"]').change(
        function(e){
            console.log('it changed');

            // Find selected Categories
            if (this.checked && this.value == 'cleaning') {
                console.log('Cleaning');

                // toggle Logo and Font color
                $('.jqueryCleaning').removeClass('nonSelect');
                $('.jqueryHandyman').addClass('nonSelect');
                $('.jqueryGeneral').addClass('nonSelect');
                $('.jqueryAssembly').addClass('nonSelect');

                // toggle Form
                $('.cleaning__form').css("display", "block");
                $('.handyman__form').css("display", "none");
                $('.general__form').css("display", "none");
                $('.assembly__form').css("display", "none");


                $('.checkbox__wrapper-flex').css("display", "none");
                $('.cleaning__loading').css("display", "block");
                setTimeout(() => {
                    $('.checkbox__wrapper-flex').css("display", "flex");
                    $('.cleaning__loading').css("display", "none");
                }, 2000);


                // Display Button by CheckBox
                $( "input[type=checkbox]").on( "click", showButton );
                function showButton(){
                    // Get checkBox length 
                    let n = $( "input:checked" ).length;
                    console.log('Checkbox Number.length: ' + n);

                    if (n !== 1) {   
                        $('.jquerybtn').css("display", "block");
                    } else {
                        $('.jquerybtn').css("display", "none");
                
                    }
                }

                // Button Press Event
                $('.jquerybtn').on('click',newform);
                function newform(){
                    // remove categires Form
                    $('.categories--2').css("display","block");
                    $('.categories').css("display", "none");

                    // Get new Form
                    $('.personal__Details').css("display","block");
                    $('.personal__Details--2').css("display","none");
               
                

                }
                



                




            }

            if (this.checked && this.value == 'handyman') {
                console.log('Handyman');
                
                // toggle Logo and Font color
                $('.jqueryCleaning').addClass('nonSelect');
                $('.jqueryHandyman').removeClass('nonSelect');
                $('.jqueryGeneral').addClass('nonSelect');
                $('.jqueryAssembly').addClass('nonSelect');

                // toggle Form
                $('.cleaning__form').css("display", "none");
                $('.handyman__form').css("display", "block");
                $('.general__form').css("display", "none");
                $('.assembly__form').css("display", "none");
            }

            if (this.checked && this.value == 'general') {
                console.log('General');

                // toggle Logo and Font color
                $('.jqueryCleaning').addClass('nonSelect');
                $('.jqueryHandyman').addClass('nonSelect');
                $('.jqueryGeneral').removeClass('nonSelect');
                $('.jqueryAssembly').addClass('nonSelect');

                // toggle Form
                $('.cleaning__form').css("display", "none");
                $('.handyman__form').css("display", "none");
                $('.general__form').css("display", "block");
                $('.assembly__form').css("display", "none");

            }
            if (this.checked && this.value == 'assembly') {
                console.log('Assembly');

                // toggle Logo and Font color
                $('.jqueryCleaning').addClass('nonSelect');
                $('.jqueryHandyman').addClass('nonSelect');
                $('.jqueryGeneral').addClass('nonSelect');
                $('.jqueryAssembly').removeClass('nonSelect');

                // toggle Form
                $('.cleaning__form').css("display", "none");
                $('.handyman__form').css("display", "none");
                $('.general__form').css("display", "none");
                $('.assembly__form').css("display", "block");

            }
  
        });
    




});