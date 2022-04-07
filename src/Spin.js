import {TailSpin} from 'react-loader-spinner';

 const Spin = () => {
    return (
        <div className='loader-styles'>
            <TailSpin
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
                visible={false}
            />
        </div>
    )
}

export default Spin;
