/**
 * selection.H4() creates &lt;h4&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('h4')
    .html(contents || '');
}
