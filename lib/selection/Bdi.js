/**
 * selection.Bdi() creates &lt;bdi&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('bdi')
    .html(contents || '');
}
