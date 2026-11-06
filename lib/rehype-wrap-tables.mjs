/**
 * Rehype plugin to wrap all <table> elements in a responsive scrollable container.
 */
export default function rehypeWrapTables() {
  return tree => walk(tree);
}

function isTable(node) {
  return (
    (node.type === 'element' && node.tagName === 'table') ||
    (node.type === 'mdxJsxFlowElement' && node.name === 'table') ||
    (node.type === 'mdxJsxTextElement' && node.name === 'table')
  );
}

function wrapper(node) {
  return {
    type: 'element',
    tagName: 'div',
    properties: { className: ['tableScroll'] },
    children: [node],
  };
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];

    const already =
      node.type === 'element' &&
      node.tagName === 'div' &&
      (node.properties?.className || []).includes('tableScroll');

    if (isTable(child) && !already) {
      node.children[i] = wrapper(child);
      walk(child);
      continue;
    }
    walk(child);
  }
}
