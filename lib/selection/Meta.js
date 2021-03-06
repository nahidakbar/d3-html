/**
 * selection.Meta() creates &lt;meta&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('meta')
    .html(contents || '');
}
