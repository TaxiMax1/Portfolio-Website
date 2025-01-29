function toggleNav() {
    const nav = document.getElementById('navbar-container');
    const menuIcon = document.getElementById('menu-icon');
  
    nav.classList.toggle('active');
  
    if (nav.classList.contains('active')) {
      menuIcon.innerHTML = '&times;'; 
    } else {
      menuIcon.innerHTML = '&#9776;'; 
    }
}

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1334245991976669234/XLJVvqVyDjVuWqPC42Oqa_B1gflDoU0IhsWBl2yfS9J9xQrbEiG5ZVtTPSC-spkil983";

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorElement = document.getElementById("errormessage");

  errorElement.textContent = "";

  if (!email || !message) {
    errorElement.textContent = "Udfyld både email & besked!";
    return;
  }

  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const username = `txz slave#${randomNumber}`;
  const avatarUrl = "https://cdn.discordapp.com/attachments/1231714390353510512/1334249375991336980/depositphotos_647391604-stock-photo-confused-thinking-asian-man-ideas.png?ex=679bd810&is=679a8690&hm=c3826996783ccbc404f242c6fd390bbf5a42d51d7af079cb70fa6e918e777ab6&";

  const payload = {
    username: username,
    avatar_url: avatarUrl,
    embeds: [
      {
        title: "",
        color: 0,
        fields: [
          {
            name: "Navn",
            value: name || "Ikke udfyldt",
            inline: true
          },
          {
            name: "Email",
            value: email || "Ikke oplyst",
            inline: true
          },
          {
            name: "Besked",
            value: message || "Ikke oplyst"
          }
        ],
        timestamp: new Date().toISOString()
      }
    ]
  };

  fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        document.getElementById("contactForm").reset();
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    });
});
  

document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".navbar-container h3 a");

  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
