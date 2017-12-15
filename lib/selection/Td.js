/**
 * selection.Td() creates &lt;td&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('td')
    .html(contents || '');
}
