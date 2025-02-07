export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
   <div class="headerBlock">
    <div class="logo">
        <img src="../assets/logoRed.svg.png" alt="logo" />
    </div>
    <div class="headerNav">
        <div class="logIn">
            <span class="textStyle">SIGN IN</span>
        </div>
         <div class="search">
            <img src="../svg/search.svg"  alt="search" />
        </div>
        <div class="backet">
            <img src="../svg/backet.svg" alt="backet" />
        </div>
    </div>
   </div>
  `;
  return header;
}
