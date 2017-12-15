/**
 * selection.U() creates &lt;u&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('u')
    .html(contents || '');
}
