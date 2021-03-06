/**
 * selection.Select() creates &lt;select&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('select')
    .html(contents || '');
}
