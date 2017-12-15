/**
 * selection.OnSelect() creates &lt;input&gt; element of type select
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
export default function (value, capture)
{
  if (arguments.length < 1)
  {
    return this.on(type);
  }
  else if (arguments.length < 2)
  {
    return this.on(type, value);
  }
  else
  {
    return this.on(type, value, capture);
  }
}
