/**
 * selection.H1() creates &lt;h1&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('h1')
    .html(contents || '');
}
