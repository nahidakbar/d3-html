/**
 * selection.Rtc() creates &lt;rtc&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('rtc')
    .html(contents || '');
}
