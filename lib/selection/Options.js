/**
 * selection.Options() creates a list of child &lt;option&gt; elements
 * @param {string} [options=''] array of strngs or key value object containing labels
 * @param {string} [selected=''] selected element
 * @return selected
 */
export default function (options, selected)
{
  if (Array.isArray(options))
  {
    return this.Children(options, 'option', function (elem)
    {
      elem.html(id)
        .attr('selected', function (i)
        {
          return (i === selected ? 'selected' : null);
        });
    });
  }
  else
  {
    return this.Children(Object.keys(options), 'option', function (elem)
    {
      elem.html(function (i)
        {
          return options[i]
        })
        .attr('value', id)
        .attr('selected', function (i)
        {
          return ((i === selected || options[i] === selected) ? 'selected' : null);
        });
    });
  }
}

function id (i)
{
  return i;
}
