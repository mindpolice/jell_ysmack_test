# tech_jelly

## Setup
Main dependencies used: 
* Vuesax for UI Templating
* Vuex for state managing through global store
* Vue Spinner because I'm too lazy creating a spinner

Install dependencies 
```npm install```

Run local server and hot reload
```npm run serve```

Build and minify for prod
```npm run build```

## Architecture

This project architecture follows very simple ideas:
* avoid paradigm crossing: in order to keep a maintainable project, I usually try to avoid using to many paradigms
  in term of storing / passing / and consuming datas. Hence most of our data is kept beneath 
  our Vuex store instead of having mixed datas (locally and globally) and too much events emitted.
  
* a vuex store prepared for splitted modules for better readability
* a separate router file 
* our selected character must be available on refresh


## Possible improvement

* On page up or down a better process like:

    Clearing the array => Spinner on datas awaiting => Populating array on data received
  

