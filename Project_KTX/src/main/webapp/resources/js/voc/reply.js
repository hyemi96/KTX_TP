/**
 * 
 */
 function writeSave(){
		
		var qsubject = $('#qsubject').val();
		var qcontent = $('#qcontent').val();
		var blank_pattern = /^\s+|\s+$/g;
		
		if( qsubject.replace( blank_pattern, '' ) == ""){
		    alert('제목에 공백만 입력되었습니다 ');
		    return false;
		}
		if(qsubject.length > 16){
			alert('제목이 너무 깁니다');
			return false;
		}		
		
		if( qcontent.replace( blank_pattern, '' ) == "" ){
		    alert('내용에 공백만 입력되었습니다 ');
		    return false;
		}
		if(qcontent.length > 1000){
			alert('내용이 너무 깁니다');
			return false;
		}	
	};