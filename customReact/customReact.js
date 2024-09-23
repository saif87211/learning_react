function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    domElement.setAttribute(key, reactElement.props[key]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
