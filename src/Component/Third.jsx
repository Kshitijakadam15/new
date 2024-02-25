import React, { useEffect } from "react";
import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";
import s5 from "../Assets/s5.jpg";
import jars from "../Assets/jars.jpg";
import first from "../Assets/first.jpg";
import s3 from "../Assets/s3.jpg";
import pic1 from "../Assets/WhatsApp Image 2024-02-09 at 11.42.01 PM.jpeg";
import pic2 from "../Assets/IMG-20210303-WA0119 (1).jpg";
import pic3 from "../Assets/IMG-20220812-WA0001.jpg";
import "./Third.css";
import Navigate from "./Navigate";

const Third = () => {
  useEffect(() => {
    let highestZ = 1;

    class Paper {
      holdingPaper = false;
      mouseTouchX = 0;
      mouseTouchY = 0;
      mouseX = 0;
      mouseY = 0;
      prevMouseX = 0;
      prevMouseY = 0;
      velX = 0;
      velY = 0;
      rotation = Math.random() * 30 - 15;
      currentPaperX = 0;
      currentPaperY = 0;
      rotating = false;

      init(paper) {
        const handleMove = (e) => {
          const eventX = e.touches ? e.touches[0].clientX : e.clientX;
          const eventY = e.touches ? e.touches[0].clientY : e.clientY;

          if (!this.rotating) {
            this.mouseX = eventX;
            this.mouseY = eventY;
            this.velX = this.mouseX - this.prevMouseX;
            this.velY = this.mouseY - this.prevMouseY;
          }
          const dirX = eventX - this.mouseTouchX;
          const dirY = eventY - this.mouseTouchY;
          const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
          const dirNormalizedX = dirX / dirLength;
          const dirNormalizedY = dirY / dirLength;
          const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
          let degrees = (180 * angle) / Math.PI;
          degrees = (360 + Math.round(degrees)) % 360;
          if (this.rotating) {
            this.rotation = degrees;
          }
          if (this.holdingPaper) {
            if (!this.rotating) {
              this.currentPaperX += this.velX;
              this.currentPaperY += this.velY;
            }
            this.prevMouseX = eventX;
            this.prevMouseY = eventY;
            paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
          }
        };

        const handleStart = (e) => {
          const eventX = e.touches ? e.touches[0].clientX : e.clientX;
          const eventY = e.touches ? e.touches[0].clientY : e.clientY;

          if (this.holdingPaper) return;
          this.holdingPaper = true;
          paper.style.zIndex = highestZ;
          highestZ += 1;
          this.mouseTouchX = eventX;
          this.mouseTouchY = eventY;
          this.prevMouseX = eventX;
          this.prevMouseY = eventY;
          if (e.touches && e.touches.length > 1) {
            this.rotating = true;
          }
        };

        const handleEnd = () => {
          this.holdingPaper = false;
          this.rotating = false;
        };

        paper.addEventListener("mousedown", handleStart);
        paper.addEventListener("touchstart", handleStart);
        document.addEventListener("mousemove", handleMove);
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("mouseup", handleEnd);
        document.addEventListener("touchend", handleEnd);
      }
    }

    const papers = Array.from(document.querySelectorAll(".paper"));
    papers.forEach((paper) => {
      const p = new Paper();
      p.init(paper);
    });
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <div className="body">
      <div>
        <Navigate />
      </div>
      <div className="paper image" id="last">
        <p>Be My Forever</p>
        <img src={s1} alt="s1" />
      </div>
      <div className="paper image" id="for">
        <p></p>
        <img src={s2} alt="s2" />
      </div>
      <div className="paper image" id="thir">
        <p></p>
        <img src={pic1} alt="pic1" />
      </div>
      <div className="paper image" id="twelve">
        <p>I love your presence..</p>
        <img src={pic2} alt="pic2" />
      </div>
      <div className="paper image" id="eleven">
        <p></p>
        <img src={jars} alt="jars" />
      </div>
      <div className="paper image" id="ten">
        <p>Falling for you all again </p>
        <img src={s5} alt="s5" />
      </div>
      <div className="paper image" id="nine">
        <p></p>
        <img src={pic3} alt="pic3" />
      </div>
      <div className="paper image" id="eight">
        <p></p>
        <img src={s3} alt="s3" />
      </div>
      <div className="paper image" id="seven">
        <p> and I fallen in</p>
        <p>Love with You 😍 </p>
        <img src={first} alt="first" />
      </div>
      <div className="paper" id="six">
        <p className="p5">I LOVE YOU</p>
        <p className="p6">ASHISH ❤️</p>
      </div>
      <div className="paper" id="five">
        <p className="p4"> Remember, we are in the feeling of love, </p>
        <p className="p4"> so you are fine to kiss me any time.😍</p>
      </div>
      <div className="paper" id="four">
        <p className="p4">You’re that part of me I’ll always need.</p>
      </div>
      <div className="paper" id="third">
        <p className="p3">
          You are the source of my joy, the center of my world and{" "}
        </p>
        <p className="p3">the whole of my heart.💕</p>
      </div>
      <div className="paper" id="second">
        <p className="p2">You make my</p>
        <p className="p2">heart❤️smile</p>
      </div>
      <div className="paper" id="first">
        <p className="p1">Drag the Image to remove !</p>
      </div>
    </div>
  );
};

export default Third;
