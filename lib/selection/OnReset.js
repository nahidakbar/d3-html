/**
 * selection.OnReset() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
export default function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('reset');
  }
  else if (arguments.length < 2)
  {
    return this.on('reset', callback);
  }
  else
  {
    return this.on('reset', callback, capture);
  }
}
