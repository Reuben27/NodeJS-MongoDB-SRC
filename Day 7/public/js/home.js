const button = document.getElementById('post-btn');

button.addEventListener('click', function(event) {
  try {     
    event.preventDefault();
    var name = document.getElementById("name").value;
    console.log(name);
    var subscribe = document.getElementById("subscribe").value;
    console.log(subscribe);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      "name": name,
      "subscribedToChannel": subscribe
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/subscribers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  } catch(err) {
    console.error(`Error: ${err}`);
  }

  location.reload();
});