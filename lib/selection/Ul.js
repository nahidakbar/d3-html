/**
 * selection.Ul() creates &lt;ul&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('ul')
    .html(contents || '');
}
