import FooterIcon from '@/ui/FooterIcon'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-[100vh]'>
            <footer className="p-4 text-center  bg-orange-200 text-gray-600 font-bold">
                <p>
                    2024 &copy; BLOGFLOW APP . All right reserved.
                </p>
                <FooterIcon>
                    <div>
                        <div className="parent">
                            <div className="child child-1">
                                ...
                            </div>
                        </div>
                    </div>
                </FooterIcon>
            </footer>
        </div>
    )
}

export default Footer