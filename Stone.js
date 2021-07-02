class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
        var options = {
           restitution:0.8,
		   friction:0.9,
		   density:30
		}

		this.w=w;
		this.h=h;
		
		
		this.body=Bodies.rectangle(x, y,w,h,options)
		World.add(world, this.body);

	}
	display()
	{ 
		var angle=this.body.angle
		var stonepos=this.body.position;		
		push()
		translate(stonepos.x, stonepos.y);
		rectMode(CENTER)
		strokeWeight(4);
        rotate(angle)
		stroke("black");
		fill("black");
		//draw the ellipse here to display the rubber ball
		rect(0,0,50,50)
		pop()
	}

}