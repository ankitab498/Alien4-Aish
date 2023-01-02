var gState
var alienCount1 = 0
var alienCount2 = 0
var alienCount3 = 0
var lasers , alien , alien2 , alien3
var a3deathC = 3

function preload() {
    bgImg = loadImage("Images/bg.jpg")
    spaceCraftImg = loadImage("Images/spacecraft.png")

    alienImg = loadImage("Images/alien.png")
    alien2Img = loadImage("Images/alien2.png")
    alien3Img = loadImage("Images/alien3.png")
    alien4Img = loadImage("Images/alien4.png")


    p1Img = loadImage("Images/p1.png")
    p2Img = loadImage("Images/p2.png")
    p3Img = loadImage("Images/p3.png")
    p4Img = loadImage("Images/p4.png")
    p5Img = loadImage("Images/p5.png")
    p6Img = loadImage("Images/p6.png")
    p7Img = loadImage("Images/p7.png")

    pViewImg = loadImage("Images/viewfromplanet.jpg")

    laserImg = loadImage("Images/lazer.png")

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    bg = createSprite(width / 2, height / 2, width, height)
    bg.addImage(bgImg)
    bg.scale = 1.5

    pView = createSprite(width / 2, height / 2, width, height)
    pView.addImage(pViewImg)
    pView.scale = 4
    pView.visible = false

    alien = createSprite(width / 2, height - 100)
    alien.addImage(alienImg)
    alien.scale = 0.4
    alien.visible = false

    alien2 = createSprite(width/2, height - 100)
    alien2.addImage(alien2Img)
    alien2.scale = 0.4
    alien2.visible = false

    alien3 = createSprite(width/2, height - 100)
    alien3.addImage(alien3Img)
    alien3.scale = 0.4
    alien3.visible = false

    p1 = createSprite(100, height - 100, width, height)
    p1.addImage(p1Img)
    p1.scale = 0.3

    p2 = createSprite(300, height - 200, width, height)
    p2.addImage(p2Img)
    p2.scale = 0.3

    p3 = createSprite(500, height - 300, width, height)
    p3.addImage(p3Img)
    p3.scale = 0.3

    p4 = createSprite(700, height - 400, width, height)
    p4.addImage(p4Img)
    p4.scale = 0.3

    p5 = createSprite(1000, height - 500, width, height)
    p5.addImage(p5Img)
    p5.scale = 0.3

    p6 = createSprite(width - 300, height - 300, width, height)
    p6.addImage(p6Img)
    p6.scale = 0.3

    p7 = createSprite(width - 100, height - 180, width, height)
    p7.addImage(p7Img)
    p7.scale = 0.3

    spaceCraft = createSprite(width / 2, height - 100)
    spaceCraft.addImage(spaceCraftImg)
    spaceCraft.scale = 0.4

    invi = createSprite(width/2 , height , width , 2)
    invi.visible = false

    lasers = createGroup()

    aliens1 = createGroup()

    aliens2 = createGroup()

    aliens3 = createGroup()

    aliens4 = createGroup()

}

function draw() {

    background("black")

    drawSprites()

    if (keyDown(RIGHT_ARROW)) {
        spaceCraft.x += 15
    }

    if (keyDown(LEFT_ARROW)) {
        spaceCraft.x -= 15
    }

    if (keyDown(UP_ARROW)) {
        spaceCraft.y -= 15
    }

    if (keyDown(DOWN_ARROW)) {
        spaceCraft.y += 15
    }


    if (spaceCraft.isTouching(p1)) {
        gState = "p1"
    }

    // ------------------------------------ Planet 1 --------------------------------------------------
    if (gState == "p1") {
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
        spawnAliens_p1()

        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        if (aliens1.isTouching(lasers)) {
            for (var i = 0; i < aliens1.length; i++) {
                if (aliens1[i].isTouching(lasers)) {
                    aliens1[i].destroy()
                    lasers.destroyEach()

                    alienCount1 = alienCount1 + 1
                }

            }
        }

        textSize(25)
        fill("black") 
        text("Alien Death Count : " + alienCount1 , 50 , 70)
    
        if(alienCount1 >= 1){
            gState = "p2"
      
        }

    }

    // ------------------------------------ Planet 2 --------------------------------------------------
    if(gState == "p2"){

        p1.destroy()
        aliens1.destroyEach()
        
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false

        spawnAliens_p2()
    
        textSize(23)
        fill("black")
        text("Welcome to Planet 2! " , width/2 - 100 , 20)    

        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }


        if (aliens2.isTouching(lasers)) {
            for (var i = 0; i < aliens2.length; i++) {
                if (aliens2[i].isTouching(lasers)) {
                    aliens2[i].destroy()
                    lasers.destroyEach()

                    alienCount2 = alienCount2 + 1
                }

            }
        }
 
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount2 , 50 , 70)

        if(alienCount2 >= 2){
            gState = "p3"
        }
       
    }


    //--------------------------------------------------------------- planet 3 ----------------------------------------------------

    if(gState == "p3"){

        p2.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()

    
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
    
        spawnAliens_p3()
    
        textSize(23)
        fill("black")
        text("Welcome to Planet 3! " , width/2 - 100 , 20)    
    
        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens3.length; i++) {
            if (aliens3[i].isTouching(invi)) {
                aliens3[i].destroy()
                a3deathC -= 1
            }
        }   
    
        if (aliens3.isTouching(lasers)) {
            for (var i = 0; i < aliens3.length; i++) {
                if (aliens3[i].isTouching(lasers)) {
                    aliens3[i].destroy()
                    lasers.destroyEach()
    
                    alienCount3 = alienCount3 + 1
                }
    
            }
        }
    
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount3 , 50 , 70)
    
 
        fill("red")
        text("Chances : " + a3deathC , 50 , 110)
    
        if(a3deathC <= 0){
            gState = "p3"
            alienCount3 = 0
            a3deathC = 3 
        }
        
       if(alienCount3 >= 10){
            gState = "p4"
        }
       
    }

    

    //--------------------------------------------------------------- planet 4 ----------------------------------------------------

    if(gState == "p4"){

        p3.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()
        aliens3.destroyEach()

    
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
    
        spawnAliens_p3()
    
        textSize(23)
        fill("black")
        text("Welcome to Planet 4! " , width/2 - 100 , 20)    
    
        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens3.length; i++) {
            if (aliens3[i].isTouching(invi)) {
                aliens3[i].destroy()
                a3deathC -= 1
            }
        }   
    
        if (aliens3.isTouching(lasers)) {
            for (var i = 0; i < aliens3.length; i++) {
                if (aliens3[i].isTouching(lasers)) {
                    aliens3[i].destroy()
                    lasers.destroyEach()
    
                    alienCount3 = alienCount3 + 1
                }
    
            }
        }
    
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount3 , 50 , 70)
    
 
        fill("red")
        text("Chances : " + a3deathC , 50 , 110)
    
        if(a3deathC <= 0){
            gState = "p3"
            alienCount3 = 0
            a3deathC = 3 
        }
        
       if(alienCount3 >= 10){
            gState = "p4"
        }
       
    }

} 




// ------------------------------------- creating alien 1 ------------------------------------------------------------------
function spawnAliens_p1() {
    if (frameCount % 100 == 0) {
        alien1 = createSprite(Math.round(random(100, width - 100)), -50)
        alien1.addImage(alienImg)
        alien1.velocityY = 2
        alien1.scale = 0.4
        aliens1.add(alien1)

    }
}

// ------------------------------------- creating alien 2 ------------------------------------------------------------------
function spawnAliens_p2() {
    if (frameCount % 70 == 0) {
        alien2 = createSprite(Math.round(random(100, width - 100)), -50)
        alien2.addImage(alien2Img)
        alien2.velocityY = 3
        alien2.scale = 0.2
        aliens2.add(alien2)

    }
}

//-------------------------------- creating alien 3 ------------------------------------------------------------------------
function spawnAliens_p3() {
    if (frameCount % 50 == 0) {
        alien3 = createSprite(Math.round(random(100, width - 100)), -50)
        alien3.addImage(alien3Img)
        alien3.velocityY = 3
        alien3.scale = 0.2
        aliens3.add(alien3)

    }
}

//-------------------------------- creating alien 4 ------------------------------------------------------------------------
function spawnAliens_p4() {
    if (frameCount % 50 == 0) {
        alien4 = createSprite(Math.round(random(100, width - 100)), -50)
        alien4.addImage(alien4Img)
        alien4.velocityY = 3
        alien4.scale = 0.2
        aliens4.add(alien4)

    }
}











