export default function trackElements(id: number) {
  const startBtn = document.querySelector(`[data-start='${id}']`) as HTMLButtonElement;
  const stopBtn = document.querySelector(`[data-stop='${id}']`) as HTMLButtonElement;
  const car = document.querySelector(`[data-id = '${id}']`) as HTMLElement;
  return { startBtn, stopBtn, car };
}