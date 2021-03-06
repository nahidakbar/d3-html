/**
 * selection.Img() creates &lt;img&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('img')
    .html(contents || '');
}
