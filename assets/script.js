document.getElementById("licenserButton").addEventListener("click", function () {
    alert("Thank you for choosing Taxzyyy's services! Join my discord.");
  });
  
  document.getElementById("about-button").addEventListener("click", function () {
    document.querySelectorAll("body > *:not(header):not(footer)").forEach((element) => {
      element.style.visibility = "hidden";
    });
  
    const aboutHeading = document.createElement("h1");
    aboutHeading.classList.add("about-heading");
  
    const aboutText = document.createTextNode("ABOUT ");
    const meSpan = document.createElement("span");
    meSpan.classList.add("about-heading-span");
    meSpan.innerText = "ME";
  
    aboutHeading.appendChild(aboutText);
    aboutHeading.appendChild(meSpan);
  
    const aboutParagraph = document.createElement("p");
    aboutParagraph.classList.add("about-paragraph");
    aboutParagraph.innerText =
      "I started coding when I was 13 years old, and now, at 15, I primarily focus on Lua coding for FiveM. I love the creative freedom it provides in customizing game servers and creating unique gameplay experiences. Occasionally, I use HTML to create user interfaces for FiveM, enhancing the visual appeal and functionality of my projects. Alongside this, I also dabble in web development, experimenting with different frameworks and learning how to build responsive, user-friendly websites. Coding has become a huge passion for me, and I enjoy the constant challenge of solving problems and bringing my ideas to life through code. As I continue to develop my skills, I hope to explore new programming languages and delve deeper into game development and web technologies.";
  
    document.body.appendChild(aboutHeading);
    document.body.appendChild(aboutParagraph);
  });
  
  document.querySelector("a[href='#home']").addEventListener("click", function () {
    document.querySelectorAll(".about-heading, .about-paragraph").forEach((element) => {
      element.remove();
    });
  
    document.querySelectorAll("body > *:not(header):not(footer)").forEach((element) => {
      element.style.visibility = "visible";
    });
  });  