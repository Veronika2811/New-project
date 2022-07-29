export default function createDomNode(tag: string, className?: string[], text?: string, parentNode?: HTMLElement) {
  const elem = document.createElement(tag);
  if (className) {
    className.forEach(el => elem.classList.add(el));
  }
  if (text) {
    elem.textContent = text;
  }
  if (parentNode) {
    parentNode.append(elem);
  }
  return elem;
}