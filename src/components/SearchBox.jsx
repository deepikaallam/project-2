const SearchBox = (props) => {
    return (
        <div classNmae="col col=sm-4">
            <input
               clasName="form-control"
               value={props.value}
               onChange={(event) => props.setSearchValue(event.target.value) }
               placeholder="Type to search...."
               />

        </div>
    )
}
export default SearchBox;