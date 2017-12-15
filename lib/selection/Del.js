/**
 * selection.Del() creates &lt;del&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('del')
    .html(contents || '');
}
