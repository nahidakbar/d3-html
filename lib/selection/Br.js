/**
 * selection.Br() creates &lt;br&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('br')
    .html(contents || '');
}
