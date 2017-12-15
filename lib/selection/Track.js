/**
 * selection.Track() creates &lt;track&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('track')
    .html(contents || '');
}
