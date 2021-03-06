/**
 * selection.Label() creates &lt;label&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('label')
    .html(contents || '');
}
