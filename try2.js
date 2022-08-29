function drawfield(userx, usery) {
  let ux=userx;
  let uy=usery;
  const canvas = document.getElementById('jsrun');
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle='black';
  ctx.fillStyle='black';
  ctx.rect(0, 0, 300, 300);
  ctx.fill();
  ctx.fillRect(0, 0, 300, 300);
  ctx.beginPath();
  const d=[];//75x100
		//lots of turning in the 24x24 box near origin
		const pi=Math.PI;
		for (let i=0; i<24; i++) {
		d[i]=[];
		  for (let j=0; j<24; j++) {
		    d[i][j]=(pi/12-(i*(pi/288))+(j*(pi/288)))/4;
		  }
		}
		for (let i=0; i<24; i++) {
		  for (let j=24; j<75; j++) {
		    d[i][j]=pi/80-(i/1920);
		  }
		}
		for (let i=24; i<50; i++) {
		    d[i]=[];
		  for (let j=0; j<75; j++) {
		    d[i][j]=-pi/48;
		  }
		}
		for (let i=50; i<75; i++) {
		    d[i]=[];
		  for (let j=0; j<75; j++) {
		    d[i][j]=(pi/70)*(j/18);
		  }
		}
    const lines=[];
		for (let i=0; i<20; i++) {
			let b=Math.random()*6.27;
			lines[i]=b;
		}
    var gradient = ctx.createLinearGradient(0, 0, 300, 300);

    gradient.addColorStop("0", "green");
    gradient.addColorStop("0.1", "green");
    gradient.addColorStop("0.5" ,"blue");
    gradient.addColorStop("0.8", "purple");
    gradient.addColorStop("1.0" ,"purple");
    ctx.strokeStyle = gradient;
    for (let l=0; l<lines.length; l++) {
      ctx.beginPath();
      let x=ux;
      let y=uy;
      ctx.moveTo(x, y);

      while (x<300 && y<300 && x>0 && y>0) {
        let theta=d[Math.floor(y/4)][Math.floor(x/4)];
        lines[l]+=theta;
        if (lines[l]>=Math.PI*2) lines[l]=0;
        x+=6*Math.cos(lines[l]);
        y-=6*Math.sin(lines[l]);
        let r=Math.floor(255-0.8*x);
        let g=Math.floor(255-0.8*y)
        ctx.lineTo(Math.floor(x), Math.floor(y));
      }
      ctx.stroke();
    }
}

const canvas = document.getElementById('jsrun');
canvas.addEventListener('click', (event) => {
  let ux=event.offsetX;
  let uy=event.offsetY;
  drawfield(ux, uy);
});
//function to get user click location and make field
