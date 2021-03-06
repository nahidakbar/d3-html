/**
 * selection.Video() creates &lt;video&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('video')
    .html(contents || '');
}
