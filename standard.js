var gl;

function initWebGL(canvas){
	gl = null;
	try{
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	}
	catch(e){
		console.log(e);
	}
	if(!gl){
		alert("Unable to initialise WebGL. Your browser may not support it.");
	}
	return gl;
}
