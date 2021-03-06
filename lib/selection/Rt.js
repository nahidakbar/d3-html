/**
 * selection.Rt() creates &lt;rt&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('rt')
    .html(contents || '');
}
