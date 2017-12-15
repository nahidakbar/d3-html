/**
 * selection.H6() creates &lt;h6&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('h6')
    .html(contents || '');
}
