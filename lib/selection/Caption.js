/**
 * selection.Caption() creates &lt;caption&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('caption')
    .html(contents || '');
}
