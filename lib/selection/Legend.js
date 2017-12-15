/**
 * selection.Legend() creates &lt;legend&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('legend')
    .html(contents || '');
}
