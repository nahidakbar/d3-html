/**
 * selection.Em() creates &lt;em&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('em')
    .html(contents || '');
}
