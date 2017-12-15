/**
 * selection.Bdo() creates &lt;bdo&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('bdo')
    .html(contents || '');
}
