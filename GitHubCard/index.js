/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [
  "joshuabhorrocks",
  "mrsimpson3000",
  "easpaas",
  "Riley-Robinson",
  "devjaymoe",
  "Diddleslip",
  "alanblee",
  "CarlosAA10",
  "gabeaster",
  "janecyyu",
  "jaybrennan",
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
function axiosGet (user) {
  axios.get(`https://api.github.com/users/`+ user)
  .then(response => {
    console.log(response.data);
    parent.append(compCreator(response.data))
})
}
followersArray.forEach(user => {
  axiosGet(user);
})
axios.get("https://api.github.com/users/berachele")
.then(response => {
    console.log(response.data);
    parent.append(compCreator(response.data))
})
.catch(error => {
  console.log("You done messed up:", error);
})

// axios.get("https://api.github.com/users/devjaymoe")
// .then(response => {
//     console.log(response.data);
//     parent.append(compCreator(response.data))
// })
// .catch(error => {
//   console.log("You done messed up:", error);
// })

// axios.get("https://api.github.com/users/mrsimpson3000")
// .then(response => {
//     console.log(response.data);
//     parent.append(compCreator(response.data))
// })
// .catch(error => {
//   console.log("You done messed up:", error);
// })

// axios.get("https://api.github.com/users/easpaas")
// .then(response => {
//     console.log(response.data);
//     parent.append(compCreator(response.data))
// })
// .catch(error => {
//   console.log("You done messed up:", error);
// })

// axios.get("https://api.github.com/users/Riley-Robinson")
// .then(response => {
//     console.log(response.data);
//     parent.append(compCreator(response.data))
// })
// .catch(error => {
//   console.log("You done messed up:", error);
// })

// axios.get("https://api.github.com/users/berachele")
// .then(response => {
//     console.log(response.data);
//     parent.append(compCreator(response.data))
// })
// .catch(error => {
//   console.log("You done messed up:", error);
// })

const parent = document.querySelector(".cards");

function compCreator(obj) {
  const cards = document.createElement("div");
  cards.classList.add("card");

  const cardInfo = document.createElement("div");
  //cardInfo.classList.add("cards");

  const image = document.createElement("img");
  //image.classList.add("img");
  image.src = `${obj.avatar_url}`;

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = `${obj.name}`;

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = `${obj.login}`;

  const location = document.createElement("p");
  //location.classList.add("p");
  location.textContent = `Location: ${obj.location}`;

  const profile = document.createElement("p");
  profile.textContent = `Profile: `;

  const profileLink = document.createElement("a");
  profileLink.textContent = `${obj.html_url}`;
  profileLink.href = `${obj.html_url}`;

  const followers = document.createElement("p");
  //followers.classList.add("p");
  followers.textContent = `Followers: ${obj.followers}`;

  const following = document.createElement("p");
  //following.classList.add("p");
  following.textContent = `Following: ${obj.following}`;

  const bio = document.createElement("p");
  //bio.classList.add("p");
  bio.textContent = `Bio: ${obj.bio}`;

  cards.append(image);
  cards.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(username);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  profile.append(profileLink);


  return cards;
}
