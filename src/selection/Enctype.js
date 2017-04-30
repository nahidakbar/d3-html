/**
 * selection.Enctype() creates &lt;input&gt; element of type enctype
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('enctype');
  }
  else
  {
    return this.attr('enctype', value);
  }
}
