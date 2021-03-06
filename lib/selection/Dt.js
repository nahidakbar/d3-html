/**
 * selection.Dt() creates &lt;dt&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('dt')
    .html(contents || '');
}
