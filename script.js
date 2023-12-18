async function hackerSimulator() {
  let text1 = "Initializing Hacking";
  let text2 = "Reading your Files";
  let text3 = "Password Files Detected";
  let text4 = "Sending all passwords and personal files to server";
  let text5 = "Cleaning up";

  let firstLine = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing Hacking");
      document.getElementsByClassName("container")[0].children[0].innerHTML = `${text1}`;
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[0].innerHTML += ".";
      }, 1000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[0].innerHTML += ".";
      }, 2000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[0].innerHTML += ".";
      }, 3000);
    }, 5000);
  });

  let secondLine = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Reading your Files");
      document.getElementsByClassName("container")[0].children[1].innerHTML = `${text2}`;
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[1].innerHTML += ".";
      }, 1000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[1].innerHTML += ".";
      }, 2000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[1].innerHTML += ".";
      }, 3000);
    }, 10000);
  });
  
  let thirdLine = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Password Files Detected");
      document.getElementsByClassName("container")[0].children[2].innerHTML = `${text3}`;
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[2].innerHTML += ".";
      }, 1000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[2].innerHTML += ".";
      }, 2000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[2].innerHTML += ".";
      }, 3000);
    }, 15000);
  });
  
  let fourthLine = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sending all passwords and personal files to server");
      document.getElementsByClassName("container")[0].children[3].innerHTML = `${text4}`;
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[3].innerHTML += ".";
      }, 1000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[3].innerHTML += ".";
      }, 2000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[3].innerHTML += ".";
      }, 3000);
    }, 20000);
  });
  
  let fifthLine = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaning up");
      document.getElementsByClassName("container")[0].children[4].innerHTML = `${text5}`;
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[4].innerHTML += ".";
      }, 1000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[4].innerHTML += ".";
      }, 2000);
      setTimeout(() => {
        document.getElementsByClassName("container")[0].children[4].innerHTML += ".";
      }, 3000);
    }, 25000);
  });

  let line1 = await firstLine;
  console.log(line1);
  let line2 = await secondLine;
  console.log(line2);
  let line3 = await thirdLine;
  console.log(line3);
  let line4 = await fourthLine;
  console.log(line4);
  let line5 = await fifthLine;
  console.log(line5);
}

hackerSimulator()
