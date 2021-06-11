function show_hide(idname, arrow_id){
	var v=document.getElementById(idname);
	var arrow=document.getElementById(arrow_id);


	if(v.style.display === 'none'){
		v.style.display='block';
		arrow.style.backgroundImage="url('./img/icons/Path 3.png')";
	


	} else {
		v.style.display = 'none';
		arrow.style.backgroundImage="url('./img/icons/Path 3 (1).png')";
		
	}
	}

