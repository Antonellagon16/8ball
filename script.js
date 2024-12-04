let userName = prompt("Hi, Who are you?");

userName ? document.getElementById("greeting").innerText = `Hello, ${userName}` :
  document.getElementById("greeting").innerText = 'Hello';

function shakeMagic8Ball() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";

  let userQuestion = prompt("What would you like to ask the magic 8-ball?");
  console.log(`${userName} has asked: ${userQuestion}`);

  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      imagePath = '/imgs/download (1).jpg';
      break;

    case 1:
      eightBall = "It is decidedly so";
      imagePath = '/imgs/download.jpg'; // Path to the "It is decidedly so" image
      break;

    case 2:
      eightBall = "Reply hazy, try again";
      imagePath = '/imgs/replyhazy.jpg'; // Path to the "Reply hazy, try again" image
      break;

    case 3:
      eightBall = "Cannot predict now";
      imagePath = "/images/cannotpredict.jpg"; // Path to the "Cannot predict now" image
      break;

    case 4:
      eightBall = "Do not count on it";
      imagePath = "imgs/dontcount.jpg"; // Path to the "Do not count on it" image
      break;

    case 5:
      eightBall = "My sources say no";
      imagePath = "/imgs/no.jpg"; // Path to the "My sources say no" image
      break;

    case 6:
      eightBall = "Outlook is not so good";
      imagePath = "/imgs/notlooking.jpg"; // Path to the "Outlook is not so good" image
      break;

    case 7:
      eightBall = "Signs point to yes";
      imagePath = "/imgs/yes.jpg"; // Path to the "Signs point to yes" image
      break;
  }

  console.log(eightBall);

  document.getElementById("response-text").innerText = `${userName} has asked the Magic 8-Ball: "${userQuestion}". The wise 8-ball says: ${eightBall}`;

  // Change the image source to the appropriate response image
  document.getElementById("response-image").src = imagePath;

  // Add a shake effect on the image
  let responseImage = document.getElementById("response-image");
  responseImage.classList.add("shake");

  // Remove the shake class after the animation is complete
  setTimeout(() => {
    responseImage.classList.remove("shake");
  }, 1000);
}