
var wid = window.innerWidth;
var hei = window.innerHeight;


//classes
//rot = 1/-1
var explosion = function (x, y){
    
    a = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    c = Math.round(Math.random() * 255);
    
    this.col = "rgb(" + a + "," + b + "," + c + ")";
    this.x = x;
    this.y = y;
    this.rot = 0.5;
    this.sizePara = 0;
    this.rad = 0;
    this.movement = function(){
        
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        ctx.beginPath();
        ctx.save();

        ctx.translate(this.x, this.y);

        this.rad += this.rot * (Math.PI / 180);

        ctx.rotate(this.rad);

        this.x -= speedX;
        this.Y -= speedY;

        ctx.rect(-0.5 * this.sizePara, - 0.5 * this.sizePara, this.sizePara, this.sizePara);
        ctx.strokeStyle = this.col;
        ctx.lineWidth = wid / 200;
        ctx.stroke();
        this.sizePara += 20 * wid / 1366;
        
        ctx.restore();
        ctx.closePath();

        ///////////////////////
/*         
        ctx.beginPath();
        ctx.save();

        ctx.translate(this.x, this.y);

        this.rad += this.rot * (Math.PI / 180);

        ctx.rotate(-this.rad);



        ctx.rect(-0.5 * this.sizePara, - 0.5 * this.sizePara, this.sizePara, this.sizePara);
        ctx.strokeStyle = this.col;
        ctx.lineWidth = wid / 300;
        ctx.stroke();
        this.sizePara += 2 * wid / 1366;
        
        ctx.restore();
        ctx.closePath(); */
    }
}

var missile = function (x, y){
    this.x = x;
    this.y = y;
    this.velX = 0;
    this.velY = 0;
    this.accelX = 0;
    this.accelY = 0;
    this.src = "missile.png";
    this.img = document.createElement("img");
    this.img.src = this.src;
    this.missileW = wid / 40;
    this.missileH = 4 * missileW;

    this.movement = function(){
        
    
    }
}

function exploding(x, y){}

var player = document.createElement("img")
player.src = "Player3.png";

function show(shown, hidden, hidden2, hidden3, hidden4) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(hidden2).style.display = 'none';
    document.getElementById(hidden3).style.display = 'none';
    document.getElementById(hidden4).style.display = 'none';
    return false;
}

scroll1 = document.createElement("img");
scroll2 = document.createElement("img");
scroll1.src = "SpaceNeedle360Panorama.png";
scroll2.src = "Lichtenstein360DegreePanorama.png";

function Reset() {


scroll = document.createElement("img");


s = Math.random() * 2;
if (s > 1) {
    scroll = scroll1;
} else {
    scroll = scroll2;

}

    //variables section
    trap = 0;
    win = 0;
    score = 0;
    ph = 0;
    HPC = "Red";
    scrollx = 0;
    scrolly = 0;
    g = 0;
    g2 = 0;
    vx = 0;
    vy = 0;
    tx = 0;
    ty = 0;
    up = 0;
    tangle = 0;
    vangle = 0;
    angle = 0;
    radian = angle * (Math.PI / 180);
    playerw = 10 / 120 * wid;
    playerh = 9 / 120 * wid;
    h = 0.8 * Math.sqrt(Math.pow(0.5 * playerw, 2) + Math.pow(0.5 * playerh, 2));
    s = 1;
    dax = 0;
    //playerx = wid / 8;
    playerx = wid * 0.75;
    playery = 0.5 * hei;
    timeShift = 1;
    circleN = 0;
    k = 0;
    j = 0;
    j2 = 0;
    laserN = 0;
    k2 = 0;
    k3 = 0;
    k4 = 0;
    rN = 0;
    radian2 = 0;
    rcx = 0;
    rcy = 0;
    mN = 0;
    k5 = 1;
    j3 = 0;
    j4 = 0;
    RlaserN = 0;
    jrl = 0;
    k6 = 0;
    tN = 1;
    fumes = 0;
    fN = 0;
    jf = 1;
    fall = 0;
    shot = 0;
    jd = 0;
    jf = 0;
    jg = 0;
    jk = 0;
    run = 0;
    rH = 0;
    rv2 = 0;
    ffN = 0;
    HP = wid / 4;
    EN = wid / 4;

    //arrays
     ra = new Array();
     cr = new Array();
     cg = new Array();
     cb = new Array();
     xtr = new Array();
     ytr = new Array();
     cmx = new Array();
     cmy = new Array();
     posx = new Array();
     posy = new Array();
     t = new Array();

     xl1 = new Array();
     yl1 = new Array();
     xl2 = new Array();
     yl2 = new Array();

     lr = new Array();
     lb = new Array();
     lg = new Array();

     xlp = new Array();
     ylp = new Array();

     lmx = new Array();
     lmy = new Array();

     lxn1 = new Array();
     lyn1 = new Array();
     lxn2 = new Array();
     lyn2 = new Array();

     rr = new Array();
     rg = new Array();
     rb = new Array();
     rf = new Array();

     rpx = new Array();
     rpy = new Array();

     Rcolor = new Array();

    //missile stuff
     missile = new Array();
     mx = new Array();
     my = new Array();
     mmx = new Array();
     mmy = new Array();
     v2 = new Array();
     fumes = new Array();
     mexN = new Array();
     rv = new Array();
     go = new Array();
    missileVX = new Array();
    missileVY = new Array();
    //fumes
     fc = new Array();

     fy = new Array();
     fy2 = new Array();
     fx = new Array();

     fcolor = new Array();


     fmx = new Array();
     fmy = new Array();

     fs = new Array();

     fpx = new Array();
     fpy = new Array();
     fuN = new Array();
     fl = new Array();

    //robot laser
     rlmx = new Array();
     rlmy = new Array();
     rxl1 = new Array();
     ryl1 = new Array();
     rxl2 = new Array();
     ryl2 = new Array();
     rlxn1 = new Array();
     rlyn1 = new Array();
     rlxn2 = new Array();
     rlyn2 = new Array();
     rlr = new Array();
     rlg = new Array();
     rlb = new Array();
     rxlp = new Array();
     rylp = new Array();
     bb = new Array();

    //explosion
    explo1 = new Array();
    missileExplo1 = new Array();


    //

    //var rmx = new Array();
    //var rmy = new Array();

    //array variables
    cmx[0] = 0;
    cmy[0] = 0;
    mx[0] = 0;
    mmx[0] = 0;


}
window.onkeydown = keydown;
window.onkeyup = keyup;



function Start() {

    var wid = window.innerWidth;
    var hei = window.innerHeight;

    show("pageone", "pagezero", "pagetwo", "pagethree", "pagefour");


    document.getElementById("load").style.width = wid + "px";
    document.getElementById("load").style.height = hei + "px";

    document.getElementById("GameOver").style.width = wid + "px";
    document.getElementById("GameOver").style.height = hei + "px";

document.getElementById("Start").style.width = wid * 0.1 + "px";
document.getElementById("Start").style.height = wid * 0.03 + "px";
document.getElementById("Start").style.fontSize = wid * 0.025 + "px";
//document.getElementById("Start").href = "#pagetwo";


document.getElementById("div").style.left = (wid / 2 - wid * 0.1/2 ) + "px";
document.getElementById("div").style.top = (hei *0.7) + "px";

document.getElementById("Banner").style.width = hei * 0.7 + "px";
document.getElementById("Banner").style.height = hei * 0.35 + "px";

document.getElementById("Banner").style.left = (wid / 2 - hei * 0.7 / 2) + "px";
document.getElementById("Banner").style.top = (hei * 0.2) + "px";

document.getElementById("Title").style.width = wid + "px";
document.getElementById("Title").style.height = hei + "px";

document.getElementById("Title2").style.width = wid + "px";
document.getElementById("Title2").style.height = hei + "px";



/* audio2.oncanplay = function () {
    audio2.setAttribute("autoplay", "autoplay");
    audio2.setAttribute("loop", "loop");
    audio2.play();
    
};
 */

text();
}

function text() {

    var wid = window.innerWidth;
    var hei = window.innerHeight;

    var c = document.getElementById("canvas2");
    var ctx = c.getContext("2d");
    canvas2.width = wid;
    canvas2.height = hei;

    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(wid * 0.2, hei * 0.1, wid * 0.6, hei * 0.7);
    ctx.closePath();

    document.getElementById("instructions").style.width = wid * 0.6 + "px";
    document.getElementById("instructions").style.height = hei * 0.7 + "px";
    document.getElementById("instructions").style.top = hei * 0.1 + "px";
    document.getElementById("instructions").style.left = wid * 0.2 + "px";
    document.getElementById("instructions").style.fontSize = wid * 0.025 + "px";
    document.getElementById("instructions").style.color = "White";

    document.getElementById("Go").style.width = wid * 0.1 + "px";
    document.getElementById("Go").style.height = wid * 0.05 + "px";
    document.getElementById("Go").style.fontSize = wid * 0.04 + "px";


    document.getElementById("div2").style.left = (wid / 2 - wid * 0.1 / 2) + "px";
    document.getElementById("div2").style.top = (hei * 0.85) + "px";



    document.getElementById("div4").style.left = wid * 0.01 + "px";
    document.getElementById("div4").style.top = hei * 0.02 + "px";

    document.getElementById("Back").style.width = wid * 0.1 + "px";
    document.getElementById("Back").style.height = wid * 0.05 + "px";
    document.getElementById("Back").style.fontSize = wid * 0.04 + "px";

    document.getElementById("Back2").style.width = wid * 0.1 + "px";
    document.getElementById("Back2").style.height = wid * 0.05 + "px";
    document.getElementById("Back2").style.fontSize = wid * 0.04 + "px";

    document.getElementById("div3").style.left = (wid * 0.1 / 2) + "px";
    document.getElementById("div3").style.top = (hei * 0.85) + "px";

    //play again button
    document.getElementById("replay").style.width = wid * 0.25 + "px";
    document.getElementById("replay").style.height = wid * 0.05 + "px";
    document.getElementById("replay").style.fontSize = wid * 0.04 + "px";

    document.getElementById("Again").style.left = (wid / 2 - wid * 0.12) + "px";
    document.getElementById("Again").style.top = (hei * 0.65) + "px";

    //link to home page
    document.getElementById("tohomepage").style.width = wid * 0.25 + "px";
    document.getElementById("tohomepage").style.height = wid * 0.05 + "px";
    document.getElementById("tohomepage").style.fontSize = wid * 0.035 + "px";

    //position
    document.getElementById("ToHomePage").style.left = (wid / 2 - wid * 0.12) + "px";
    document.getElementById("ToHomePage").style.top = (hei * 0.52) + "px";


    
    // Post Score
   /*  document.getElementById("PostScore").style.width = wid * 0.25 + "px";
    document.getElementById("PostScore").style.height = wid * 0.03 + "px";
    document.getElementById("PostScore").style.fontSize = wid * 0.025 + "px";

    document.getElementById("Post").style.left = (wid / 2 - wid * 0.12) + "px";
    document.getElementById("Post").style.top = (hei * 0.56) + "px";
    */
}



function StartGame2() {


    Reset();
    show("pagethree", "pagezero", "pagetwo", "pageone", "pagefour");

    timer = setInterval(function () { timedEvents(); }, 30);

    //tracer timer...
    timer2 = setInterval(function () { timedEvents2(); }, 80 * timeShift);
    timer3 = setInterval(function () { RobotFireMissile(); }, 20000 * timeShift);
    timer4 = setInterval(function () { RobotFireLaser(); }, 4000 * timeShift);
    audio2.pause();
    audio.play();
    text();
}

function StartGame() {
    show('pagezero', 'pagetwo', 'pagethree', 'pageone', 'pagefour');
    
    audio.setAttribute("autoplay", "autoplay");
    audio.setAttribute("loop", "loop");
    audio.oncanplay = StartGame2();
    //function () {
        
    //    location.href = "#pagethree";
    //    timer = setInterval(function () { timedEvents(); }, 30);
    //    timer2 = setInterval(function () { timedEvents2(); }, 100 * timeShift);
    //    timer3 = setInterval(function () { RobotFireMissile(); }, 20000 * timeShift);
    //    timer4 = setInterval(function () { RobotFireLaser(); }, 4000 * timeShift);
    //    audio2.pause();
    //    audio.play();
        
    //};
}


function timedEvents() {
    Limit();
    Dragx();
    Dragy();
    Draw();
    //removeMissile();
    if (k3 === 0) {
        createRobot();
        k3 = 1;
    }

}

function timedEvents2() {
    Tracer();
    //missileFumes();
}



function Draw() {

    var wid = window.innerWidth;
    var hei = window.innerHeight;

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    canvas.width = wid;
    canvas.height = hei;

    ctx.beginPath();
    ctx.lineTo(250 / 1366 * wid + wid / 4 + EN, hei * 0.97);
    ctx.stroke();
    ctx.closePath();
    //
    

    //scrolling BG
    ctx.drawImage(scroll, -scrollx + 0, scrolly + (-0.5 * hei), (scroll.width / scroll.height) * 2 * hei, 2 * hei);
    ctx.drawImage(scroll, -scrollx + (scroll.width / scroll.height) * 2 * hei, scrolly + (-0.5 * hei), (scroll.width / scroll.height) * 2 * hei, 2 * hei);


    //Scroll speed
    window.speedY = -((playery - 0.5 * hei) * 0.01);
    window.speedX = ((playerx - wid / 8) * 0.01) ;
    if (s === 1) {
        //scrolling
        scrolly += speedY / timeShift;
        scrollx += speedX / timeShift;
    }

    //health bar
    font = hei / 30;
    pc = HP / (wid / 4) * 100;
    ctx.beginPath();
    ctx.font = font + "px Arial";
    ctx.fillStyle = "BLack";
    ctx.fillText("HP", 10 / 1366 * wid, hei * 0.98);
    ctx.fillText(Math.round(pc) + "%", 60 / 1366 * wid + HP, hei * 0.98);

    ctx.strokeStyle = HPC;
    ctx.lineWidth = wid / 80;
    ctx.moveTo(50 / 1366 * wid, hei * 0.97);
    if (HP >= wid / 4) {

    } else {
        HP += 0.5 / 1366 * wid;
    }
    ctx.lineTo(50 / 1366 * wid + HP, hei * 0.97);
    ctx.stroke();
    ctx.closePath();
    //

    if (HP <= 0) {
        endGame();
    }

    //energy bar
    pc2 = EN / (wid / 4) * 100;
    ctx.beginPath();
    ctx.font = font + "px Arial";
    ctx.fillStyle = "Black";
    ctx.fillText("Energy", 150 / 1366 * wid + wid / 4, hei * 0.98);
    ctx.fillText(Math.round(pc2) + "%", 260 / 1366 * wid + wid / 4 + EN, hei * 0.98);


    ctx.strokeStyle = "Green";
    ctx.lineWidth = wid / 80;
    ctx.moveTo(250 / 1366 * wid + wid / 4, hei * 0.97);
    ctx.lineTo(250 / 1366 * wid + wid / 4 + EN, hei * 0.97);
    ctx.stroke();
    if (EN >= wid / 4) {

    } else {
        EN += 0.5 / 1366 * wid;
    }
    if (EN <= 0) {
        EN = 0;
    }
    ctx.closePath();

    //player
    ctx.save();

    //thrust

    g += 0.0001;
    g2 += g;
    playerx += vx/timeShift;
    playery += vy/timeShift + g2/timeShift;


    ctx.translate(playerx, playery);
    
    
    ctx.rotate(radian);

    

    ctx.drawImage(player, -(playerw) / 2, -(playerh)/2, playerw, playerh);

    ctx.restore();
    //player

   

    //drag
    vx += dax / timeShift;
    vy += day / timeShift;

    
    //move tracers
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    if (k === 1) {
        ja = 0;
        for (i = 0; i < j; i++) {

            t[ja] += 1 / timeShift;
            ra[ja] = ra[ja] + 0.5 / timeShift;

            ctx.beginPath();
            cmx[ja] += -(((playerx - wid / 8) / 40)) / timeShift;
            cmy[ja] += -((playery - hei / 2) / 40) / timeShift;

            ctx.arc(posx[ja] + cmx[ja], posy[ja] + cmy[ja], ra[ja], 0, 2 * Math.PI);
            ctx.lineWidth = hei / 200;
            ctx.strokeStyle = "rgb(" + cr[ja] + "," + cg[ja] + "," + cb[ja] + ")";
            ctx.stroke();
            ctx.closePath();
            ja++;
        }

    }
    //


    //move fumes tracers 2
    if (run === 1) {


        for (i2 = 0; i2 < fN; i2++) {

            for (i = 0; i < fuN[i2]; i++) {
                
                for (i3 = 0; i3 < fN; i3++) {
                    //fs[i][i3] = Math.random() * wid / 200;
                    //fmx[i][i3] = 0;
                    //fmy[i][i3] = 0;
                    //fc[i][i3] = fcolor[i3];
                    //fpx[i][i3] = mx[mexN[i3]] + mmx[mexN[i3]] + fx[mexN[i3]];
                    //fpy[i][i3] = my[mexN[i3]] + mmy[mexN[i3]] + fy[mexN[i3]];

                 fs[i][i3] += 0.5 / timeShift;

                 ctx.beginPath();
                 fmx[i][i3] += -(((fpx[i][i3] - wid / 8) / 100)) / timeShift;
                 fmy[i][i3] += -((fpy[i][i3] - hei / 2) / 100) / timeShift;
                 
                 ctx.arc(fpx[i][i3] + fmx[i][i3], fpy[i][i3] + fmy[i][i3], fs[i][i3], 0, 2 * Math.PI);
                 ctx.lineWidth = hei / 200;
                 ctx.strokeStyle = fcolor[fc[i][i3]];
                 ctx.stroke();
                 ctx.closePath();
                }
            }
        }


    }
    //

    //player recieve robot laser
    if (k5 === 1) {

        for (i4 = 0; i4 < jrl; i4++) {

            if ((rlxn1[i4] + rlmx[i4] < playerx + playerw / 2) &&
                (rlxn2[i4] + rlmx[i4] > playerx - playerw / 2) &&
                (rlyn2[i4] + rlmy[i4] < playery + playerh / 2) &&
                (rlyn2[i4] + rlmy[i4] > playery - playerh / 2)) {


                HP -= (0.1 * rN) / 1366 * wid;
                HPC = "Yellow";
                
                

                rlxn1[i4] = null;
                rlxn2[i4] = null;
                rlyn1[i4] = null;
                rlyn2[i4] = null;
                rlmy[i4] = null;
                rlmy[i4] = null;
                rlmx[i4] = null;
                rlmx[i4] = null;  
            }

        }

    }

    //player recieve robot missile
    if (k6 === 1) {
       
        for (i4 = 0; i4 < mN; i4++) {

            if ((mx[i4] + mmx[i4] + missileh / 3 + fx[i4] < playerx + playerw / 2) &&
                (mx[i4] + mmx[i4] + missileh / 3 + fx[i4] > playerx - playerw / 2) &&
                (my[i4] + mmy[i4] + missileh / 3 + fy2[i4] < playery + playerh / 2) &&
                (my[i4] + mmy[i4] + missileh / 3 + fy2[i4] > playery - playerh / 2)) {

                endGame();
                


                mx[i4] = null
                mmx[i4] = null;
                my[i4] = null
                mmy[i4] = null;
            }

        }

    }
    //

    ////move fumes tracers

    //var c = document.getElementById("canvas");
    //var ctx = c.getContext("2d");

    //if (fumes === 1) {
        
    //    for (l = 0; l < jk; l++) {
            
            

    //        fs[l] = new Array();
    //        fmx[l] = new Array();
    //        fmy[l] = new Array();
    //        fc[l] = new Array();

    //        for (l2 = 1; l2 < fN; l2++) {
                

    //            fs[l][l2] += 0.5 / timeShift;
                
    //            ctx.beginPath();
    //            fmx[l][l2] += -(((fpx[mexN[i6]] - wid / 8) / 100)) / timeShift;
    //            fmy[l][l2] += -((fpy[mexN[i6]] - hei / 2) / 100) / timeShift;
    //            alert(fpy[l][l2]);
    //            ctx.arc(fpx[l][l2] + fmx[l][l2], fpy[l][l2] + fmy[l][l2], fs[l][l2], 0, 2 * Math.PI);
    //            ctx.lineWidth = hei / 200;
    //            ctx.strokeStyle = fcolor[fc[l][l2]];
    //            ctx.stroke();
    //            ctx.closePath();

    //            //text
    //            ctx.font = "30px Arial";
    //            ctx.fillStyle = "Gray";
    //            ctx.fillText(Math.round(fpx[l][l2]) + ',' + Math.round(l) + ',' + Math.round(l2), 10, 50);
    //            //alert(Math.round(l) + ',first,' + Math.round(l2));
    //        }
    //    }
    //}
    ////

    //move laser

    if (k2 === 1) {

        


        for (i2 = 0; i2 < j2; i2++) {

            ctx.beginPath();

            lmx[i2] += (xl1[i2] / 2) / timeShift - (((playerx - wid / 8) / 40)) / timeShift;
            lmy[i2] += (yl1[i2] / 2) / timeShift - ((playery - hei / 2) / 40) / timeShift;


            ctx.strokeStyle = "rgb(" + lr[i2] + "," + lg[i2] + "," + lb[i2] + ")";

            ctx.lineWidth = wid / 200;
            ctx.moveTo(lxn1[i2] + lmx[i2], lyn1[i2] + lmy[i2]);
            ctx.lineTo(lxn2[i2] + lmx[i2], lyn2[i2] + lmy[i2]);
            ctx.stroke();
            ctx.closePath();
            
            

            //missile recieve player laser
            if (k2 === 1) {

                for (i4 = 0; i4 < j4; i4++) {

                    if ((lxn2[i2] + lmx[i2] < mx[i4] + mmx[i4] + missileh / 3 + fx[i4]) &&
                        (lxn2[i2] + lmx[i2] > mx[i4] + mmx[i4] - missileh / 3 + fx[i4]) &&
                        (lyn2[i2] + lmy[i2] < my[i4] + mmy[i4] + missileh / 3 + fy2[i4]) &&
                        (lyn2[i2] + lmy[i2] > my[i4] + mmy[i4] - missileh / 3 + fy2[i4])) {

                        
                            if (bb[i4] === 1) {
                                
                                mexN[fN] = i4;
                                missileExplode();
                                score += 10 * rN;
                                bb[i4] = 0;
                                fN++;
                                
                            }
                        
                        

                        lxn1[i2] = null;
                        lxn2[i2] = null;
                        lyn1[i2] = null;
                        lyn2[i2] = null;
                        lmx[i2] = null;
                        lmy[i2] = null;
                        
                    }
                    
                }
                
            }
            //

            //robot recieve player laser
            //           if (k4 === 0) {
            //ic = 0;
            //    for (ci = 0; ci < rN; ci++) {
            //        ic++;
                    if ((lxn2[i2] + lmx[i2] < rpx[rN] + rs) &&
                        (lxn2[i2] + lmx[i2] > rpx[rN] - rs) &&
                        (lyn2[i2] + lmy[i2] < rpy[rN] + rs) &&
                        (lyn2[i2] + lmy[i2] > rpy[rN] - rs)) {
                        robotDamage();
                        score += 5 * rN;
                        rexN = i2;
                        lxn1[i2] = null;
                        lxn2[i2] = null;
                        lyn1[i2] = null;
                        lyn2[i2] = null;
                        lmx[i2] = null;
                        lmy[i2] = null;
                    }
                    
                //}
                
            //}
            //

            
        }
    }

    //

    //move robot laser

    if (k6 === 1) {

        for (i2 = 0; i2 < jrl; i2++) {

            ctx.beginPath();

            rlmx[i2] += (rxl1[i2] / 2) / timeShift - (((playerx - wid / 8) / 40)) / timeShift;
            rlmy[i2] += (ryl1[i2] / 2) / timeShift - ((playery - hei / 2) / 40) / timeShift;


            ctx.strokeStyle = Rcolor[rN];

            ctx.lineWidth = wid / 200;
            ctx.moveTo(rlxn1[i2] + rlmx[i2], rlyn1[i2] + rlmy[i2]);
            ctx.lineTo(rlxn2[i2] + rlmx[i2], rlyn2[i2] + rlmy[i2]);
            ctx.stroke();
            ctx.closePath();


        }
    }

    //

    //missile Drawing
    for (i3 = 0; i3 < j4; i3++) {
            if (k5 === 1) {



                ctx.save();

                for (hai = 0; hai < fN; hai++) {
                    if (fall === 1 && i3 === mexN[hai]) {
                        fy[i3] += 0.05;
                        fy2[i3] += fy[i3] / timeShift;
                        fx[i3] += -((playerx - wid / 8) * 0.01) / timeShift;

                    }
                }

                mdx = playerx - (mx[i3] + mmx[i3] + fx[i3]);
                mdy = playery - (my[i3] + mmy[i3] + fy2[i3]);
                Mradian = Math.atan2(mdy, mdx);


                //missile movement x/y ?
                missileVX[i3] += 0.0001*(Math.cos(Mradian)) * wid;
                missileVY[i3] += 0.0001*(Math.sin(Mradian)) * wid;

                missileVX[i3] = missileVX[i3]*0.99
                missileVY[i3] = missileVY[i3]*0.99

                mmx[i3] += missileVX[i3]/timeShift;
                mmy[i3] += missileVY[i3]/timeShift;


                ctx.translate(mx[i3] + mmx[i3] + fx[i3], my[i3] + mmy[i3] + fy2[i3]);

                ctx.rotate(Mradian + 90 * (Math.PI / 180));
                ctx.drawImage(missile[i3], -missilew / 2, -missileh / 3, missilew, missileh);

                ctx.restore();



            }
        
    }
    //


    //robot
    rb = 0;
    for (br = 0; br < rN; br++) {
        rb++;
        if (k4 === 1) {
            

            rdx = rpx[rN] - playerx;
            rdy = rpy[rN] - playery;
            
            //robot canon...
            rcx = -(Math.cos(radian2)) * rs * 1.5;
            rcy = -(Math.sin(radian2)) * rs * 1.5;


            radian2 = Math.atan2(rdy, rdx);
            //below controls acceleration of robot...
            rmx -= (Math.cos(radian2)) * wid * 0.00004;
            rmy -= (Math.sin(radian2)) * wid * 0.00004;
            rmx = rmx*0.99;
            rmy = rmy*0.99;
            //robo fall
            if (rf[rb] === 1) {

                
                rv[rb] += 1000*wid;
                rpy[rb] += rv[rb] / timeShift;

                rpx[rb] += -((playerx - wid / 8) / 40) / timeShift + scrollx;

            } else {
                rpx[rb] += rmx * 1 / timeShift;
                rpy[rb] += rmy * 1 / timeShift;
            }

            /* if (rpy[rb] > hei + rs && go[rb] === 0) {
                createRobot();
                go[rb] = 1;
            } */


            //canon
            ctx.beginPath();

            ctx.strokeStyle = "Black";
            ctx.lineWidth = wid / 80;
            ctx.moveTo(rpx[rb], rpy[rb]);
            ctx.lineTo(rcx + rpx[rb], rcy + rpy[rb]);
            ctx.stroke();
            //

            ctx.closePath();

            ctx.beginPath();

            //drawing robot...
            ctx.arc(rpx[rb], rpy[rb], rs, 0, 2 * Math.PI);
            ctx.fillStyle = Rcolor[rN];
            ctx.fill();
            ctx.strokeStyle = "Black";
            ctx.lineWidth = wid / 400;

            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "30px Arial";
            ctx.fillStyle = "Black";
            ctx.fillText("Score: " + Math.round(score), 1200 / 1366 * wid, 50 / 1366 * wid);
            ctx.closePath();

            

        }
    }
            //explosion movements
            if (explo1.lenth != 0){
                for (i = 1; i < explo1.length; i++){
                    if (explo1[i] != undefined){
                        explo1[i].movement();
                        if (explo1[i].sizePara > 2*wid){
                            delete explo1[i];
                        } 
                    }

                }
            }
            if (missileExplo1.lenth != 0){
                for (i = 1; i < missileExplo1.length; i++){
                    if (explo1[i] != undefined){
                        missileExplo1[i].movement();
                        if (missileExplo1[i].sizePara > 2*wid){
                            delete missileExplo1[i];
                        }
                    }
                }
            }
            /* if (explo2.lenth != 0){
                for (i = 0; i < explo2.length; i++){
                    explo2[i+1].movement();
                }
            } */
            

        /*     if (((rpx[rN] - rs/2) < playerx + playerw / 2) &&
            ((rpx[rN]  + rs/2) > playerx - playerw / 2) &&
            ((rpy[rN]  - rs/2) < playery + playerh / 2) &&
            ((rpy[rN]  + rs/2) > playery - playerh / 2)) {
                timeShift = 20;
         } */
             if ((rpx[rN] < playerx + playerw / 2) &&
                (rpx[rN] > playerx - playerw / 2) &&
                (rpy[rN] < playery + playerh / 2) &&
                (rpy[rN] > playery - playerh / 2)) {
                 endGame();
             }

             if (trap === 1) {
                 if (EN > 20 * 1366 / wid) {
                     EN -= 2 / 1366 * wid;
                     timeShift = 6;
                 }
             }
}

function Limit() {
    //Player limits
    if (playery <= 0 + playerh / 2) {
        playery = playerh / 2 + 1;
        ty = 0;
        vy = 0;
        g = 0;
        g2 = 0;
        HP -= 1 / 1366 * wid
        HPC = "Yellow";
    }
    if (playery >= hei - playerh / 2) {
        playery = hei - playerh / 2 - 1;
        ty = 0;
        vy = 0;
        g = 0;
        g2 = 0;
        HP -= 1 / 1366 * wid
        HPC = "Yellow";
    }
    if (playerx <= 0 + playerw / 2) {
        playerx = playerw / 2 + 1;
        tx = 0;
        vx = 0;
        HP -= 1 / 1366 * wid
        HPC = "Yellow";
    }
    if (playerx >= wid - playerw / 2) {
        playerx = wid - playerw / 2 - 1;
        tx = 0;
        vx = 0;
        HP -= 1 / 1366 * wid
        HPC = "Yellow";
    }

    //BG limits
    if (scrolly <= -0.5 * hei) {
        if (playery >= hei - playerh / 2) {
            endGame();

        }
        scrolly = -0.5 * hei;
        s = 0;
    } else {
        s = 1;
    }
    if (scrolly >= 0.5 * hei) {
        scrolly = 0.5 * hei;
        s = 0;
    } else {
        s = 1;
    }
    if (scrollx <= 0) {
        scrollx = 0;
        s = 0;
    } else {
        s = 1;
    }
    if (scrollx >= 2 * scroll.width - wid) {
        scrollx = scroll.width - wid;
        s = 0;
    } else {
        s = 1;
    }

    //radian limit
    vangle += tangle;

    if (vangle >= 8) {
        vangle = 8;
    }

    if (vangle <= -8) {
        vangle = -8;
    }

    angle += vangle / timeShift;

    if (angle <= -360) {
        angle += 360;
    }
    if (angle > 0) {
        angle -= 360;
    }

    radian = angle * (Math.PI / 180);

    //if (radian <= -2 * Math.PI) {
    //    radian += 2 * Math.PI;
        
    //}
    //if (radian > 0) {
    //    radian -= 2 * Math.PI;
    //}
}


function keydown(e) {


    //left arrow
    if (e.keyCode == '37') {
        tangle = -0.5;
    }
    //right arrow
    if (e.keyCode == '39') {
        tangle = 0.5;
        
    }
    //up arrow
    if (e.keyCode == '38') {
        tup = 3;
        accelerate()
    }
    //down arrow
    if (e.keyCode == '40') {
        tup = -3;
        accelerate();
    }

    //J arrow
    if (e.keyCode == '74') {
        tangle = -0.5;
    }
    //L arrow
    if (e.keyCode == '76') {
        tangle = 0.5

    }
    //I arrow
    if (e.keyCode == '73') {
        tup = 3;
        accelerate()
    }
    //K arrow
    if (e.keyCode == '75') {
        tup = -3;
        accelerate();
    }

    //Z Key
    if (e.keyCode == '90') {
        trap = 1;
        
    }
    //X Key
    if (e.keyCode == '88') {

    }
    //P Key
    if (e.keyCode == '80') {
        
    }
    //M key
    if (e.keyCode == '77') {

    }
}

function keyup(e) {


    //left arrow
    if (e.keyCode == '37') {
        tangle = 0;
        
    }
    //right arrow
    if (e.keyCode == '39') {
        tangle = 0;
    }
    //up arrow
    if (e.keyCode == '38') {
        tup = 0;
    }
    //down arrow
    if (e.keyCode == '40') {
        tup = 0;
    }

    //J arrow
    if (e.keyCode == '74') {
        tangle = 0;

    }
    //L arrow
    if (e.keyCode == '76') {
        tangle = 0;
    }
    //I arrow
    if (e.keyCode == '73') {
        tup = 0;
    }
    //K arrow
    if (e.keyCode == '75') {
        tup = 0;
    }

    //Z key
    if (e.keyCode == '90') {
        trap = 0;
        timeShift = 1;
    }
    //X key
    if (e.keyCode == '88') {
        if (EN >= 20 * 1366 / wid) {
        laserFire();
        EN -= 1 * 1366 / wid;
        }
        
    }
    //P key
    if ((e.keyCode == '80') && (tN === 1)) {

        clearInterval(timer);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);
        audio.pause();
        tN = 0;
    }else if (e.keyCode == '80' && tN === 0) {
        timer = setInterval(function () { timedEvents(); }, 50);
        timer2 = setInterval(function () { timedEvents2(); }, 20 * timeShift);
        timer3 = setInterval(function () { RobotFireMissile(); }, 120000 * timeShift);
        timer4 = setInterval(function () { RobotFireLaser(); }, 5000 * timeShift);
        tN = 1;
        audio.play();
    }
    tup = 0;
    //M key
    if ((e.keyCode == '77') && (mu === 1)) {
        audio.pause();
        tN = 0;
    } else if (e.keyCode == '77' && mu === 0) {
        tN = 1;
        audio.play();
    }
    tup = 0;
}


function accelerate() {


    tx = Math.cos(radian-(Math.PI/180)*90) * (tup);
    ty = Math.sin(radian-(Math.PI/180)*90) * (tup);
    vx += tx;
    vy += ty
}

function Dragx() {
    v = (playerx - wid / 8) / 500;
    a = Math.abs(Math.sin(radian)) * 2;
    Fdx = 0.5 * 1.225 * v * v * 2 * a;
    //ma=Fnet
    dax = -Fdx / 100;
}

function Dragy() {

    if (angle <= 0 && angle > -90) {
        Fdy = Fdx;
    }
    if (angle <= -90 && angle > -180) {
        Fdy = -Fdx;
    }
    if (angle <= -180 && angle > -270) {
        Fdy = Fdx;
    }
    if (angle <= -270 && angle > -360) {
        Fdy = -Fdx;
    }
    //ma=Fnet
    day = -3 * Fdy / 100;
}

function Tracer() {
    k = 1;
    circleN++;
    j++;
    t[circleN] = 0;
    cmx[circleN] = 0;
    cmy[circleN] = 0;

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    xtr[circleN] = Math.cos(radian + 140 / (180 / Math.PI)) * h;
    ytr[circleN] = Math.sin(radian + 140 / (180 / Math.PI)) * h;

    posx[circleN] = xtr[circleN] + playerx;
    posy[circleN] = ytr[circleN] + playery;


    ra[circleN] = Math.random() * wid / 50;

    cr[circleN] = Math.round(Math.random() * 255);
    cg[circleN] = Math.round(Math.random() * 255);
    cb[circleN] = Math.round(Math.random() * 255);

    if (circleN > 50) {
        circleN = 0;
    }

    if (j >= 50) {
        j = 50;
    }

    //reset Rcolor
    Rcolor[1] = "red";
    Rcolor[2] = "blue";
    Rcolor[3] = "pink";
    Rcolor[4] = "green";
    Rcolor[5] = "brown";
    Rcolor[6] = "black";
    Rcolor[7] = "purple";
    Rcolor[8] = "lightblue";
    Rcolor[9] = "orange";
    Rcolor[10] = "gray";

    ////Missile fumes
    //if (fumes === 1) {

        
        
    //    if (jk >= 50) {
    //        jk = 50;
    //    }



    //    fcolor[1] = "red";
    //    fcolor[2] = "orange";
    //    fcolor[3] = "gray";
    //    fcolor[4] = "yellow";
    //    fcolor[5] = "black";


    //    for (i5 = 0; i5 < jk; i5++) {
            
    //        gh = 0;
            
    //        fs[i5] = new Array();
    //        fmx[i5] = new Array();
    //        fmy[i5] = new Array();
    //        fc[i5] = new Array();

    //        fc[i5][gh] = 0;
            
    //        for (i6 = 1; i6 < fN; i6++) {
                
    //            fc[i5][i6]++;
    //            fs[i5][i6] = Math.random() * wid / 200;
                
    //            fmx[i5][i6] = 0;
    //            fmy[i5][i6] = 0;
                
                
    //            fpx[mexN[i6]] = mx[mexN[i6]] + mmx[mexN[i6]] + fx[mexN[i6]];
    //            fpy[mexN[i6]] = my[mexN[i6]] + mmy[mexN[i6]] + fy2[mexN[i6]];

    //            if (fc[i5][i6] >= 5) {
    //                fc[i5][i6] = 1;
    //            }
    //        }
    //    }

    //    //
    //    jk++;
    //}

    HPC = "Red";
}


    function laserFire() {

        k2 = 1;

        

        lmx[laserN] = 0;
        lmy[laserN] = 0;

        lxn1[laserN] = xl1[laserN] + xlp[laserN] + playerx;
        lyn1[laserN] = yl1[laserN] + ylp[laserN] + playery;

        lxn2[laserN] = xl2[laserN] + xlp[laserN] + playerx;
        lyn2[laserN] = yl2[laserN] + ylp[laserN] + playery;

        lr[laserN] = Math.round(Math.random() * 255);
        lg[laserN] = Math.round(Math.random() * 255);
        lb[laserN] = Math.round(Math.random() * 255);

        xlp[laserN] = Math.cos(radian + 45 / (180 / Math.PI)) * h;
        ylp[laserN] = Math.sin(radian + 45 / (180 / Math.PI)) * h;

        xl1[laserN] = Math.cos(radian) * (wid / 20);
        yl1[laserN] = Math.sin(radian) * (wid / 20);

        xl2[laserN] = 0;
        yl2[laserN] = 0;

        lxn1[laserN] = xl1[laserN] + xlp[laserN] + playerx;
        lyn1[laserN] = yl1[laserN] + ylp[laserN] + playery;

        lxn2[laserN] = xl2[laserN] + xlp[laserN] + playerx;
        lyn2[laserN] = yl2[laserN] + ylp[laserN] + playery;

        if (laserN > 100) {
            laserN = 0;
        }
        if (j2 >= 100) {
            j2 = 100;
        }

        j2++;
        laserN++;
    }

    function createRobot() {

        rN++;
        //alert("rN has increased by one");
        rf[rN] = 0;

        rmx = -(Math.cos(radian2)) * (0.5);
        rmy = -(Math.sin(radian2)) * (0.5);

        Rcolor[1] = "red";
        Rcolor[2] = "blue";
        Rcolor[3] = "pink";
        Rcolor[4] = "green";
        Rcolor[5] = "brown";
        Rcolor[6] = "black";
        Rcolor[7] = "purple";
        Rcolor[8] = "lightblue";
        Rcolor[9] = "orange";
        Rcolor[10] = "gray";


        rr[rN] = Math.round(Math.random() * 255);
        rg[rN] = Math.round(Math.random() * 255);
        rb[rN] = Math.round(Math.random() * 255);

        window.rs = wid / 40;

        rpx[rN] = -3 * rs;
        rpy[rN] = hei / 2;

        rv[rN] = 0;
        go[rN] = 0;
        k4 = 1;
    }


    function robotFireMissile2(){
        window.missileInsta[missileN] = new missile()
    }

    function RobotFireMissile() {


        missile[mN] = document.createElement("img");
        missile[mN].src = "missile.png";

        missilew = wid / 40;
        missileh = 4 * missilew;
        //mx/my is missile location in relation to robot...
        mx[mN] = rcx + rpx[rN];
        my[mN] = rcy + rpy[rN];

        //mmx/y is missile extra location added to mx/my...
        mmx[mN] = 0;
        mmy[mN] = 0;

        //outside forces...
        fx[mN] = 0;
        fy[mN] = 0;
        fy2[mN] = 0;

        //missile velocity...
        missileVX[mN] = 0;
        missileVY[mN] = 0;

        
        for (i = 0; i < fN; i++) {
            if (mexN[i] === mN){
                mexN[i] = null;
            }
        }
        
        
        fy[mN] = 0;
        fx[mN] = 0;
        fy2[mN] = 0;
        bb[mN] = 1;
        mN++;
        j4++;
        if (mN >= 5) {
            mN = 0;
        }
        if (j4 >=  5) {
            j4 = 5;
        }
        
        k5 = 1;
    }


    function RobotFireLaser() {
        k6 = 1;


        rdx = rpx[rN] - playerx;
        rdy = rpy[rN] - playery;

        radian2 = Math.atan2(rdy, rdx);

        //laser move
        rlmx[RlaserN] = 0;
        rlmy[RlaserN] = 0;

        //laser color
        rlr[RlaserN] = Math.round(Math.random() * 255);
        rlg[RlaserN] = Math.round(Math.random() * 255);
        rlb[RlaserN] = Math.round(Math.random() * 255);

        //canon position
        rxlp[RlaserN] = Math.cos(radian2 + Math.PI) * 0;
        rylp[RlaserN] = Math.sin(radian2 + Math.PI) * 0;

        //laser position
        rxl1[RlaserN] = Math.cos(radian2 + Math.PI) * (wid / 20);
        ryl1[RlaserN] = Math.sin(radian2 + Math.PI) * (wid / 20);
        rxl2[RlaserN] = 0;
        ryl2[RlaserN] = 0;

        //net positions
        rlxn1[RlaserN] = rxl1[RlaserN] + rxlp[RlaserN] + rpx[rN];
        rlyn1[RlaserN] = ryl1[RlaserN] + rylp[RlaserN] + rpy[rN];
        rlxn2[RlaserN] = rxl2[RlaserN] + rxlp[RlaserN] + rpx[rN];
        rlyn2[RlaserN] = ryl2[RlaserN] + rylp[RlaserN] + rpy[rN];

        if (RlaserN > 100) {
            RlaserN = 0;
        }
        if (jrl >= 100) {
            jrl = 100;
        }


        jrl++;
        RlaserN++;
    }


    function missileExplode() {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        /* ctx.beginPath();
        ctx.arc(mx[mexN[fN]] + mmx[mexN[fN]] + fx[mexN[fN]], my[mexN[fN]] + mmy[mexN[fN]] + fy2[mexN[fN]], rs * 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = "Yellow";
        ctx.fill()
        ctx.closePath(); */

        window.missileExplo1[fN] = new explosion(mx[mexN[fN]] + mmx[mexN[fN]] + fx[mexN[fN]], my[mexN[fN]] + mmy[mexN[fN]] + fy2[mexN[fN]]);

       /*  mx[mexN[fN]] = null;
        mmx[mexN[fN]] = null;
        fx[mexN[fN]] = null;

        my[mexN[fN]] = null;
        mmy[mexN[fN]] = null;
        fy2[mexN[fN]] = null; */


        delete mx[mexN[fN]];
        delete mmx[mexN[fN]];
        delete fx[mexN[fN]];

        delete my[mexN[fN]];
        delete mmy[mexN[fN]];
        delete fy2[mexN[fN]];


        //fall = 1;
        
        //fuN[fN] = 0;
    //    fumes = 1;
        
    //    //fc[fN] = 0;

    //    //fmx[fN] = 0;
    //    //fmy[fN] = 0;
    //    //fl[fN] = 0;

    }

    function robotDamage() {
        rH++;
        Rcolor[rN] = "Yellow";
        if (rH >= rN * 2) {

            rf[rN] = 1;
            
            window.explo1[rN] = new explosion(rpx[rN], rpy[rN]);
            //window.explo2[rN] = new explosion(rpx[rN], rpy[rN], "Orange", -1)
            createRobot();

            rH = 0;
            if (rN === 10) {
                win = 1;
                endGame(3);
            }
        }
    }

    function missileFumes() {

                fcolor[1] = "red";
                fcolor[2] = "orange";
                fcolor[3] = "gray";
                fcolor[4] = "yellow";
                fcolor[5] = "black";

        if (fall === 1) {
            
                
            for (i2 = 0; i2 < fN; i2++) {
                fuN[i2]++;
                for (i = 0; i < fuN[i2]; i++) {
                    fs[i] = new Array();
                    fmx[i] = new Array();
                    fmy[i] = new Array();
                    fc[i] = new Array();
                    fpy[i] = new Array();
                    fpx[i] = new Array();
                    for (i3 = 0; i3 < fN; i3++) {
                        fs[i][i3] = Math.random() * wid / 200;
                        fmx[i][i3] = 0;
                        fmy[i][i3] = 0;
                        fc[i][i3]++;
                        fpx[i][i3] = mx[mexN[i3]] + mmx[mexN[i3]] + fx[mexN[i3]];
                        fpy[i][i3] = my[mexN[i3]] + mmy[mexN[i3]] + fy2[mexN[i3]];
                        if (fc[i][i3] >= 5) {
                            fc[i][i3] = 1;
                        }
                    }
                }
            }


        }

        run = 1;
    }

    //function removeMissile() {
    //    for (i3 = 0; i3 < j4; i3++) {


       

    //        for (hai = 0; hai < fN; hai++) {
    //            if (my[i3] + mmy[i3] + fy2[i3] > hei/2 && i3 === mexN[hai]) {
    //                fy[i3] = null;
    //                fy2[i3] = null;
    //                fx[i3] = null;
    //                mx[i3] = null;
    //                mmx[i3] = null;
    //                my[i3] = null;
    //                mmy[i3] = null;
    //                missile[i3] = null;
    //            }
    //        }

    //    }
//}

    function endGame() {

        audio.pause();
        clearInterval(timer);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);

        show('pagefour', 'pagetwo', 'pagethree', 'pageone', 'pagezero');
        

        var c2 = document.getElementById("canvas3");
        var ctx2 = c2.getContext("2d");
        canvas3.width = wid;
        canvas3.height = hei;

        audio2.play();

        ctx2.beginPath();
        ctx2.fillStyle = "Black";
        ctx2.globalAlpha = 0.5;
        ctx2.fillRect(wid * 0.3, hei * 0.1, wid * 0.4, hei * 0.7);
        ctx2.closePath();

        ctx2.beginPath();
        font2 = wid / 25;
        ctx2.globalAlpha = 1;
        ctx2.font = font2 + "px Arial";
        ctx2.fillStyle = "Red";
        ctx2.fillText(" Game Over,", wid * 0.375, 130 / 1366 * wid);
        if (win === 1) {
            ctx2.fillText("You've Won!", wid * 0.375, 180 / 1366 * wid);
        } else { ctx2.fillText("You've Crashed!", wid/2 - wid * 0.154, 180 / 1366 * wid); }

        ctx2.font = font2 / 1.5 + "px Arial";
        ctx2.fillStyle = "White";
        ctx2.fillText("Score: " + Math.round(score), wid * 0.44, 298 / 1366 * wid);
        ctx2.closePath();
    }

    function Back() {
        audio.pause();
        clearInterval(timer);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);

        show('pagetwo', 'pagezero', 'pagethree', 'pageone', 'pagefour');

    }


function explosion(x, y, col){
        //explosion
      

            ctx.beginPath();
            ctx.save();
    
            ctx.translate(x, y);
    
                radian3 += 1 * (Math.PI / 180);
    
            ctx.rotate(radian3);
    
    
    
            ctx.rect(-0.5 * rs2, - 0.5 * rs2, rs2, rs2);
            ctx.strokeStyle = col;
            ctx.lineWidth = wid / 200;
            ctx.stroke();
            rs2 += 10 * wid / 1366;
            
            ctx.restore();
            ctx.closePath();
          
    
        //
}