import { createQuizz } from "./quizz.js";
import { createPosts } from "./posts.js";

export function createBodies() {
  const bodies = document.createElement("div");

  bodies.className = "bodies";
  bodies.innerHTML = `
       <div class="bodiesBlock">
          <div class="blockOne">
              <span class="textStyle">
                  New Online Pharmacy Program Allows California Residents to Purchase Generic Viagra® and Generic Cialis® at $7 for 9 Gummys. (Limit of 18 Gummys Per Person, Per Month.)
              </span>
          </div>
          <div class="blockTwo">
            <div class="col">
                <div class="titleCol">
                    <img src="../assets/cvs.png" alt="textImg" class="textImgStyle"  />
                </div>
                <div>
                    <img src="../assets/tablet.png" alt="textImg"  class="imgOneStyle" />
                </div>
            </div>
            <div class="col">
                <div class="titleCol">
                    <span class="textTwoStyle">NEW PROGRAM</span>
                </div>
                <div>
                    <img src="../assets/gumy.png" alt="textImg"  class="imgOneStyle" />
                </div>
            </div>
          </div>
          <div class="blockTree">
            <span class="textTwoStyle">In this program, you'll never pay extra for higher doses of ED medication. It's simple: no hidden fees for increased dosages, and no prescription is required.</span>
          </div>
          <div class="blockQuizz"></div>
          <div class="blockFour">
            <div class="subBlockOne">
                <div class="textTreeStyle">
                    <span>Revolutionary New Program:</span>
                    <span>Natural Alternatives to Viagra at Unbeatable Prices</span>
                </div> 
            </div>
            <div class="subBlockTwo">
                <span class="textFourStyle">A Game-Changer in Men's Health</span>
            </div>
            <div class="subBlockTree">
                <span class="textFiveStyle">  (Washington, D.C.) Exciting news for men in [Your Target Region]: A new program has been launched that offers natural alternatives to Viagra at a staggering 96% discount compared to retail prices at major pharmacies like CVS and Walgreens. This groundbreaking initiative is designed to provide safe, effective, and affordable options for men looking to enhance their sexual health without breaking the bank.</span>
            </div>
          </div>
          <div class="redLine" />
        <div class="blockPosts">
          </div>
       </div>
    `;

  const blockQuizz = bodies.querySelector(".blockQuizz");
  blockQuizz.appendChild(createQuizz());

  const blockPosts = bodies.querySelector(".blockPosts");
  blockPosts.appendChild(createPosts());

  return bodies;
}
