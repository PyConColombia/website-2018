# PyCon Colombia 2018 website

This is the repository for the pycon 2018 website at [pycon.co](https://pycon.co/), built using [lektor](https://www.getlektor.com)

# Workflow

There is 1 branch, `production`.

## Production

Default branch is `production` and is deployed with gh-pages via Lektor to https://2018.pycon.co 

# Run locally

## Install Lektor

Running installation script:
```
$ curl -sf https://www.getlektor.com/install.sh | sh
```

Using pip:
```
$ pip install -U Lektor
```

### Run server and make changes

To run local server:

```
$ lektor server
```

If you also want to update the webpack files, you need `npm` installed
and then run it like this:

```
$ lektor server -f webpack
```
