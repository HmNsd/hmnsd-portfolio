import { useEffect } from "react";

export function useHighlight(searchText, ref, setMatchCount) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    root.querySelectorAll("mark").forEach((el) => {
      el.replaceWith(document.createTextNode(el.textContent));
    });

    if (!searchText) {
      if (typeof setMatchCount === "function") setMatchCount(0);
      return;
    }

    const escaped = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) =>
          node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
      }
    );

    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }

    let totalMatches = 0;

    textNodes.forEach((textNode) => {
      const text = textNode.nodeValue;
      let lastIndex = 0;
      const fragment = document.createDocumentFragment();

      regex.lastIndex = 0;

      text.replace(regex, (match, index) => {
        totalMatches++;

        fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));

        const mark = document.createElement("mark");
        mark.textContent = match;
        fragment.appendChild(mark);

        lastIndex = index + match.length;
        return match;
      });

      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));

      textNode.parentNode.replaceChild(fragment, textNode);
    });

    if (typeof setMatchCount === "function") {
      setMatchCount(totalMatches);
    }

  }, [searchText, ref, setMatchCount]);
}
