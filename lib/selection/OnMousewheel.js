/**
 * selection.OnMousewheel() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
export default function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mousewheel');
  }
  else if (arguments.length < 2)
  {
    return this.on('mousewheel', callback);
  }
  else
  {
    return this.on('mousewheel', callback, capture);
  }
}
