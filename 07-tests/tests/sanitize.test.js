import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

test("DOMPurify removes script tags", () => {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const dirty = "<img src=x onerror=alert(1)><script>alert(2)</script>";
  const clean = purify.sanitize(dirty);
  expect(clean).not.toMatch(/script/);
  expect(clean).not.toMatch(/onerror/);
});
