# Rivetizer

Rivetizer is a utility that converts XHTML fetched from the [KMS REST API](https://kb.iu.edu/d/rest) to [Rivet](https://rivet.uits.iu.edu/)-friendly HTML. 

Use this function to seamlessly embed KMS documents into your Rivet-powered website without writing custom CSS to target KMS-specific elements and classes.

## Using the Rivetizer

The Rivetizer provides a single function, `rivetize()`, that takes 2 parameters:

- `kmsXhtml`: The XHTML fetched from the KMS REST API, as a string.
- `cssClasses`: An object describing what CSS classes should be applied to headings, paragraphs, and alerts. The object must contain the following keys:
    - `h1`
    - `h2`
    - `h3`
    - `p`
    - `alert`

### Example `cssClasses` object

```js
const cssClasses = {
    h1: 'rvt-ts-41 rvt-text-bold rvt-lh-title rvt-m-all-remove rvt-p-bottom-xs',
    h2: 'rvt-ts-20 rvt-text-bold rvt-lh-title rvt-m-all-remove rvt-p-bottom-xs',
    h3: 'rvt-text-bold rvt-lh-title',
    p: 'rvt-ts-base',
    alert: 'rvt-m-top-md rvt-m-bottom-md'
};
```

The `rivetize()` function returns Rivet-flavored HTML as a string.

### Example use

Below is an example of how you might use `rivetize()` along with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

```js
const cssClasses = {
    h1: 'rvt-ts-41 rvt-text-bold rvt-lh-title rvt-m-all-remove rvt-p-bottom-xs',
    h2: 'rvt-ts-20 rvt-text-bold rvt-lh-title rvt-p-bottom-xs rvt-m-all-remove',
    h3: 'rvt-text-bold rvt-lh-title',
    p: 'rvt-ts-base',
    alert: 'rvt-m-top-md rvt-m-bottom-md'
};

fetch('/path/to/kms/api')
    .then((response) => {
        if (response.ok) {
            response.text().then((kmsXhtml) => {
                let rivetHtml = rivetize(kmsXhtml, cssClasses);

                // Do something with rivetHtml.
            });
        }
    });
```

## What the Rivetizer does

The `rivetize()` function makes several transformations to the XHTML fetched from the KMS:

- Removes the related articles box at the end of the document
- Removes "back to top" links
- Removes horizontal rules
- Tags headings with Rivet typography classes
- Tags paragraphs with Rivet typography classes
- Tags panels with Rivet alert classes
- Wraps code snippets in appropriate HTML tags