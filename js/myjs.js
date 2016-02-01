		var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

  		$("#modal1").openModal();
  		$(".button-collapse").sideNav();
  		new WOW().init();

  		function closeForm() {
  			$nome = $("#name").val();
	  		$psw = $("#psw").val();
	  		$psw2 = $("#psw2").val();
  			if($nome == ""){
  				$("#name").prev().text("Non hai scritto il nome!");
  				$("#name").prev().css("color", "red");
  			}else{
  				if($psw == ""){
	  				$("#psw").prev().text("Non hai scritto la password");
	  				$("#psw").prev().css("color", "red");
	  			}
	  			else if($psw2 == ""){
	  				$("#psw2").prev().text("Non hai scritto la password");
	  				$("#psw2").prev().css("color", "red");
	  			}
	  			else{
	  				if($psw != $psw2){
	  					$("#psw").prev().text("Hai scritto male la password!");
	  					$("#psw").prev().css("color", "red");
	  				}else{
	  					addName();
	  					$('#modal1').closeModal();
	  					$(".nascondi").removeClass("nascondi");
	  				}
	  			}
  			}
  		};

  		function addName() {
  			$("#home h1").text("Ciao " + $nome + "!");
  		};

  		$(function() {
		    $("#draggable").draggable();
		    $("#droppable").droppable({
		      	drop: function() {
		        	$(this)
		          	.addClass("green")
		          	.removeClass("red")
		      	}
		    });
		});

		$("#changeColor").click(function(){
			$("#changeMyColor").toggleClass("purple");
		});

		$("#changeMySize").click(function(){
	        $("#changeMySize").css({
	        	"width": "50px",
	        	"height": "50px"
	        });
	    });

	    $("#clickMe").click(function(){
	    	$("p").text("Ora non puoi più cliccare!");
	    	$("#clickMe").addClass("disabled");
	    	$("#clickMe").removeClass("waves-effect waves-light");
		});

		$("#hackPsw").click(function(){
			checkPassword($("#psw").val());
		});
		
		function checkPassword(value){
		    function toRadix(N,radix) {
		        var HexN = "", 
		            Q = Math.floor(Math.abs(N)), 
		            R,
		            strv = charset,
		            radix = strv.length;
		        while (true) {
		            R = Q % radix;
		            HexN = strv.charAt(R) + HexN;
		            Q = (Q - R) / radix; 
		            if (Q == 0) 
		                break;
		        };
		        return ((N < 0) ? "-" + HexN : HexN);
		    };
		    var start = (new Date()) * 1,
		        cracked = false,
		        index = 0;
		    while(!cracked){
		        if(toRadix(index) == value)
		            cracked = true;
		        else
		            index++;
		        console.log(toRadix(index));
		    };
		    $(".pswFound strong").text(toRadix(index));
		    $(".hidden").addClass("nascondi");
		    $(".pswFound").removeClass("pswFound");
		};