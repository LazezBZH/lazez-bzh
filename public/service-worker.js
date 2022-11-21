this.addEventListener("install", (event) => {
  console.log("Inside the install handler:", event);
});

this.addEventListener("activate", (event) => {
  console.log("Inside the activate handler:", event);
});

this.addEventListener(fetch, (event) => {
  console.log("Inside the fetch handler:", event);
});
