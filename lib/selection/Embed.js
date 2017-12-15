/**
 * selection.Embed() creates &lt;embed&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('embed')
    .html(contents || '');
}
