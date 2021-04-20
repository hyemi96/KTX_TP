/**
 * 
 */
	function goUpdate(){
		
		var qsubject = $('#qsubject').val();
		var qcontent = $('#qcontent').val();
		if(qsubject == ""){
			alert('제목을 입력해 주세요');
			return false;
		}
		
		if(qcontent == ""){
			alert('내용을 입력해 주세요');
			return false;
		}	
	};