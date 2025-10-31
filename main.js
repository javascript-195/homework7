
    //1. შექმენით გვერდი, სადაც იქნება წარმოდგენილი:
//1. რაიმე ფოტო <img> ტეგში.
//2 სხვადასხვა ღილაკი, 1. ფოტოს ზომის გადიდების; 2. ფოტოს ზომის შემცირების;
//DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.
//რაღაც ესეთი

    const img = document.getElementById('myImage');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const step = 20; // pixels


    increaseBtn.addEventListener('click', () => {
      const currentWidth = img.offsetWidth; 
      img.style.width = (currentWidth + step) + 'px';
    });

    
    decreaseBtn.addEventListener('click', () => {
      const currentWidth = img.offsetWidth;
      if (currentWidth > step) { 
        img.style.width = (currentWidth - step) + 'px';
      }
    });


// 2. შექმენით ვებგვერდი რომელზეც იქნება მოცემული ტექსტის ფერის შემცვლელი ღილაკი. 
// მოცემულობა ესეთია:
//1. მომხმარებელი აჭერს ღილაკზე, ღილაკი ცვლის ფერს.
//2. ეკრანზე მოცემული ტექსტი იცვლება იმ ფერის სახელით რა ფერის ტექსტიცაა ეკრანზე გამოტანილი. 
// ნახეთ მაგალითი ფოტოზე.

const colors = ["დაგვიკავშირდით ნომერზე; 555*******", "დაგვიკავშირდით ნომერზე; 555*******", "დაგვიკავშირდით ნომერზე; 555*******", "დაგვიკავშირდით ნომერზე; 555*******", "დაგვიკავშირდით ნომერზე; 555*******", "დაგვიკავშირდით ნომერზე; 555*******"];
    const colorValues = ["red", "blue", "green", "purple", "orange", "black"];

    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    let index = 0;

    btn.addEventListener("click", function() {
      
      index = (index + 1) % colors.length;
      text.style.color = colorValues[index];
      text.textContent = colors[index];
    });

    // შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი. 
    // მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა ეკრანზე თუ კონტენტი დამალულია.
    //  ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.

    const btn2 = document.getElementById("toggleBtn");
    const content = document.getElementById("content");
    

    btn2.addEventListener("click", function() {
      if (content.style.display === "none") {
        content.style.display = "block";
        btn2.textContent = "კონტენტის დამალვა";
      } else {
        content.style.display = "none";
        btn2.textContent = "დააჭირე და მიიღე SMS";
        
      }
    });
