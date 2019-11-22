// -> Define an object called 'Robot'
// -> Define a method called 'new' in Robot
// -> When Robot.new is called it should return a new object with Robot as its prototype 
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

const Robot = {}
Robot.new= function(){
    return Object.create(Robot)
}

const robby = Object.create(Robot)
// claim(robby.isPrototypeOf(Robot), true);

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}
