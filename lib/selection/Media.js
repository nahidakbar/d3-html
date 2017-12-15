/**
 * selection.Media() creates &lt;input&gt; element of type media
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('media');
  }
  else
  {
    return this.attr('media', value);
  }
}
