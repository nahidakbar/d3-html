/**
 * selection.Param() creates &lt;param&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('param')
    .html(contents || '');
}
