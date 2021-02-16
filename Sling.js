class Sling{
    constructor(bodyA, pB){
        var options={
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.3,
            length: 10,
        }
        this.poiB=pB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display() {
        if( this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.poiB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }}
}
