import * as bootstrap from 'bootstrap';

const header = document.querySelector("#myHeader");
const footer = document.querySelector("#myFooter");


buildHeader();
buildFooter();





// Check and create dropdown effect

if (document.querySelector(".unlocked")) {
  const unlocked = document.querySelector(".unlocked");
  const locked = document.querySelector(".locked");

  unlocked.addEventListener("click", () => {
    locked.classList.toggle("locked")
    unlocked.classList.toggle("dropdown");
    unlocked.classList.toggle("dropup");


  })

}

function buildFooter() {

  const navFooter = document.createElement("nav");
  const logoA = document.createElement("a");
  logoA.href = "./index.html";
  logoA.classList = "myLogo";
  const logo1 = document.createElement("p");
  const logo2 = document.createElement("p");
  logo1.textContent = "MADE OF";
  logo2.textContent = "HEAVEN";
  logoA.append(logo1, logo2);
  const ulFooter = document.createElement("ul");
  const page2Li = document.createElement("li");
  const page3Li = document.createElement("li");
  const page4Li = document.createElement("li");
  const page2 = document.createElement("a");
  const page3 = document.createElement("a");
  const page4 = document.createElement("a");
  page2.href = "./page2.html";
  page3.href = "./page3.html";
  page4.href = "./page4.html";
  page2.textContent = "Band";
  page3.textContent = "Blog";
  page4.textContent = "Content";
  page2Li.append(page2);
  page3Li.append(page3);
  page4Li.append(page4);
  ulFooter.append(page2Li, page3Li, page4Li);
  const socialMedia = document.createElement("div");
  const google = document.createElement("a");
  const facebook = document.createElement("a");
  const twitter = document.createElement("a");
  google.href = "#";
  facebook.href = "#";
  twitter.href = "#";
  google.innerHTML = `<i class="fab fa-google-plus-g"></i>`;
  facebook.innerHTML = `<i class="fab fa-facebook-f"></i>`;
  twitter.innerHTML = `<i class="fab fa-twitter"></i>`;
  const rights = document.createElement("span");
  rights.id = "rights";
  rights.textContent = "Pictures from pixabay. This website is a mockup created by Ruben Puerta. All rights reserved.";
  socialMedia.append(google, facebook, twitter);
  navFooter.append(logoA, ulFooter, socialMedia, rights);
  footer.append(navFooter);
}








function buildHeader() {
  const navHeader = document.createElement("nav");
  const logoA = document.createElement("a");
  logoA.href = "./index.html";
  logoA.classList = "myLogo";
  const logo1 = document.createElement("p");
  const logo2 = document.createElement("p");
  logo1.textContent = "MADE OF";
  logo2.textContent = "HEAVEN";
  logoA.append(logo1, logo2);
  const ulHeader = document.createElement("ul");
  const page2Li = document.createElement("li");
  const page3Li = document.createElement("li");
  const page4Li = document.createElement("li");

  const page2 = document.createElement("a");
  const page3 = document.createElement("a");
  const page4 = document.createElement("a");
  page2.href = "./page2.html";
  page3.href = "./page3.html";
  page4.href = "./page4.html";
  page2.textContent = "Band";
  page3.textContent = "Blog";
  page4.textContent = "Content";
  page2Li.append(page2);
  page3Li.append(page3);
  page4Li.append(page4);
  ulHeader.append(page2Li, page3Li, page4Li);
  navHeader.append(logoA, ulHeader);
  header.append(navHeader);
}
