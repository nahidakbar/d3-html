/**
 * selection.Cite() creates &lt;cite&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('cite')
    .html(contents || '');
}
