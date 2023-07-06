import React, { useEffect, useState } from "react";

type HTMLItem = [string, string | HTMLItem[]];

type HTMLStructure = HTMLItem[];

export function HTMLParser({ html }: { html: string }): JSX.Element {
  const [parsedHTML, setParsedHTML] = useState<HTMLStructure>([]);

  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = html;

    const processElement = (
      element: HTMLElement | ChildNode
    ): string | HTMLItem | undefined => {
      if (element.nodeType === Node.TEXT_NODE) {
        return element.textContent ? element.textContent : undefined;
      } else if (element.nodeType === Node.ELEMENT_NODE) {
        if (element instanceof HTMLElement) {
          const children = Array.from(element.childNodes)
            .map(processElement)
            .filter((child): child is HTMLItem => child !== undefined);
          return [element.tagName.toLowerCase(), ...children];
        }
      }
    };

    const parsedData = Array.from(container.childNodes)
      .map(processElement)
      .filter((child): child is HTMLItem => child !== undefined);
    setParsedHTML(parsedData);
  }, [html]);

  return (
    <div>
      {parsedHTML.map((item, index) => (
        <RenderElement key={index} element={item} />
      ))}
    </div>
  );
}

function RenderElement({
  element,
}: {
  element: string | HTMLItem;
}): JSX.Element | null {
  if (Array.isArray(element)) {
    const tag = element[0];
    const children = element.slice(1);
    console.log(children);
    return React.createElement(
      tag,
      null,
      children.map((child, index) => (
        <RenderElement key={index} element={child as string | HTMLItem} />
      ))
    );
  } else {
    return <>{element}</>;
  }
}
