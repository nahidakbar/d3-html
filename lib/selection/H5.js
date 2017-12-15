/**
 * selection.H5() creates &lt;h5&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('h5')
    .html(contents || '');
}
