/**
 * selection.Canvas() creates &lt;canvas&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('canvas')
    .html(contents || '');
}
