/**
 * selection.Source() creates &lt;source&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('source')
    .html(contents || '');
}
