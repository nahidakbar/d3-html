# d3-html

Verbose helper functions to make d3-selection bit less verbose for general
html creation and manipulation.

Include as script tag (after d3) or use require("d3-html"). Make sure
d3-selection is in nodepath if using the latter approach.

Then rock and roll:

<pre>
// use case 1: everyday elements
d3.select("body")
  .clear()
  .Div()
    .H1("d3-html HELLO WORLD");

// use case 2: wrapper for enter and exit
d3.select("body")
  .Table()
    .Tbody()
      .Children([... data rows ...], 'tr', element => {
        element.Td().Checkbox().Checked(row => row.enabled);
        element.Th(row => row.field);
        element.Td().Select().Options({key: val, ...}, row.value);
        element.each(...);
      })
</pre>

# Full API selection.*()
