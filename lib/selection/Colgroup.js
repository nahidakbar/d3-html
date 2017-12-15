/**
 * selection.Colgroup() creates &lt;colgroup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('colgroup')
    .html(contents || '');
}
