const Filter = ({ persons, setSearch, search, searchResults, setSearchResults }) => {
    const handleSearch = (event) => {
        setSearch(() => event.target.value);
        event.target.value === ""
            ? setSearchResults([])
            : setSearchResults(
                  persons.filter(
                      (person) =>
                          ~person.name.toLowerCase().indexOf(event.target.value.toLowerCase())
                  )
              );
    };
    const showSearchResults = () => {
        return (
            <>
                <br />
                {searchResults.map((result) => (
                    <p key={result.name}>
                        {result.name} - {result.number}
                    </p>
                ))}
            </>
        );
    };
    return (
        <div>
            <label htmlFor="search">Search:&nbsp;</label>
            <input id="search" type="text" value={search} onChange={handleSearch} />
            {Boolean(searchResults.length) && showSearchResults()}
        </div>
    );
};

export default Filter;
