/**
 * 
 */
function writeSave(){
		
	var qsubject = $('#qsubject').val();
	var qcontent = $('#qcontent').val();
	var blank_pattern = /^\s+|\s+$/g;
				
	if( qsubject.replace( blank_pattern, '' ) == "" || qcontent.replace( blank_pattern, '' ) == "" ){
		  alert('공백만 입력되었습니다 ');
		  return false;
	}
	if(qsubject.length <= 2){
		alert('제목은 두글자 이상 작성해 주세요');
		return false;
	}		
	if(qcontent == ""){
		alert('내용을 입력해 주세요');
		return false;
	}	
};