export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-logo">
        <img src="../assets/logoBlack.png" alt="Men's Health Logo" />
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <a href="#">About Men's Health</a>
          <a href="#">Advertise</a>
          <a href="#">Other Hearst Subscriptions</a>
        </div>
        <div class="footer-column">
          <a href="#">Newsletter</a>
          <a href="#">Subscribe</a>
          <a href="#">Media Kit</a>
        </div>
        <div class="footer-column">
          <a href="#">Customer Care</a>
          <a href="#">Give a Gift</a>
        </div>
       <div class="footer-column">
          <a href="#">E-prints, Reprints</a>
          <a href="#">Manage Email Preferences</a>
        </div>
      </div>
      <div class="footer-text">
        <p>A Part of Hearst Digital Media</p>
        <p>We may earn commission from links on this page, but we only recommend products we back.</p>
        <p>©2024 Hearst Magazines, Inc. All Rights Reserved.</p>
      </div>
      <div class="footer-privacy">
        <a href="#">Privacy Notice</a>
        <a href="#">CA Notice at Collection</a>
        <a href="#">Your CA Privacy Rights/Shine the Light</a>
        <a href="#">DAA Industry Opt Out</a>
        <a href="#">Terms of Use</a>
        <a href="#">Site Map</a>
      </div>
      <div class="footer-button">
        <button>YOUR PRIVACY CHOICES: OPT OUT OF SALE/TARGETED ADS</button>
      </div>
    </div>
  `;

  footer.addEventListener("click", (event) => {
    const likeButton = event.target.closest(
      ".footer a, .footer-button button, .footer-text p"
    );
    if (!likeButton) return;

    const blockQuizz = document.querySelector(".blockQuizz");
    if (blockQuizz) {
      blockQuizz.scrollIntoView({ behavior: "smooth" });
    }
  });

  return footer;
}
