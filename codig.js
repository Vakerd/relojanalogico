// JavaScript Document

window.addEventListener("load", arranca);
this.g={}
function arranca(){
	g.mSeg=document.querySelector(".seg");
	g.mMins=document.querySelector(".min");
	g.mHora=document.querySelector(".hora");
	var nuevoReloj= new Reloj();
}


/*clase que inicializa el reloj*/
var Reloj= function(){
	var segundo,sgrado, srotate;
	var mins, mgrado, mrotate;
	var horas, hgrado, hrotate;
	
	function reloj(){
		segundo = new Date().getSeconds();
		sgrado= segundo*6;
		srotate= "rotate("+ sgrado+"deg)";
		g.mSeg.style.transform=srotate;
		
		
		 mins = new Date().getMinutes();
		 mgrado= horas * 30 + (mins / 2);
		 mrotate= "rotate("+ mgrado+"deg)";
		g.mMins.style.transform=mrotate;
		
		
		
		
		 horas = new Date().getHours();
      	 hgrado = mins*6;
	 	hrotate= "rotate("+ hgrado+"deg)";
		g.mHora.style.transform=hrotate;
	}
	
	reloj();
	setInterval(reloj,1000);
}