class marvelAPI {
  constructor() {
    this.apiKey = '8eb4391075c9034247c1cc9b86743ffc'
    this.apiUrl = 'https://gateway.marvel.com:443/v1/public'
    
    this.params = {
      'orderBy': 'name',
      'limit': 30,      
      'offset': 0,
      'apikey': this.apiKey
    }
  }
  
  setLimit(amount) {
    this.params.limit = amount
  }
  
  setOffset(offset) {
    this.params.offset = offset
  }
  
  setParams(params) {
    this.params = $.extend(this.params, params)
  }
  
  callApi(endpoint, params, callback) {
    const apiParams = $.extend(this.params, params)
     
    $.getJSON(`${this.apiUrl}${endpoint}`, apiParams)
      .done((data) => { 
        callback(data)
        console.log(data)
      })
      .fail((response) => {
        callback(null)
        console.error('Response', response)
      })
  }
  
  searchByName(name, callback) {
    this.callApi(
      '/characters',
      {
        'name': name,
      },
      callback
    )
  }
  
  nameStartsWith(name, callback) {
    delete this.params.name
    
    this.callApi(
      '/characters',
      {
        'nameStartsWith': name,
      },
      callback
    )
  }
}
 
class CharacterSearch { 
  constructor() {
    this.marvelAPI = new marvelAPI()
    this.elements = {
      'form': $('#search-form'),
      'input': $('#search-input'),
      'results': $('#results')
    }
    
    this.registerEvents()
  }
  
  registerEvents() {
    this.elements.form.on('submit', (e) => {
      e.preventDefault()
      const name = this.elements.input.val().trim();
      
      this.marvelAPI.searchByName(
        name,
        (data) => {
          if (data.data.results.length !== 0) {
            this.showResults(data.data.results)
          } else {
            this.marvelAPI.nameStartsWith(name, (data) => {
              this.showResults(data.data.results)
            })
          }
        }
      )
    })
  }
  
  showResults(data) {   
    this.elements.results.html('')
    
    if (data.length === 0) {
      this.showError('Character not found in database!')
    } else {
      $('#error').remove()
      data.forEach((item) => {
        this.elements.results.append(`
           <div class="card">
              <div class="card-body">
                <h4 class="card-title">'${item.name}'</h4>
                <p class="card-text">'${item.description}'</p>   
             </div>
          </div>
        `)
     })  
    }
  }

  showError(message) {
    let alert = $('#error')
    
    if (alert.length === 0) {
      this.elements.form.before('<div class="alert alert-danger" id="error"></div>')
      alert = $('#error')
    }

    alert.text(message)
  }
}

const characterForm = new CharacterSearch()
