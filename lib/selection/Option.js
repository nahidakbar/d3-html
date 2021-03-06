/**
 * selection.Option() creates &lt;option&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('option')
    .html(contents || '');
}
