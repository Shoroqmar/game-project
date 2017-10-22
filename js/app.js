// Enemies our player must avoid
var Enemy = function(x,y,attack) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x ; 
    this.y=y ;
    this.attack= attack;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        this.x += this.attack * dt;
     if (this.x > 500) {
        this.x = -100;
        this.attack = 100 + Math.floor(Math.random() * 510);
    }
    
    if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,run){
    this.x=x ; 
    this.y=y;
    this.run=run;
    this.sprite='images/char-pink-girl.png';
};


Player.prototype.update=function(dt){ 

        this.x += this.run * dt;
    if (this.y<0){ 
    alert("you win");
    }


};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};

Player.prototype.handleInput=function(key){ 
 switch (key){ 
  case 'left':
    this.x -= this.run + 40;
            break;
        case 'up':
    this.y -= this.run + 20;
            break;
        case 'right':
    this.x += this.run + 40;
            break;
    case 'down':
    this.y += this.run + 20;
            break;
    }


};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies =[];

var player = new Player(200, 380, 50);
var i =20 ; 
if ( i<=20){
    var enemy = new Enemy(100+i,250+i,60 );
    i--;
}
else alert("you lose ");




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
