# Craft Boilerplate

A custom Craft CMS boilerplate I use fo most of my projects. Feel free to use it as is or fork it and customise it to your needs.

## Features

- Atomic design system
- Optional [patternlab](https://patternlab.io/)
- Optional [Critical CSS](https://nystudio107.com/blog/implementing-critical-css)
- [SVG caching to localStorage](https://osvaldas.info/caching-svg-sprite-in-localstorage)
- [Macros](https://github.com/elfacht/craft-helper)
- Custom SEO features (no plugin)
- Fluid aspect ratio image component.
- Asset revision numbers for cache busting via .htaccess
- gzip compression and caching via `.htaccess`
- Multiple [Redactor](https://plugins.craftcms.com/redactor) settings
- ES6 modules environment
- [fontfaceobserver.js](https://fontfaceobserver.com/)
- [lozad.js](https://apoorv.pro/lozad.js/)
- Gulp and webpack toolchain.

## Setup

### 1. Install

```sh
$ git clone --recurse-submodules git@gitlab.com:elfacht/craft-boilerplate.git project-name --depth=1
```

Remove git history from project to create a new and clean repo:

```sh
$ git remote rm origin
$ git remote add origin NEW_REPO_URL
$ git rev-parse --verify master >> .git/info/grafts
$ git filter-branch -- --all
$ rm -rf ./git/shallow
```

Run following command in project root to install the CMS and its packages:

```sh
$ chmod +x setup.sh && ./setup.sh
```

This script will run:

- `composer install`
- `composer update`
- `cp .env.example .env`
- `cp web/.htaccess.example web/.htaccess`
- `./craft setup/security-key`

You might set permissions on that file with `chmod +x setup.sh`.

### 2. Setup `.env`

Enter the database credentials into `.env`.


### 2. Setup `vhost`

Setup a vhost like i.e. [http://your-site.local](http://your-site.local) and map it to:

```
web/
```

### 3. Install Craft CMS

Go to [http://yoursite.local/admin/install](http://yoursite.local/admin/install) and follow the instructions.

Alternatively you can run:

```sh
$ ./craft install/craft
```

### 4. Set default data

Copy the contents of `config/project.yml.default` to `config/project.yml` to set up default sections and fields. This is optional, but will break the `_head-seo.html` partial eventually.

### 5. Default config

Go to [config/general.php](config/general.php) and set desired options.

### 6. Activate plugins

Go to Plugins section and activate the pre-installed plugins.
