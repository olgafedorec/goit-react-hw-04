import { RotatingLines } from 'react-loader-spinner'

export default function Loader() {
    return (<div>
        <RotatingLines
    height="96"
    ariaLabel="rotating-lines-loading"
    color="grey"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </div>
    )
}