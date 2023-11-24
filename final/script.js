const topicButtons = document.querySelectorAll(".btn-dark");
const contentContainer = document.querySelector(".border.rounded.p-3");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Изменяем содержимое второго блока в зависимости от выбранной категории
    const topic = button.textContent.trim();
    switch (topic) {
      case "Football":
        contentContainer.innerHTML = `
              <h5 class="mb-4">Football</h5>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Barcelona-PSG | 6-1 | Highlights</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/h4m68r8kWAc" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">This is a video of the highlights from the Barcelona-PSG 6-1 match.</p>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Injury to a Spanish national football team player.</h6>

                <image src="https://i.ytimg.com/vi/ca_XokkF2Bc/maxresdefault.jpg" class = "img-fluid rounded p-3"></image>
                
                <p id="shortText">
                The football player of the Spanish national team and Barcelona Xavi was diagnosed with a complete rupture of the anterior cruciate ligament of the right knee and a related injury to the lateral meniscus, according to the official website of the blue-garnet <span id="showMore" class="btn btn-link" onclick="showMore()">Show more</span>
                </p>
                <div id="fullText" class="collapse">
                  <p>
                  The football player of the Spanish national team and Barcelona Xavi was diagnosed with a complete rupture of the anterior cruciate ligament of the right knee and a related injury to the lateral meniscus, according to the official website of the blue-garnet.
                  On Sunday, the 19-year-old midfielder was injured in the match of the Euro 2024 qualifying tournament against the Georgian team (3:1). He entered the match in the starting lineup, was injured and was replaced in the 26th minute.
                  </p>
                </div>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Real Madrid - Manchester City | 6 x 5 on aggregate | Highlights</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/U8YOR4_IeTI" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">In a thrilling Champions League semi-final, Real Madrid stunned Manchester City with a 6-5 aggregate victory. After a 4-3 first-leg win at the Etihad, Real Madrid produced a stunning comeback at the Bernabeu, winning 3-1 to advance to the final. Rodrygo's two goals in quick succession sealed the victory for Real Madrid, who demonstrated their never-say-die spirit and ability to produce moments of magic when it matters most.</p>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Real Madrid 1 x 3 Barcelona | 2022/23 Supercopa de España | Highlights</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/bpYYab9vRd4" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">In a dominant display, Barcelona defeated Real Madrid 3-1 to lift the 2023 Supercopa de España. Gavi, Pedri, and Robert Lewandowski were the heroes for Barca, each scoring a goal to secure the victory. Real Madrid managed a late consolation goal through Karim Benzema, but it was not enough to overturn the deficit. Barcelona's victory marked their first trophy under the leadership of Xavi Hernández, and it signaled a resurgence for the club after a period of decline.</p>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Chelsea 4-4 Man City | Highlights - EXTENDED | Premier League 2023/24</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/FkPTihsfAfk" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">In a thrilling Premier League encounter, Chelsea and Manchester City played out an eight-goal draw at Stamford Bridge. The match was a roller-coaster of emotions, with both teams taking the lead multiple times. Erling Haaland opened the scoring for City with a controversial penalty, but Chelsea responded with goals from Thiago Silva and Raheem Sterling. Manuel Akanji equalized for City just before half-time, and Haaland scored his second goal early in the second half. Chelsea clawed back again with a goal from Mason Mount, and Cole Palmer scored a dramatic stoppage-time equalizer for City to secure a share of the points. The match was a testament to the attacking quality of both teams, and it was a fitting end to an entertaining Premier League weekend.</p>
              </div>
          `;
        break;
      case "Programming":
        contentContainer.innerHTML = `
              <h5 class="mb-4">Programming</h5>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">OOP in ANY language. Explaining.</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/pTB0EiLXUC8" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">have you ever thought about learning programming? do you think it's difficult? maybe, but the main thing is to start. Start with this video where they explain the work of OOP in simple words.</p>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">C++ Programming Course - Beginner to Advanced</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/8jLOx1hD3_o" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">After watching this video, you will learn the basics of C++ programming, including syntax, data types, and operators. You will also learn how to use variables, arrays, and pointers in C++. Additionally, you will learn how to write control flow statements, such as if statements, for loops, and while loops.</p>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Color in Web design: how to choose the right palette?</h6>

                <image src="https://avatars.mds.yandex.net/i?id=a7046f03fda73e9a2c46766f7d2736688bd76fc8-5325461-images-thumbs&n=13" class = "img-fluid rounded p-3"></image>
                
                <p id="shortText">
                Choosing the right color palette for a website is an important aspect in the design development process. This not only affects the appearance of your site, but also its perception by users. <span id="showMore" class="btn btn-link" onclick="showMore()">Show more</span>
                </p>
                <div id="fullText" class="collapse">
                  <p>
                  Choosing the right color palette for a website is an important aspect in the design development process. This not only affects the appearance of your site, but also its perception by users.<br><br>

                  <mark>Define the purpose and audience of your project</mark><br>
                  Before you start choosing colors, you need to determine the purpose of your project and the main audience. For example, if you are creating a corporate website, then you should probably choose more calm and professional colors. If you are working on a website for a young audience, you can use bright and saturated shades.<br><br>
                  
                  <mark>Learn color theory</mark><br>
                  To use colors correctly on your website, you need to understand the basic principles of color theory. Knowledge of concepts such as basic, complementary and contrasting colors will help you create a harmonious and attractive palette.<br><br>
                  
                  <mark>Use color schemes</mark><br>
                  There are several color schemes that can be useful when choosing a palette for your site. Some of them include a monochromatic scheme (using one primary color with different shades), an analog scheme (using three colors located next to each other on the color wheel), and a triadic scheme (using two additional colors and a third neutral).<br><br>
                  
                  <mark>Consider the context of your project</mark><br>
                  It is important to take into account the context of your site when choosing a color palette. If your project is related to nature or travel, then using natural shades may be a suitable solution. If your project is dedicated to technology or science, then you can use cooler and metallic colors.<br><br>
                  
                  <mark>Test your palette</mark><br>
                  After you have chosen a color palette, be sure to test it on real users. This will help you determine how well your palette is perceived by the audience and how it affects their perception of your site.<br><br>
                  
                  <mark>Conclusion.</mark> Choosing a color palette is an important step in the web design process. Properly selected colors can improve the perception of your site by users, as well as make it more attractive and memorable. Follow our tips and you will be able to create a unique and effective palette for your project.
                  </p>
                </div>
              </div>

          `;
        break;
      case "Games":
        contentContainer.innerHTML = `
              <h5 class="mb-4">Games</h5>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Solo will play for 9Pandas at ESL One Kuala Lumpur 2023</h6>

                <image src="https://virtus-img.cdnvideo.ru/images/material-card/plain/07/07e24979-653c-44a4-9013-77969bb4d9d2.jpg" class = "img-fluid rounded p-3"></image>
                
                <p id="shortText">
                  9Pandas captain Alexey Solo Berezin to present the team at ESL One Kuala Lumpur 2023 on Dota 2. Representatives of the organization reported this on social networks... <span id="showMore" class="btn btn-link" onclick="showMore()">Show more</span>
                </p>
                <div id="fullText" class="collapse">
                  <p>
                  9Pandas captain Alexey Solo Berezin to present the team at ESL One Kuala Lumpur 2023 on Dota 2. Representatives of the organization reported this on social networks.

                  In the qualifiers, 9Pandas performed in almost the same line-up that the club announced at ESL One Kuala Lumpur 2023. However, then instead of Solo, who was on vacation, Vladimir RodjER Nikoghosyan played. At the same time, Nikoghosyan occupied the fourth position — after Berezin's return, Andrei Afoninje Afonin will shift to the "four".
                  
                  ESL One Kuala Lumpur 2023 will be held from December 11 to 17 in Malaysia. 12 teams will play for a million dollars.
                  </p>
                </div>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">Dota 2 | International 10 | True sight</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/aRCn78oek38" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">this is a true sight from the main Dota 2 championship, where for a long few years, for the first time, the CIS team won the 10th anniversary of The International. Let's remember this incredible event!</p>
              </div>
              <br>
              <div class="border rounded p-3 bg-dark text-light text-center">
                <h6 class="mb-3">CS2 | Blast premier 2023 | Vitality vs Complexity</h6>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/3qLN1mc7eyo" class="embed-responsive-item rounded p-3" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="mt-3">It turned out to be a very interesting match, until the end of the game you don't know who will win and get to the semifinals. If you somehow missed this match, here are the highlights from this incredible match.</p>
              </div>
          `;
        break;
      default:
        break;
    }
  });
});

function showMore() {
  document.getElementById("shortText").style.display = "none";
  document.getElementById("fullText").style.display = "block";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var messagesContainer = document.getElementById("messages");

  var messageText = messageInput.value.trim();
  if (messageText === "") return;

  var messageBlock = document.createElement("div");
  messageBlock.className = "message-block";

  var messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.innerText = messageText;

  messageBlock.appendChild(messageElement);
  messagesContainer.appendChild(messageBlock);
  messageInput.value = "";
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Обработка нажатия Enter в поле ввода сообщения
document
  .getElementById("message-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
