let texts = [
      "Warm wishes for a cozy and joyful winter season!",
  "Wishing you a season filled with snowflakes, laughter, and love.",
  "May your winter days be merry and bright!",
  "Cheers to hot cocoa, warm blankets, and good company!",
  "May this winter bring you peace, happiness, and warmth.",
  "Sending snow-filled hugs your way this holiday season!",
  "Wishing you the coziest and happiest winter yet!",
  "May your heart be as light as snow this winter.",
  "Stay warm and enjoy the magic of winter!",
  "Here’s to a winter wonderland of happiness!",
  "Merry Christmas! May your holiday sparkle with moments of love.",
  "Wishing you a Christmas filled with joy, laughter, and good cheer.",
  "May the magic of Christmas light up your heart and home!",
  "Here’s to a season of blessings and warm memories. Merry Christmas!",
  "May your Christmas be as bright and beautiful as the star on your tree.",
  "Sending love and warm wishes for a magical Christmas!",
  "May this Christmas bring you peace and plenty of reasons to smile.",
  "Wishing you a holiday season that’s merry and bright.",
  "Have a holly, jolly Christmas and a wonderful new year!",
  "May your days be merry, your nights be cozy, and your heart be full.",
  "Cheers to new beginnings! Wishing you a fantastic New Year.",
  "May the New Year bring endless opportunities and joy your way.",
  "Here’s to a bright and prosperous 2024!",
  "Wishing you health, happiness, and success in the year ahead.",
  "May the New Year be filled with love, laughter, and unforgettable moments.",
  "Out with the old, in with the new—Happy New Year!",
  "Cheers to another year of growth, love, and adventure!",
  "Wishing you a joyful and promising New Year.",
  "May the upcoming year bring you closer to your dreams!",
  "Here’s to health, happiness, and a fabulous New Year ahead!",
  "Wishing you a season of success and a prosperous New Year!",
  "Thank you for an incredible year—cheers to more achievements in 2024!",
  "Sending warm holiday wishes to you and your team.",
  "May your holidays be filled with joy and your New Year with opportunities.",
  "Thank you for your partnership and support. Happy holidays!",
  "Here’s to a year of growth and success—happy holidays!",
  "We appreciate your loyalty and look forward to working together in 2024!",
  "Season’s greetings from all of us to you and yours.",
  "Wishing you peace, joy, and prosperity this holiday season.",
  "Happy holidays to a wonderful client and friend!",
  "Winter blessings to you and your family.",
  "Stay warm, be merry, and enjoy the season!",
  "Holiday hugs and warm wishes for you!",
  "Wishing you snowflakes and sparkles this winter.",
  "Peace, love, and joy to you this holiday season.",
  "Let it snow! Enjoy the season’s magic.",
  "May your holidays be bright and your New Year even brighter!",
  "Sending you all my love this winter.",
  "Happy holidays to you and your loved ones!",
  "Cheers to a wonderful holiday season and a happy New Year!",
    "Thank you for reaching out! We'll get back to you soon.",
    "We appreciate your email! A team member will reply shortly.",
    "Thanks for your interest! We will respond to your query as soon as possible.",
    "Your message has been received. Our team will contact you soon.",
    "Thanks for contacting us! We are reviewing your email and will respond shortly.",
    "Your email is important to us! We’ll get back to you as soon as possible.",
    "Thank you for your inquiry! Our team is looking into it and will reply soon.",
    "We’ve received your email! A representative will be in touch with you shortly.",
    "Thank you for reaching out! We're reviewing your request and will respond soon.",
    "Thanks for your email! We will provide you with a detailed response soon.",
    "Thank you for contacting us! We'll get back to you as soon as possible.",
    "We appreciate your message! Someone from our team will reach out soon.",
    "Thanks for your interest! Expect a response from us shortly.",
    "We’ve received your query! A member of our team will reply to you shortly.",
    "Thank you for your message! We are processing it and will respond soon.",
    "Thanks for getting in touch! We are reviewing your email and will reply soon.",
    "Your email has been received! Our team will respond shortly.",
    "Thanks for contacting us! Your message is being reviewed by our team.",
    "We’ve received your inquiry! A representative will be in touch soon.",
    "Thank you for your email! We’ll get back to you as soon as we can.",
    "Your message is important to us! We’ll respond shortly.",
    "Thank you for your patience! A response will be sent to you soon.",
    "Thanks for reaching out! We will review your inquiry and reply shortly.",
    "We’ve received your message! A team member will get back to you shortly.",
    "Thank you for your email! We're processing your request and will respond soon.",
    "We appreciate your inquiry! You’ll receive a reply shortly.",
    "Thanks for your message! We are reviewing it and will respond soon.",
    "Your inquiry has been received! We’ll get back to you soon.",
    "Thank you for your email! A team member will get back to you soon.",
    "We’ve received your query! We’ll respond as soon as possible.",
    "Thanks for your email! We’ll review it and get back to you shortly.",
    "Your message is in our system! We will reply soon.",
    "Thank you for reaching out! A representative will contact you soon.",
    "We’ve received your email! We are currently reviewing it and will reply shortly.",
    "Thank you for your inquiry! We’ll get back to you shortly.",
    "Your email has been received! We’ll respond as soon as possible.",
    "Thanks for reaching out! Expect a response soon.",
    "We’ve received your message! A representative will be in touch with you shortly.",
    "Thank you for your message! We are reviewing it and will reply soon.",
    "Thanks for contacting us! Our team will get back to you shortly.",
    "We appreciate your email! Our team is looking into your request.",
    "Thank you for reaching out! We’ll reply to your message soon.",
    "Your email has been received! Our team will be in touch soon.",
    "Thanks for your message! We’ll get back to you as soon as possible.",
    "Thank you for your email! We are reviewing it and will respond shortly.",
    "We’ve received your query! Our team is working on a response.",
    "Thank you for contacting us! A response will be sent soon.",
    "Thanks for getting in touch! We are reviewing your email.",
    "We’ve received your message! You’ll hear from us shortly.",
    "Thank you for reaching out! We’re working on your request and will reply soon.",
    "Thanks for your email! A response will be sent shortly.",
    "We appreciate your inquiry! We’ll get back to you as soon as possible.",
    "Thank you for your email! We will contact you soon.",
    "We’ve received your message! Our team will be in touch soon.",
    "Thanks for reaching out! We are currently reviewing your email.",
    "Thank you for your inquiry! We are working on a response and will reply shortly.",
    "We’ve received your email! A team member will get back to you shortly.",
    "Thanks for contacting us! We are reviewing your request and will reply soon.",
    "Thank you for your email! We’re processing it and will respond shortly.",
    "We’ve received your message! We’ll respond to it soon.",
    "Thanks for your inquiry! A team member will respond shortly.",
    "Thank you for reaching out! We’ll get back to you soon.",
    "We appreciate your message! We’ll reply as soon as we can.",
    "Thanks for contacting us! Your request is being reviewed.",
    "Thank you for your email! We will reply shortly.",
    "We’ve received your inquiry! A response will be sent to you soon.",
    "Thanks for your message! A team member will reply soon.",
    "We’ve received your query! We’re working on a response for you."
]; 

let currentIndex = 0;  // To keep track of the current text

document.getElementById("fetchTextBtn").addEventListener("click", fetchText);
document.getElementById("copyTextBtn").addEventListener("click", copyToClipboard);

function fetchText() {
    // Get the next text from the array
    const text = texts[currentIndex];
    // Update the text on the page
    document.getElementById("text").innerText = text;

    // Enable the "Copy Text" button
    document.getElementById("copyTextBtn").disabled = false;

    // Update the index for the next text
    currentIndex++;
    if (currentIndex >= texts.length) {
        currentIndex = 0;  // If we reach the end, start again from the first text
    }
}

function copyToClipboard() {
    const text = document.getElementById("text").innerText;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {                
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    }
}