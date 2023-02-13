class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 3; // 0 right 1 down 2 left 3 up
    }
    draw() {
        fill("black");
        noStroke;
        ellipse(this.x, this.y, 50, 50);

    }
}

class Enemy {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(){
        fill("black")
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        if(sword.checkHit(this.x, this.y,this.w, this.h)){
            this.x = -1000;
        }

    }
}

class Sword {
    constructor(damage, movement, charges, delay) {
        this.damage = damage;
        this.movement = movement;
        this.maxcharges = charges;
        this.charges = 0;
        this.frame = 1;
        this.swinging = false;
        this.delay = 0;
        this.maxdelay = delay;
    }

    swing() {
        if (this.delay < 1) {
            this.swinging = true;
        }
    }

    checkHit(x, y, w, h) {
        if (this.swinging) {
            if (this.charges == this.maxcharges) {
                if (player.direction == 0) {
                    if (x + w > player.x + 25 && player.y + h > player.y - 85 && x < player.x + 115 && y < player.y + 85) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (player.direction == 1) {
                    if (x + w > player.x - 85 && player.y + h > player.y + 25 && x < player.x + 85 && y < player.y + 115) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (player.direction == 2) {
                    if (x + w > player.x - 110 && player.y + h > player.y - 85 && x < player.x - 20 && y < player.y + 85) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (player.direction == 3) {
                    if (x + w > player.x - 85 && player.y + h > player.y - 110 && x < player.x + 85 && y < player.y - 20) {
                        return true;
                    } else {
                        return false;
                    }
                }
            } else {
                if (player.direction == 0) {
                    if (x + w > player.x +20 && player.y + h > player.y - 100 && x < player.x + 100 && y < player.y +200) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (player.direction == 1) {
                    if (x + w > player.x -100 && player.y + h > player.y +28 && x < player.x + 100 && y < player.y +108) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (player.direction == 2) {
                    if (x + w > player.x -110 && player.y + h > player.y -100 && x < player.x + 30 && y < player.y +100) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (player.direction == 3) {
                    if (x + w > player.x -100 && player.y + h > player.y -102 && x < player.x + 200 && y < player.y -22) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    draw() {
        this.delay--;
        if (this.swinging) {
            if (this.frame > 5) {
                this.frame = 0;
                this.swinging = false;
                this.charges++;
                this.delay = this.maxdelay;
                if (this.charges > this.maxcharges) {
                    this.charges = 0;
                    this.delay = this.maxdelay * 2;
                }
                return;
            }


            if (this.charges == this.maxcharges) {


                noFill();
                stroke("white");
                strokeWeight(40);
                if (player.direction == 0) {
                    arc(player.x + 40, player.y, 120, 150, Math.PI / 10 - Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 - Math.PI / 2, OPEN)
                    arc(player.x + 34, player.y, 90, 100, Math.PI / 10 - Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 - Math.PI / 2, OPEN)
                    player.x += this.movement * 2;

                }
                if (player.direction == 1) {
                    arc(player.x, player.y + 40, 150, 120, Math.PI / 10, Math.PI * (this.frame) / 6 + Math.PI / 10, OPEN)
                    arc(player.x, player.y + 34, 100, 90, Math.PI / 10, Math.PI * (this.frame) / 6 + Math.PI / 10, OPEN)
                    player.y += this.movement * 2;

                }
                if (player.direction == 2) {
                    arc(player.x - 40, player.y, 120, 150, Math.PI / 10 + Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI / 2, OPEN)
                    arc(player.x - 34, player.y, 90, 100, Math.PI / 10 + Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI / 2, OPEN)
                    player.x -= this.movement * 2;
                }
                if (player.direction == 3) {
                    arc(player.x, player.y - 40, 150, 120, Math.PI / 10 + Math.PI, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI, OPEN)
                    arc(player.x, player.y - 34, 100, 90, Math.PI / 10 + Math.PI, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI, OPEN)
                    player.y -= this.movement * 2;
                }
                noStroke();
                this.frame++;

            } else {



                noFill();
                stroke("white");
                strokeWeight(40);
                if (player.direction == 0) {
                    arc(player.x + 40, player.y, 80, 200, Math.PI / 10 - Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 - Math.PI / 2, OPEN)
                    arc(player.x + 34, player.y, 60, 150, Math.PI / 10 - Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 - Math.PI / 2, OPEN)
                    player.x -= this.movement * 1 / 4;
                }
                if (player.direction == 1) {
                    arc(player.x, player.y + 40, 200, 80, Math.PI / 10, Math.PI * (this.frame) / 6 + Math.PI / 10, OPEN)
                    arc(player.x, player.y + 34, 150, 60, Math.PI / 10, Math.PI * (this.frame) / 6 + Math.PI / 10, OPEN)
                    player.y -= this.movement * 1 / 4;

                }
                if (player.direction == 2) {
                    arc(player.x - 40, player.y, 80, 200, Math.PI / 10 + Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI / 2, OPEN)
                    arc(player.x - 34, player.y, 60, 150, Math.PI / 10 + Math.PI / 2, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI / 2, OPEN)
                    player.x += this.movement * 1 / 4;

                }
                if (player.direction == 3) {
                    arc(player.x, player.y - 40, 200, 80, Math.PI / 10 + Math.PI, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI, OPEN)
                    arc(player.x, player.y - 34, 150, 60, Math.PI / 10 + Math.PI, Math.PI * (this.frame) / 6 + Math.PI / 10 + Math.PI, OPEN)
                    player.y += this.movement * 1 / 4;

                }
                noStroke();
                this.frame++;
            }
        }
    }
}


var player = new Player(350, 350);
var sword = new Sword(3, 3, 3, 10);
var enemy = new Enemy(200,200,50,50);




function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(220)
    player.draw();
    sword.draw();
    enemy.draw();


    if (register.s || register.ArrowDown) {
        player.y += 5;
    }
    if (register.w || register.ArrowUp) {
        player.y -= 5;
    }
    if (register.a || register.ArrowLeft) {
        player.x -= 5;
    }
    if (register.d || register.ArrowRight) {
        player.x += 5;
    }
}

var register = {};

document.addEventListener("keydown", function (keyCode) {
    register[keyCode.key] = true;
})
document.addEventListener("keyup", function (keyCode) {
    register[keyCode.key] = false;
})

window.addEventListener("keydown", function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function mousePressed() {
    var xDiff = mouseX - player.x;
    var yDiff = mouseY - player.y;
    if(Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff < 0){
            player.direction = 2;
        }else{
            player.direction = 0;
        }
    }else{
        if(yDiff < 0){
            player.direction = 3;
        }else{
            player.direction = 1;
        }
    }

    sword.swing();
}