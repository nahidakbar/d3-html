/**
 * selection.Optgroup() creates &lt;optgroup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('optgroup')
    .html(contents || '');
}
