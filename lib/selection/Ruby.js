/**
 * selection.Ruby() creates &lt;ruby&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('ruby')
    .html(contents || '');
}
