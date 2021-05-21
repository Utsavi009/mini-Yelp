return(
    <div>
    
        <input type='text' placeholder="Search by Food" onChange= {(e) => setTags(e.target.value)} />
        <input type='text' placeholder="Search by City" onChange= {(e) => setCity(e.target.value)}/>
        <button Link to="results" >Search</button>
{/*        
      <Link to="results">
        <p>Results</p>
      </Link>
      <Link to="restaurant">
        <p>Restaurant</p>
      </Link>
    */}
{/*  
    </div>
)
}

<SearchBar />

<Router>
  <Switch>
    <Route path="/" exact components={Home} />
    <Route path="/restaurant" component={Restaurant} />
    <Route path="/results" component={Results} />
  </Switch>
</Router> */}
