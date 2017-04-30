/**
 * selection.Title() creates &lt;input&gt; element of type title
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('title');
  }
  else
  {
    return this.attr('title', value);
  }
}
