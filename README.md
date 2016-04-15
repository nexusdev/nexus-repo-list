[![Header](https://ipfs.pics/ipfs/QmZQ9b6s9ntTqtn3FBTVEdEmtKzBAyt8remr44h4tvieBw)](https://nexusdev.us)
===========================
[![Slack Status](http://slack.makerdao.com/badge.svg)](https://slack.makerdao.com) / [![Join the chat at https://gitter.im/NexusDevelopment/NexusDevelopment.github.io](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/NexusDevelopment/NexusDevelopment.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


### Useful command:
This assumes you have grunt and bower installed. Make sure you have [npm](https://docs.npmjs.com/getting-started/installing-node), and have ran `npm install -g bower grunt-cli` to install bower and grunt globally.


### Set uo local `dev env`:
```
git clone https://www.github.com/nexusdev/nexusdev.github.io.git
cd nexusdev.github.io
npm install
bundle install
```

Run grunt to compile css from sass by simply run `grunt` from your terminal within your repo.
It will launch watch by default. <code>control-c</code> to stop. If you only want the css compiled once, run `grunt sass`

Then another tab and `bundle exec jekyll serve -w`

---

### To edit contents:
1. edit `_config.yml`
2. edit html/md files (hint: `_layouts/default.html` is the base)
3. edit sass and run `grunt` (hint: Try [editing `scss/_stettings.scss`](http://foundation.zurb.com/docs/using-sass.html))
4. edit `_include/nav.html`




To run jekyll locally to test your website while developing, run  `bundle exec jekyll serve --watch` (requires ruby)
Your website should be viewable by going to [localhost:4000](http://localhost:4000/)
Github's doc on [how to use Jekyll on Github Pages](https://help.github.com/articles/using-jekyll-with-pages) is also helpful.
For more on Foundation stuff that I am using, see [Foundation documentation](http://foundation.zurb.com/docs/sass.html)

### Problems with bundle installer El Capitan:
No, you'll need to either change your `GEM_HOME` or do something like `sudo gem install bundler -n /usr/local/bin` because of El Cap's introduction of SIP (System Integrity Protection).

### Special Thanks

Special thanks to <a href="https://github.com/h5bp/html5-boilerplate">HTML 5 Boilerplate</a> whose code I have based this on.
@kionoshp's <a href="https://github.com/kianoshp/SASS-CSS-Boilerplate">padding-margin</a>. Because it has become part of every site that I manage.
and <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a> for bing awesome.
