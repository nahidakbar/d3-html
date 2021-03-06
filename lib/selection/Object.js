/**
 * selection.Object() creates &lt;object&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('object')
    .html(contents || '');
}
