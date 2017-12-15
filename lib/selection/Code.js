/**
 * selection.Code() creates &lt;code&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('code')
    .html(contents || '');
}
