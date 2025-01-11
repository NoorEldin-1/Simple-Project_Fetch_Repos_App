let input = document.querySelector("input[type='text']");
let getBtn = document.querySelector("input[type='submit']");
let reposContainer = document.querySelector(".repos");
getBtn.addEventListener("click", () => {
  if (input.value != "") {
    reposContainer.style.display = "block";
    reposContainer.innerHTML = "";
    let username = input.value;
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        for (let repo of data) {
          let repoDiv = document.createElement("div");
          repoDiv.className = "repo";
          repoDiv.textContent = repo.name;
          let repoUrl = document.createElement("a");
          repoUrl.className = "repo-url";
          repoUrl.href = repo.clone_url;
          repoUrl.target = "_blank";
          repoUrl.textContent = "Repo";
          let homepage = document.createElement("a");
          homepage.className = "homepage";
          if (repo.homepage) {
            homepage.href = repo.homepage;
          }
          homepage.target = "_blank";
          homepage.textContent = "Live Demo";
          repoDiv.appendChild(repoUrl);
          repoDiv.appendChild(homepage);
          reposContainer.appendChild(repoDiv);
        }
      });
  }
});
