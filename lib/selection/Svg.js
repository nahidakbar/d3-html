/**
 * selection.Svg() creates &lt;svg&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('svg')
    .html(contents || '');
}
