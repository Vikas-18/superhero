let btn = document.getElementById("submit");
btn.addEventListener("click", function search(e) {
  let fullnamebtn = document.getElementById("fullname");
  let birthbtn = document.getElementById("birth");
  let appearancebtn = document.getElementById("appearance");

  let pfullname = document.getElementById("pfullname");
  let pbirth = document.getElementById("pbirth");
  let pappearance = document.getElementById("pappearance");
  let pheight = document.getElementById("pheight");

  e.preventDefault();

  let hero = document.getElementById("input").value;
  fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${hero}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.appearance.height[0]);
      let img = document.getElementById("heroimg");
      img.src = `${data.images.sm}`;
      pheight.innerHTML = "";
      pheight.append("Height: " + data.appearance.height[0]);
      pfullname.innerHTML = "";
      pfullname.append("Full Name: " + data.biography.fullName);
      pappearance.innerHTML = "";
      pappearance.append(
        " Gender: " +
          data.appearance.gender +
          "    Eye Color:    " +
          data.appearance.eyeColor +
          "   Race:   " +
          data.appearance.race
      );
      pbirth.innerHTML = "";
      pbirth.append("Place Of Birth: " + data.biography.placeOfBirth);
    });
});
