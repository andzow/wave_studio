<template>
  <section class="main">
    <!-- <div class="landscape"></div> -->
    <div class="filter"></div>
    <div class="main__content">
      <h1 class="main__title">
        Разработка <br /><span class="main__span">Люб<b>о</b>й слож<b>но</b>сти</span>
      </h1>
      <div class="main__line"></div>
      <div class="main__line main__line_green"></div>
      <p class="main__description">
        Ваши идеи – наш код: создаем уникальные сайты и веб-приложения, которые
        не просто выполняют свои функции, но и восхищают своих пользователей.
      </p>
    </div>
    <canvas class="main__canvas" id="canvas"></canvas>
    <svg
      class="editorial"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="50" y="0" fill="#00DBA7" fill-opacity="0.4" />
        <use xlink:href="#gentle-wave" x="50" y="3" fill="#00DBA7" fill-opacity="0.7" />
        <use xlink:href="#gentle-wave" x="50" y="6" fill="#00DBA7" fill-opacity="1.0" />
      </g>
    </svg>
  </section>
</template>

<script>
export default {
  mounted() {
    this.initCanvasAnimation();
  },
  methods: {
    initCanvasAnimation() {
      // Ваш код анимации здесь

      function Star(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 2) + 1;
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255,255,255," + alpha + ")";
      }

      Star.prototype.draw = function () {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.r * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
      };

      Star.prototype.move = function () {
        this.y -= 0.15 + params.backgroundSpeed / 100;
        if (this.y <= -10) this.y = HEIGHT + 10;
        this.draw();
      };

      function Dot(id, x, y, r) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 5) + 1;
        this.maxLinks = 2;
        this.speed = 0.5;
        this.a = 0.5;
        this.aReduction = 0.005;
        this.color = "rgba(255,255,255," + this.a + ")";
        this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";

        this.dir = Math.floor(Math.random() * 140) + 200;
      }

      Dot.prototype.draw = function () {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.r * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
      };

      Dot.prototype.link = function () {
        if (this.id == 0) return;
        var previousDot1 = getPreviousDot(this.id, 1);
        var previousDot2 = getPreviousDot(this.id, 2);
        var previousDot3 = getPreviousDot(this.id, 3);
        if (!previousDot1) return;
        ctx.strokeStyle = this.linkColor;
        ctx.moveTo(previousDot1.x, previousDot1.y);
        ctx.beginPath();
        ctx.lineTo(this.x, this.y);
        if (previousDot2 != false) ctx.lineTo(previousDot2.x, previousDot2.y);
        if (previousDot3 != false) ctx.lineTo(previousDot3.x, previousDot3.y);
        ctx.stroke();
        ctx.closePath();
      };

      function getPreviousDot(id, stepback) {
        if (id == 0 || id - stepback < 0) return false;
        if (typeof dots[id - stepback] != "undefined")
          return dots[id - stepback];
        else return false; //getPreviousDot(id - stepback);
      }

      Dot.prototype.move = function () {
        this.a -= this.aReduction;
        if (this.a <= 0) {
          this.die();
          return;
        }
        this.color = "rgba(255,255,255," + this.a + ")";
        this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";
        this.x =
          this.x +
          Math.cos(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);
        this.y =
          this.y +
          Math.sin(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);

        this.draw();
        this.link();
      };

      Dot.prototype.die = function () {
        dots[this.id] = null;
        delete dots[this.id];
      };

      var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        WIDTH,
        HEIGHT,
        mouseMoving = false,
        mouseMoveChecker,
        mouseX,
        mouseY,
        stars = [],
        initStarsPopulation = 80,
        dots = [],
        dotsMinDist = 2,
        params = {
          maxDistFromCursor: 50,
          dotsSpeed: 0,
          backgroundSpeed: 0,
        };

      setCanvasSize();
      init();

      function setCanvasSize() {
        WIDTH = document.documentElement.clientWidth;
        HEIGHT = document.documentElement.clientHeight;

        canvas.setAttribute("width", WIDTH);
        canvas.setAttribute("height", HEIGHT);
      }

      function init() {
        ctx.strokeStyle = "white";
        ctx.shadowColor = "white";
        for (var i = 0; i < initStarsPopulation; i++) {
          stars[i] = new Star(
            i,
            Math.floor(Math.random() * WIDTH),
            Math.floor(Math.random() * HEIGHT)
          );
          //stars[i].draw();
        }
        ctx.shadowBlur = 0;
        animate();
      }

      function animate() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i in stars) {
          stars[i].move();
        }
        for (var i in dots) {
          dots[i].move();
        }
        drawIfMouseMoving();
        requestAnimationFrame(animate);
      }

      window.onmousemove = function (e) {
        mouseMoving = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
        clearInterval(mouseMoveChecker);
        mouseMoveChecker = setTimeout(function () {
          mouseMoving = false;
        }, 100);
      };

      function drawIfMouseMoving() {
        if (!mouseMoving) return;

        if (dots.length == 0) {
          dots[0] = new Dot(0, mouseX, mouseY);
          dots[0].draw();
          return;
        }

        var previousDot = getPreviousDot(dots.length, 1);
        var prevX = previousDot.x;
        var prevY = previousDot.y;

        var diffX = Math.abs(prevX - mouseX);
        var diffY = Math.abs(prevY - mouseY);

        if (diffX < dotsMinDist || diffY < dotsMinDist) return;

        var xVariation = Math.random() > 0.5 ? -1 : 1;
        xVariation =
          xVariation * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
        var yVariation = Math.random() > 0.5 ? -1 : 1;
        yVariation =
          yVariation * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
        dots[dots.length] = new Dot(
          dots.length,
          mouseX + xVariation,
          mouseY + yVariation
        );
        dots[dots.length - 1].draw();
        dots[dots.length - 1].link();
      }

      function degToRad(deg) {
        return deg * (Math.PI / 180);
      }
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--green);
  animation: colorChange 30s ease-in-out infinite;
  animation-fill-mode: both;
  mix-blend-mode: overlay;
}
.main__canvas {
  height: 100%;
}
@keyframes colorChange {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}
.main__content {
  background: transparent;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main__title {
  color: var(--white) !important;
  font-size: 76px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
}
.main__span {
  color: var(--white);
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--green), 0 0 0.5em var(--green), 0 0 0.1em var(--green), 0 10px 3px #000;
}
.main__span b{
  animation: blink linear infinite 2s;
}
.main__span b:nth-of-type(2){
  animation: blink linear infinite 3s;
}
.main__line {
  width: 589px;
  height: 6px;
  background: var(--white);
  border-radius: 6px;
  margin: 10px auto 0 auto;
}
.main__line_green {
  width: 333px;
  height: 4px;
  background: var(--green);
}
.main__description {
  color: var(--white);
  text-align: center;
  font-weight: 200;
  margin: 20px auto 0 auto;
  max-width: 630px;
}

.parallax > use {
  animation: move-forever 12s linear infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
}

.parallax > use:nth-child(2) {
  animation-delay: -2s;
  animation-duration: 5s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 3s;
}

@keyframes move-forever {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

.editorial {
  display: block;
  width: 100%;
  height: 13em;
  max-height: 100vh;
  margin: 0;
  position: absolute;
  left: 0;
  bottom: 0;
}
/* @media (max-width: 50em) {
  .content h1 {
    font-size: 12vmax;
  }
  .editorial {
    height: 17vw;
  }
} */
</style>