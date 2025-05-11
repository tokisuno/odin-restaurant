export const menu = () => {
  const contentDiv = document.querySelector("div#content");

  const contentHeader = document.createElement("h1");
  contentHeader.setAttribute("id", "title");
  contentHeader.textContent = "Menu";

  const contentBody = document.createElement("p");
  contentBody.setAttribute("id", "text");
  contentBody.textContent = "Here is the menu!";

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentBody);

  document.body.appendChild(contentDiv);
}
