import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const [formdata, setFormData] = useState({ name: '', password: '' });
    const [modal, setModal] = useState(false);
    const [submitButton, setSubmitButton] = useState(false)
    useEffect(() => {
        if (formdata.name === '' || formdata.password === '') {
            setSubmitButton(true)
        }
        else {
            setSubmitButton(false)
        }
    }, [formdata])
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formdata.name === 'admin' && formdata.password === 'admin') {
            const dummyToken = 'user-auth-token';
            localStorage.setItem('dummyToken', dummyToken)
            navigate('/')
        }
        else {
            setModal(true)
            setFormData({ name: '', password: '' })
        }
    };


    return (
        <>
            {modal && <div id="popup-modal" tabIndex="-1" className={` overflow-y-auto bg-black/70 overflow-x-hidden fixed top-0 right-0  z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full ${modal ? 'block' : 'hidden'}`}>
                <div className={` p-4 flex justify-center items-center w-full max-w-full max-h-full `}>
                    <div className='flex items-center justify-center h-screen mx-auto'>
                        <div className=" bg-white max-h-[400px] w-96 rounded-lg shadow-sm dark:bg-gray-700">

                            <div className="p-4 md:p-5 text-center">
                                <svg className="mx-auto mb-4 text-red-500 w-12 h-12 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">You have entered invalid credentials!   Please try again with <br /> valid credentials</h3>
                                <button onClick={() => setModal(false)} data-modal-hide="popup-modal" type="button" className="text-white focus:ring-0 bg-blue-500 hover:bg-blue-800 0 dark:focus:ring-red-800 font-medium rounded-lg text-sm  items-center px-10 flex justify-center py-2.5 text-center w-full">
                                    Ok
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                    {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-2  rounded bg-gray-100  focus:ring-none focus:outline-none"
                                required
                                value={formdata.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full p-2  rounded bg-gray-100  focus:ring-none focus:outline-none"
                                required
                                onChange={handleChange}
                                value={formdata.password}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full  text-white py-2  items-center rounded-md  transition   ${submitButton ? 'cursor-not-allowed bg-blue-100' : 'bg-blue-700 cursor-pointer'}`}
                        >
                            Login
                        </button>
                    </form>
                    <div className="flex items-center justify-center mt-4 gap-1">
                        <p>Already Have and Account? </p><span className="font-semibold ms-1"><Link className="" to='/signup'>Signup</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
