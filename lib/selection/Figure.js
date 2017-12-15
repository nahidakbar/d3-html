/**
 * selection.Figure() creates &lt;figure&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('figure')
    .html(contents || '');
}
