/**
 * selection.Table() creates &lt;table&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('table')
    .html(contents || '');
}
