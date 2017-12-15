/**
 * selection.Href() creates &lt;input&gt; element of type href
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('href');
  }
  else
  {
    return this.attr('href', value);
  }
}
