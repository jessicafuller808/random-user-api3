
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://randomuser.me/api/`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data['results']['0']);

        //defining variables from api
        let img = data['results']['0'].picture.large;
        let name = data['results']['0'].name.first + ' ' + data['results']['0'].name.last;
        let gender = data['results']['0'].gender;
        let location = data['results']['0'].location.state + ", " + data['results']['0'].location.country ;
        let email = data['results']['0'].email;

        //link api variable to the dom
        document.querySelector('img').src = img;
        document.getElementById('name').innerText = name;
        document.getElementById('gender').innerText = gender;
        document.getElementById('location').innerText = location;
        document.getElementById('email').innerText = email;

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


