export function removeClass(node: HTMLElement, className: string): void {
  const cl = node.classList
  if (className && cl.contains(className)) cl.remove(className)
}

export function addClass(node: HTMLElement, className: string): void {
  const cl = node.classList
  if (className && !cl.contains(className)) cl.add(className)
}

export function hasClass(node: HTMLElement, className: string): boolean {
  const cl = node.classList
  return cl.contains(className);
}
