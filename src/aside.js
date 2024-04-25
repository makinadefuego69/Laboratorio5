const Aside = () => {
    return <aside>
        <form>
            <div className="mb-3">
                <label className="form-label">Nombres y apellidos</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" required></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input"></input>
                <label className="form-check-label" for="exampleCheck1">Recordarme</label>
            </div>

            <button type="submit" className="btn btn-primary"><i data-feather="shopping-cart"></i>Checkout</button>

        </form>
    </aside>;
}

export default Aside;