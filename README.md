# README #

A simple multi-select drop down, styles and some code shamelessly lifted from react-super-select (https://github.com/alsoscotland/react-super-select)

### What is this repository for? ###

* Quick summary
I needed a drop down multi select that worked with react, and never grew in size. I did not need to show the selected items in the text I just needed to say how many were selected and move on.

* Examples
```
    import {MultiList} from 'react-multi-dropdown'

    ...

    handleChange(selectedArray) {
        // do what you please with the array
    },
    render() {
        let type = 'elemental'; // or bootstrap
        let values = [];
        let items = [{id: '123', text: 'this is an item'}];
        return (
            <MultiList type={type} initialValues={values} items={items} valueKey='id' labelKey='text' onChange={this.handleChange} />
        );
    }

```

type = elemental or bootstrap if you use elemental you will be using items from a nice UI library for react elemental (elemental-ui.com) bootstrap will only use bootstrap items

you will need the style.css file included, and if you use elemental you can use the elemental.css I have or generate the css from the less files in elemental

There is a demo directory on github if you pull everything down
```
npm pack
cd demo
npm install
gulp
```

there should be a window popped on your browser, click on the PageOne menu item at the top, the demo has a number of things I was playing with. It has routing and reflux setup with data stores.

### How do I get set up? ###

npm install react-multi-dropdown
