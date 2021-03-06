/**
 * selection.Meter() creates &lt;meter&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('meter')
    .html(contents || '');
}
