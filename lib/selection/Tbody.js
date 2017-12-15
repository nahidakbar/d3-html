/**
 * selection.Tbody() creates &lt;tbody&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('tbody')
    .html(contents || '');
}
