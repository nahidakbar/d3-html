/**
 * selection.DatetimeLocal() creates &lt;input&gt; element of type datetime-local
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'datetime-local')
    .html(contents || '');
}
