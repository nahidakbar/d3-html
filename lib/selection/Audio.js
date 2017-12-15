/**
 * selection.Audio() creates &lt;audio&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('audio')
    .html(contents || '');
}
