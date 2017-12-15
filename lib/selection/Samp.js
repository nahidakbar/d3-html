/**
 * selection.Samp() creates &lt;samp&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('samp')
    .html(contents || '');
}
