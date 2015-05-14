# Short Videos Playground

A little playground for the demos seen in the short videos for SitePoint. To follow along, simply fork this repo and clone it locally. Load up the `index.html` file from the `dist` directory in your web browser, and you're good to go.

## Using As Is

You can work along as is, editing the CSS straight from the `dist/css` directory. You'll have to remember to prefix all styles manually though!

## Using Gulp

I'm using one simple Gulp task to auto-prefix all the styles. If you're using Gulp for auto-prefixer automation, then you'll want to edit the stylesheets in the `src/css` directory. These are the only files that correspond with the Gulp task.

First, run the following command on the CLI from the root directory:

```bash
npm install
```

The necessary packages should now be available. You can now use Gulp and watch for changes on the CSS files by running the following command:

```bash
gulp
```

That's it!