import './AppSearch.css';

function AppSearch(props) {
    const { value, onValueChang } = props;
    return (
        <div className="app-search" >
            <input className="app-search-input" type="text" placeholder="ค้นหา" value={value} onChange={(event) => {onValueChang(event.target.value)}}/>
        </div>
    );
}

export default AppSearch;