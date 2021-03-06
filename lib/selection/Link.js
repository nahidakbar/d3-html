/**
 * selection.Link() creates &lt;link&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('link')
    .html(contents || '');
}
