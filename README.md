# PyCon Colombia 2018 website

This site is currently a minimal Flask app serving a single template.

# Workflow

There are 2 branches, `develop` and `production`.

## Develop
Default branch is develop and is deployed with Heroku to http://staging.pycon.co

## Production
After test have been carried out by the QA Team, the changes from `develop`
will be merged in `production` and deployed with Heroku to http://pycon.co
and http://2018.pycon.co

# Run locally (Unix)

## Using Pip and virtualenv

### First install

```
$ python -m venv venv
$ venv/bin/activate
$ pip install -r requirements.txt
```

### Usage

```
$ venv/bin/activate
$ FLASK_APP=app.py python -m flask run
```


## Using conda


### First install

```
$ conda create -n pycon2018 python=3.6 --file requirements.txt
$ source activate pycon2018
$ FLASK_APP=app.py python -m flask run
```

### Usage

```
$ source activate pycon2018
$ FLASK_APP=app.py python -m flask run
```
