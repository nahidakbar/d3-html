/**
 * selection.Iframe() creates &lt;iframe&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('iframe')
    .html(contents || '');
}
