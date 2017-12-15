/**
 * selection.OnMousedown() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
export default function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mousedown');
  }
  else if (arguments.length < 2)
  {
    return this.on('mousedown', callback);
  }
  else
  {
    return this.on('mousedown', callback, capture);
  }
}
