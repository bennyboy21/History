var Mode;

var loading1 = 50
var loading2 = 50
var loading3 = 50
var loading4 = 50
var loading5 = 50

var randomlaodtimemim = 150

var timer = 0
var timer2 = 0
var timer3 = 0
var timer4 = 500
var timer5 = 0

var timer5count = 20
var timer5spot = 925
var ASDF = -150
var FDSA = -0

var r = 255
var r1 = 0
var r2 = 0
var Y = 255
var g1 = 0
var g2 = 0
var X = 255
var b1 = 0
var b2 = 0

var a = 0
var b = 0

var c = 0
var d = 0

var e = 0
var f = 0

var g = 0
var h = 0

var i = 0
var j = 0

var x = 275
var y = 175

var IMG1;
var IMG2;
var IMG3;

var textX = 45
var textY = 250
var textX2 = 45
var textY2 = 275
var textX3 = 45
var textY3 = 250

function preload() {
  IMG1 = loadImage('Image1.jpg')
  IMG2 = loadImage('Image2.jpg')
  IMG3 = loadImage('Image3.jpg')
}

function setup() {
  createCanvas(1000, 600);
  Mode = 1;
}

function mousePressed() {
  if (mouseX > 385 && mouseY > 325 && mouseX < 635 && mouseY < 425 && Mode == 2) {
    Mode = 3
  }

  if (mouseX > 710 && mouseY > 450 && mouseX < 985 && mouseY < 575 && Mode == 9) {
    Mode = 10
  }

  if (mouseX > 250 && mouseY > 150 && mouseX < 575 && mouseY < 300 && Mode == 4) {
    Mode = 10532
  }
  
  
  if (mouseX > 700 && mouseY > 150 && mouseX < 1025 && mouseY < 300 && Mode == 4) {
    Mode = 10532
  }
  
  
  if (mouseX > 250 && mouseY > 400 && mouseX < 575 && mouseY < 550 && Mode == 4) {
    Mode = 10532
  }
  
  
  
  
  
  if (mouseX > 250 && mouseY > 400 && mouseX < 1025 && mouseY < 550 && Mode == 6) {
    Mode = 74934
  }
  
  if (mouseX > 250 && mouseY > 150 && mouseX < 575 && mouseY < 300 && Mode == 6) {
    Mode = 74934
  }
  
  
  if (mouseX > 700 && mouseY > 150 && mouseX < 1025 && mouseY < 300 && Mode == 6) {
    Mode = 74934
  }
  
  
  if (mouseX > 250 && mouseY > 400 && mouseX < 575 && mouseY < 550 && Mode == 6) {
    Mode = 74934
  }
  
  
  if (mouseX > 700 && mouseY > 400 && mouseX < 1025 && mouseY < 550 && Mode == 6) {
    Mode = 74934
  }
  
  
  
  
  
  if (mouseX > 250 && mouseY > 400 && mouseX < 1025 && mouseY < 550 && Mode == 8) {
    Mode = 9
  }
  
  if (mouseX > 250 && mouseY > 150 && mouseX < 575 && mouseY < 300 && Mode == 8) {
    Mode = 9
  }
  
  
  if (mouseX > 700 && mouseY > 150 && mouseX < 1025 && mouseY < 300 && Mode == 8) {
    Mode = 9
  }
  
  
  if (mouseX > 250 && mouseY > 400 && mouseX < 575 && mouseY < 550 && Mode == 8) {
    Mode = 9
  }
  
  
  if (mouseX > 700 && mouseY > 400 && mouseX < 1025 && mouseY < 550 && Mode == 8) {
    Mode = 9
  }
  
  
  if (mouseX > 710 && mouseY > 450 && mouseX < 985 && mouseY < 575 && Mode == 10532) {
    Mode = 5
  }
  
  if (mouseX > 25 && mouseY > 25 && mouseX < 300 && mouseY < 150 && Mode == 74934) {
    Mode = 7
  }
  
  if (mouseX > 400 && mouseY > 25 && mouseX < 675 && mouseY < 150 && Mode == 9) {
    Mode = 2
  }
}

function draw() {
  if (Mode == 1) {

    timer2 += 1

    if (timer2 < randomlaodtimemim) {
      Mode = 1
    }

    if (timer2 > randomlaodtimemim + 1) {
      Mode = 2
    }

    a = 1
    timer += 1

    if (timer > 10) {
      c = 1
    }

    if (timer > 20) {
      e = 1
    }

    if (timer > 30) {
      g = 1
    }

    if (timer > 40) {
      i = 1
    }

    if (loading1 < 10) {
      a = 0
      b = 2
    }

    if (loading1 > 50) {
      a = 1
      b = 0
    }

    if (loading2 < 10) {
      c = 0
      d = 2
    }

    if (loading2 > 50) {
      c = 1
      d = 0
    }

    if (loading3 < 10) {
      e = 0
      f = 2
    }

    if (loading3 > 50) {
      e = 1
      f = 0
    }

    if (loading4 < 10) {
      g = 0
      h = 2
    }

    if (loading4 > 50) {
      g = 1
      h = 0
    }

    if (loading5 < 10) {
      i = 0
      j = 2
    }

    if (loading5 > 50) {
      i = 1
      j = 0
    }

    loading1 -= a
    loading1 += b

    loading2 -= c
    loading2 += d

    loading3 -= e
    loading3 += f

    loading4 -= g
    loading4 += h

    loading5 -= i
    loading5 += j

    background(255);
    noStroke();
    fill(75, 0, 128)
    circle(x + 50, 100 + y, loading1)
    fill(0, 0, 128)
    circle(x + 110, 100 + y, loading2)
    fill(0, 128, 0)
    circle(x + 185, 100 + y, loading3)
    fill(255, 255, 0)
    circle(x + 260, 100 + y, loading4)
    fill(150, 0, 0)
    circle(x + 335, 100 + y, loading5)
  }
  if (Mode == 2) {

    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)

    textFont('ZCOOL XiaoWei')

    stroke(5)
    noFill()
    strokeWeight(5)
    rect(385, 325, 250, 100)
    fill(0)
    textSize(100)
    text('Play', 425, 400)
    text('Learning Time', 200, 100)
  }

  if (Mode == 3) {

    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }


    timer5spot = 925

    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    image(IMG1, 250, 50, 444.6666, 233.6666)

    textFont('ZCOOL XiaoWei')
    fill(0)
    textSize(100)
    text('Who Is This Man ?', 100, 400)

    timer4 -= 2

    fill(0)
    rect(210, 450, 505, 25, 100)
    fill(255)
    rect(212.5, 452.5, timer4, 20, 100)

    if (timer4 < 25) {
      Mode = 4
    }
  }

  if (Mode == 4) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    image(IMG1, 375, 25, 222, 116)
    timer3 += 1

    stroke(0)
    strokeWeight(10)
    fill(255, 0, 0)
    rect(ASDF + 250, FDSA + 150, 325, 150)
    fill(255, 255, 0)
    rect(ASDF + 700, FDSA + 150, 325, 150)
    fill(0, 255, 0)
    rect(ASDF + 250, FDSA + 400, 325, 150)
    fill(0, 100, 255)
    rect(ASDF + 700, FDSA + 400, 325, 150)

    fill(0)
    circle(950, 100, 75)
    fill(255)
    textSize(50)
    text(timer5count, timer5spot, 115)

    fill(0)
    noStroke();
    textFont('Roboto')
    textSize(100)
    textSize(43)
    text('Mathieu Da Costa', 105, 235)
    text('John Humphrey', 575, 485)
    text('William Hall', 595, 240)

    textSize(40)
    text('Lincoln Alexander', 110, 485)

    if (timer5count < 10) {
      timer5spot = 937.5
    }

    if (timer5count > 5 && timer5count < 7) {
      timer6 = 0
    }

    if (timer5count < 1) {
      Mode = 5
      rightorwrong = 3
    }

    timer5 += 1
    timer4 = 500

    if (timer5 == 70) {
      timer5count -= 1
    }
    if (timer5 == 140) {
      timer5count -= 1
    }
    if (timer5 == 210) {
      timer5count -= 1
    }
    if (timer5 == 280) {
      timer5count -= 1
    }
    if (timer5 == 350) {
      timer5count -= 1
    }
    if (timer5 == 420) {
      timer5count -= 1
    }
    if (timer5 == 490) {
      timer5count -= 1
    }
    if (timer5 == 560) {
      timer5count -= 1
    }
    if (timer5 == 630) {
      timer5count -= 1
    }
    if (timer5 == 700) {
      timer5count -= 1
    }
    if (timer5 == 770) {
      timer5count -= 1
    }
    if (timer5 == 840) {
      timer5count -= 1
    }
    if (timer5 == 910) {
      timer5count -= 1
    }
    if (timer5 == 980) {
      timer5count -= 1
    }
    if (timer5 == 1050) {
      timer5count -= 1
    }
    if (timer5 == 1120) {
      timer5count -= 1
    }
    if (timer5 == 1190) {
      timer5count -= 1
    }
    if (timer5 == 1160) {
      timer5count -= 1
    }
    if (timer5 == 1330) {
      timer5count -= 1
    }
    if (timer5 == 1400) {
      timer5count -= 1
      Mode = 10532
    }
  }
  if (Mode == 10532) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    fill(0)
    rect(textX2 - 5, textY2 - 30, textX2 + 875, textY2 - 175)
    fill(255)
    textFont('ZCOOL XiaoWei')
    textSize(30)
    text('The first ever known person of color to step foot on canadian soil was an', textX2, textY2)
    text('African named Mathieu de Coste who arrived in Canada in 1608 to serve', textX2, textY2 + 30)
    text('as interpreter of the Mikmaq language to the governor of Acadia.', textX2, textY2 + 60)
    text('', textX2, textY2 + 90)

    fill(0)
    rect(710, 450, 275, 125)
    fill(255)
    textSize(100)
    text('NEXT', 715, 545)
  }

  if (Mode == 5) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }


    timer5spot = 925
    timer5count = 20

    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    image(IMG2, 300, 50, 295, 225)

    textFont('ZCOOL XiaoWei')
    fill(0)
    textSize(50)
    text('What Year The Declaration of Equal', 100, 350)
    text('Rights Created ?', 300, 400)

    timer4 -= 2
    timer5count = 0

    fill(0)
    rect(210, 450, 505, 25, 100)
    fill(255)
    rect(212.5, 452.5, timer4, 20, 100)

    timer5count = 20

    if (timer4 < 25) {
      Mode = 6
    }
  }



  if (Mode == 6) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    image(IMG2, 395, 25, 174.5, 112.5)
    timer3 += 1

    stroke(0)
    strokeWeight(10)
    fill(255, 0, 0)
    rect(ASDF + 250, FDSA + 150, 325, 150)
    fill(255, 255, 0)
    rect(ASDF + 700, FDSA + 150, 325, 150)
    fill(0, 255, 0)
    rect(ASDF + 250, FDSA + 400, 325, 150)
    fill(0, 100, 255)
    rect(ASDF + 700, FDSA + 400, 325, 150)

    fill(0)
    circle(950, 100, 75)
    fill(255)
    textSize(50)
    text(timer5count, timer5spot, 115)

    fill(0)
    noStroke();
    textFont('Roboto')
    textSize(100)
    textSize(43)
    text('1956', 215, 235)
    text('1925', 650, 485)
    text('1948', 650, 240)
    text('1963', 215, 485)

    if (timer5count < 10) {
      timer5spot = 937.5
    }

    if (timer5count > 5 && timer5count < 7) {
      timer6 = 0
    }

    if (timer5count < 1) {
      Mode = 5
      rightorwrong = 3
    }

    timer5 += 1
    timer4 = 500

    if (timer5 == 75) {
      timer5count -= 1
    }
    if (timer5 == 140) {
      timer5count -= 1
    }
    if (timer5 == 210) {
      timer5count -= 1
    }
    if (timer5 == 280) {
      timer5count -= 1
    }
    if (timer5 == 350) {
      timer5count -= 1
    }
    if (timer5 == 420) {
      timer5count -= 1
    }
    if (timer5 == 490) {
      timer5count -= 1
    }
    if (timer5 == 560) {
      timer5count -= 1
    }
    if (timer5 == 630) {
      timer5count -= 1
    }
    if (timer5 == 700) {
      timer5count -= 1
    }
    if (timer5 == 770) {
      timer5count -= 1
    }
    if (timer5 == 840) {
      timer5count -= 1
    }
    if (timer5 == 910) {
      timer5count -= 1
    }
    if (timer5 == 980) {
      timer5count -= 1
    }
    if (timer5 == 1050) {
      timer5count -= 1
    }
    if (timer5 == 1120) {
      timer5count -= 1
    }
    if (timer5 == 1190) {
      timer5count -= 1
    }
    if (timer5 == 1160) {
      timer5count -= 1
    }
    if (timer5 == 1330) {
      timer5count -= 1
    }
    if (timer5 == 1400) {
      timer5count -= 1
      Mode = 74934
    }
  }
  
  if(Mode == 74934) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    fill(0)
    rect(textX3 - 5, textY3 - 30, textX3 + 875, textY3 - 120)
    fill(255)
    textFont('ZCOOL XiaoWei')
    textSize(30)
    text('In 1948 John Humphrey, a Canadian lawyer, played an important role in ', textX3, textY3)
    text('writing the Declaration of Equal Rights . When it was complete, the', textX3, textY3 + 30)
    text('Declaration was made up of a list of 30 articles saying what is okay and', textX3, textY3 + 60)
    text('what is not.', textX3, textY3 + 90)
    text('', textX3, textY3 + 120)

    fill(0)
    rect(25, 25, 275, 125)
    fill(255)
    textSize(100)
    text('NEXT', 30, 115)
  }



  if (Mode == 7) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }


    timer5spot = 925
    timer5 = 0

    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    image(IMG3, 300, 50, 250, 250)

    textFont('ZCOOL XiaoWei')
    fill(0)
    textSize(50)
    text('Who Is The Only Chinese Canadian To', 100, 350)
    text('Be Awarded The British Empire Medal ?', 95, 400)

    timer4 -= 2

    fill(0)
    rect(210, 450, 505, 25, 100)
    fill(255)
    rect(212.5, 452.5, timer4, 20, 100)

    timer5count = 20

    if (timer4 < 25) {
      Mode = 8
    }
  }
  if (Mode == 8) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    image(IMG3, 437, 25, 100, 100)
    timer3 += 1

    stroke(0)
    strokeWeight(10)
    fill(255, 0, 0)
    rect(ASDF + 250, FDSA + 150, 325, 150)
    fill(255, 255, 0)
    rect(ASDF + 700, FDSA + 150, 325, 150)
    fill(0, 255, 0)
    rect(ASDF + 250, FDSA + 400, 325, 150)
    fill(0, 100, 255)
    rect(ASDF + 700, FDSA + 400, 325, 150)

    fill(0)
    circle(950, 100, 75)
    fill(255)
    textSize(50)
    text(timer5count, timer5spot, 115)

    fill(0)
    noStroke();
    textFont('Roboto')
    textSize(100)
    textSize(45)
    text('Anne Cools', 150, 485)

    textSize(30)
    text('Willam Gun Chong', 595, 485)
    text('Marie-Joseph Angélique', 115, 235)
    text('Viola Davis Desmond', 585, 235)

    if (timer5count < 10) {
      timer5spot = 937.5
    }

    if (timer5count > 5 && timer5count < 7) {
      timer6 = 0
    }

    if (timer5count < 1) {
      Mode = 5
      rightorwrong = 3
    }

    timer5 += 1
    timer4 = 500

    if (timer5 == 70) {
      timer5count -= 1
    }
    if (timer5 == 140) {
      timer5count -= 1
    }
    if (timer5 == 210) {
      timer5count -= 1
    }
    if (timer5 == 280) {
      timer5count -= 1
    }
    if (timer5 == 350) {
      timer5count -= 1
    }
    if (timer5 == 420) {
      timer5count -= 1
    }
    if (timer5 == 490) {
      timer5count -= 1
    }
    if (timer5 == 560) {
      timer5count -= 1
    }
    if (timer5 == 630) {
      timer5count -= 1
    }
    if (timer5 == 700) {
      timer5count -= 1
    }
    if (timer5 == 770) {
      timer5count -= 1
    }
    if (timer5 == 840) {
      timer5count -= 1
    }
    if (timer5 == 910) {
      timer5count -= 1
    }
    if (timer5 == 980) {
      timer5count -= 1
    }
    if (timer5 == 1050) {
      timer5count -= 1
    }
    if (timer5 == 1120) {
      timer5count -= 1
    }
    if (timer5 == 1190) {
      timer5count -= 1
    }
    if (timer5 == 1160) {
      timer5count -= 1
    }
    if (timer5 == 1330) {
      timer5count -= 1
    }
    if (timer5 == 1400) {
      timer5count -= 1
      Mode = 9
    }
  }
  if (Mode == 9) {
    timer3 += 1

    if (r > 254) {
      if (timer3 > 0) {
        r1 = 0.5
        r2 = 0
      }
    }
    if (r < 1) {
      if (timer3 > 0) {
        r1 = 0
        r2 = 0.5
      }
    }

    if (Y > 254) {
      if (timer3 > 200) {
        g1 = 0.5
        g2 = 0
      }
    }

    if (Y < 1) {
      if (timer3 > 200) {
        g1 = 0
        g2 = 0.5
      }
    }

    if (X > 254) {
      if (timer3 > 400) {
        b1 = 0.5
        b2 = 0
      }
    }

    if (X < 1) {
      if (timer3 > 400) {
        b1 = 0
        b2 = 0.5
      }
    }



    r -= r1
    Y -= g1
    X -= b1

    r += r2
    Y += g2
    X += b2

    background(r, Y, X)
    fill(0)
    rect(textX - 5, textY - 30, textX + 875, textY - 85)
    fill(255)
    textSize(30)
    text('On July 15 1911 a man by the name of Willam Gun Chong was born.', textX, textY)
    text('He was a Chinese Canadian who served in the British Army', textX, textY + 30)
    text('Intelligence Unit MI9 during World War 2, he is also the only chinese', textX, textY + 60)
    text('canadian to ever be awarded the British Empire Medal, the highest', textX, textY + 90)
    text('honor that Britain awards to non-British citizens.', textX, textY + 120)

    fill(0)
    rect(400, 25, 275, 125)
    fill(255)
    textSize(100)
    text('NEXT', 403, 125)
  }
}