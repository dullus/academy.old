function GenerateLeftTable() {
  const url = "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/";
  fetch(url)
    .then((res) => res.json())
    .then((customers) => {
      index: String;
      index = (Math.floor(Math.random() * 2) + 1).toString();
      console.log(index.toString());

      const person = customers[index].name + " " + customers[index].lastName;
      const image = customers[index].music.latest.image;
      const latest = customers[index].music.latest.name;

      const month = new Date(
        Date.parse(customers[index].music.latest.releaseDate)
      ).toLocaleDateString("en-US", { month: "short" });
      const day = new Date(
        Date.parse(customers[index].music.latest.releaseDate)
      ).toLocaleDateString("en-US", { day: "numeric" });
      const year = new Date(
        Date.parse(customers[index].music.latest.releaseDate)
      ).toLocaleDateString("en-US", { year: "numeric" });

      document.getElementById("pantherYear").innerHTML =
        month + " " + day + " " + year;
      document.getElementById("imagePantherImage").setAttribute("src", image);
      document.getElementById("pantherName").innerHTML = latest;
      document.getElementById("rightBigTittle").innerHTML = person;
    });

  const columnCount = 4;

  fetch(url)
    .then((res) => res.json())
    .then((customers2) => {
      var table = document.createElement("table");
      var div = document.getElementById("tablecontainer");

      for (var u = 0; u < 3; u++) {
        const image = customers2[u].music.latest.image;
        const latest = customers2[u].music.latest.name;
        var row = table.insertRow(u);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.setAttribute("background", image);
        cell2.innerHTML = latest;
        cell3.appendChild(document.createElement("BUTTON"));
        cell4.appendChild(document.createElement("LABEL"));
        table.appendChild(row);
      }
      div.appendChild(table);
    });
}

function GenerateRightTable() {
  index = (Math.floor(Math.random() * 2) + 1).toString();

  const url = `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${index}/popular`;
  fetch(url)
    .then((res) => res.json())
    .then((customers) => {
      const image = customers[index].image;
      const name = customers[index].name;
      let time = timeFormating(customers[index].durationInMs);
      const count = customers[index].count;
      var table = document.createElement("table");
      table.setAttribute("class", "rightTable");
      var div = document.getElementById("listtablecontainer");

      var row1 = table.insertRow(0);
      var row2 = table.insertRow(0);
      var row3 = table.insertRow(0);
      var row4 = table.insertRow(0);

      var cell1 = row1.insertCell(0);
      var cell2 = row2.insertCell(0);
      var cell3 = row3.insertCell(0);
      var cell4 = row4.insertCell(0);

      cell1.setAttribute("background", image);
      cell2.innerHTML = name;
      cell3.innerHTML = time;
      cell4.innerHTML = count;
      table.appendChild(row1);
      table.appendChild(row2);
      table.appendChild(row3);
      table.appendChild(row4);
      div.appendChild(table);
    });
}

function timeFormating(ms) {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

GenerateLeftTable();
GenerateRightTable();
