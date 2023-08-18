
export function NavInput() {
    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Electronics</a>
                        <a className="dropdown-item" href="#">Jewelery</a>
                        <a className="dropdown-item" href="#">Men's clothing</a>
                        <a className="dropdown-item" href="#">Women's clothing</a>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
            </div>
        </>
    )
}
