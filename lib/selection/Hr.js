/**
 * selection.Hr() creates &lt;hr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('hr')
    .html(contents || '');
}
