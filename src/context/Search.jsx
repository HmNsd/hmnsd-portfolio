import { useEffect } from "react";

export function useHighlight(searchText, ref, setMatchCount) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // 1️⃣ Remove previous highlights
    root.querySelectorAll("mark").forEach((el) => {
      el.replaceWith(document.createTextNode(el.textContent));
    });

    if (!searchText) {
      if (typeof setMatchCount === "function") setMatchCount(0);
      return;
    }

    // 2️⃣ Escape regex special chars
    const escaped = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");

    // 3️⃣ Collect all text nodes first
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

    // 4️⃣ Process nodes and highlight matches
    textNodes.forEach((textNode) => {
      const text = textNode.nodeValue;
      let lastIndex = 0;
      const fragment = document.createDocumentFragment();

      regex.lastIndex = 0;

      // Use replace callback to find all matches
      text.replace(regex, (match, index) => {
        totalMatches++; // ✅ increment for every match

        // Text before match
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));

        // Highlighted match
        const mark = document.createElement("mark");
        mark.textContent = match;
        fragment.appendChild(mark);

        lastIndex = index + match.length;
        return match;
      });

      // Remaining text after last match
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));

      textNode.parentNode.replaceChild(fragment, textNode);
    });

    // 5️⃣ Update state after all highlights applied
    if (typeof setMatchCount === "function") {
        console.log("Matches found:", totalMatches)
      setMatchCount(totalMatches);
    }

  }, [searchText, ref, setMatchCount]);
}
