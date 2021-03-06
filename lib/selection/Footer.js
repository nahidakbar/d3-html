/**
 * selection.Footer() creates &lt;footer&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('footer')
    .html(contents || '');
}
