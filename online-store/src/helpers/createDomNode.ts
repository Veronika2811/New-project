export default function createDomNode(tag: string, className?: string, text?: string) {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }
  if (text) {
    elem.textContent = text;
  }
  return elem;
}