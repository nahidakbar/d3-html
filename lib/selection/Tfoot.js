/**
 * selection.Tfoot() creates &lt;tfoot&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('tfoot')
    .html(contents || '');
}
