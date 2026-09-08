// Classic way
// const bd = document.getElementById("bd")
// const allInp = document.getElementsByTagName('input')
// const ph = document.getElementsByClassName("ph")

// console.log(bd);
// console.log(allInp);
// console.log(ph);

// Modern way
const bd = document.querySelector("#bd");
const img = document.querySelector("#img");
const ph = document.querySelectorAll(".ph");
const allInp = document.querySelectorAll("input");
console.log(bd);
console.log(allInp);
console.log(ph);

// Modify Content or text content
console.log(bd.textContent);
console.log(bd.innerHTML);
console.log(bd.innerText);

// bd.textContent = "Hi, Dhaka"
bd.innerHTML = "<h6>Hi, Bangladesh</h6>";
// bd.innerText = "Hi, Bangladesh"

// Modify attribute
// console.log(img.getAttribute("src"));
// img.setAttribute("src", "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww")
// img.removeAttribute("src")
// console.log(img.hasAttribute("alt"));

img.src =
  "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww";
img.alt = "This is image";

// Style modify
// img.style.height = "500px"
// img.style.width = "800px"

img.classList.add("box");

// img.classList.remove("box")

// img.classList.toggle("box") //reverse

// Event listener
const clickBtn = document.getElementById("click-btn");
console.log(clickBtn);

// document.addEventListener(eventTime, fn) //syntax
clickBtn.addEventListener("click", () => {
  // alert("btn clicked");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCdZ09_ogpKA-7lq_A3LhV6Hf3DF0y3USbFQg7XFqPaX4ZEpNtg73OO4n&s=10";
});

const myInp = document.getElementById("my-inp");

myInp.addEventListener("keypress", (e) => {
  console.log("Input triggered");
  // console.log(myInp.value);
  console.log(e.target);
  e.target.style.color = "red";
  // console.log(e.type);

  // Local storage save
  const inputValue = e.target.value;
  localStorage.setItem("inputValue", inputValue);
  document.getElementById("message").innerText = `Input value: ${inputValue}`;
});

// console.log(window);

// console.log("hello")

// console.log(location);
// console.log(history);
// console.log(window.innerWidth);

const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  console.log("reload");
  location.reload();
});

// Browser storage
// localStorage.setItem("location", "Dhaka")
// localStorage.setItem("age", "25")
// sessionStorage.setItem("street", "512")

const getLocationData = localStorage.getItem("location");
const getAgeData = localStorage.getItem("age");
const getStreetData = sessionStorage.getItem("street");

// console.log(getLocationData);
// console.log(getAgeData);
// console.log(getStreetData);
const myLocation = document.getElementById("location");
const age = document.getElementById("age");
const street = document.getElementById("street");
myLocation.innerText = `Location: ${getLocationData}`;
age.innerText = `Age: ${getAgeData}`;
street.innerText = `Street: ${getStreetData}`;

localStorage.removeItem("age");

const inputValue = localStorage.getItem("inputValue");
document.getElementById("message").innerText = `Input value: ${inputValue}`;

//  Promise & Fetch API

const promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});
// promise.then(result=> {
//     console.log(result);
// }).catch(err=> {
//     console.log(err);
// })

const fetchUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const usersContainer = document.getElementById("users");

      data.forEach((user) => {
        usersContainer.innerHTML += `
              <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

                <div class="mb-4">
                  <h2 class="text-xl font-bold text-gray-800">
                    ${user.name}
                  </h2>

                  <p class="text-sm text-gray-500">
                    @${user.username}
                  </p>
                </div>

                <div class="space-y-2 text-gray-600">
                  <p>
                    <span class="font-semibold">Email:</span>
                    ${user.email}
                  </p>

                  <p>
                    <span class="font-semibold">Phone:</span>
                    ${user.phone}
                  </p>

                  <p>
                    <span class="font-semibold">Website:</span>
                    ${user.website}
                  </p>
                </div>

                <div class="border-t mt-5 pt-4">
                  <h3 class="font-semibold text-gray-800 mb-2">
                    Address
                  </h3>

                  <p class="text-sm text-gray-600">
                    ${user.address.street},
                    ${user.address.suite},
                    ${user.address.city}
                  </p>

                  <p class="text-sm text-gray-500">
                    Zipcode: ${user.address.zipcode}
                  </p>
                </div>

                <div class="border-t mt-5 pt-4">
                  <h3 class="font-semibold text-gray-800 mb-2">
                    Company
                  </h3>

                  <p class="text-sm text-gray-600">
                    ${user.company.name}
                  </p>

                  <p class="text-sm italic text-gray-500 mt-1">
                    "${user.company.catchPhrase}"
                  </p>
                </div>

              </div>
            `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchUsers();
