import "./typography.css"

const app = document.getElementById("app")
app.innerHTML = `
  <div style="padding: 1rem; display: flex; justify-content: center; align-items: center; min-height: 100vh;">
    <div style="max-width: 30rem;">
      <h1>Jared's Webpack Starter</h1>

      <p>
        This webpack is mostly for me, but sharing is good. You can find the
        source on <a
        href="https://github.com/jarednorman/jareds-webpack-starter">my
        GitHub</a>. Here's what's in it.
      </p>

      <ul>
        <li>Babel</li>
        <li>HTML output</li>
        <li><code>webpack-dev-server</code></li>
        <li>Linting with Prettier before commit (works with <code>git add -p</code>)</li>
        <li>Basic style normalization and typography defaults from <a href="https://kyleamathews.github.io/typography.js/"><code>typography.js</code></a>.</li>
        <li>Configuration for deploying to Netlify</li>
      </ul>

      <h2>How To Do</h2>

      <p>
        This repository is a GitHub template, so you can use
        <a href="https://github.com/jarednorman/jareds-webpack-starter/generate">this
        link</a> to use it as a starting point. These are the commands you need
        to know.
      </p>

      <ul>
        <li><code>yarn dev</code> – Run the development server (on port 9123 by default.)</li>
        <li><code>yarn build</code> – Build the output into dist/, but Netlify already knows that (because of the include <code>netlify.toml</code>.)</li>
        <li><code>yarn css</code> – If you change the typography settings you need to run this to regenerate the typography and style normalization.</li>
      </ul>
    </div>
  </div>
`
