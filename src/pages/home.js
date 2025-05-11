import shakeImage from '../shake.jpeg';

export const home = () => {
  const contentDiv = document.querySelector("div#content");

  const contentHeader = document.createElement("h1");
  contentHeader.setAttribute("id", "title");
  contentHeader.textContent = "This is a good restaurant!";

  const contentBody = document.createElement("p");
  contentBody.setAttribute("id", "text");
  contentBody.textContent = `These are the indicators of crisis, subject to data and statistics. Less measurable but no less profound is a sapping of confidence across our land - a nagging fear that America's decline is inevitable, and that the next generation must lower its sights.

Today I say to you that the challenges we face are real. They are serious and they are many. They will not be met easily or in a short span of time. But know this, America - they will be met.`;

  const contentImage = document.createElement("img");
  contentImage.src = shakeImage;

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentBody);
  contentDiv.appendChild(contentImage);

  document.body.appendChild(contentDiv);
}
