/**
 * selection.Dl() creates &lt;dl&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('dl')
    .html(contents || '');
}
