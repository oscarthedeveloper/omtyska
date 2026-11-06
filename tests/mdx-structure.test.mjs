import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) results = results.concat(walk(full));
    else if (file.endsWith('.mdx')) results.push(full);
  }
  return results;
}

describe('MDX HTML Semantics and Hydration Integrity', () => {
  const contentDir = path.resolve('content');
  const files = walk(contentDir);

  test(`verifies 0 nested <p> elements across all ${files.length} MDX files`, async () => {
    const nestedOccurrences = [];

    function checkNestingPlugin(filePath) {
      return () => (tree) => {
        function visit(node, pAncestors = 0) {
          const isP =
            (node.type === 'element' && node.tagName === 'p') ||
            ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'p');

          const newAncestors = isP ? pAncestors + 1 : pAncestors;
          if (isP && pAncestors > 0) {
            nestedOccurrences.push({
              file: path.relative(process.cwd(), filePath),
              nodeType: node.type,
              name: node.name || node.tagName,
            });
          }

          if (node.children) {
            for (const child of node.children) {
              visit(child, newAncestors);
            }
          }
        }
        visit(tree);
      };
    }

    for (const file of files) {
      const raw = fs.readFileSync(file, 'utf8');
      const { content } = matter(raw);
      await compile(content, {
        rehypePlugins: [checkNestingPlugin(file)],
      });
    }

    assert.equal(
      nestedOccurrences.length,
      0,
      `Found ${nestedOccurrences.length} nested <p> elements in MDX files:\n` +
        JSON.stringify(nestedOccurrences, null, 2)
    );
  });
});
