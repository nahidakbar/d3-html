/**
 * selection.Text() creates &lt;input&gt; element of type text
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'text')
    .html(contents || '');
}
