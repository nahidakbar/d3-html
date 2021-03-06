/**
 * selection.Map() creates &lt;map&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('map')
    .html(contents || '');
}
