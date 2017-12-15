/**
 * selection.H2() creates &lt;h2&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('h2')
    .html(contents || '');
}
